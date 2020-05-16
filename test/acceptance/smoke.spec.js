/// <reference types="Cypress" />

const HOMEPAGE_TEXT = 'Edit';

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000').contains(HOMEPAGE_TEXT);
  })
})