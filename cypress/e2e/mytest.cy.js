
describe('my first test', () => {
  it('verify tittle-positive', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")
    cy.title().should('eq','OrangeHRM') 
  })

  it('verify tittle-negative', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")
    cy.title().should('eq','orangeHRM123') 
  }) 
})

