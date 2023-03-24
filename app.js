let passwordLength = 16
const inputEl = document.querySelector("input#password")
const rangeEl = document.querySelector("input#password-length")
const copyPass = document.querySelector("button#copy")
const regenButton = document.querySelector("button#regen")
const copyButton = document.querySelector("button#copy2")
const safeIndic = document.querySelector("div.bar")
const sizeSpan = document.querySelector("span#customSize")

function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!@&*()[]" 

  let password = ""

  for (let i=0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomNumber, randomNumber + 1)
  }


  inputEl.value = password
  safetyIndicator()
  sizeSpan.innerHTML = inputEl.value.length
}


rangeEl.addEventListener("input", () => {
  passwordLength = rangeEl.value
  generatePassword()
})

function copy() {
  navigator.clipboard.writeText(inputEl.value)
}


function safetyIndicator() {
  if (inputEl.value.length < 15) {
    safeIndic.classList.remove("safe")
    safeIndic.classList.add("critical")
    console.log("critical")
  } else {
    safeIndic.classList.remove("critical")
    safeIndic.classList.add("safe")
    console.log("safe")
  }
}




generatePassword()
// inputEl.addEventListener("change", safetyIndicator)
regenButton.addEventListener("click", generatePassword)
copyButton.addEventListener("click", copy)
copyPass.addEventListener("click", copy)
