package cucumber

import date.NextDateApplication
import io.cucumber.spring.CucumberContextConfiguration
import org.springframework.boot.test.context.SpringBootTest

@CucumberContextConfiguration
@SpringBootTest(classes = [NextDateApplication::class])
class CucumberBootstrap
