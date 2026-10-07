package cucumber

import getNextDate
import io.cucumber.java8.En
import kotlin.test.assertEquals

class StepsDefinition : En {
    private var date: String = ""
    private var nextDate: String = ""

    init {
        Given("the valid date {string}") { date: String ->
            this.date = date
        }
        Given("the invalid date {string}") { date: String ->
            this.date = date
        }
        When("I ask for the next date") {
            this.nextDate = getNextDate(date)
        }
        Then("the response should be {string}") { expectedDate: String ->
            assertEquals(expectedDate, nextDate)
        }
    }
}
