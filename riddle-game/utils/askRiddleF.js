import input from "analiza-sync";

export default function askRiddle(riddleObj){
    console.log(`id: ${riddleObj.id}`);
    console.log(`name: ${riddleObj.name}`);
    console.log(`riddle: ${riddleObj.taskDescription}`);
    if(riddleObj.choices)
        riddleObj.choices.forEach((chioce, i)=>{
        console.log(`${i + 1}. ${chioce}`);
        });
    let answer = ``
    while (!answer) {
        const getAnswer = input("Enter your choice: ")
        answer = checkAns(getAnswer, riddleObj)
    }   
}

function checkAns(answer, riddle) {
    if (riddle.choices)
        return (answer - 1) + "" === riddle.correctAnswer
    return answer === riddle.correctAnswer
}

