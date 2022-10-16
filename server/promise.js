let a = 10;
let b = 0;

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 1000);
});

promise.then((data) => {
  b = data;
  console.log(a + b);
});
