///<reference types="cypress" />


const intrctn='.card:nth-of-type(5)>div>div+div.avatar'

const dragables=':nth-child(5) > .element-list > .menu-list > #item-4'

const dragBox='#dragBox'
const dropBox='#simpleDropContainer>div:nth-of-type(2)'

class DragAndDrop {

 getInteraction(){
cy.get(intrctn).click()

 }
 getDragables(){
  cy.get(dragables).click()
 }
 
 moveToDropbox(){

  cy.get(dragBox).trigger('mousedown',{button:0}).wait(750).trigger('mousemove',{pageX:80,pageY:100,force:true}).wait(250)
        .trigger('mouseup',{force:true})
        
 }
  
 
  
      

}
export default DragAndDrop

