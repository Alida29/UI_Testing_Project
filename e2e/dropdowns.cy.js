
describe('Handle Dropdowns',() =>{
    
    it.skip("Dropdown with select", () =>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('#country')
        .select('brazil')
        .should('have.value','brazil')

    })

    it.skip("Dropdown without select", () =>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type('Cameroon').type('{enter}')
        
        cy.get("#select2-billing_country-container").should('have.text','Cameroon')
    })

    it.skip("Auto suggest dropdown", () =>{

        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").type('Delhi')
        cy.get(".suggestion-title").contains('Delhi University').click()

    })

    it("dynamic dropdown", () =>{

        cy.visit("https://www.google.com/")
        //cy.get(".button#tHlp8d").click()
    

        cy.get("textarea[name='q']").type('cypress automation tutorial')
        cy.wait(3000)

        cy.get('.wM6W7d>span').should('have.length',13)

        cy.get(".wM6W7d>span").each(($el, index, $list)=>{

                if($el.text()=='cypress automation tutorial')
                {
                cy.wrap($el).click()

                }
            })
            cy.get("textarea[name='q']").should('have.value','cypress automation')

    })
})

