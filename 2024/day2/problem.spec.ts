import { expect } from "chai";
import { solvePart1, solvePart2, readInputData } from "../day2/problem";
import path from "node:path";

describe("Day 2", () => {
  it("should solve for test input for part 1", () => {
    const fileContents = readInputData(path.resolve(__dirname, "./input.test.txt"));
    const result = solvePart1(fileContents);
    expect(result).to.equal(2);
  });

  it("should solve for actual input for part 1", () => {
    const fileContents = readInputData(path.resolve(__dirname, "./input.txt"));
    const result = solvePart1(fileContents);
    expect(result).to.equal(246);
  });

  it("should solve for test input for part 2", () => {
    const fileContents = readInputData(path.resolve(__dirname, "./input.test.txt"));
    const result = solvePart2(fileContents);
    expect(result).to.equal(4);
  });

  it("should solve for actual input for part 2", () => {
    const fileContents = readInputData(path.resolve(__dirname, "./input.txt"));
    const result = solvePart2(fileContents);
    expect(result).to.equal(318);
  });
});
