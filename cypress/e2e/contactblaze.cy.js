/// <reference types="cypress" />


describe ('Add New Contact', function () {

    it('Visit URL Demo Blaze', function() {
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('Add New Contact', function () {
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('#recipient-email').type("nawwarahyusof226@gmail.com").click()
        cy.get('#recipient-name').type("Nawwarah").click()
        cy.get('#message-text').type("Hello, I am Done").click()

        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()



    })




})