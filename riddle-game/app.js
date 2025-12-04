import * as allGame from "./allFunction.js";
import input from "analiza-sync"

console.log("WELCOME TO THE GAME ☺");

const player = allGame.default.createPlayer;
player(input("what your name?: "))
const riddle = allGame.default.riddles
    
const startRiddle = () => {
    
    for (let i = 0; i < riddle.length; i++) {
        const gameRiddle = riddle[i];
        const quation = input(`
            id:${gameRiddle.id},
            name:${gameRiddle.name},
            taskDescription:${gameRiddle.taskDescription}: `) 
        console.log(quation);   
    }
}
startRiddle()

// const s = allGame.default.askRiddle(riddle)
