
import APIContracts from "../support/apiContracts/APIContracts";



describe('DemoQA API', function () {
  let data;
  let loc;

  if(Cypress.env('environment')=='TEST1'){

  loc='Test/LibraryAPI.json'

}else{

  loc='preprod/LibraryAPI.json'
}

 
  
  before(function () {
    
   cy.fixture(loc).then(function (fdata) {
   data = fdata;
 })

  })

 it('create user -verify user exist', function () {

  let Lib=new APIContracts()
  Lib.verifyExistingUser(data.TC1.option)
 

});


it('create  new user ', function () {

  let Lib=new APIContracts()
  Lib.createNewUser(data.TC2.option)


});

it('Add book to store ', function () {

  const Lib=new APIContracts()
  cy.LoginAPI(data.TC3.option)
  cy.AuthorizeUser(data.TC3.option)
  Lib.addBook(data.TC3.option)
  
});

it('Add book to store -verify ISBN', function () {

  const Lib=new APIContracts()
  cy.LoginAPI(data.TC3.option)
  cy.AuthorizeUser(data.TC3.option)
  Lib.verifyISBN(data.TC6.option)
  
});

       it('Delete book from store ', function () {
        const Lib=new APIContracts()
        cy.LoginAPI(data.TC4.option)
        Lib.deleteBook(data.TC4.option)
       


})


it('Delete book from store-Verify collection not exist', function () {
    

  const Lib=new APIContracts()
  cy.LoginAPI(data.TC5.option)
  Lib.deleteBook(data.TC5.option)



})

});













        









    

