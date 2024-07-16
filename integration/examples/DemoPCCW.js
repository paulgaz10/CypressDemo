describe('Login Page', function() 
{

it('TC1_Successful Login', function()
{
    cy.visit("https://practicetestautomation.com/practice-test-login/")
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.get('.post-title').should('have.text','Logged In Successfully')
    
} )

})