const nameInput = document.querySelector("input")
const number = document.querySelector("input[type = number]")
const email = document.querySelector("input[type = email]")
const texterea = document.querySelector("textarea")
const button = document.querySelector("button")
const nameError = document.getElementById("name-error")
const nameIcon = document.querySelector(".name-check")
const numberError = document.getElementById("number-error")
const numberIcon = document.querySelector(".phone-check")
const emailError = document.getElementById("email-error")
const emailIcon = document.querySelector(".email-check")
const textError = document.getElementById("Suggest-error")
const textIcon = document.querySelector(".suggest-check")

nameInput.addEventListener("keyup" , (e)=>{

    if(nameInput.value.length < 5){
        nameError.innerHTML = "Enter your Fullname please*"
        nameIcon.style.display = "none"
        nameIcon.classList.remove("checked")
    }
    if( nameInput.value.length > 5){
        nameError.innerHTML = ""
        nameIcon.style.display = "inline"
        nameIcon.classList.add("checked")
    }
})

number.addEventListener("keyup" , (e)=>{

    if(number.value.length == 0){
        numberError.innerHTML = "Enter your Number please*"
        numberIcon.style.display = "none"
        numberIcon.classList.remove("checked")
    }

    if(number.value.length > 0 & number.value.length != 11){
        numberError.innerHTML = "Invalid number*"
        numberIcon.style.display = "none"
        numberIcon.classList.remove("checked")
    }

    if(number.value.length == 11){
        numberError.innerHTML = ""
        numberIcon.style.display = "inline"
        numberIcon.classList.add("checked")
    }
})

email.addEventListener("keyup" , (e)=>{

    
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Invalid Email"
        emailIcon.style.display = "none"
        emailIcon.classList.remove("checked")
    }

    if(email.value.length == 0){
        emailError.innerHTML = "Enter you Email please*"
        emailIcon.style.display = "none"
        emailIcon.classList.remove("checked")    
    }

    if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = ""
        emailIcon.style.display = "inline"
        emailIcon.classList.add("checked")

    }
})

texterea.addEventListener("keyup" , (e)=>{
    textError.innerHTML = `${20 - texterea.value.length} more characters required`
    textIcon.style.display = "none"
    textIcon.classList.remove("checked")

    if(texterea.value.length >= 20 ){
        textError.innerHTML = ""
        textIcon.style.display = "inline"
        textIcon.classList.add("checked")
    }

})

button.addEventListener("click" , (e)=>{
    if(!nameIcon.classList.contains("checked")){
        e.preventDefault()
        nameError.innerHTML = "Enter your Fullname please*"
    }

    if(!numberIcon.classList.contains("checked")){
        e.preventDefault()
        numberError.innerHTML = "Enter your Number please*"
    }

    if(!emailIcon.classList.contains("checked")){
        e.preventDefault()
        emailError.innerHTML = "Enter you Email please*"
    }
})