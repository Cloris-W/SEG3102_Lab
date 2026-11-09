@Controller
class BooksController(private val bookRepository: BookRepository,
                      private val mongoOperations: MongoOperations
) {
    @QueryMapping
    fun books(): List<Book> {
        return bookRepository.findAll()
    }

    @SchemaMapping(typeName="Book", field="authors")
    fun authors(book: Book): List<Author> {
        val query = Query()
        query.addCriteria(Criteria.where("bookNumber").`is`(book.bookNumber))
        return mongoOperations.find(query, Author::class.java)
    }
    ...
   @MutationMapping
    fun newBook(@Argument("createBookInput") input: CreateBookInput) : Book {
        if (input.bookNumber != null &&
                input.category != null &&
                input.title != null && input.cost != null) {
            val book =
              Book(input.bookNumber, input.category, input.title, input.cost, input.year, input.description)
            book.bookId = UUID.randomUUID().toString()
            bookRepository.save(book)
            return book
        } else {
            throw Exception("Invalid input")
        }
    }
    ...
}