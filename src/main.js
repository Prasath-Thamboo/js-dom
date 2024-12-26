import './style.css'
import { Questions } from './question'

const app = document.querySelector("#app")
const startButton = document.querySelector("#start")

function startQuizz (){
  let score = 0
  let currentQuestion = 0 

  displayQiestion (currentQuestion)

  function displayQiestion (index){
    const question = Questions[index]

    if (!question){

    }

    const title = getTitle
  }
}