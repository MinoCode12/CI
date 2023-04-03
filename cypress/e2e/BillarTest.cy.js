//const cyprees = require("cypress")

describe('Billar LogIn Test Correct UserName and Password', () => {
    it('test1',()=>{
        cy.visit("https://billarstaging.fidenz.com")
        // sleep for 3 seconds
        cy.wait(2000);

        //cy.get("#email").type("minoshbalasuriya12@gmail.com").click()
        //cy.get("#pass").type("Golden12@#").click()
        /*cy.get("[aria-label='Search']").type("Shanmu").click()
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

        */

        //cy.contains('div','Log in with Microsoft 365').click()
        //cy.visit("")
       // cy.wait(2000);

        cy.get("#app_login_username").type("fztester@outlook.com")
        cy.wait(2000);
        cy.get("#app_login_password").type("fztester@123")
        cy.wait(2000);
        cy.contains('div','Log in').click()

        //cy.get("[placeholder='Email, phone, or Skype']").type("fihradmin@32x8l2.onmicrosoft.com").click()
        //cy.get("#idSIButton9").click()
        //cy.wait(2000);

        //cy.get("#i0116").type("Bup72214").click()
        //cy.wait(2000);

    })
})

describe('Billar LogIn Test Correct UserName and incorrect Password', () => {
    it('test2',()=>{
        cy.visit("https://billarstaging.fidenz.com/")
        // sleep for 3 seconds
        cy.wait(2000);

        cy.get("#app_login_username").type("fztester@outlook.com")
        cy.wait(2000);
        cy.get("#app_login_password").type("1fztester@123")
        cy.wait(2000);
        cy.contains('div','Log in').click()

    })
})

describe('Billar LogIn Test IncorrectUserName and Correct Password', () => {
    it('test3',()=>{
        cy.visit("https://billarstaging.fidenz.com/")
        // sleep for 3 seconds
        cy.wait(2000);

        cy.get("#app_login_username").type("tester@outlook.com")
        cy.wait(2000);
        cy.get("#app_login_password").type("fztester@123")
        cy.wait(2000);
        cy.contains('div','Log in').click()

        
    })
})

describe('Billar LogIn Test Correct', () => {
    it('test4',()=>{
        cy.visit("https://billarstaging.fidenz.com/")
        // sleep for 3 seconds
        cy.wait(2000);

        cy.get("#app_login_username").type("fztesteroutlook.com")
        cy.wait(2000);
        cy.get("#app_login_password").type("fztester@123")
        cy.wait(2000);
        cy.contains('div','Log in').click()

    })
})

describe('Billar LogIn Test Without Password', () => {
    it('test5',()=>{
        cy.visit("https://billarstaging.fidenz.com/")
        // sleep for 3 seconds
        cy.wait(2000);

        cy.get("#app_login_username").type("fzteste@routlook.com")
        cy.wait(2000);
        cy.get("#app_login_password")
        cy.wait(2000);
        cy.contains('div','Log in').click()

    })
})

describe('Billar LogIn Test Without UserName', () => {
    it('test6',()=>{
        cy.visit("https://billarstaging.fidenz.com/")
        // sleep for 3 seconds
        cy.wait(2000);

        cy.get("#app_login_username")
        cy.wait(2000);
        cy.get("#app_login_password").type("fztester@123")
        cy.wait(2000);
        cy.contains('div','Log in').click()

    })
})

describe('Billar LogIn Test Without username and Password', () => {
    it('test7',()=>{
        cy.visit("https://billarstaging.fidenz.com/")
        // sleep for 3 seconds
        cy.wait(2000);

        cy.get("#app_login_username")
        cy.wait(2000);
        cy.get("#app_login_password")
        cy.wait(2000);
        cy.contains('div','Log in').click()

    })
})

describe('Billar Currency Select Test', () => {
    it('test8',()=>{
        cy.visit("https://billarstaging.fidenz.com/")
        // sleep for 3 seconds
        cy.wait(2000);

        cy.get("#app_login_username").type("fztester@outlook.com")
        cy.wait(2000);
        cy.get("#app_login_password").type("fztester@123")
        cy.wait(2000);
        cy.contains('div','Log in').click()
        cy.wait(5000);



        cy.get("[value='192']").click()
        cy.wait(5000);

        //cy.get("[class='ant-btn ant-dropdown-trigger']").click()
        cy.wait(2000);
    })
})
const user = "#app_login_username";


describe('Billar Currency Select Test and Title Check', () => {
    it('test9',()=>{
        cy.visit("https://billarstaging.fidenz.com/")
        // sleep for 3 seconds
        cy.wait(2000);

        cy.get(user).type("fztester@outlook.com")
        cy.wait(2000);
        cy.get("#app_login_password").type("fztester@123")
        cy.wait(2000);
        cy.contains('div','Log in').click()
        cy.wait(5000);



        cy.get("[value='192']").click()
        cy.wait(5000);

        //cy.get("[class='ant-btn ant-dropdown-trigger']").click()
        cy.wait(2000);

        cy.title().should('include', 'Fidenz Billar')
    })
})



describe('LogOut Check', () => {
    it('test10',()=>{
        cy.visit("https://billarstaging.fidenz.com/")
        // sleep for 3 seconds
        cy.wait(2000);

        cy.get(user).type("fztester@outlook.com")
        cy.wait(2000);
        cy.get("#app_login_password").type("fztester@123")
        cy.wait(2000);
        cy.contains('div','Log in').click()
        cy.wait(5000);



        cy.get("[value='192']").click()
        cy.wait(5000);

        //cy.get("[class='ant-btn ant-dropdown-trigger']").click()
        cy.wait(2000);

        cy.title().should('include', 'Fidenz Billarr')

        cy.get("[alt='userimage']").click()
        cy.wait(2000);

        cy.get("[aria-label='icon: logout']").click()
        cy.wait(2000);

        cy.wait(5000);
    })
})