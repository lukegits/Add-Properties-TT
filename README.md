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

Install the required dependencies:

```npm install```

Open Cypress:

```npx cypress open```

Cypress will open and install if needed, select E2E Testing button and then select Start "E2E Testing in Chrome" button.

Download automated script file from:

```https://github.com/lukegits/Add-Properties-TT/blob/main/AddProperty.cy.js```

Place file in e2e directory in cypress files.

Navigate to Chrome browser session running Cypress:

To run tests click on file named:

```Add-Properties-TT```

To run all tests in headless mode:

```npx cypress run```


*** Please note "cy.get('.message-success').contains('Failed to add property')" are optional tests that do not need to be run unless the development team indicates they are a required feature. 
These tests were created to test the "Failed to add property" snack bar if there is only one string input in the Add Properties and Add Leads pages. ***

Contact
For any questions or feedback, please contact luket.chavez@gmail.com.

Thank you for your consideration!






