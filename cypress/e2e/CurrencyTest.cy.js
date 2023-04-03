//const cyprees = require("cypress")

describe('Billar LogIn Test Correct UserName and Password', () => {
    it('test1',()=>{
        cy.visit("https://billarstaging.fidenz.com")
        // sleep for 3 seconds
        cy.wait(2000);

        

        cy.get("#app_login_username").type("fztester@outlook.com")
        cy.wait(2000);
        cy.get("#app_login_password").type("fztester@123")
        cy.wait(2000);
        cy.contains('div','Log in').click()
        cy.wait(2000);

        cy.get("[value='192']").click()
        cy.wait(5000);

        //cy.title().should('include', 'Fidenz Billar')

        cy.get("[class='anticon anticon-menu sidebar-toggler']").click()
        
        cy.wait(5000);

        cy.get("[aria-label='icon: database']").click()
        cy.wait(2000);
        cy.contains('div', 'Currency').click()
        cy.wait(2000);
        cy.get("[class='ant-btn ant-btn-primary ant-btn-lg']").click()
        cy.wait(2000);
        cy.get("[data-icon='close']").click()
        cy.wait(2000);

        cy.get("#currency-form_currencyCode").type("LKN")
        cy.wait(2000);
        cy.get("#currency-form_currencyName").type("LankanN")
        cy.wait(2000);

        cy.get("[class='ant-btn currency-form-button button-right ant-btn-primary ant-btn-lg']").click()
        cy.wait(5000);

        cy.get("[class='ant-btn ant-btn-primary']").click()
        cy.wait(5000);
    })
})