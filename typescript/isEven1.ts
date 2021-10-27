import readline from "readline";

const deadlineErrorMessage = "Time is up! This value is too big!";
const notANumberErrorMessage = "This value is not a number!";

function isEven(entryValue: number, waitTime: number): boolean {
  const startTime = getCurrentTimeInMinutes();
  const absoluteEntryValue = Math.abs(entryValue);

  for (const currentValue of infinityGenerator()) {
    if (isEqual(absoluteEntryValue, currentValue)) {
      const entryValueIsEvent = isNotDivisibleByTwo(currentValue);
      return entryValueIsEvent;
    }
    if (isTimesUp(startTime, waitTime)) {
      throw Error(deadlineErrorMessage);
    }
  }

  return false;
}

function isNotDivisibleByTwo(value: number): boolean {
  const two = 2;
  return value % two !== 0;
}

function isEqual(valueOne: any, valueTwo: any): boolean {
  return valueOne === valueTwo;
}

function isTimesUp(startTimeIsMinutes: number, waitTime: number): boolean {
  const timePassed = getCurrentTimeInMinutes() - startTimeIsMinutes;
  return timePassed > waitTime;
}

function* infinityGenerator(): Generator<number, void> {
  for (let i = 0; i < Infinity; i++) {
    yield i;
  }
}

function getCurrentTimeInMinutes(): number {
  const oneThousand = 1000;
  const sixty = 60;
  return new Date().getTime() / oneThousand / sixty;
}

function convertStringToInteger(str: string) {
  const number = parseInt(str);
  if (Number.isNaN(number)) {
    throw Error(notANumberErrorMessage);
  }
  return number;
}

function convertStringToFloat(str: string) {
  const number = parseFloat(str);
  if (Number.isNaN(number)) {
    throw Error(notANumberErrorMessage);
  }
  return number;
}

async function askWaitTime(): Promise<number> {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    readlineInterface.question(
      "How long do you want to wait for this stupid task (in minutes)? ",
      (input: string) => {
        try {
          const timeInput = convertStringToFloat(input);
          resolve(timeInput);
        } catch (e) {
          reject(e);
        } finally {
          readlineInterface.close();
        }
      }
    );
  });
}

async function askNumber(): Promise<number> {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    readlineInterface.question("What's the number? ", (input: string) => {
      try {
        const number = convertStringToInteger(input);
        resolve(number);
      } catch (e) {
        reject(e);
      } finally {
        readlineInterface.close();
      }
    });
  });
}

async function main() {
  try {
    const waitTime = await askWaitTime();
    const number = await askNumber();
    const inputIsEven = isEven(number, waitTime);
    console.info(`This value ${inputIsEven ? "is" : "is not"} even`);
  } catch (e) {
    const error = e as Error;
    console.error(error.message);
  }
}

main();
