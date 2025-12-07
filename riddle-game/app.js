import allGame from "./allFunction.js";
import allRiddels from "./riddles/module.js"
import input from "analiza-sync"
import addSolveTime from "./utils/addSolveTimeF.js";
import createPlayer from "./utils/player.js";
import askRiddle from "./utils/askRiddleF.js";
import measureSolveTime from "./utils/measureSolveTimeF.js";
import showStats from "./utils/showStatsF.js";

console.log("WELCOME TO THE GAME ☺");
const playerName = input("what your name?: ")
const player = createPlayer(playerName)



for (let i = 0; i < allRiddels.length; i++) {
    const timeSolved = measureSolveTime(() => askRiddle(allRiddels[i]))
    addSolveTime(player,timeSolved)   
}
showStats(player)





