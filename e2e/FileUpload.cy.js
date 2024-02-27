import 'cypress-file-upload'
import 'cypress-iframe'


describe("File Uploads",()=>{ 

    it('Upload a single file',()=>{

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile('test1.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');

    });

    it('Upload file and rename',()=>{

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath:'test1.pdf',fileName:'NewName1.pdf'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');

    });


    it('File upload - drag and drop',()=>{

         cy.visit("https://the-internet.herokuapp.com/upload");
         cy.get("#drag-drop-upload").attachFile('test1.pdf',{subjectType:'drag-n-drop'});
         cy.wait(5000);
         cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test1.pdf')
         

    });

    it('Multiple files upload',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(["test1.pdf","test2.pdf"]);
        cy.wait(5000);
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
        

    });

    it.only('File upload-shadow Dom',()=>{
        
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/")
        cy.frameLoaded(".demo-frame");
        cy.iframe(".demo-frame").find(".smart-browse-input",{includeShadowDom:true}).attachFile("test1.pdf");
        cy.wait(3000);

        cy.iframe(".demo-frame").find(".smart-file",{includeShadowDom:true}).contains('test1.pdf') 

    });

    
}) 


