//go()

describe('myNavigationSuite', () => {

    it("NavigationTtest", () => {
        cy.visit("https://demo.nopcommerce.com/");
        cy.title().should('eq','nopCommerce demo store');

        cy.get(':nth-child(2) > .category-item > .title > a').click();
        cy.get("div[class='page-title'] h1").should('have.text','Apparel');

        cy.go('back'); // go back to home page
        cy.title().should('eq','nopCommerce demo store');

        cy.go('forward');
        cy.get("div[class='page-title'] h1").should('have.text','Apparel');

        cy.go(-1); //home
        cy.title().should('eq','nopCommerce demo store');

        cy.go(1); 
        cy.get("div[class='page-title'] h1").should('have.text','Apparel');

        cy.reload();
       
    })

    
})

