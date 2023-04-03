//const cyprees = require("cypress")

describe('FB Reg Test', () => {
    it('test1',()=>{
        cy.visit("https://selfed-frontend-v0.onrender.com/")
        // sleep for 3 seconds
        cy.wait(2000);

        //cy.get("#email").type("minoshbalasuriya12@gmail.com").click()
        //cy.get("#pass").type("Golden12@#").click()
       cy.get("[aria-label='Search']").type("Shanmu").click()
        cy.wait(2000);
        cy.get("[class='btn btn-primary btn-sm Ask-question-btn']").click()
        cy.wait(2000);
        cy.get("[placeholder='Enter Username']").type("ShanmuNew").click()
        cy.wait(2000);
        cy.get("[placeholder='Enter password']").type("1234").click()
        cy.wait(2000);
        cy.get("[class='btn btn-primary mb-2 mt-4 px-4']").click()
        cy.wait(5000);

        cy.get("[href='/categories']").click()



    })
})


