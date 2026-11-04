package seg3x02.calculatorapi.controller

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("calculator")
class CalculatorController {
    @GetMapping("/add/{number1}/{number2}")
    fun add(@PathVariable number1: Double, @PathVariable number2: Double) = number1 + number2

    @GetMapping("/subtract/{number1}/{number2}")
    fun subtract(@PathVariable number1: Double, @PathVariable number2: Double) = number1 - number2

    @GetMapping("/multiply/{number1}/{number2}")
    fun multiply(@PathVariable number1: Double, @PathVariable number2: Double) = number1 * number2

    @GetMapping("/divide/{number1}/{number2}")
    fun divide(@PathVariable number1: Double, @PathVariable number2: Double): Double {
        if (number2 == 0.0) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Cannot divide by zero")
        }
        return number1 / number2
    }
}
