import 'cypress-iframe'
require('@4tw/cypress-drag-drop')


describe("Mouse Operations",()=>{ 

    it('MouseHover',()=>{

        cy.visit("https://demo.opencart.com/")
        
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.not.visible');

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible');

    });

    it('Right Click',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //Approach1
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
        cy.get('.context-menu-icon-copy > span').should('be.visible');

        //Approach2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');

    });

    it('Double Click',()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded("#iframeResult"); //load frame

        //Approach1_using trigger()
        /*cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');*/

        //Approach1_using trigger()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');
    });

    it('Drag and Drop using plugin',()=>{
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box7").should('.be.visible')
        cy.get("#box107").should('.be.visible')
        
        cy.wait(3000);
        cy.get("#box7").drag('#box107',{force:true});
        

    });

    it.only('Scrolling Page',()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        cy.get(':nth-child(34) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(34) > :nth-child(1) > img').should('be.visible')

        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible')

        cy.get('#footer').scrollIntoView({duration:2000});

    });


})

