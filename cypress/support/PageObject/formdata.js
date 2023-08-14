///<reference types="cypress" />


const uFirstname='#firstName'
const uLastName='#userForm>div div+div>input[id^="lastName"]'
const uEmail='#userEmail'
const gndr='input[value="Male"]'
const phnNum='#userNumber'
const dBirth='#dateOfBirthInput'
const subject='#subjectsContainer>div'
const hobbieCheck='input#hobbies-checkbox-2'
const crntAdd=' #currentAddress'
const stat='#state>div div+div input'
const cty='#city>div>div.css-1hwfws3'
const upload='#uploadPicture'
const submit='#submit '

class Formpage {

 getFirstName(FirstName){

    cy.get(uFirstname).type(FirstName)

 }
 
  
  getLastname(LastName){
    cy.get(uLastName).type(LastName)
  }
  getEmail(Email){
    cy.get(uEmail).type(Email)
  }
  getGender(Gender){

    cy.get(gndr).check({force:true})
  }
  getPhoneNum(PhoneNumber){ cy.get(phnNum).type(PhoneNumber)}
  getDbirth(DOB){ cy.get(dBirth).click().invoke('show')
  //cy.get('.react-datepicker__month-select').click()
  cy.get('.react-datepicker__month-select>option')
  .each(($el, index, $list) => {
    const txt = $el.text()

    if (txt.includes('Jan')) {

      cy.wrap($el).invoke('show').eq(index).click({force:true})//.click({force:true})//.click({ force: true })
      

    }


  })
  cy.get('.react-datepicker__year-select>option').invoke('show').eq(12).click({force:true})//.invoke('show').eq(12)//.click({force:true})

  cy.get('div[role="listbox"]>div').find('div').each(($el, index, $list) => {
    const txt = $el.text()

    let list2=[]
    list2.push($el.text())

    cy.log(list2)

    if (list2.includes('12')) {

      //const num=parseInt(txt)
      cy.wrap($el).contains('12').click({force:true})
      //cy.get('div[role="listbox"]>div').eq(index).find('div').contains('2').click({force:true})

      //counter ++;

    
      

    }


  })//('.css-11unzgr').children().should('have.length',1)


  
  
      //.each(($el, index, $list) => {
       // const date = $el.text()
       // if(date.includes('2000')){

       //  cy.wrap($el).select()


      //  }
      
     // })

}
  getSubject(Subject){ cy.get(subject).type(Subject)}
  getHobbie(){ cy.get(hobbieCheck).select()
    }
  getCurrentAdress(CurrentAddress){ cy.get(crntAdd).type(CurrentAddress)}
  getState(State){ cy.get(stat).click({force:true}).invoke('show')

  cy.get('.css-26l3qy-menu ').find('#react-select-3-option-0 ').each(($el, index, $list) => {
    const txt = $el.text()

    if (txt.includes('NCR')) {

      cy.wrap($el).click({ force: true })

    }


  })//('.css-11unzgr').children().should('have.length',1)
  

  
    
    }
  getCity(City){ cy.get(cty).click({force:true}).invoke('show')
  cy.get('.css-26l3qy-menu').find('[id^="react-select"]:visible').eq(0).each(($el, index, $list) => {
    const txt = $el.text()

    if (txt.includes('Delhi')) {

      cy.wrap($el).click({ force: true })

    }


  })
  }
  getUpload(){const image = 'bird.jpg';
  cy.get(upload).attachFile(image)}
  getSubmit(){ cy.get(submit).click({force:true})}
  
      

}
export default Formpage

