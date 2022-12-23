let myLeads = [1212,12121,12121]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


// Log out the items in the myLeads array using a for loop 

for (let i =0; i<=myLeads.length;i++){
    console.log(myLeads[i])
}


