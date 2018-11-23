function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`
  }

function isSubstring(string, substr) {
  return string.include(substr);
}

function fizzBuzz(array) {
  const fbarr = []
  array.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      fbarr.push(el);
    }
  });

  return fizzBuzzArr;
}

function isPrime (n) {
  if (n < 2) { return false; }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function sumOfNPrimes (n) {
  let sum = 0;
  let count = 0;
  let i = 2;

  while (countPrimes < n) {
    if (isPrime(i)) {
      sum += i;
      count++;
    }
    i++;
  }

  return sum;
}
