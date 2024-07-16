describe('This is my demo for Cypress automation',function()
    { 


        it('1st Scenario',function()
            {
                cy.visit('http://jupiter.cloud.planittesting.com')
                cy.get('#nav-contact').click()
                cy.get('.btn-contact').click()
                cy.get('.alert').contains("We welcome your feedback - but we won't get it unless you complete the form correctly.")
                cy.get('#forename-err').contains("Forename is required")
                cy.get('#email-err').contains("Email is required")
                cy.get('#message-err').contains("Message is required")



            }
    
        )
        it('2nd scenario',function()
            {
                var i = 0
                for (i = 0; i < 5 ; i++ ) 
                    {
                        cy.visit('http://jupiter.cloud.planittesting.com')
                            
                    }




            }






        )




    
    
    }


)