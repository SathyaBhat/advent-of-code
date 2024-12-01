import * as fs from "fs";

export function day1() {
  const fileContents = fs.readFileSync("./2024/input.txt", "utf-8");
  const left: number[] = [];
  const right: number[] = [];
  fileContents.split("\n").forEach((line) => {
    const [a, b] = line.split(/\s+/).map(Number);
    left.push(Number(a));
    right.push(Number(b));
  });
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);
  const sum = left.reduce((acc, val, i) => acc + Math.abs(right[i] - val), 0);
  console.log(sum);
}
