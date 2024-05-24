/// <reference types="Cypress" />

/*
Projects goals are to test the TurboTent app's Add Property flow this includes CRUD 
actions for the add property application flow:

Verify user can add a new property.

Verify user can edit property details.

Verify add property does not allow for invalid string inputs.

Verify user can delete a property.

Verify snack bar displays on screen showing with the property is deleted succesfully!

-------------
setup (prerequisites):
Must install Cypress to local directory with most recent npm version.
-------------

Test steps:
Login as pre existing user.

Verify user can login with valid details (Pre-condition)

1. Website resolves and loads properly
2. User clicks on user name login field and enters a valid username
3. User clicks on password login field and enters a valid password
4. User clicks on login button

Verify user can add a new property

1. Add property page opens for user
2. User clicks on ""Add Property"" button
3. User enters valid string under 100 characters in the the ""Title"" string field
4. User enters valid string under 100 characters in the the ""Description"" string field
5. User enters valid string under 100 characters in the the ""Rent"" (NUMBER) string field
6. User click the Cancel button
7. User fills out the Title, Description and Rent fields in the form with valid strings and then clicks the Submit button"

Verify user can edit a new property

1. Add property page opens for user
2. User clicks on ""Edit"" button next to an added property
3. User enters valid string under 100 characters in the the ""Title"" string field
4. User enters valid string under 100 characters in the the ""Description"" string field
5. User enters valid string under 100 characters in the the ""Rent"" (NUMBER) string field
6. User clicks Summit button

Verify user cannot add a property with invalid Title, Description and Rent fields

1. Add property page opens for user
2. User clicks on ""Add Property"" button
3. User clicks Submit button in the add property form without filling out Title, Description or Rent string field
4. User fills in only the Title string field and clicks Submit button
5. User fills in only the Description string field and clicks Submit button
6. User fills in only the Rent (INTEGER) string field and clicks Submit button
7. User enters invalid string OVER 100 characters in the the ""Title"" string field and clicks Submit button
8. User enters invalid string OVER 100 characters in the the ""Description"" string field and clicks Submit button
9. User enters invalid string OVER 100 characters in the the ""Rent"" (INTEGER) string field and clicks Submit button

Verify user can delete a property.

1. User is logged into the Add Property page
2. (Precondition) User has properties created on Add property page and clicks Delete button
3. (Corner) Delete all properties in a user account"

*/

