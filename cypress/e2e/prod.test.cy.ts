describe("Prod site", () => {
  it("Attempt to reproduce error with click", () => {
    cy.authVisit("https://www.unilever.com/sustainability/climate/");
    cy.contains("[data-testid='uol-c-signpost-cta']", "COP29: five ways business and government can collaborate on climate").click();
    cy.url().should("include", "unilever.com/");
  });

  it("Attempt to reproduce error with Keyboard tabbing", () => {
    cy.authVisit("https://www.unilever.com/investors/");
    cy.tabToElement("View details");
    cy.focused().click();
    cy.url().should("include", "unilever.com/");
  });
});
