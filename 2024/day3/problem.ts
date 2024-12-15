import { match } from "assert";
import chalk from "chalk";
import * as fs from "fs";

export function readInputData(fileName: string) {
  return fs.readFileSync(fileName, "utf-8");
}

export function solvePart1(fileContents: string) {
  let result: number = 0;
  const matches = fileContents.matchAll(/mul\(\d+,\d+\)/g);
  for (const match of matches) {
    let nums = match[0].match(/\((\d+),(\d+)\)/)!;
    result = result + parseInt(nums[1]) * parseInt(nums[2]);
  }
  return result;
}

export function solvePart2(fileContents: string) {
  let result: number = 0;
  return result;
}
export function solve() {
  const fileContents = readInputData("./2024/day3/input.txt");
  console.log(`Day 3`);
  solvePart1(fileContents);
  solvePart2(fileContents);
}
