package seg3x02.booksrestapi.representation

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.annotation.JsonRootName
import org.springframework.hateoas.RepresentationModel
import org.springframework.hateoas.server.core.Relation

@Relation(collectionRelation = "books")
@JsonInclude(JsonInclude.Include.NON_NULL)
class BookTitleRepresentation: RepresentationModel<BookTitleRepresentation>() {
    var title: String = ""
}