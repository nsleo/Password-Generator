let passwordLength = 16
const inputEl = document.querySelector("input#password")
const rangeEl = document.querySelector("input#password-length")
const copyPass = document.querySelector("button#copy")


function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!@&*()[]" 

  let password = ""

  for (let i=0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomNumber, randomNumber + 1)
  }


  inputEl.value = password
}


rangeEl.addEventListener("input", () => {
  passwordLength = rangeEl.value
  generatePassword()
})



function copy() {
  navigator.clipboard.writeText(inputEl.value)
}


generatePassword()
copyPass.addEventListener("click", copy)
