function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(x => x % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  //   return collection.filter(t1 => collection.filter(t2 => t1===t2).length <= 1);
  // return collection.filter(function(element, index, self) {
  //   return self.indexOf(element) === index;
  // });
  const set = new Set(collection);
  return [...set];
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
