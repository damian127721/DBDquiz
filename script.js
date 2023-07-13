const submitBtn = document.getElementById("submit-btn")
const correctAnswers = ["Meg Thomas", "The Nurse", "The Singularity", "The Trickster", "The Plague", "The Clown", "Dwight Fairfield"]

submitBtn.addEventListener("click", function(){
    let q1 = document.querySelectorAll("input[id*='q1']")
    let q2 = document.querySelectorAll("input[id*='q2']")
    let q3 = document.querySelectorAll("input[id*='q3']")
    let q4 = document.querySelectorAll("input[id*='q4']")
    let q5 = document.querySelectorAll("input[id*='q5']")
    let q6 = document.querySelectorAll("input[id*='q6']")
    let q7 = document.querySelectorAll("input[id*='q7']")
    let allQ = [q1, q2, q3, q4, q5, q6, q7]
    for (let i in allQ) {
        /* let answered = allQ[i].some((currentValue) => {
            return currentValue.hasAttribute("checked")
        }) */
        
    }
    console.log(allQ)
})

function correct() {

}