//variable in js

var fullname = "Ishan Poudel";
let address = "Kathmandu, Nepal";
const bloodGroup = "AB+";

console.log(fullname);
console.log(address);
console.log(bloodGroup);

//data types in js

let name = "Ishan Poudel";
let age = 20;
let isStudent = true;
let hobbies = ["coding", "reading", "traveling"];

let user={
    name: "Ishan Poudel",
    age: 20,
    isStudent: true,
    hobbies: ["coding", "reading", "traveling"]
}

console.log(user["name"]);
console.log(user.age);

console.log(hobbies[0]);

//function in js
function greet(name){
    console.log("Hello",name);
}
greet("Ishan");

//Dom manipulation in js

const headingElementById= document.getElementById('heading-2');

console.log(headingElementById);

const headingElementByquery=document.querySelector("#heading-2");

console.log(headingElementByquery);

const paragraphElement=document.querySelector(".para");

paragraphElement.textContent="This is updated paragraph";
paragraphElement.style.color="green";

const buttonElement=document.querySelector(".btn");

buttonElement.style.color="blue";

buttonElement.addEventListener('click', function(){
    alert("Button Clicked");
    console.log("Button Clicked");
});