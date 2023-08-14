// ***********************************************
import 'cypress-file-upload'
require("@4tw/cypress-drag-drop");

Cypress.Commands.add("LoginAPI",(option)=>{
let user= {
  method:'POST',
  url:'https://demoqa.com/Account/v1/GenerateToken',
  body:{userName:'',
  password:''}
 }

       user.body.userName=option[0]
        user.body.password=option[1]
        //var code=parseInt(option[2])
cy.request(user).then(function(response){

    expect(response.status).to.eq(200)
    Cypress.env('token',response.body.token);
   // cy.log(response.body.token)
   const token=response.body.token
   cy.log(token)

   cy.writeFile('cypress/fixtures/token.txt',token )

   // return response.body.token
})

})

Cypress.Commands.add("AuthorizeUser",(option)=>{

  let user= {
    method:'POST',
    url:'https://demoqa.com/Account/v1/Authorized',
    body:{userName:'',
    password:''}
   }
  
   user.body.userName=option[0]
          user.body.password=option[1]

  cy.request(user).then(function(response){
  
      expect(response.status).to.eq(200)
      
  })
  
  })


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })