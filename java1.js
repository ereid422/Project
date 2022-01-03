let fName = document.getElementById('fName')
let lName = document.getElementById("lName")
let email = document.getElementById("email")
let info = document.getElementById("info")
let btn = document.getElementById('send')
btn.addEventListener('click', buttonClicked);
function buttonClicked(ev){
    console.log(fName.value);
    console.log(lName.value);
    console.log(email.value);
    console.log(info.value);
}