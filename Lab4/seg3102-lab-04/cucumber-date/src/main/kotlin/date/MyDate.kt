package date

/**
 * A date in the format YEAR/MONTH/DAY, where MONTH is the English name of the month
 * and DAY is not zero padded. Instances can only be created through [parse], so an
 * instance always holds a date that exists.
 */
class MyDate private constructor(
    val year: Int,
    val month: Int,
    val day: Int,
) {
    fun next(): MyDate {
        if (day < daysIn(year, month)) return MyDate(year, month, day + 1)
        if (month < MONTHS.size) return MyDate(year, month + 1, 1)
        return MyDate(year + 1, 1, 1)
    }

    override fun toString(): String = "$year/${MONTHS[month - 1]}/$day"

    companion object {
        val MONTHS = listOf(
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December",
        )

        /** Returns the date named by [text], or null when [text] does not name one. */
        fun parse(text: String): MyDate? {
            val fields = text.split("/")
            if (fields.size != 3) return null

            val year = fields[0].toIntOrNull() ?: return null
            if (year < 1) return null

            val month = MONTHS.indexOf(fields[1]) + 1
            if (month == 0) return null

            val day = fields[2].toIntOrNull() ?: return null
            if (day < 1 || day > daysIn(year, month)) return null

            return MyDate(year, month, day)
        }

        fun isLeapYear(year: Int): Boolean =
            year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)

        private fun daysIn(year: Int, month: Int): Int = when (month) {
            2 -> if (isLeapYear(year)) 29 else 28
            4, 6, 9, 11 -> 30
            else -> 31
        }
    }
}
