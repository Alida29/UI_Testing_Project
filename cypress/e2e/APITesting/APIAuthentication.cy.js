
describe("Authentication",()=>{

    it("Basic Authentication",()=>{

        cy.request(
            {
            method:"GET",
            url: "https://postman-echo.com/basic-auth",
            auth:{
                user:"postman",
                pass:"password"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).equal(true)
        })

    })
    it("Digest Authentication",()=>{

        cy.request(
            {
            method:"GET",
            url: "https://postman-echo.com/basic-auth",
            auth:{
                username:"postman",
                password:"password",
                method:"digest"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).equal(true)
        })

    })

    const token = "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"
    it("Bearer Token Auth",()=>{
        cy.request(
            {
            method:"GET",
            url: "https://api.github.com/users/repos",
            headers:{
                Authorization:"Bearer" +token
                 }
            })
            .then((response)=>{
                expect(response.status).to.eq(200) 
            })

    })

    it("API Key Auth",()=>{
        cy.request(
            {
            method:"GET",
            url: "api.openweathermap.org/data/2.5/forecast/daily",
            qs:{
                q:"Delhi",
                appid:"99b9d6d28198c435c9ee795c0d98c82a ", //API key and value
            }
           
            })
            .then((response)=>{
                expect(response.status).to.eq(200) 
            })

    })
})