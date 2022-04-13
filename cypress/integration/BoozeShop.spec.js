describe("BoozeShop", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('should be able to enter a name', () => {
        cy.get('#name-input').type("Bob");
    })

    it('should be able to press enter', () => {
        cy.get('#name-enter').click();
    })

    it('should be able to add to basket', () => {
        cy.get('#name-input').type("Bob");
        cy.get('#name-enter').click();
        cy.get('#basket-button').click();
    })
})