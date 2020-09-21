// TODO 20: 在这里写实现代码
export default class Student {
  constructor(name, age, klass) {
    this.name = name;
    this.age = age;
    this.klass = klass;
  }

  introduce() {
    if (this.klass) {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${this.klass}.`;
    } else {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`;
    }
  }
}
