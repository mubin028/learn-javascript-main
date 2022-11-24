// document.getElementById("count-el").innerText = 11
let count = 0
fn()

// Language: javascript

function increment() {
    count+=1
    console.log("the button was clicked")
    document.getElementById("count-el").innerText = count
    console.log("the button was clicked")
}

function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
function fn(){
    let count = 42
    console.log(count)
}