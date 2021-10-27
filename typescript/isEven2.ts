import readline from "readline";

const notANumberErrorMessage = "This value is not a number!";

function isEven(entryValue: string): [boolean, number] {
  const lastNumberOfEntryValue = parseInt(getLastChar(entryValue));

  if (Number.isNaN(lastNumberOfEntryValue)) {
    throw Error(notANumberErrorMessage);
  }

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

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  readlineInterface.question("What's the value? ", (input: string) => {
    try {
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
    readlineInterface.close();
  });
}

main();
