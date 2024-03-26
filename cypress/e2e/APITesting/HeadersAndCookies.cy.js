describe("API Testing", ()=>{

    let authToken=null;

    before("creating access toekrn",()=>{
        cy.request({
            method:"POST",
            url:"http://simple-books-api-glitch.me/api-clients/",
            headers:{
                'Content-Type':'application/json',
                    },
            body:{
                
                    clientName:"TUV",
                    clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
                }
        
        }).then((response)=>{
            authToken=reponse.body.accessToken;
        });
    });

    
    before("creating access toekrn",()=>{
        cy.request({
            method:"POST",
            url:"http://simple-books-api-glitch.me/api-clients/",
            headers:{
                'Content-Type':'application/json',
                'Authotization':'Bearer'+authToken
                    },
            body:{
                
                    BookId:"1",
                    customerName:"Zackky"
                }
        
        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true)
        });
    });

    it("Fetching all aorder",()=>{
        cy.request({
            method:"GET",
            url: "http://simple-books-api-glitch.me/orders/",
            headers:{
                'Content-Type':'application/json',
                'Authotization':'Bearer'+authToken
                },
            cookies:{
                'cookieName':'mycookie'
                }

        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).has.length(1)
        })
    })

})

