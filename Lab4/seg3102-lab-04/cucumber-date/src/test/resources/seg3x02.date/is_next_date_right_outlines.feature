Feature: Next date, as outlines
  Next date should respond a valid date for a valid input, and notify the user
  when the input is not a date it can read

  Scenario Outline: The day after a valid date is a valid date
    Given the valid date <date>
    When I ask for the next date
    Then the response should be <nextDate>

    Examples:
      | date                | nextDate            |
      | "1980/December/15"  | "1980/December/16"  |
      | "2000/February/28"  | "2000/February/29"  |
      | "1600/February/29"  | "1600/March/1"      |
      | "1977/December/31"  | "1978/January/1"    |
      | "25/February/28"    | "25/March/1"        |

  Scenario Outline: An input that does not name a date is reported back
    Given the invalid date <date>
    When I ask for the next date
    Then the response should be <message>

    Examples:
      | date                | message                             |
      | "December/15"       | "Invalid date: December/15"         |
      | "1980/Decembre/15"  | "Invalid date: 1980/Decembre/15"    |
      | "1980/december/15"  | "Invalid date: 1980/december/15"    |
      | "1980/12/15"        | "Invalid date: 1980/12/15"          |
      | "1980/February/30"  | "Invalid date: 1980/February/30"    |
      | "1900/February/29"  | "Invalid date: 1900/February/29"    |
      | "1980/December/0"   | "Invalid date: 1980/December/0"     |
      | "0/December/15"     | "Invalid date: 0/December/15"       |
      | "tomorrow"          | "Invalid date: tomorrow"            |
