# PokeApi Test Automation

🔍 Automated test suite for PokeApi endpoints using JavaScript, Axios, and Jest.

This project aims to automate tests for various PokeApi endpoints, ensuring that the API responses meet the expected criteria. It utilizes JavaScript as the programming language, Axios for making HTTP requests, and Jest as the testing framework.

## Why I Chose These Technologies

- **JavaScript**: Being a widely used and versatile language, JavaScript allows seamless integration with web APIs and provides excellent support for asynchronous operations.
- **Axios**: Axios is a popular HTTP client that simplifies making HTTP requests in JavaScript, providing a straightforward API and handling response parsing.
- **Jest**: Jest is a powerful and easy-to-use JavaScript testing framework that offers built-in assertion functions, mocking capabilities, and extensive reporting.

## Test Cases

This test suite covers the following PokeApi endpoints:

1. Retrieve a Pokemon by ID
2. Retrieve a Move by ID
3. List all Pokemon
4. List all Abilities
5. List all Types

Each test case is automated to ensure the correct response from the PokeApi and to validate the expected results.

## Prerequisites

- Node.js (v12 or higher) installed on your machine

## How to Run the Tests

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using the following command:

   ```shell
   npm install

4. Run the tests using the following command:

   ```shell
    npm test

The test suite will be executed, and the results will be displayed in the console.

## Maintaining the Test Suite

The test suite can be easily maintained and expanded by adding more test cases or modifying existing ones. Each test case is defined as an individual test function in the test file (pokeapi.test.js), making it organized and modular.

Feel free to explore and enhance the test suite based on your specific requirements or changes to the PokeApi.

🚀 Happy testing!