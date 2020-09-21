// TODO 14: 在这里写实现代码
export default class Worker {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `I am a Worker. I have a job.`;
  }
}
