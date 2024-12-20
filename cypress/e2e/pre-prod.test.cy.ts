describe("Preprod site", () => {
  it("Reproduce error with click", () => {
    cy.authVisit(
      "https://qa-automation.unileveronline.com/test-components/feature-video-landing/"
    );
    cy.contains("[data-testid='uol-c-button']", "CTA text").click();
    cy.url().should("include", "/testland/");
  });

  it("Reproduce error with Keyboard tabbing", () => {
    cy.authVisit(
      "https://qa-automation.unileveronline.com/test-components/feature-video-landing/"
    );
    cy.tabToElement("CTA text");
    cy.focused().click();
    cy.url().should("include", "/testland/");
  });
});
