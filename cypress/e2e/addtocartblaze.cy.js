/// <reference types="cypress" />

describe ('Add to cart', function () {

    it('Visit URL Demo Blaze', function() {
        cy.visit('https://www.demoblaze.com/index.html')
    })

    
    it('Add to cart', function () {

        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()

        cy.get('.active > .nav-link').click()

        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()

        cy.get('#cartur').click()
        



    })




})