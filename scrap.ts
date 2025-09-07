// dumb.ts

// bad: using 'any' everywhere
function addNumbers(a: any, b: any) {
  return a + b; // no type checking
}

// bad: unused variable
const neverUsed = 123;

// bad: inconsistent naming, unclear intent
function DoSomethingWithArray(input: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < input.length; i++) {
    // bad: pointless condition
    if (input[i] === input[i]) {
      result.push(input[i] * 2); // magic number
    }
  }
  return result;
}

// bad: global mutable variable
let cache: any = {};

// bad: duplicate code
function getUserName(user: { name?: string }) {
  if (user.name) {
    return user.name;
  } else {
    return 'unknown';
  }
}
function fetchUserName(user: { name?: string }) {
  if (user.name) {
    return user.name;
  } else {
    return 'unknown';
  }
}

// bad: unnecessary async
async function calculateSomething(x: number, y: number) {
  return x * y * 42;
}

// bad: misleading function name
function isEven(n: number) {
  return n % 2 === 1; // actually checks odd
}

// bad: excessive nesting
function checkAndProcess(num: number) {
  if (num > 0) {
    if (num < 100) {
      if (num % 2 === 0) {
        return num * 2;
      } else {
        return num * 3;
      }
    } else {
      return -1;
    }
  }
  return 0;
}

console.log(addNumbers('5', 10)); // bad: string + number
console.log(DoSomethingWithArray([1, 2, 3]));
console.log(getUserName({}));
console.log(fetchUserName({ name: 'alice' }));
console.log(calculateSomething(2, 3));
console.log(isEven(4));
console.log(checkAndProcess(42));
