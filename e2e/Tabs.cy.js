
describe('Handle tabs',(()=>{ 

    it('approach 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example >a').invoke('removeAttr','target').click();

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        //go back to parent tab
        cy.go('back');

        cy.wait(5000)

    
    })

    it.only('approach 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example >a').then((e)=>{

           let url= e.prop('href');
           cy.visit(url) //parent domain must match

        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        //go back to parent tab
        cy.go('back');

        cy.wait(5000)

    
    })


}))