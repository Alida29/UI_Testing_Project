
describe("Parsing JSON Response",()=>{

    it("Parsing simple JSON response",()=>{

        cy.request({
            method: "GET",
            url: "http://reqres.in/api/users",

        })
        .then((response)=>{
        expect(response.status).to.equal(200)  
        expect(response.body[2].id).to.equal(1)
        })  
    })

    it.only("Parsing complex JSON response",()=>{

        let totalid=0;
        cy.request({
            method: "GET",
            url: "http://reqres.in/api/users",
            qs:{limit:3}

        })
        .then((response)=>{
            expect(response.status).to.equal(200)  
            
            response.body.forEach(element => {
                
            });(element => {
                totalid=totalid+element.id
            
        });
            expect(totalid).to.equal(6)

        })  
    })
})


