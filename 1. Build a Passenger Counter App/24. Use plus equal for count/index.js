let countEl = document.getElementById("count-el")
let count = 0
let saveEL = document.getElementById("save-el")

function increment() {
    // Change this to use the plus equal technique you've learned
    count = count + 1
    countEl.textContent = count
}

function save() {
    saveEL.textContent += count + " - "
}


