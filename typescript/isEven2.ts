import readline from "readline";

const notANumberErrorMessage = "This value is not a number!";

function isEven(entryValue: string): [boolean, number] {
  const lastNumberOfEntryValue = convertStringToInteger(
    getLastChar(entryValue)
  );

  let attempts = 0;
  for (const randomValue of randomIntegerGenerator(0, 9)) {
    attempts += 1;
    if (isEqual(lastNumberOfEntryValue, randomValue)) {
      const entryValueIsEvent = isNotDivisibleByTwo(randomValue);
      return [entryValueIsEvent, attempts];
    }
  }
  return [false, 0];
}

function convertStringToInteger(str: string) {
  const number = parseInt(str);
  if (Number.isNaN(number)) {
    throw Error(notANumberErrorMessage);
  }
  return number;
}

function getLastChar(str: string): string {
  return str.charAt(str.length - 1);
}

function isNotDivisibleByTwo(value: number): boolean {
  const two = 2;
  return value % two !== 0;
}

function isEqual(valueOne: any, valueTwo: any): boolean {
  return valueOne === valueTwo;
}

function* randomIntegerGenerator(
  min: number,
  max: number
): Generator<number, void> {
  for (let i = 0; i < Infinity; i++) {
    yield Math.floor(min + Math.random() * (max - min + 1));
  }
}

async function askInputValue(): Promise<string> {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    readlineInterface.question("What's the number? ", (input: string) => {
      readlineInterface.close();
      resolve(input);
    });
  });
}

async function main() {
  try {
    const input = await askInputValue();
    const [inputIsEven, attempts] = isEven(input);
    console.info(
      `After ${attempts} attempts we found that this value ${
        inputIsEven ? "is" : "is not"
      } even`
    );
  } catch (e) {
    const error = e as Error;
    console.error(error.message);
  }
}

main();
