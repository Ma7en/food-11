



/* ===== input filed Name signUp  ======= */
// input filed Name Login 
let countName = document.querySelector(".count_name");
let progressName = document.querySelector(".progerss_name");
let divNameInput = document.querySelector(".div_name_input");
let inputName1 = document.querySelector(".input_name_1");
let maxLengthName1 = inputName1.getAttribute("maxlength");


countName.innerHTML = maxLengthName1;

// c = 
inputName1.oninput = function () {
    countName.innerHTML = maxLengthName1 - this.value.length;
    countName.innerHTML == 0 ? countName.classList.add("zero") : countName.classList.remove("zero");
    
    // set the progress
    progressName.style.width = `${(this.value.length * 100) / maxLengthName1}%`;
}


/* ======= input filed Name signUp  ======= */




/* ===== input filed Email SignUp  ======= */
// input filed Name Login 
let countEmail = document.querySelector(".count_email");
let progressEmail = document.querySelector(".progerss_email");
let divEmailInput = document.querySelector(".div_email_input");
let inputEmail1 = document.querySelector(".input_email_1");
let maxLengthEmail1 = inputEmail1.getAttribute("maxlength");


countEmail.innerHTML = maxLengthEmail1;

// c = 
inputEmail1.oninput = function () {
    countEmail.innerHTML = maxLengthEmail1 - this.value.length;
    countEmail.innerHTML == 0 ? countEmail.classList.add("zero") : countEmail.classList.remove("zero");
    
    // set the progress
    progressEmail.style.width = `${(this.value.length * 100) / maxLengthEmail1}%`;
}


/* ===== input filed Email SignUp  ======= */



/* ===== input filed password 1 SignUp   ======= */
let divPassInput_1 = document.querySelector(".div_pass_input_1");
let inputPass_1 = document.querySelector(".input_pass_1");
let maxLengthPass_1 = inputPass_1.getAttribute("maxlength");
let progressPass_1 = document.querySelector(".progerss_pass_1");
let countPass_1 = document.querySelector(".count_pass_1");


countPass_1.innerHTML = maxLengthPass_1;

// c = 
inputPass_1.oninput = function () {
    countPass_1.innerHTML = maxLengthPass_1 - this.value.length;
    countPass_1.innerHTML == 0 ? countPass_1.classList.add("zero") : countPass_1.classList.remove("zero");
    
    // set the progress
    progressPass_1.style.width = `${(this.value.length * 100) / maxLengthPass_1}%`;
}

/* ===== input filed password 1 SignUp  ======= */



/* ===== input filed password 2 SignUp ======= */
// input filed Name Login 
let divPassInput_2 = document.querySelector(".div_name_input_2");
let inputPass_2 = document.querySelector(".input_pass_2");
let maxLengthPass_2 = inputPass_2.getAttribute("maxlength");
let progressPass_2 = document.querySelector(".progerss_pass_2");
let countPass_2 = document.querySelector(".count_pass_2");


countPass_2.innerHTML = maxLengthPass_2;

// c = 
inputPass_2.oninput = function () {
    countPass_2.innerHTML = maxLengthPass_2 - this.value.length;
    countPass_2.innerHTML == 0 ? countPass_2.classList.add("zero") : countPass_2.classList.remove("zero");
    
    // set the progress
    progressPass_2.style.width = `${(this.value.length * 100) / maxLengthPass_2}%`;
}


/* ===== input filed Password 2 SignUp  ======= */


























