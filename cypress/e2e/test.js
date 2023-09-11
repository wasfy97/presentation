///<reference types= "cypress" />

describe('This tests to check the website', () => {
    it('first check: Make sure the default currency is SAR', () => {
        cy.visit("https://global.almosafer.com/ar")
        cy.get('.cta__saudi').click()
        cy.get('[data-testid="Header__CurrencySelector"]').should('contain', 'SAR')
        
    });
    it('Second check: make sure that the default langauge is Arabic ', () => {
        cy.visit("https://global.almosafer.com/ar")
        cy.get('.cta__saudi').click()
        cy.get('[data-testid="Header__LanguageSwitch"]').should("not.contain","العربية")
        
    });
    
    it('Third check: make sure that the flight tab is clicked by default ', () => {
        cy.visit("https://global.almosafer.com/ar")
        cy.get('.cta__saudi').click()
        cy.get('#uncontrolled-tab-example-tab-flights').should("have.class","active")

        
    });
});