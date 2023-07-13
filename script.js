const submitBtn = document.getElementById("submit-btn")
const indexOfCorrectAnswers = [0, 2, 1, 1, 0, 2, 1]

submitBtn.addEventListener("click", function(){
    console.clear()
    const questionOptions = document.querySelectorAll("input[id*='q1']").length
    const questionCount = document.getElementsByClassName("question").length
    let points = 0
    for (let i = 0; i < questionCount; ++i) {
        const questionGroup = []
        for (let j = 0; j < questionOptions; ++j) {
            questionGroup.push(document.getElementById(`q${i+1}a${j+1}`).checked)
            if (questionGroup[j] && j === indexOfCorrectAnswers[i]) {
                points++
            }
        }
        
    }
    console.log(points)
    
})

