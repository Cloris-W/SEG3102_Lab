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
class AuthorModelAssembler: RepresentationModelAssemblerSupport<Author,
        AuthorNameRepresentation>(ApiController::class.java, AuthorNameRepresentation::class.java) {
    override fun toModel(entity: Author): AuthorNameRepresentation {
        val authorRepresentation = instantiateModel(entity)
        authorRepresentation.add(WebMvcLinkBuilder.linkTo(
                WebMvcLinkBuilder.methodOn(ApiController::class.java)
                        .getAuthorById(entity.id))
                .withSelfRel())
        return authorRepresentation
    }
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