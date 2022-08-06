## Assertions
There are two kinds of assertions in cypress namely: Implicit and Explicit assertions

Implicit assertions are like built-in assertions and we do not have to actually use any assert or expect command. e.g should, and

Explicit assertions, They are not built-in commands. we have to use the assert () or expect () function to specify the assertion

## Pre conditions before using assertions
You must have gotten the element you want to apply assertion on via cy.get() or cy.contains(), then you can now proceed to apply your assertion

## should-contain assertion
Allows us to test if a page contains a particular element or text

e.g say a page has a button with label clickMe and we want to verify if such button exist on that page. Do the following

1.cy.visit the website
2. cy get the css/id of that button e.g assuming the css is 'ade'
3. Use this command to check / provide assertion: cy.get('ade').should('contain','clickMe')

Get the css of that element you are looking for and use the .should('contain','labelName')

## should-have assertion
This is used if we want to check if a particular element (say a button) on our site has some specific attributes such as class, id,name etc.
Same syntax with should-have. Assuming we want to check if a certain button has a class name 'ade'. We need to get the button first and then use the should-have assertion to check if it has a particular class Name
e.g  cy.get('.btn').should('have.class','btn') Note for the assertion method, we didnt use the . because what we need is the className, not that we are trying to access the class and the class name is btn

We can use have.class to see if an element has a certain class Name, have.id, have.text, have.html etc.

## Should-be assertion
This can be used to check the state of an element. It can be used to check if an element e.g a button is enabled, empty etc

cy.get('.btn').should('be.enabled'). There are many other should.be attributes that you can use. such as, be.focussed, be.selected, be.disabled etc.

## should-equal assertion
This is used to check if an attribute is equal to some particular value. We need to use the invoke () as shown below

cy.get('.btn') // extracting the element we wanna run assertion on
    .invoke ('attr', 'class') //stating that we wanna check the class of such element 
    .should('equal', 'btn')