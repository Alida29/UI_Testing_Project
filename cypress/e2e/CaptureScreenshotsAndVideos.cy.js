
describe('Mysuite', () => {

  
   it("Capture screenshots & videos", () => {
        cy.visit("https://demo.nopcommerce.com/");
        /*cy.screenshot("Homepage")
        cy.wait(5000);
        // cy.get("img[alt='nopCommerce demo store']").screenshot('logo');*/

        //automatically capture screenshot and video on failure
        cy.get(':nth-child(2) > .category-item > .title > a').click();
        cy.get("div[class='page-title'] h1").should('have.text','Books');    
    })
})