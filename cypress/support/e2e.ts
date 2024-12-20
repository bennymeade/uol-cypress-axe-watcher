// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@axe-core/watcher/dist/cypressCommands';

Cypress.on('uncaught:exception', () => false);

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      authVisit(arg1: string): Chainable<JQuery<HTMLElement>>
      tabToElement(arg1: string): Chainable<JQuery<HTMLElement>>
    }
  }
}

afterEach(() => { 
  cy.axeWatcherFlush(); 
});