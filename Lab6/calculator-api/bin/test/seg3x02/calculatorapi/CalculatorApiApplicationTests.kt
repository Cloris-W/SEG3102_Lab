package seg3x02.calculatorapi

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get

@SpringBootTest
@AutoConfigureMockMvc
class CalculatorApiApplicationTests {
    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun `calculator returns the result of each operation`() {
        val cases = mapOf(
            "/calculator/add/2.5/3" to "5.5",
            "/calculator/subtract/2/5" to "-3.0",
            "/calculator/multiply/-2/3" to "-6.0",
            "/calculator/divide/7/2" to "3.5"
        )
        cases.forEach { (path, result) ->
            mockMvc.get(path).andExpect {
                status { isOk() }
                content { string(result) }
            }
        }
    }

    @Test
    fun `invalid number and division by zero return bad request`() {
        mockMvc.get("/calculator/add/abc/2").andExpect { status { isBadRequest() } }
        mockMvc.get("/calculator/divide/5/0").andExpect { status { isBadRequest() } }
    }

    @Test
    fun `OpenAPI documents all calculator operations`() {
        mockMvc.get("/v3/api-docs").andExpect {
            status { isOk() }
            listOf("add", "subtract", "multiply", "divide").forEach { operation ->
                jsonPath("$.paths['/calculator/$operation/{number1}/{number2}'].get") { exists() }
            }
        }
        mockMvc.get("/swagger-ui/index.html").andExpect { status { isOk() } }
    }
}
