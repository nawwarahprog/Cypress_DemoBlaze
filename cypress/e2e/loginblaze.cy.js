/// <reference types="cypress" />

describe ('Sign up Demo Blaze', function () {

    it('Visit URL Demo Blaze', function() {
        cy.visit('https://www.demoblaze.com/index.html')
    })

    //it('Sign Up Demo Blaze', function () {
        //cy.get('#signin2').click()
        //cy.get('#sign-username').type('saiful')
        //cy.get('#sign-password').type('saiful123')

        //cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    //})

    it('Login Demo Blaze', function () {
        cy.get('#login2').click()
        cy.get('#loginusername').type('nawa123').click()
        cy.get('#loginpassword').type('nawa123').click()

        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    })


    
})
    