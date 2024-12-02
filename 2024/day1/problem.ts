import * as fs from "fs";
import chalk from "chalk";

function sortInputs(fileContents: string) {
  const left: number[] = [];
  const right: number[] = [];
  fileContents.split("\n").forEach((line) => {
    const [a, b] = line.split(/\s+/).map(Number);
    left.push(a);
    right.push(b);
  });
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);
  return { left, right };
}

function solvePart1(left: number[], right: number[]) {
  const distance = left.reduce((acc, val, i) => acc + Math.abs(right[i] - val), 0);
  console.log(`\tProblem 1: Total distance is ${chalk.green(distance)}`);
}

function solvePart2(left: number[], right: number[]) {
  let similarityScore = 0;
  for (const l of left) {
    for (const r of right) {
      if (l === r) {
        similarityScore = similarityScore + l;
      }
    }
  }
  console.log(`\tProblem 2: similarity score is ${chalk.green(similarityScore)}`);
}
export function solveDay1() {
  const fileContents = fs.readFileSync("./2024/day1/input.txt", "utf-8");
  const { left, right } = sortInputs(fileContents);
  console.log(`Day 1`);
  solvePart1(left, right);
  solvePart2(left, right);
}
