exports.test = (input, func) => {
  console.time('runTime');
  const result = func(input);
  console.timeEnd('runTime');
  console.log(result);
  return result;
};

exports.testMultipleArguments = (args, func) => {
  console.time('runTime');
  const result = func.apply(null, args);
  console.timeEnd('runTime');
  console.log(result);
  return result;
}