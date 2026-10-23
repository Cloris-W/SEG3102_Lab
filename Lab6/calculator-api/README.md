# Lab 6 Exercise: Calculator REST API

Requires JDK 21. Run from this directory:

```powershell
.\gradlew.bat bootRun
```

The service returns numeric results for these GET endpoints:

| Endpoint | Operation |
| --- | --- |
| `/calculator/add/{number1}/{number2}` | number1 + number2 |
| `/calculator/subtract/{number1}/{number2}` | number1 - number2 |
| `/calculator/multiply/{number1}/{number2}` | number1 * number2 |
| `/calculator/divide/{number1}/{number2}` | number1 / number2 |

Example: http://localhost:8080/calculator/add/2.5/3 returns `5.5`.
Invalid numbers and division by zero return HTTP 400.

OpenAPI JSON: http://localhost:8080/v3/api-docs

Swagger UI: http://localhost:8080/swagger-ui.html

Run tests and build the executable JAR:

```powershell
.\gradlew.bat test bootJar
java -jar build/libs/calculator-api-0.0.1-SNAPSHOT.jar
```
