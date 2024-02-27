
describe("Assertion demo", ()=>{

    it("implicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        //cy.get('//a').should('have.length','5') //no of links

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.have.value',"Admin")



    })
    it("explicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="Ashraf CollingsBrenna";

        cy.get(".oxd-userdropdown-name").then( (x)=>{
            let actName=x.text()
            //BDD style
            expect(actName).to.equal(expName)
            //expect(actName).to.not.equal(expName)

            //TDD style
            assert.equal(actName,expName)
           // assert.notEqual(actName,expName)

            })

    


    })
})

