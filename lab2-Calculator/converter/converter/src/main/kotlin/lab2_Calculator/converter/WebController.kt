package lab2_Calculator.converter

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam

@Controller // <1>
class WebController {
    @ModelAttribute //<2>
    fun addAttributes(model: Model) {
        model.addAttribute("error", "")
        model.addAttribute("firstNumber", "")
        model.addAttribute("secondNumber", "")
        model.addAttribute("result", "")
    }

    @RequestMapping("/") // <3>
    fun home(): String {
        return "home"
    }

    @GetMapping(value = ["/convert"]) // <4>
    fun doConvert(
        @RequestParam(value = "firstNumber", required = false) firstNumber: String,
        @RequestParam(value = "secondNumber", required = false) secondNumber: String,
        @RequestParam(value = "operation", required = false) operation: String,
        model: Model
    ): String {
        var firstVal: Double
        var secondVal: Double
        when (operation) {
            "firstValAddSecondVal" -> // <5>
                try {
                    firstVal = firstNumber.toDouble()
                    secondVal = secondNumber.toDouble()
                    model.addAttribute("firstNumber", firstNumber)
                    model.addAttribute("secondNumber", secondNumber)
                    model.addAttribute("result", String.format("%.2f", firstVal + secondVal)) // <7>
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "OperationError") // <8>
                    model.addAttribute("firstNumber", firstNumber)
                    model.addAttribute("secondNumber", secondNumber)
                    model.addAttribute("result", "")
                }
            "firstValSubtractSecondVal" -> // <6>
                try {
                    firstVal = firstNumber.toDouble()
                    secondVal = secondNumber.toDouble()
                    model.addAttribute("firstNumber", firstNumber)
                    model.addAttribute("secondNumber", secondNumber)
                    model.addAttribute("result", String.format("%.2f", firstVal - secondVal)) // <7>
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "OperationError")
                    model.addAttribute("firstNumber", firstNumber)
                    model.addAttribute("secondNumber", secondNumber)
                    model.addAttribute("result", "")
                }
            "firstValMultiplySecondVal" -> // <6>
                try {
                    firstVal = firstNumber.toDouble()
                    secondVal = secondNumber.toDouble()
                    model.addAttribute("firstNumber", firstNumber)
                    model.addAttribute("secondNumber", secondNumber)
                    model.addAttribute("result", String.format("%.2f", firstVal * secondVal)) // <7>
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "OperationError")
                    model.addAttribute("firstNumber", firstNumber)
                    model.addAttribute("secondNumber", secondNumber)
                    model.addAttribute("result", "")
                }
            "firstValDivideSecondVal" -> // <6>
                try {
                    firstVal = firstNumber.toDouble()
                    secondVal = secondNumber.toDouble()
                    model.addAttribute("firstNumber", firstNumber)
                    model.addAttribute("secondNumber", secondNumber)
                    model.addAttribute("result", String.format("%.2f", firstVal / secondVal)) // <7>
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "OperationError")
                    model.addAttribute("firstNumber", firstNumber)
                    model.addAttribute("secondNumber", secondNumber)
                    model.addAttribute("result", "")
                }
            else -> {
                model.addAttribute("error", "OperationFormatError")
                model.addAttribute("firstNumber", firstNumber)
                model.addAttribute("secondNumber", secondNumber)
                model.addAttribute("result", "")
            }
        }
        return "home"
    }
}