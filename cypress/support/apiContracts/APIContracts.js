///<reference types="cypress" />




class APIContracts {
  
 verifyExistingUser(option){

   let user= {
        method:'POST',
        url:Cypress.env('baseurl')+'Account/v1/User',
        body:{userName:'',
        password:''},
        failOnStatusCode:false}
        user.body.userName=option[0]
        user.body.password=option[1]
        var code=parseInt(option[2])

    cy.request(user).then(function(response){

        expect(response.status).to.eq(code)
        expect(response.body.message).to.eql(option[3])
        
    })
   }
    
   createNewUser(option){

    let user= {
        method:'POST',
        url:Cypress.env('baseurl')+'Account/v1/User',
        body:{userName:'',
        password:''}
        }
        user.body.userName=`${Date.now()}@aharotest.com`
        user.body.password=option[1]
        var code=parseInt(option[2])
        cy.request(user).then(function(response){

        expect(response.status).to.eq(code)
        expect(response.body).to.have.property('userID')
        cy.log(response.body.username)
        const Id=response.body.userID
        const userName=response.body.username
        cy.log(Id)

        cy.writeFile('cypress/fixtures/demo.json', { userID: Id, username:userName  } )
        
    })



   } 

   addBook(option){
    

    const user={
        method:'POST',
        url:Cypress.env('baseurl')+'BookStore/v1/Books',
        body:{userId:'',
              collectionOfIsbns:[
                {
              "isbn": ""
                }
                                ]},
            headers:{ Authorization:''}
        }
        
        user.body.userId=option[4]
        user.body.collectionOfIsbns[0].isbn=option[5]
        cy.readFile('cypress/fixtures/token.txt').then(function(bearer){
        let token=bearer
        cy.log(token)
        user.headers.Authorization='Bearer ' + token

        })
       
        
        
        cy.request(user).then(function(response){
    
     //xpect(response.status).to.eq(406)
     //Cypress.env('token',response.body.token);
     cy.log(response.body)
     expect(response.status).to.eq(201)
     
    })

   }

   verifyISBN(option){
    

    const user={
        method:'POST',
        url:Cypress.env('baseurl')+'BookStore/v1/Books',
        body:{userId:'',
              collectionOfIsbns:[
                {
              "isbn": ""
                }
                                ]},
            headers:{ Authorization:''},
            failOnStatusCode:false
        }
        
        user.body.userId=option[4]
        user.body.collectionOfIsbns[0].isbn=option[5]
        cy.readFile('cypress/fixtures/token.txt').then(function(bearer){
        let token=bearer
        cy.log(token)
        user.headers.Authorization='Bearer ' + token

        })
       
        
        var code=parseInt(option[2])
        cy.request(user).then(function(response){
    
     //xpect(response.status).to.eq(406)
     //Cypress.env('token',response.body.token);
     cy.log(response.body)
     expect(response.status).to.eq(code)
     expect(response.body.message).to.eq(option[7])
     
    })

   }

   deleteBook(option){
let user={method:'DELETE',
          url:Cypress.env('baseurl')+'BookStore/v1/Book',
          body:{
               "isbn": "",
               "userId": ""},
               headers:{ Authorization:''},
               failOnStatusCode:true
}

        user.body.userId=option[4]
        user.body.isbn=option[5]
        var code=parseInt(option[2])
        var bol=Boolean(option[6])
        user.failOnStatusCode=bol
        cy.readFile('cypress/fixtures/token.txt').then(function(bearer){
        let token=bearer
        cy.log(token)
        user.headers.Authorization='Bearer ' + token

        })


    cy.request(user).then(function(response){

      cy.log(response.body)
      expect(response.status).to.eq(code)
     // expect(response.body.message).to.eq(option[7])

    })


   }
   
}


export default APIContracts

