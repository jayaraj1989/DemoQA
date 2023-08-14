//const cypress = require("cypress");
///<reference types="cypress" />




const element = '.card-body>h5'
const addNewRecord = '#addNewRecordButton'
const fName = 'input#firstName'
const lName = 'input#lastName'
const uName = 'input#userEmail'
const uAge = 'input#age'
const slry = 'input#salary'
const dptmnt = 'input#department'
const submit = 'button#submit'
const editData = '.rt-table>.rt-tbody .rt-tr>div:first-of-type'
const slryCol = '.rt-table>.rt-tbody .rt-tr>div:nth-of-type(3)'
const editPerson = '.rt-table>.rt-tbody .rt-tr>div:nth-of-type(7) .mr-2'
const frms = '.card:nth-of-type(2) div>div:nth-of-type(2)'
const practice = ':nth-child(2) > .element-list > .menu-list > #item-0 > .text'
const selectrow = '.rt-tbody>div>div>div:first-of-type'
let sze;



class Landingpage {



  getURL() {

    return cy.visit(Cypress.env('baseurl'))
  }

  goToElement() {

    cy.get(element).each(($el, index, $list) => {
      const txt = $el.text()

      if (txt.includes('Elements')) {
        cy.wrap($el).click({ force: true })
      }
    })
  }
  goToWebTable() {

    cy.get('#item-3').find('.text').each(($el, index, $list) => {
      const txt = $el.text()

      if (txt.includes('Web Tables')) {

        cy.wrap($el).click({ force: true })

      }



    })

  }
  addNewRow() {

    cy.get(addNewRecord).click({ force: true })
  }

  getFirstName(firstName) {
    const field = cy.get(fName)
    field.clear()
    field.type(firstName)


  }
  getLastName(lastName) {
    const field = cy.get(lName)
    field.clear()
    field.type(lastName)
    
  }
  getUserName(userName) {
    const field = cy.get(uName)
    field.clear()
    field.type(userName)
    
  }
  getAge(age) {

    const field = cy.get(uAge)
    field.clear()
    field.type(age)
  }
  getSubmitform() {
    cy.get(submit).click({ force: true })

}
  getSalary(Salary) {

    const field = cy.get(slry)
    field.clear()
    field.type(Salary)

    // cy.get(slry).type(Salary)
  }
  getDepartment(Department) {

    const field = cy.get(dptmnt)
    field.clear()
    field.type(Department)

    //cy.get(dptmnt).type(Department)
  }





  getPerson(firstName) {

    cy.get(selectrow).each(($el, index, $list) => {
      const txt = $el.text()
      if (txt.includes(firstName)) {
        cy.log(txt)

        cy.get(editPerson).eq(index).invoke('show').click({ force: true })

      }

    })
  }

  getForm() {

    cy.get(frms).click({ force: true })
  }
  getPracticeForm() {
    cy.get(practice).click({ force: true })

  }

  getRowlength() {

    let len = cy.get(editPerson).its('length').should('not.be.above', 3)

  }

  verifyRowAdded() {

    cy.get(editPerson).its('length').should('be.above', 3)
    cy.log('newrow is added')
  }
  verifyMemberDetail(expected) {
    cy.get(selectrow).each(($el, index) => {
      let list1 = []
      const txt = $el.text()
      if (txt.includes(expected[0])) {
        cy.get('.rt-table>.rt-tbody .rt-tr').eq(index).find('.rt-td').each(($el, index) => {

          list1.push($el.text())
        }).then(function (list2) {

          list2 = list1
          for (let i = 0; i < 6; i++) {
            expect(expected[i]).to.be.eql(list2[i])
          }

        })

      }

    })
    //let list1
  }
}
export default Landingpage

