describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="search-input-native"]').clear('ke');
    cy.get('[data-test="search-input-native"]').type('kete');
    cy.get('[data-test="join-us-button"]').click();
    cy.get('[data-test="signin-or-signup-email-input"]').type('kgirma262@gmail.com');
    cy.get('[data-test="signin-or-signup-email-input"]').click();
    cy.get('[data-test="signin-or-signup-email-input"]').click();
    cy.get('[data-test="signin-or-signup-email-input"]').clear('kgirma262@gmail.com');
    cy.get('[data-test="signin-or-signup-email-input"]').type('kgirma262@gmail.com');
    cy.get('.px-6 > [data-test="join-us-button"]').click();
    cy.get('#name').clear('Ketema');
    cy.get('#name').type('Ketema');
    cy.get('#email').clear('kgirma262@gmail.com');
    cy.get('#email').type('kgirma262@gmail.com');
    cy.get('#password').clear('kgirma262@gmail.com');
    cy.get('#password').type('kgirma262@gmail.com');
    cy.get('#confirmPassword').clear('kgirma262@gmail.com');
    cy.get('#confirmPassword').type('kgirma262@gmail.com');
    cy.get('[data-test="submit-user-register-button"]').click();
    cy.get('#password').clear('kgirma262@gmail.comK');
    cy.get('#password').type('kgirma262@gmail.comK');
    cy.get('#confirmPassword').clear('kgirma262@gmail.comK');
    cy.get('#confirmPassword').type('kgirma262@gmail.comK');
    cy.get('[data-test="submit-user-register-button"]').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('e2e_test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('[data-test="join-us-button"]').click();
    cy.get('[data-test="signin-or-signup-email-input"]').clear('kgirma262@gmail.com');
    cy.get('[data-test="signin-or-signup-email-input"]').type('kgirma262@gmail.com');
    cy.get('.px-6 > [data-test="join-us-button"]').click();
    cy.get('#name').clear('Ketema');
    cy.get('#name').type('Ketema');
    cy.get('#email').clear('kgirma262@gmail.com');
    cy.get('#email').type('kgirma262@gmail.com');
    cy.get('#email').click();
    cy.get('#email').click();
    cy.get('#email').clear('kgirma262@gmail.com');
    cy.get('#email').type('kgirma262@gmail.com');
    cy.get('#password').clear('kgirma262@gmail.com');
    cy.get('#password').type('kgirma262@gmail.comK');
    cy.get('#confirmPassword').clear('kgirma262@gmail.com');
    cy.get('#confirmPassword').type('kgirma262@gmail.comK');
    cy.get('[data-test="submit-user-register-button"]').click();
    /* ==== End Cypress Studio ==== */
  });
})