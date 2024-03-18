import Login from "../PageObjects/LoginPage2";

describe('pom', () => {

  //using POM
    it("LoginTest", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln=new Login();
        ln.setUserName("Admin");
        ln.setPassword("Admin123");
        ln.clickSubmit();
        ln.verifyLogin();
            
     })

     //using POM with fixture
    it.only("LoginTest", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm').then((data)=>{
            const ln=new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
        })

        
            
     })


 })
