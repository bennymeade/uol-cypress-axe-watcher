// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import "cypress-recurse/commands";
import "cypress-plugin-tab";
import { recurse } from "cypress-recurse";

Cypress.Commands.add("authVisit", (url) => {
  // Handle cookie banner
  cy.setCookie("OptanonAlertBoxClosed", "2030-09-25T20:01:58.682Z");
  cy.setCookie(
    "OptanonConsent",
    `isGpcEnabled=0&datestamp=Wed+Sep+25+2030+22%3A01%3A58+GMT%2B0200+(Central+European+Summer+Time)&version=202403.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=eb78f2df-e408-486b-8838-26c04eb5a37c&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0004%3A1`
  );
  cy.setCookie("nf_jwt", Cypress.env("JWT_TOKEN"), {
    domain: "qa-automation.unileveronline.com",
  });
  cy.visit(url, {
    failOnStatusCode: true,
    onBeforeLoad(win: Window) {
      // Delete the service worker
      const navigatorPrototype = Object.getPrototypeOf(win.navigator);
      delete navigatorPrototype.serviceWorker;
      Object.setPrototypeOf(win.navigator, navigatorPrototype);
    },
  });
});

Cypress.Commands.add("tabToElement", (element) => {
  cy.get("body").tab().focus();
  // Recurse until the goal element is focused
  return recurse(
    () => cy.focused(),
    ($el) => $el.text().includes(element),
    {
      limit: 50,
      delay: 250,
      timeout: 30000,
      log: true,
      post: () => cy.focused().tab(),
    }
  );
});
