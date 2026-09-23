package lab2_Calculator.converter

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@WebMvcTest // <1>
class WebControllerTest {
    @Autowired // <2>
    lateinit var mockMvc: MockMvc

    @Test
    fun request_to_home() { // <4>
        mockMvc.perform(MockMvcRequestBuilders.get("/"))
            .andExpect(MockMvcResultMatchers.status().isOk) // <3>
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun first_number_add_second_number() { // <5>
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
            .param("firstNumber", "5.0")
            .param("secondNumber", "3.0")
            .param("operation", "firstValAddSecondVal"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("result", "8.00"))
            .andExpect(MockMvcResultMatchers.view().name("home"))

    }

    @Test
    fun first_number_subtract_second_number() { // <5>
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
            .param("firstNumber", "5.0")
            .param("secondNumber", "3.0")
            .param("operation", "firstValSubtractSecondVal"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("result", "2.00"))
            .andExpect(MockMvcResultMatchers.view().name("home"))

    }

    @Test
    fun first_number_multiply_second_number() { // <5>
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
            .param("firstNumber", "5.0")
            .param("secondNumber", "3.0")
            .param("operation", "firstValMultiplySecondVal"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("result", "15.00"))
            .andExpect(MockMvcResultMatchers.view().name("home"))

    }

    @Test
    fun first_number_divide_second_number() { // <5>
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
            .param("firstNumber", "5.0")
            .param("secondNumber", "3.0")
            .param("operation", "firstValDivideSecondVal"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("result", "1.67"))
            .andExpect(MockMvcResultMatchers.view().name("home"))

    }
    
}