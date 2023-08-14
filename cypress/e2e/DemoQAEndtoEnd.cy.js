///<reference types="cypress" />

import Landingpage from '../support/PageObject/Landingpage.js'
import Formpage from '../support/PageObject/formdata.js'
import DragAndDrop from '../support/PageObject/DragAndDrop.js'

describe('DemoQA EndtoEnd', function () {
let data;
  before(function () {


    cy.fixture('form').then(function (fdata) {

      data = fdata;

    })

  })


  it('Verify user can enter new data into the table', function () {

    /*creating objects from page objects*/
    const login = new Landingpage()
    login.getURL()
    login.goToElement()
    login.goToWebTable()
    login.getRowlength()
    login.addNewRow()
    login.getFirstName(data.TC1.FirstName)

    login.getLastName(data.TC1.LastName)
    login.getUserName(data.TC1.Email)
    login.getAge(data.TC1.Age)
    login.getSalary(data.TC1.Salary)
    login.getDepartment(data.TC1.Department)
    login.getSubmitform()
    cy.wait(2000)
    login.verifyRowAdded()
    login.verifyMemberDetail(data.TC1.expectedData)

  });


  it('Verify user can edit the row in a table', function () {


    const login = new Landingpage()
    login.getURL()
    login.goToElement()
    login.goToWebTable()
    login.getPerson(data.TC2.FirstName);
    login.getFirstName(data.TC2.EditFirstName)
    login.getLastName(data.TC2.EditLastName)
    login.getSubmitform()
    login.verifyMemberDetail(data.TC2.expectedData)
  })
  it('verify broken image', function () {


    const login = new Landingpage()
    login.getURL()
    login.goToElement()

    cy.scrollTo('bottom')
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-6 > .text').click({ force: true })

    cy.get('[src="/images/Toolsqa_1.jpg"]').should('not.be.visible')

  })

  it('Verify user can submit the form.', function () {
    const login = new Landingpage()
    login.getURL()
    login.getForm()

    login.getPracticeForm()

    const form = new Formpage()
    form.getFirstName(data.TC3.FirstName)
    form.getLastname(data.TC3.LastName)
    form.getEmail(data.TC3.Email)
    // form.getDbirth(this.data.TC3.DOB)
    form.getGender(data.TC3.Gender)
    form.getPhoneNum(data.TC3.PhoneNumber)
    
    form.getDbirth()
    //form.getSubject(this.data.TC3.Subject)
    //form.getHobbie()

    cy.pause()
    form.getCurrentAdress(data.TC3.CurrentAddress)
    form.getUpload()
    form.getState(data.TC3.State)
    form.getCity(data.TC3.City)

    form.getSubmit()

  })

  it('verify progressbar', function () {
    const login = new Landingpage()
    login.getURL()
    cy.get('.card:nth-of-type(4)>div>div+div.avatar').click({ force: true })
    cy.get('#item-4 span').invoke('show').each(($el, index, $list) => {
      const txt = $el.text()
      if (txt.includes('Progress')) {
        cy.wrap($el).click({ force: true })
      }
    })
    cy.get('#startStopButton').click()
    cy.wait(11000)
    cy.get('#progressBar>div').then(function (elmnt) {
      const el = elmnt.text()
      cy.log(el)
      expect(el,).to.contain('100')

    })
  })

  it('Verify user can drag and drop', function () {


    const login = new Landingpage()
    login.getURL()


    const drg = new DragAndDrop
    drg.getInteraction()
    drg.getDragables()
    drg.moveToDropbox()
  })
  it('Verify tool tip', function () {


    const login = new Landingpage()
    login.getURL()
    cy.get('.card:nth-of-type(4)>div>div+div.avatar').click({ force: true })
    cy.get('.accordion>div:nth-of-type(4) span div .icon').click({ force: true })
    cy.scrollTo(0, 500)
    cy.get('#item-6 span').invoke('show').each(($el, index, $list) => {
      const txt = $el.text()

      if (txt.includes('Tool')) {
        cy.wrap($el).click({ force: true })

      }
})

cy.get('#toolTipButton').trigger('mouseover');
cy.get('.tooltip-inner').then(function (elmnt) {

      const el = elmnt.text()
      cy.log(el)
      expect(el).to.contain('You hovered over the Button')


    })
  })
})