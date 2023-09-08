import { Modal } from "./modal.js"
import { AlertError} from "./alert-error.js"
import {calculateIMC, notANumber} from "./utils.js"

//variáveis 

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')





form.onsubmit = function(event) {
    event.preventDefault()
    
    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }
    
    AlertError.close()
    
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
    

}
function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message
    Modal.open()
}

