package seg3x02.converter

import org.junit.jupiter.api.Test
import org.springframework.context.annotation.Import
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@WebMvcTest
@Import(WebSecurityConfig::class)
class WebControllerTest {
    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun request_to_home() {
        mockMvc.perform(MockMvcRequestBuilders.get("/").header("Authorization", "Basic YYRHHJYhghfG7="))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun celsius_to_fahrenheit_conversion() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert").header("Authorization", "Basic YYRHHJYhghfG7=")
            .param("celsius", "0")
            .param("fahrenheit", "")
            .param("operation", "CtoF"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("fahrenheit", "32.00"))
            .andExpect(MockMvcResultMatchers.view().name("home"))

    }
}
