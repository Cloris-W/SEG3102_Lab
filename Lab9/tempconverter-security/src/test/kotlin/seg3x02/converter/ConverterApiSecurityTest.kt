package seg3x02.converter

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*
import java.util.Base64

@SpringBootTest
@AutoConfigureMockMvc
class ConverterApiSecurityTest {
    @Autowired
    lateinit var mockMvc: MockMvc

    private fun basic(username: String, password: String): String =
        "Basic " + Base64.getEncoder().encodeToString("$username:$password".toByteArray())

    @Test
    fun conversion_requires_credentials() {
        for (path in listOf("/temperature-converter/celsius-fahrenheit/0", "/temperature-converter/fahrenheit-celsius/212")) {
            mockMvc.perform(get(path).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isUnauthorized)
                .andExpect(header().string(HttpHeaders.WWW_AUTHENTICATE, "Basic realm=\"Realm\""))
        }
    }

    @Test
    fun incorrect_password_is_rejected() {
        mockMvc.perform(get("/temperature-converter/celsius-fahrenheit/0")
            .header(HttpHeaders.AUTHORIZATION, basic("user1", "wrong")))
            .andExpect(status().isUnauthorized)
    }

    @Test
    fun both_users_can_convert_in_both_directions() {
        for ((username, password) in listOf("user1" to "pass1", "user2" to "pass2")) {
            mockMvc.perform(get("/temperature-converter/celsius-fahrenheit/0")
                .header(HttpHeaders.AUTHORIZATION, basic(username, password)))
                .andExpect(status().isOk)
                .andExpect(content().string("32.0"))
            mockMvc.perform(get("/temperature-converter/fahrenheit-celsius/212")
                .header(HttpHeaders.AUTHORIZATION, basic(username, password)))
                .andExpect(status().isOk)
                .andExpect(content().string("100.0"))
        }
    }
}
