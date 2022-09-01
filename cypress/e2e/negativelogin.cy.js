/// <reference types="cypress" />

describe ('Login Demo Blaze', function () {

    it('Visit URL Demo Blaze', function() {
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('Negative Login Demo Blaze', function () {
        cy.get('#login2').click()
        cy.get('#loginusername').type('nawa3').click()
        cy.get('#loginpassword').type('nawa1').click()

        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    })


    
})
    