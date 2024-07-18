describe('Arcanys Test - Order Feature', function() 
{

it('TC1-Order less than £12 ', function()
{
    cy.visit("http://18.143.130.154/resto/main/menus")
    cy.get('.menu-item').each(($el, index, $list) => {
        if($el.text().includes('YAM PORRIDGE'))
         {  
            cy.get('.fa.fa-plus').eq(index).click({force:true})
         }
    })
    cy.wait(5000)
    cy.get('#cart-buttons').find('button.checkout-btn').invoke('attr', 'data-attach-loading').then((attrValue) => {
    expect(attrValue).to.equal('disabled')
    })
})
it('TC2-Order more than £12 ', function()
{
    cy.visit("http://18.143.130.154/resto/main/menus")
    
    cy.get('.menu-item').each(($el, index, $list) => {
        if($el.text().includes('ATA RICE'))
         {  
            cy.get('.fa.fa-plus').eq(index).click()
         }
    })
    cy.get('#eu-cookie-action').click()
    cy.get('#menuOptionCheck6').check()
    cy.get('#menuOptionRadio9').check()
    cy.get('.col-sm-7 > .btn').click()
    cy.wait(6000)
    cy.get('#cart-buttons').find('button.checkout-btn').invoke('attr', 'data-request').then((attrValue) => {
        expect(attrValue).to.equal('cartBox::onProceedToCheckout')
        })
})    



})   