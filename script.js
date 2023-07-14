const submitBtn = document.getElementById("submit-btn")
const userScore = document.getElementById("score")
const scoreFrame = document.getElementById("submitted-schedule-frame")
const cross = document.getElementById("cross")
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
    markAnswers(questionCount, questionOptions, userAnswers)
    disableScroll()
    scoreFrame.style.display = "block"
})

cross.addEventListener("click", function() {
    scoreFrame.style.display = "none"
    enableScroll()
})

function markAnswers(questionCount, optionCount, userAnswers) {
    for (let i = 0; i < questionCount; ++i) {
        for (let j = 0; j < optionCount; ++j) {
            if (userAnswers[i].index === indexOfCorrectAnswers[i] && userAnswers[i].index === j) {
                document.getElementById(`q${i+1}a${j+1}`).style.color = "green"
                console.log("green")
            }

            if (userAnswers[i].index != indexOfCorrectAnswers[i] && userAnswers[i].index === j) {
                document.getElementById(`q${i+1}a${j+1}`).style.color = "red"
                console.log("red")
            }
           
        }
    }
    
}

function disableScroll() {
    let topScroll = window.scrollY
    let leftScroll = window.scrollX

    window.onscroll = function() {
        window.scrollTo(leftScroll, topScroll)
    }
}

function enableScroll() {
    window.onscroll = function() {}
}