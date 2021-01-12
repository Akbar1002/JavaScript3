const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) reject("You didn't pass in a first name!");

      const fullName = `${firstName} Doe`;

      resolve(fullName);
    }, 2000);
  });
};

getAnonName('John')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
