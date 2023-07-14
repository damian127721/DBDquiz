const submitBtn = document.getElementById("submit-btn")
const userScore = document.getElementById("score")
const scoreFrame = document.getElementById("submitted-schedule-frame")
const indexOfCorrectAnswers = [0, 2, 1, 1, 0, 2, 1]
let userAnswers = []

submitBtn.addEventListener("click", function(){
    console.clear()
    const questionOptions = document.querySelectorAll("input[id*='q1']").length
    const questionCount = document.getElementsByClassName("question").length
    const lastOptionIndex = questionOptions - 1;
    let points = 0
    userAnswers = []
    for (let i = 0; i < questionCount; ++i) {
        const questionGroup = []
        for (let j = 0; j < questionOptions; ++j) {
            questionGroup.push(document.getElementById(`q${i+1}a${j+1}`).checked)
            if (questionGroup[j] && j === indexOfCorrectAnswers[i]) {
                userAnswers.push({index: j, decision: true})
                points++
            } else if (questionGroup[j]) {
                userAnswers.push({index: j, decision: false})
            } else if (j === lastOptionIndex && userAnswers[i] === undefined) {
                userAnswers.push({index: "not chosen", decision: false})
            }
        }
        
    }
    userScore.textContent = `${points}/${questionCount}`
    console.log(points)
    console.log(userAnswers)
    
})

