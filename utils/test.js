const test = (input, func) => {
  console.time('runTime');
  const result = func(input);
  console.timeEnd('runTime');
  console.log(result);
};

module.exports = test;

