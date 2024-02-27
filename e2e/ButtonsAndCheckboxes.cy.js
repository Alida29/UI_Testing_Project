
describe('Check UI Elements', () =>{
    
    it("Checking Radio Buttons", () =>{

        cy.visit("https://testautomationpractice.blogspot.com/")


        //visibility of radio buttond
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        //selecting radio buttions
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')



    })
        it("Check box interaction", () =>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility of checkbox
       // cy.get("input#monday").should('be.visible')

        //selecting single checkbox
        //cy.get("input#monday").check().should('be.checked')

        //unselecting single checkbox
       // cy.get("input#monday").uncheck().should('not.be.checked')

        //selecting all checkbox
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')


    })
})