#!/usr/bin/env node
const readline = require("readline");
const fs = require("fs");
const input = readline.createInterface(process.stdin, process.stdout);
const format = require("node.date-time");

const fileName = process.argv[2];

const logTime = () => {
    return new Date().format("Y-M-d H:M:S") + " ";
};

const log = (logData) => {
    fs.appendFile(`${fileName}.log`, `${logTime()} ${logData} \n`, () => {});
};

const getAnswerPromise = () => {
    return new Promise((resolve, reject) => {
        input.question(
            // "Угадай 1 или 2 ? \n",
            "",
            (answer) => {
                resolve(answer);
            }
        );
    });
};

const startGame = async () => {
    log("Новая партия");
    console.log("Угадай 1 или 2");
    while (true) {
        const hiddenNum = Math.floor(Math.random() * 2) + 1;
        const userAnswer = await getAnswerPromise();
        if (userAnswer != 1 && userAnswer != 2) {
            console.log("ответ должен быть 1 или 2");
            log("Ошибка ввода");
        } else if (userAnswer == hiddenNum) {
            console.log("Угадал!");
            log("Угадал");
        } else {
            console.log("Не угадал!");
            log("Не угадал");
        }
    }
};

startGame();
