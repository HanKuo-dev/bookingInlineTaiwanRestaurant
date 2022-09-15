import '@testing-library/cypress/add-commands';
import 'cypress-iframe'

describe('inline reservation', () => {
  it('reservation', () => {
    let name = Cypress.env('name');
    let phone = Cypress.env('phone');
    let comment = Cypress.env('comment')
    let email = Cypress.env('email')
    let cardNumber = Cypress.env('cardNumber')
    let cardExpired = Cypress.env('cardExpired')
    let cardDigits = Cypress.env('cardDigits')

    // cy.visit('/') 
    cy.visit('https://inline.app/booking/-LqeM7KWdIEaHWXimlwv:inline-live-1/-LqeM7lsDy0lNerDGDfb')
    // different people
    // cy.get('#adult-picker').select('4', { force: true })
    // different table type
    cy.get('#table-picker').select('-LqilPG2SZMe7cmc_XwF', { force: true })
    // date choose
    cy.get('#date-picker').click({ force: true })
    /* 
      example: 
        a. first week Sunday -> cy.get('.jGvTvi > .dyoxun > :nth-child(1) > :nth-child(1) > [data-cy="bt-cal-day"]')
        b. third week wednesday -> cy.get('.jGvTvi > .dyoxun > :nth-child(3) > :nth-child(4) > [data-cy="bt-cal-day"]')
        c. fifth week Saturday -> cy.get('.jGvTvi > .dyoxun > :nth-child(5) > :nth-child(7) > [data-cy="bt-cal-day"]')
    */
    cy.get('.jGvTvi > .dyoxun > :nth-child(4) > :nth-child(1) > [data-cy="bt-cal-day"]').click({ force: true })
    cy.get('[data-cy="book-now-time-slot-box-12-30"]').click({ force: true })
    cy.get('[data-cy="book-now-action-button"]').click({ force: true })
    // cy.get('[data-cy="confirm-house-rule"] > .sc-kDTinF').click({ force: true })

    // booking contact information
    cy.get('#name').click({ force: true }).type(name)
    cy.get('#phone').click({ force: true }).type(phone)
    cy.get('#email').click({ force: true }).type(email)

    cy.get('.lgCAFx > label > .sc-kDTinF').click({ force: true })
    cy.get('[value="Date"]').click({ force: true })
    cy.get('.sc-hGPBjI').click({ force: true }).type(comment)

    // check agreement
    cy.get('.dgKEyG > .sc-egiyK').click({ force: true })
    cy.get('.kjGxzc > .sc-egiyK').click({ force: true })

    // credit card section
    cy.get('.itsbag > label > .sc-kDTinF').click({ force: true })
    cy.get('#card-number > iframe').its('0.contentDocument').its('body').then(cy.wrap).find('#card-number-form').click({ force: true }).type(cardNumber)
    cy.get('#card-expiry > iframe').its('0.contentDocument').its('body').then(cy.wrap).find('#expiration-date-form').click({ force: true }).type(cardExpired)
    cy.get('#card-security-code > iframe').its('0.contentDocument').its('body').then(cy.wrap).find('#ccv-form').click({ force: true }).type(cardDigits)
    
    // confirmation
    cy.get('[data-cy="submit"]').click({ force: true })
  })
})
