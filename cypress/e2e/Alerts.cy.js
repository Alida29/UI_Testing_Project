
describe('Alerts', ()=>{ 

    //1. Javascript Alert: it will have some text and an 'OK' button
    
    it('Js alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();
        
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
        
        //Alert window closed automatically close alert window

        cy.get('#result').should('have.text','You successfully clicked an alert')

})

//2. Javascript Confirm Alert: it will have some text with an 'OK' and 'Cancel' buttons

    it('Js confirm - OK',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        //Alert window closed automatically close alert window using OK button
        
        cy.get('#result').should('have.text','You clicked: Ok')
    })    

    it('Js confirm - Cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
    
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
            
        cy.on('window:confirm',()=> false); //cypress closes alert window using cancel buttton
    
        cy.get('#result').should('have.text','You clicked: Cancel')

        })    
            
    it('Js confirm - Cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
        
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
                
        cy.on('window:confirm',()=> false); //cypress closes alert window using cancel buttton
        
        cy.get('#result').should('have.text','You clicked: Cancel')

    })    

    //3. Javascript Prompt Alert: it will have some text with a text bix for user input and  'OK' button

    it('Js prompt alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        cy.get('#result').should('have.text','You entered: welcome')

                
        //cy.on('window:prompt',()=> false); //cypress closes alert window using cancel buttton
        
        cy.get('#result').should('have.text','You entered: welcome')

    })    

    //4. Authenticated alert

    it.only('Authenticated alert',()=>{

        //approach1
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: 
                                                                    {
                                                                     username: "admin", 
                                                                     password: "admin"
                                                                    }
    
                                                                }   );
        cy.get("div[class='example'] p").should('have.contain',"Congratulations");
        */                                                      
        //Approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain',"Congratulations");
   
    })

   
})

