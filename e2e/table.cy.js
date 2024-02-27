
describe('Handle Tables', (()=>{ 
    beforeEach('Login',()=>{ 

        cy.visit("https://demo.opencart.com/admin/index.php",{
            failOnStatusCode: false
        });
        

        cy.get("#input-username",{timeout: 10000 }).type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();
        
        //customers-->customers
        cy.get("#menu-customer>a").click();
        cy.get("#menu-customer>ul>li:first-child").click();

    })

    it('Check number of rows & columns',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7');

    })


    it('Check cell data from specific row & column',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(3)")
        .contains("gorankrezic90@gmail.com");
    })

    it('Read all the rows and columns in the first page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get("td").each(($column, index, $columns)=>{
                        cy.log($column.text());
                    })

                })
            })
        
    })

    it('Pagination',()=>{
        //find total number of pages
        let totalPages
        cy.get(".col-sm-6.text-end").then((e)=>{
            let mytext=e.text(); //Showing 1 to 10 of 18182 (1819 Pages)
            totalPages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1 )
            cy.log("Total number of pages in a table====>"+totalPages);

        })
        
        let TotalPages=5;
        for(let p=1;p<=totalPages;p++) 
        {
            if(TotalPages>1)
            {
                cy.log("Active page is ==="+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000)

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text()); //email


                        })
                    

                    })

                })



            }
        }      

    })

}))

