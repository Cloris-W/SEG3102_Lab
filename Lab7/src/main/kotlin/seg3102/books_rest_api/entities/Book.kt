1. package seg3x02.booksrestapi.entities
2.
3. import jakarta.persistence.*
4.
5. @Entity
6. @Table(name = "BookOrder")
7. class Order {
8.     @Id
9.     @GeneratedValue(strategy = GenerationType.AUTO)
10.     var id: Long = 0
11.     var quantity: Int = 0
12. }
1. package seg3x02.booksrestapi.entities
2.
3. import jakarta.persistence.*
4.
5. @Entity
6. class Author {
7.     @Id
8.     @GeneratedValue(strategy = GenerationType.AUTO)
9.     var id: Long = 0
10.     var firstName: String = ""
11.     var lastName: String = ""
12.
13.     @ManyToMany
14.     var books: MutableList<Book> = ArrayList()
15.
16.     @OneToOne(fetch = FetchType.LAZY, cascade = [CascadeType.ALL])
17.     var bio: Bio = Bio()
18. }
1. package seg3x02.booksrestapi.entities
2.
3. import jakarta.persistence.Entity
4. import jakarta.persistence.GeneratedValue
5. import jakarta.persistence.GenerationType
6. import jakarta.persistence.Id
7.
8. @Entity
9. class Bio {
10.     @Id
11.     @GeneratedValue(strategy = GenerationType.AUTO)
12.     var id: Long = 0
13.     var biodata: String = ""
14. }
