import 'cypress-iframe'

describe('Handling frames',()=>{ 

    it('approach 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe');
        
        const iframe=cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear().type("Welcome {ctrl+A}");
            cy.get("[aria-label='Bold']").click();


     })    
    
    it('approach 2-using custom command',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.getIframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();

    })         
    it('approach 3 - using cypress-iframe plugin',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe');
        
        cy.frameLoaded("#mce_0_ifr");

        cy.iframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();


    })         



})