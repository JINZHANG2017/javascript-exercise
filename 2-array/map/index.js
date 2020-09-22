export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const str1 = 'a';
  // eslint-disable-next-line camelcase
  const ascii_of_a = str1.charCodeAt();
  // eslint-disable-next-line camelcase
  return collection.map(x => String.fromCharCode(ascii_of_a - 1 + x));
}
