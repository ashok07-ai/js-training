let randomPasswordGeneratorBtn = document.querySelector("#gen-password");
let copyPasswordBtn = document.querySelector("#copy-password");
let generatedOTP = document.querySelector("#gen-otp")
let generatedPasswordInput = document.getElementById("generated-password");


let generateRandomPassword = () => {
    let passwordLength = 8;
    let generatedPassword = ""
    let chars = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*-()+.";
    for (let i = 1; i <= passwordLength; i++) {
        let random_chars = Math.floor(Math.random() * chars.length);
        generatedPassword += chars.charAt(random_chars)
    }

    generatedPasswordInput.value = generatedPassword;
}

let generateOTP = () => {
    let otpLength = 4;
    let generatedOtp = "";
    let numbers = "1234567890";
    for (let i = 1; i <= otpLength; i++) {
        let random_otp = Math.floor(Math.random() * numbers.length);
        generatedOtp += numbers.charAt(random_otp);
    }
    generatedPasswordInput.value = generatedOtp;

}

let copyText = () => {
    if (generatedPasswordInput.value != "") {
        let copied_text = generatedPasswordInput;
        copied_text.select();
        navigator.clipboard.writeText(copied_text.value)
    } else {
        alert("Please generate a password or OTP!!")
    }
}
randomPasswordGeneratorBtn.addEventListener("click", generateRandomPassword);
copyPasswordBtn.addEventListener("click", copyText);
generatedOTP.addEventListener("click", generateOTP);
