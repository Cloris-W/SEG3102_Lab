package seg3x02.booksrestapi.representation

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.annotation.JsonRootName
import org.springframework.hateoas.RepresentationModel
import org.springframework.hateoas.server.core.Relation

@Relation(collectionRelation = "books")
@JsonInclude(JsonInclude.Include.NON_NULL)
class AuthorNameRepresentation: RepresentationModel<AuthorNameRepresentation>() {
    var id: Long = 0
    var firstName: String = ""
    var lastName: String = ""
    var year: Int = 0
    var description: String = ""
    var authors: List<AuthorNameRepresentation> = ArrayList<AuthorNameRepresentation>()
}