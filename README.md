# Cypress Web Testing Project for Roche

This project utilizes Cypress, Allure Reports, and Docker for automated web testing. Below is a guide to set up the environment and run the tests.

## :gear: Environment Setup

Make sure you have the following tools installed on your machine before getting started:

- [Node.js](https://nodejs.org/): Required to run Cypress tests.
- [Java](https://www.java.com/): Needed for generating Allure reports.

## :rocket: Quick Start

Follow these steps to configure and run the tests:

1. Clone the repository:
   ```bash
   git clone https://github.com/PRamia/roche.git
2. Change to the project directory:
   ```bash
   cd roche
3. Install dependencies: 
   ```bash
   npm install
4. Build the Docker container for the web application:
   ```bash
   docker build -t web-app .
5. Start the web application container:
   ```bash
   docker run -d -p 8080:80 web-app
## :computer: Running Tests

The web application to be tested should be available at the following URL:

http://localhost:8080/employees.html

Run the tests with the command:
   ```bash
   npm run test:allure
```
This command will:

- Run the Cypress tests specified in the cypress/e2e folder.
- Generate Allure reports in the allure-results folder.
- Open the Allure report in your default web browser.


