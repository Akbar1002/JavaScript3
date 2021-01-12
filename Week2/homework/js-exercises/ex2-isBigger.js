const checkDoubleDigits = (num) =>
  new Promise((resolve, reject) => {
    if (num > 10) {
      resolve('The number is bigger than 10!');
    } else {
      reject('Error! The number is smaller than 10...');
    }
  });

checkDoubleDigits(12)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
