export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  let str1 = 'a';
  let ascii_of_a = str1.charCodeAt();
  return collection.map(x => String.fromCharCode(ascii_of_a - 1 + x));
}
