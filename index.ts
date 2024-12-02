import { solveDay1 } from "./2024/day1/problem";
import chalk from "chalk";

async function main() {
  console.log(chalk.blue.bold("Welcome to Advent of Code!"));
  solveDay1();
}
if (require.main === module) {
  main().catch((err) => {
    console.error("Ran into error", err);
    process.exit(1);
  });
}
