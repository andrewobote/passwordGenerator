const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"']

let characters = []

function check(){
  let numbersY = document.getElementById("numbersX").checked
  let lowerCaseY = document.getElementById("lowerCaseX").checked
  let upperCaseY = document.getElementById("upperCaseX").checked
  let symbolsY = document.getElementById("symbolsX").checked

  if(numbersY === true && lowerCaseY === false && upperCaseY === false && symbolsY === false){
    characters = [...numbers]
  }else if(numbersY === false && lowerCaseY === true && upperCaseY === false && symbolsY === false){
    characters = [...lowerCase]
  }else if(numbersY === false && lowerCaseY === false && upperCaseY === true && symbolsY === false){
    characters = [...upperCase]
  }else if(numbersY === false && lowerCaseY === false && upperCaseY === false && symbolsY === true){
    characters = [...symbols]
  }else if(numbersY === true && lowerCaseY === true && upperCaseY === false && symbolsY === false){
    characters = [...numbers, ...lowerCase]
  }else if(numbersY === true && lowerCaseY === true && upperCaseY === true && symbolsY === false){
    characters = [...numbers, ...lowerCase, ...upperCase]
  }else if(numbersY === true && lowerCaseY === true && upperCaseY === true && symbolsY === true){
    characters = [...numbers, ...lowerCase, ...upperCase, ...symbols]
  }else if(numbersY === true && lowerCaseY === false && upperCaseY === true && symbolsY === false){
    characters = [...numbers, ...upperCase]
  }else if(numbersY === true && lowerCaseY === false && upperCaseY === false && symbolsY === true){
    characters = [...numbers, ...symbols]
  } else if(numbersY === false && lowerCaseY === true && upperCaseY === true && symbolsY === false){
    characters = [...lowerCase, ...upperCase]
  }else if(numbersY === false && lowerCaseY === true && upperCaseY === false && symbolsY === true){
    characters = [...lowerCase, ...symbols]
  }else if(numbersY === false && lowerCaseY === false && upperCaseY === true && symbolsY === true){
    characters = [...upperCase, ...symbols]
  }else if(numbersY === true && lowerCaseY === true && upperCaseY === false && symbolsY === true){
    characters = [...numbers, ...lowerCase, ...symbols]
  }else if(numbersY === false && lowerCaseY === true && upperCaseY === true && symbolsY === true){
    characters = [...lowerCase, ...upperCase, ...symbols]
  }else if(numbersY === true && lowerCaseY === false && upperCaseY === true && symbolsY === true){
    characters = [...numbers, ...upperCase, ...symbols]  
  } else {
    characters = [...numbers, ...lowerCase, ...upperCase, ...symbols]
  }
}

let passwordLength = "16"

function setLength(event){
  passwordLength = event.target.value
}

function generatePassword(){
  check()
	let passwordArray = [[], [], [], []]
  for(let z = 0; z < passwordArray.length; z++){
    for(let i = 0; i < passwordLength; i++){
      let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
      passwordArray[z].push(randomCharacter)
    }
  }
  document.getElementById("password1").value = passwordArray[0].join("")
  document.getElementById("password2").value = passwordArray[1].join("")
  document.getElementById("password3").value = passwordArray[2].join("")
  document.getElementById("password4").value = passwordArray[3].join("")
}

function copyFun1(){
  let copyPass1 = document.getElementById("password1")
  if(copyPass1.value){
	  copyPass1.select()
	  navigator.clipboard.writeText(copyPass1.value)
	  alert("Password 1 copied to clipboard")
  }
}
function copyFun2(){
  let copyPass2 = document.getElementById("password2")
  if(copyPass2.value){
	  copyPass2.select()
	  navigator.clipboard.writeText(copyPass2.value)
	  alert("Password 2 copied to clipboard")
  }
}
function copyFun3(){
  let copyPass3 = document.getElementById("password3")
  if(copyPass3.value){
	  copyPass3.select()
	  navigator.clipboard.writeText(copyPass3.value)
	  alert("Password 3 copied to clipboard")
  }
}
function copyFun4(){
  let copyPass4 = document.getElementById("password4")
  if(copyPass4.value){
	  copyPass4.select()
	  navigator.clipboard.writeText(copyPass4.value)
	  alert("Password 4 copied to clipboard")
  }
}