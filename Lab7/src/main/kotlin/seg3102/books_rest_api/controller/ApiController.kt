@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
@RequestMapping("books-api", produces = ["application/hal+json"])
class ApiController(val authorRepository: AuthorRepository,
                    val bookRepository: BookRepository,
                    val bioRepository: BioRepository,
                    val orderRepository: OrderRepository,
                    val authorAssembler: AuthorModelAssembler,
                    val bookAssembler: BookModelAssembler,
                    val orderAssembler: OrderModelAssembler,
                    val bioAssembler: BioModelAssembler) {
@Operation(summary = "Get all books")
@GetMapping("/books")
fun allBooks(): ResponseEntity<CollectionModel<BookRepresentation>> {
    val books = bookRepository.findAll()
    return ResponseEntity(
            bookAssembler.toCollectionModel(books),
            HttpStatus.OK)
}
@Operation(summary = "Get a book by id")
@GetMapping("/books/{id}")
fun getBookById(@PathVariable("id") id: Long): ResponseEntity<BookRepresentation> {
    return bookRepository.findById(id)
            .map { entity: Book -> bookAssembler.toModel(entity) }
            .map { body: BookRepresentation -> ResponseEntity.ok(body) }
            .orElse(ResponseEntity.notFound().build())
}
  @Operation(summary = "Add a new book")
    @PostMapping("/books")
    fun addBook(@RequestBody book: Book): ResponseEntity<Any> {
        return try {
            val newBook = this.bookRepository.save(book)
            val location: URI = ServletUriComponentsBuilder
                    .fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(newBook.id)
                    .toUri()
            ResponseEntity.created(location).body(bookAssembler.toModel(newBook))
        } catch (e: IllegalArgumentException) {
            ResponseEntity.badRequest().build()
        }
}
@Operation(summary = "Update the information of a book")
@PutMapping("/books/{id}")
fun updateBook(@PathVariable("id") id: Long, @RequestBody book: Book): ResponseEntity<Any> {
    return try {
        val currBook = bookRepository.findById(id).get()
        currBook.title = book.title
        currBook.isbn = book.isbn
        currBook.cost = book.cost
        currBook.category = book.category
        currBook.description = book.description
        currBook.year = book.year
        bookRepository.save(currBook)
        ResponseEntity.noContent().build<Any>()
    } catch (e: NoSuchElementException) {
        ResponseEntity.badRequest().build()
    } catch (e: IllegalArgumentException) {
        ResponseEntity.badRequest().build()
    }
}
    @Operation(summary = "Remove an book")
    @DeleteMapping("/books/{id}")
    fun deleteBook(@PathVariable("id") id: Long): ResponseEntity<Any> {
        return try {
            this.bookRepository.deleteById(id)
            ResponseEntity.noContent().build<Any>()
        } catch (e: IllegalArgumentException) {
            ResponseEntity.badRequest().build()
        }
}