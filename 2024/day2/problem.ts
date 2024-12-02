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

function getReports(fileContents: string) {
  return fileContents
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(" ").map(Number));
}
function solvePart1(fileContents: string) {
  const reports = getReports(fileContents);
  let safeCount = 0;
  reports.forEach((level) => {
    const isSafe = isAllIncreasing(level) || isAllDecreasing(level);
    if (isSafe) {
      safeCount += 1;
    }
  });
  console.log(`\tProblem 1: Answer is ${chalk.green(safeCount)}`);
}

function solvePart2(fileContents: string) {
  const levels = getReports(fileContents);
  let safeCount = 0;
  levels.forEach((level) => {
    const isSafe = isAllIncreasing(level) || isAllDecreasing(level);
    if (isSafe) {
      safeCount += 1;
      return;
    }

    for (let i = 0; i < level.length; i++) {
      // for every level we have, omit the ith report and use the spread operator to combine the other parts
      const skippedLevel = [...level.slice(0, i), ...level.slice(i + 1)];
      if (isAllIncreasing(skippedLevel) || isAllDecreasing(skippedLevel)) {
        safeCount += 1;
        // no need to check for other levels if a safe report is achieved by a skipped level
        break;
      }
    }
  });
  console.log(`\tProblem 2: Answer is ${chalk.green(safeCount)}`);
}
export function solveDay2() {
  const fileContents = readInputData("./2024/day2/input.txt");
  console.log(`Day 2`);
  solvePart1(fileContents);
  solvePart2(fileContents);
}
