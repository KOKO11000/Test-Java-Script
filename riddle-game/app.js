import * as allGame from "./allFunction.js";
import input from "analiza-sync"

const player = allGame.default.createPlayer;
player(input("what your name?: "))
