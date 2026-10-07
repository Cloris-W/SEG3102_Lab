Feature: Next date for valid date
  Next date should respond a valid date for a valid input

  Scenario: The day after 1980/December/15 is 1980/December/16
    Given the valid date "1980/December/15"
    When I ask for the next date
    Then the response should be "1980/December/16"

  Scenario: The day after 2000/February/28 is 2000/February/29
    Given the valid date "2000/February/28"
    When I ask for the next date
    Then the response should be "2000/February/29"

  Scenario: The day after 1600/February/29 is 1600/March/1
    Given the valid date "1600/February/29"
    When I ask for the next date
    Then the response should be "1600/March/1"

  Scenario: The day after 1977/December/31 is 1978/January/1
    Given the valid date "1977/December/31"
    When I ask for the next date
    Then the response should be "1978/January/1"

  Scenario: The day after 25/February/28 is 25/March/1
    Given the valid date "25/February/28"
    When I ask for the next date
    Then the response should be "25/March/1"
