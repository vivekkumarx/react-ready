/// <reference types='Cypress' />

const url = Cypress.env('APP_URL');

describe('basic test', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('should check for navbar items', () => {
    cy.get("[data-test-id='nav-list']")
      .should('be.visible')
      .children()
      .should('have.length', 3);
    cy.get("[data-test-id='nav-home']").should('have.text', 'Home');
    cy.get("[data-test-id='nav-profile']").should('have.text', 'Profile');
    cy.get("[data-test-id='nav-users']").should('have.text', 'Users');
  });

  it('should check basic navigation', () => {
    cy.get("[data-test-id='nav-home']").click();
    cy.url().should('include', '/');

    cy.get("[data-test-id='nav-profile']").click();
    cy.url().should('include', '/profile');

    cy.get("[data-test-id='nav-users']").click();
    cy.url().should('include', '/users');
  });

  it('should check profile cards', () => {
    cy.visit(url + '/profile');
    cy.get("[data-test-id='profile-card']").should('be.visible');
  });
});
