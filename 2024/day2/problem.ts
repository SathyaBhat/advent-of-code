import chalk from "chalk";
import * as fs from "fs";

function readInputData(fileName: string) {
  return fs.readFileSync(fileName, "utf-8");
}

function isAllIncreasing(level: number[]) {
  for (let i = 1; i < level.length; i++) {
    const diff = level[i] - level[i - 1];
    if (diff < 1 || diff > 3) {
      return false;
    }
  }
  return true;
}

function isAllDecreasing(level: number[]) {
  for (let i = 1; i < level.length; i++) {
    const diff = level[i - 1] - level[i];
    if (diff < 1 || diff > 3) {
      return false;
    }
  }
  return true;
}
function solvePart1(fileContents: string) {
  const levels = fileContents
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(" ").map(Number));

  let safeCount = 0;
  console.log(levels);
  levels.forEach((level) => {
    const isSafe = isAllIncreasing(level) || isAllDecreasing(level);
    if (isSafe) {
      safeCount += 1;
    }
  });
  console.log(`\tProblem 1: Answer is ${chalk.green(safeCount)}`);
}

function solvePart2(left: number[], right: number[]) {
  console.log(`\tProblem 2: Answer is ${chalk.green("TBD")}`);
}
export function solveDay2() {
  const fileContents = readInputData("./2024/day2/input.txt");
  console.log(`Day 2`);
  solvePart1(fileContents);
}
