/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./cypress/e2e/spec.cy.js ***!
  \********************************/


describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
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
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('e2e_test', function () {
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
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDQyxLQUFLLENBQUMscUJBQXFCLENBQUM7SUFDdkRILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN2REosRUFBRSxDQUFDRSxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDM0Q7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL251eHQtYXBwLy4vY3lwcmVzcy9lMmUvc3BlYy5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgndGVtcGxhdGUgc3BlYycsICgpID0+IHtcbiAgaXQoJ3Bhc3NlcycsICgpID0+IHtcbiAgICBjeS52aXNpdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwJylcbiAgICAvKiA9PT09IEdlbmVyYXRlZCB3aXRoIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJzZWFyY2gtaW5wdXQtbmF0aXZlXCJdJykuY2xlYXIoJ2tlJyk7XG4gICAgY3kuZ2V0KCdbZGF0YS10ZXN0PVwic2VhcmNoLWlucHV0LW5hdGl2ZVwiXScpLnR5cGUoJ2tldGUnKTtcbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJqb2luLXVzLWJ1dHRvblwiXScpLmNsaWNrKCk7XG4gICAgY3kuZ2V0KCdbZGF0YS10ZXN0PVwic2lnbmluLW9yLXNpZ251cC1lbWFpbC1pbnB1dFwiXScpLnR5cGUoJ2tnaXJtYTI2MkBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJzaWduaW4tb3Itc2lnbnVwLWVtYWlsLWlucHV0XCJdJykuY2xpY2soKTtcbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJzaWduaW4tb3Itc2lnbnVwLWVtYWlsLWlucHV0XCJdJykuY2xpY2soKTtcbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJzaWduaW4tb3Itc2lnbnVwLWVtYWlsLWlucHV0XCJdJykuY2xlYXIoJ2tnaXJtYTI2MkBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJzaWduaW4tb3Itc2lnbnVwLWVtYWlsLWlucHV0XCJdJykudHlwZSgna2dpcm1hMjYyQGdtYWlsLmNvbScpO1xuICAgIGN5LmdldCgnLnB4LTYgPiBbZGF0YS10ZXN0PVwiam9pbi11cy1idXR0b25cIl0nKS5jbGljaygpO1xuICAgIGN5LmdldCgnI25hbWUnKS5jbGVhcignS2V0ZW1hJyk7XG4gICAgY3kuZ2V0KCcjbmFtZScpLnR5cGUoJ0tldGVtYScpO1xuICAgIGN5LmdldCgnI2VtYWlsJykuY2xlYXIoJ2tnaXJtYTI2MkBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJyNlbWFpbCcpLnR5cGUoJ2tnaXJtYTI2MkBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJyNwYXNzd29yZCcpLmNsZWFyKCdrZ2lybWEyNjJAZ21haWwuY29tJyk7XG4gICAgY3kuZ2V0KCcjcGFzc3dvcmQnKS50eXBlKCdrZ2lybWEyNjJAZ21haWwuY29tJyk7XG4gICAgY3kuZ2V0KCcjY29uZmlybVBhc3N3b3JkJykuY2xlYXIoJ2tnaXJtYTI2MkBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJyNjb25maXJtUGFzc3dvcmQnKS50eXBlKCdrZ2lybWEyNjJAZ21haWwuY29tJyk7XG4gICAgY3kuZ2V0KCdbZGF0YS10ZXN0PVwic3VibWl0LXVzZXItcmVnaXN0ZXItYnV0dG9uXCJdJykuY2xpY2soKTtcbiAgICBjeS5nZXQoJyNwYXNzd29yZCcpLmNsZWFyKCdrZ2lybWEyNjJAZ21haWwuY29tSycpO1xuICAgIGN5LmdldCgnI3Bhc3N3b3JkJykudHlwZSgna2dpcm1hMjYyQGdtYWlsLmNvbUsnKTtcbiAgICBjeS5nZXQoJyNjb25maXJtUGFzc3dvcmQnKS5jbGVhcigna2dpcm1hMjYyQGdtYWlsLmNvbUsnKTtcbiAgICBjeS5nZXQoJyNjb25maXJtUGFzc3dvcmQnKS50eXBlKCdrZ2lybWEyNjJAZ21haWwuY29tSycpO1xuICAgIGN5LmdldCgnW2RhdGEtdGVzdD1cInN1Ym1pdC11c2VyLXJlZ2lzdGVyLWJ1dHRvblwiXScpLmNsaWNrKCk7XG4gICAgLyogPT09PSBFbmQgQ3lwcmVzcyBTdHVkaW8gPT09PSAqL1xuICB9KVxuXG4gIC8qID09PT0gVGVzdCBDcmVhdGVkIHdpdGggQ3lwcmVzcyBTdHVkaW8gPT09PSAqL1xuICBpdCgnZTJlX3Rlc3QnLCBmdW5jdGlvbigpIHtcbiAgICAvKiA9PT09IEdlbmVyYXRlZCB3aXRoIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbiAgICBjeS52aXNpdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwLycpO1xuICAgIGN5LmdldCgnW2RhdGEtdGVzdD1cImpvaW4tdXMtYnV0dG9uXCJdJykuY2xpY2soKTtcbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJzaWduaW4tb3Itc2lnbnVwLWVtYWlsLWlucHV0XCJdJykuY2xlYXIoJ2tnaXJtYTI2MkBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJzaWduaW4tb3Itc2lnbnVwLWVtYWlsLWlucHV0XCJdJykudHlwZSgna2dpcm1hMjYyQGdtYWlsLmNvbScpO1xuICAgIGN5LmdldCgnLnB4LTYgPiBbZGF0YS10ZXN0PVwiam9pbi11cy1idXR0b25cIl0nKS5jbGljaygpO1xuICAgIGN5LmdldCgnI25hbWUnKS5jbGVhcignS2V0ZW1hJyk7XG4gICAgY3kuZ2V0KCcjbmFtZScpLnR5cGUoJ0tldGVtYScpO1xuICAgIGN5LmdldCgnI2VtYWlsJykuY2xlYXIoJ2tnaXJtYTI2MkBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJyNlbWFpbCcpLnR5cGUoJ2tnaXJtYTI2MkBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJyNlbWFpbCcpLmNsaWNrKCk7XG4gICAgY3kuZ2V0KCcjZW1haWwnKS5jbGljaygpO1xuICAgIGN5LmdldCgnI2VtYWlsJykuY2xlYXIoJ2tnaXJtYTI2MkBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJyNlbWFpbCcpLnR5cGUoJ2tnaXJtYTI2MkBnbWFpbC5jb20nKTtcbiAgICBjeS5nZXQoJyNwYXNzd29yZCcpLmNsZWFyKCdrZ2lybWEyNjJAZ21haWwuY29tJyk7XG4gICAgY3kuZ2V0KCcjcGFzc3dvcmQnKS50eXBlKCdrZ2lybWEyNjJAZ21haWwuY29tSycpO1xuICAgIGN5LmdldCgnI2NvbmZpcm1QYXNzd29yZCcpLmNsZWFyKCdrZ2lybWEyNjJAZ21haWwuY29tJyk7XG4gICAgY3kuZ2V0KCcjY29uZmlybVBhc3N3b3JkJykudHlwZSgna2dpcm1hMjYyQGdtYWlsLmNvbUsnKTtcbiAgICBjeS5nZXQoJ1tkYXRhLXRlc3Q9XCJzdWJtaXQtdXNlci1yZWdpc3Rlci1idXR0b25cIl0nKS5jbGljaygpO1xuICAgIC8qID09PT0gRW5kIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbiAgfSk7XG59KSJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsImdldCIsImNsZWFyIiwidHlwZSIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==