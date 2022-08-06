 ///<refrence types="cypress" />  

 it('Learning assertion', ()=>{

    cy.visit('example.cypress.io')
    cy.contains('get').click()

   cy.get('#query-btn')
     .should('have.id', 'query-btn')
     .and('be.enabled')
     .and('have.class', 'query-btn')
     .invoke ('attr', 'id') //stating that we wanna check the class of such element 
     .and('equal', 'query-btn') // performing the assertion

 })
