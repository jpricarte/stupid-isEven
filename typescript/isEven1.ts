import readline from "readline";

const deadlineInSeconds = 10;
const deadlineErrorMessage = "Time is up! This value is to big to discover!";

function isEven(entryValue: number) {
  const startTime = getCurrentTimeInSeconds();
  const absoluteEntryValue = Math.abs(entryValue);

  for (const currentValue of infinityGenerator()) {
    if (isEqual(absoluteEntryValue, currentValue)) {
      const entryValueIsEvent = isNotDivisibleByTwo(currentValue);
      return entryValueIsEvent;
    }
    if (isTimesUp(startTime)) {
      throw Error(deadlineErrorMessage);
    }
  }
}

function isNotDivisibleByTwo(value: number): boolean {
  const two = 2;
  return value % two !== 0;
}

function isEqual(valueOne: any, valueTwo: any): boolean {
  return valueOne === valueTwo;
}

function isTimesUp(startTimeIsSeconds: number): boolean {
  const timePassed = getCurrentTimeInSeconds() - startTimeIsSeconds;
  return timePassed > deadlineInSeconds;
}

function* infinityGenerator(): Generator<number, void> {
  for (let i = 0; i < Infinity; i++) {
    yield i;
  }
}

function getCurrentTimeInSeconds(): number {
  const oneThousand = 1000;
  return new Date().getTime() / oneThousand;
}

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  readlineInterface.question("What's the value? ", (input: string) => {
    try {
      const numberInput = parseInt(input);
      const inputIsEven = isEven(numberInput);
      console.info(`This value ${inputIsEven ? "is" : "is not"} even`);
    } catch (e) {
      const error = e as Error;
      console.error(error.message);
    }
    readlineInterface.close();
  });
}

main();
