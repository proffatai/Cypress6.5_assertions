///<refrence types="cypress" />  

it('Explicit Assertions', ()=>{

    
    cy.visit('example.cypress.io')
    cy.contains('get').click()

    // expect command
    var Name='Ibraz';
    expect(Name).to.be.equal('Ibraz')

    //assert command
    assert.equal(43,43, "Wrong nigga")
})
