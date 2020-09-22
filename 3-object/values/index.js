export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  // eslint-disable-next-line radix
  // return parseInt(source.A) + parseInt(source.B) + parseInt(source.C);
  // eslint-disable-next-line no-undef,radix
  return (
    Object.values(source)
      // eslint-disable-next-line radix
      .map(s => parseInt(s))
      .reduce((x, y) => x + y)
  );
}
