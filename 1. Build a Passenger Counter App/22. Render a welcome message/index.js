// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEL = document.getElementById("welcome-el");

let name = "John";
let greeting = "Welcome Back, ";

let myGreeting = greeting + name;
welcomeEL.innerText= myGreeting;