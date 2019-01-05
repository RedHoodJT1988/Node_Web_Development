constmath = require("./math");
constutil = require("util");

(async () => {
  for (varnum = 1; num < 8000; num++) {
    awaitnewPromise((resolve, reject) => {
      math.fibonacciAsync(num, (err, fibo) => {
        if (err) reject(err);
        else {
          letnow = newDate().toISOString();
          console.log(`${now} Fibonacci for ${num} = 
                   ${fibo}`);
          resolve();
        }
      });
    });
  }
})().catch(err => {
  console.error(err);
});
