
//types of hooks,(before, after, beforeEach, afterEach)
// tags: .skip, .only


describe('Hooks and Tags Test Suite',() =>{ 

    before(()=>{
        cy.log("***** lauch app *****");  
    })

    after(()=>{
        cy.log("***** close app *****");  
    })
    
    beforeEach(()=>{
        cy.log("***** login ****");  
    })

    afterEach(()=>{
        cy.log("***** logout *****");  
    })


    it("search", () =>{
        cy.log("***** searching *****");  

    })

    it("advanced search", () =>{
        cy.log("***** advanced searching *****");  

    })

    it("listing products", () =>{

        cy.log("***** listing products *****");  
    })

})
