
 ///<refrence types="cypress" />  

 it('Learning assertion', ()=>{

    cy.visit('example.cypress.io')
    cy.contains('get').click()
    cy.get('.query-button > .btn').should('contain','Save Form') 
   // cy.get('.btn > span').should('contain','Fuck off') // default timeout is 4s, ie time it takes to look for the element before throwing an error if it still couldnt find it under that stated time
   // cy.get('.btn > span',{timeout:6000}).should('contain','Fuck off') // increasing the timeout to 6s

   cy.get('.btn').should('have.class','btn') // getting the button via its className only 
   cy.get('.query-button > .btn').should('have.class','btn') // getting the button from its parent className to its own className

   cy.get('#query-btn').should('have.id', 'query-btn')

   cy.get('.btn').should('be.enabled')

   cy.get('#query-btn') // extracting the element we wanna run assertion on
   .invoke ('attr', 'id') //stating that we wanna check the class of such element 
   .should('equal', 'query-btn') // performing the assertion

   cy.get('[name=submission]') // extracting the element we wanna run assertion on
    .invoke ('attr', 'id') //stating that we wanna check the class of such element 
    .should('equal', 'main')
 })
