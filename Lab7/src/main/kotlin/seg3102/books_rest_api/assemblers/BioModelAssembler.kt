package seg3x02.booksrestapi.assemblers

import org.springframework.hateoas.CollectionModel
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder
import org.springframework.stereotype.Component
import seg3102.booksrestapi.controller.ApiController
import seg3102.booksrestapi.entities.Author
import seg3102.booksrestapi.entities.Book
import seg3102.booksrestapi.representation.AuthorNameRepresentation
import seg3102.booksrestapi.representation.BookRepresentation
import java.util.*

@Component
class BioModelAssembler: RepresentationModelAssemblerSupport<Book,
        BioRepresentation>(ApiController::class.java, BioRepresentation::class.java) {
    override fun toModel(entity: Book): BioRepresentation {
        val bioRepresentation = instantiateModel(entity)
        bioRepresentation.add(WebMvcLinkBuilder.linkTo(
                WebMvcLinkBuilder.methodOn(ApiController::class.java)
                        .getBookById(entity.id))
                .withSelfRel())
        bioRepresentation.authors = toAuthorsRepresentation(entity.authors)
        bioRepresentation.add(WebMvcLinkBuilder.linkTo(
                WebMvcLinkBuilder.methodOn(ApiController::class.java)
                        .getBookOrdersById(entity.id))
                .withRel("orders"))
        bioRepresentation.bioId = entity.id
        bioRepresentation.bio = entity.isbn
        return bioRepresentation
    }

    override fun toCollectionModel(entities: Iterable<Book>): CollectionModel<BookRepresentation> {
        val bookRepresentations = super.toCollectionModel(entities)
        bookRepresentations.add(WebMvcLinkBuilder.linkTo(
                WebMvcLinkBuilder.methodOn(
                        ApiController::class.java).allBooks()).withSelfRel())
        return bookRepresentations
    }

    fun toAuthorsRepresentation(authors: List<Author>): List<AuthorNameRepresentation> {
        return if (authors.isEmpty()) Collections.emptyList() else authors
                .map{
                    authorRepresentation(it)
                }

    }

    private fun authorRepresentation(author: Author): AuthorNameRepresentation {
        val representation = AuthorNameRepresentation()
        representation.firstName = author.firstName
        representation.lastName = author.lastName
        return representation.add(WebMvcLinkBuilder.linkTo(
                WebMvcLinkBuilder.methodOn(ApiController::class.java)
                        .getAuthorById(author.id))
                .withSelfRel())
    }
}