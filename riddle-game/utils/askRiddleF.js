export default function askRiddle(riddleObj){
    for (let i = 0; i < riddleObj.length; i++) {
            const gameRiddle = riddleObj[i];
            const quation = input(`${gameRiddle.id},
                ${gameRiddle.name},
                ${gameRiddle.taskDescription}: `) 
}}