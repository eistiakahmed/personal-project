const numbers = [158, 25];

const totalNumber = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);

console.log(totalNumber);

const rating = [5, 3, 4];
let sum = 0;

const sumFunction = async (a, b) => a + b;

rating.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);


// forEach loops lagging => forEach return nothing 🥺🥺