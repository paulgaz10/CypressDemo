describe('This is for Planit Assestment',function()
    { 

          it('Test Case 3',function()
           {
            cy.visit('http://jupiter.cloud.planittesting.com')
            cy.get('#nav-shop').click()
            
            var i = 0
            for (i = 0; i < 2 ; i++ ) 
                {
                    cy.get('h4.product-title.ng-binding').each(($el, index, $list) => {
                    if($el.text().includes('Stuffed Frog'))
                     {  
                        cy.get('.btn-success').eq(index).click()
                     }
                })
                    
               }

            var y = 0
            for (y = 0; y < 5 ; y++ ) 
                {
                    cy.get('h4.product-title.ng-binding').each(($el, index, $list) => {
                        if($el.text().includes('Fluffy Bunny'))
                         {  
                            cy.get('.btn-success').eq(index).click()
                         }
                    })

                }
            var x = 0
            for (x = 0; x < 3 ; x++ ) 
                 {
                    cy.get('h4.product-title.ng-binding').each(($el, index, $list) => {
                        if($el.text().includes('Valentine Bear'))
                            {  
                            cy.get('.btn-success').eq(index).click()
                         }
                    })
    
                 }
            cy.get('#nav-cart').click()
            let StuffedFrogIndPrice;
            cy.get('tbody > :nth-child(1) > :nth-child(2)').then((StuffedFrogIndPrice) => {
                StuffedFrogIndPrice = (StuffedFrogIndPrice.text().replace('$',''))
                expect(Number(StuffedFrogIndPrice)).to.equal(10.99)
            })
            let StuffedFrogSubtotal;
            cy.get('tbody > :nth-child(1) > :nth-child(4)').then((StuffedFrogSubtotal) => {
                StuffedFrogSubtotal = (StuffedFrogSubtotal.text().replace('$',''))
                expect(Number(StuffedFrogSubtotal)).to.equal((10.99*2))
            })
            let FluppyBunnyIndPrice;
            cy.get('tbody > :nth-child(2) > :nth-child(2)').then((FluppyBunnyIndPrice) => {
                FluppyBunnyIndPrice = (FluppyBunnyIndPrice.text().replace('$',''))
                expect(Number(FluppyBunnyIndPrice)).to.equal(9.99)
            })
            let FluppyBunnySubtotal;
            cy.get('tbody > :nth-child(2) > :nth-child(4)').then((FluppyBunnySubtotal) => {
                FluppyBunnySubtotal = (FluppyBunnySubtotal.text().replace('$',''))
                expect(Number(FluppyBunnySubtotal)).to.equal((9.99*5))
            })
            let ValentineBearIndPrice;
            cy.get('tbody > :nth-child(3) > :nth-child(2)').then((ValentineBearIndPrice) => {
                ValentineBearIndPrice = (ValentineBearIndPrice.text().replace('$',''))
                expect(Number(ValentineBearIndPrice)).to.equal(14.99)
            })
            let ValentineBearSubtotal;
            cy.get(':nth-child(3) > :nth-child(4)').then((ValentineBearSubtotal) => {
                ValentineBearSubtotal = (ValentineBearSubtotal.text().replace('$',''))
                expect(Number(ValentineBearSubtotal)).to.equal((14.99*3))
            })
            var sum = 0
            cy.get('tr td:nth-child(4)').each(($el, index, $list) => {
                const subTotalEach=$el.text()
                var sub = subTotalEach.replace('$','')
                sum = Number(sum) + Number(sub)
            }).then(function()
            {
                cy.log(sum)
            })
            let FinalTotal;
            cy.get('tr td:nth-child(1) strong').then((Total) => {
                //FinalTotal = (Total.text().replace('Total: ',''))
                FinalTotal = (Total.text().split(':')[1].trim())
                expect(Number(FinalTotal)).to.equal(Number(sum))
            })
            

        })
     })

    