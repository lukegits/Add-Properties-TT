# Add-Properties-TT
TurboTenant Cypress Automation Scripts

Welcome to the TurboTenant Cypress Automation Scripts repository! This repository contains Cypress scripts designed to automate the testing of the TurboTenant application for a QA Manager Take-Home Exercise.


Features
Automated Functional Testing: Covers user registration, login, property management, and lead management.

Setup and Installation
Prerequisites
Node.js (v12 or higher)
npm (Node package manager)
Cypress

Installation Steps
Clone the repository:

```git clone  https://github.com/lukegits/Add-Properties-TT.git```

Install the required dependencies:

```npm install```

Open Cypress:

```npx cypress open```

Run all tests in headless mode:

```npx cypress run```

Run tests in interactive mode:

```npx cypress open```

Running Specific Test Suites or Cases

To run a specific test suite or case, use the following command:

```npx cypress run --spec "cypress/integration/your_test_file.spec.js"```

*** Please note "cy.get('.message-success').contains('Failed to add property')" are optional tests that do not need to be run unless the development team indicates they are a required feature. 
These tests were created to test the "Failed to add property" snack bar if there is only one string input in the Add Properties and Add Leads pages. ***

Contact
For any questions or feedback, please contact luket.chavez@gmail.com.

Thank you for your consideration!






