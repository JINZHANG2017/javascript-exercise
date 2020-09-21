// TODO 13: 在这里写实现代码
export default class Student {
  constructor(name, age, klass) {
    this.name = name;
    this.age = age;
    this.klass = klass;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.klass}.`;
  }
}
