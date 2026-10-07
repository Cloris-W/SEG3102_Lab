import date.MyDate

const val INVALID_DATE = "Invalid date"

/**
 * Returns the day after [input], written in the same YEAR/MONTH/DAY format.
 * Returns a message starting with [INVALID_DATE] when [input] is not in that format
 * or does not name a date that exists.
 */
fun getNextDate(input: String): String {
    val date = MyDate.parse(input) ?: return "$INVALID_DATE: $input"
    return date.next().toString()
}