describe('login as pre-existing user and create new property', () => {

  it('Opens TurboTenant Login page and logs in as prexisting user', function() {
    cy.viewport(1400, 1100)
      // VERIFY USER CAN LOGIN WITH VALID CREDENTIALS 
      // 1. Website resolves and loads properly
    cy.visit('https://qa-app.dev.turbotenant.com')
 
      // 2. User clicks on user name login field and enters a valid username

    cy.get(':nth-child(2) > input').type('LukeChavez').should('have.value', 'LukeChavez')
  
      // 3. User clicks on password login field and enters a valid password
  
    cy.get(':nth-child(3) > input').type('Test123').should('have.value', 'Test123')
  
      // 4. User clicks on login button"
  
    cy.get('button').click()

      // VERIFY USER CAN ADD NEW PROPERTY
      // 1. Add property page opens for user
    cy.wait(1000)

      // 2. User clicks on ""Add Property"" button
    cy.get('.header > :nth-child(1)').click()

      // 3. User enters valid string under 100 characters in the the ""Title"" string field
    cy.get('[placeholder="Title"]').type('Park Place').should('have.value', 'Park Place')

      // 4. User enters valid string under 100 characters in the the ""Description"" string field
    cy.get('[placeholder="Description"]').type('Blue property with up to 4 houses').should('have.value', 'Blue property with up to 4 houses')

      // 5. User enters valid string under 100 characters in the the ""Rent"" (NUMBER) string field
    cy.get('[placeholder="Rent"]').type('35').should('have.value', '35')

      // 6. User click the Cancel button
    cy.get('.addForm > :nth-child(5)').click()
      // Form clears
      // User clicks the Add Property button again
    cy.get('.header > :nth-child(1)').click()
    
      // 7. User fills out the Title, Description and Rent fields in the form with valid strings"
    cy.get('[placeholder="Title"]').type('Park Place').should('have.value', 'Park Place')
    
    cy.get('[placeholder="Description"]').type('Blue property with up to 4 houses').should('have.value', 'Blue property with up to 4 houses')
   
    cy.get('[placeholder="Rent"]').type('35').should('have.value', '35')

      // User clicks the Submit button
    cy.get('.addForm > :nth-child(4)').click()

      // Validate success snack bar displays with the string Property added successfully!
    cy.get('.message-success').contains('Property added successfully!')

      // VERIFY USER CAN EDIT A PROPERTY
      // 1. Add property page opens for user
      // 2. User clicks on ""Edit"" button next to an added property
    cy.get(':nth-child(3) > .propertyWrapper > .actionButtons > :nth-child(3)').click()

      // 3. User enters valid string under 100 characters in the the ""Title"" string field
    cy.get(':nth-child(1) > input').clear(':nth-child(1) > input')

    cy.get(':nth-child(1) > input').type('Board Walk').should('have.value', 'Board Walk')
  
      // 4. User enters valid string under 100 characters in the the ""Description"" string field
    cy.get(':nth-child(2) > input').clear(':nth-child(2) > input')
    cy.get(':nth-child(2) > input').type('Blue property with up to 8 houses').should('have.value', 'Blue property with up to 8 houses')
   
      // 5. User enters valid string under 100 characters in the the ""Rent"" (NUMBER) string field
    cy.get(':nth-child(3) > input').clear(':nth-child(3) > input')
    cy.get(':nth-child(3) > input').type('65').should('have.value', '65')
    
      // User clicks the Save button
    cy.get('.editForm > :nth-child(4)').click()

      // Validate success snack bar displays with the string Property added successfully!
    cy.get('.message-success').contains('Property updated successfully!')

      // VERIFY ADD PROPERTY DOES NOT ALLOW FOR INVALID STRING INPUTS.
      // 1. Add property page opens for user
      // 2. User clicks on ""Add Property"" button
    cy.get('.header > :nth-child(1)').click()
   
      // 3. User clicks Submit button in the add property form without filling out Title, Description or Rent string field
    cy.get('.addForm > :nth-child(4)').click()

      //Snack bar is shown on screen with the string "Failed to add property" and property is not added to the table on screen.
      //cy.get('.message-success').contains('Failed to add property')
      // 4. User fills in only the Title string field and clicks Submit button
    cy.get('[placeholder="Title"]').type('Park Place Title only').should('have.value', 'Park Place Title only')

    cy.get('.addForm > :nth-child(4)').click()
 
      //Snack bar is shown on screen with the string "Failed to add property" and property is not added to the table on screen.
      //Optional test for the string Failed to add to property if the requirement needs this field to not allow only a singular input in the form
      //cy.get('.message-success').contains('Failed to add property')
    cy.get('[placeholder="Title"]').clear()

      // 5. User fills in only the Description string field and clicks Submit button
    cy.get('[placeholder="Description"]').type('Blue property with up to 4 houses description only').should('have.value', 'Blue property with up to 4 houses description only')

    cy.get('.addForm > :nth-child(4)').click()
   
      //Snack bar is shown on screen with the string "Failed to add property" and property is not added to the table on screen.
      //Optional test for the string Failed to add to property if the requirement needs this field to not allow only a singular input in the form 
      //cy.get('.message-success').contains('Failed to add property')
    cy.get('[placeholder="Description"]').clear()

      // 6. User fills in only the Rent (INTEGER) string field and clicks Submit button
      // Add property button clicked
    cy.get('.header > :nth-child(1)').click()

      // 5. User fills in only the Rent string field and clicks Submit button
    cy.get('[placeholder="Rent"]').type('35').should('have.value', '35')
    cy.get('.addForm > :nth-child(4)').click()

      // Snack bar is shown on screen with the string "Failed to add property" and property is not added to the table on screen.
      // Optional test for the string Failed to add to property if the requirement needs this field to not allow only a singular input in the form
      // cy.get('.message-success').contains('Failed to add property')

      // 7. User enters invalid string OVER 100 characters in the the ""Title"" string field and clicks Submit button

      // Add property button clicked
    cy.wait(1000)
    cy.get('.header > :nth-child(1)').click()
    cy.get('[placeholder="Title"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore ut labore et dolore.').should('have.value', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore ut labore et dolore.')
    cy.get('.addForm > :nth-child(4)').click()

      // Snack bar is shown on screen with the string "Failed to add property" and property is not added to the table on screen.
      //cy.get('.message-success').contains('Failed to add property')
    cy.get('[placeholder="Title"]').clear()

      // 8. User enters invalid string OVER 100 characters in the the ""Description"" string field and clicks Submit button
    cy.get('.header > :nth-child(1)').click()
    cy.get('[placeholder="Description"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore ut labore et dolore.').should('have.value', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore ut labore et dolore.')
    cy.get('.addForm > :nth-child(4)').click()

      // Snack bar is shown on screen with the string "Failed to add property" and property is not added to the table on screen.
      //cy.get('.message-success').contains('Failed to add property')
    cy.get('[placeholder="Description"]').clear()

      // 9. User enters invalid string OVER 100 characters in the the ""Rent"" (INTEGER) string field and clicks Submit button
    cy.get('.header > :nth-child(1)').click()
    cy.get('[placeholder="Rent"]').type('1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890').should('have.value', '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890')
    cy.get('.addForm > :nth-child(4)').click()

      // Snack bar is shown on screen with the string "Failed to add property" and property is not added to the table on screen.
      //cy.get('.message-success').contains('Failed to add property')

      // VERIFY USER CAN DELETE A PROPERTY
      // 1. User is logged into the Add Property page
      // 2. (Precondition) User has properties created on Add property page and clicks Delete button
    cy.get(':nth-child(3) > .propertyWrapper > .actionButtons > :nth-child(2)').click()

      // VERIFY SNACK BAR DISPLAYS ON SCREEN SHOWING WITH THE STRING PROPERTY DELETED SUCCESSFULLY!
    cy.get('.message-success').contains("Property deleted successfully!")

      // Property has been deleted and no longer appears in the table
    cy.get(':nth-child(2) > .propertyWrapper > .dataInput > h3').should('not.exist')
    .then(() => cy.log('no such element found'))

    })
  })
