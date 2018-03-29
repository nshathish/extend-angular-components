export class CarMock {
  public num: string;

  constructor() {
    this.num = `mock-${Math.floor(Math.random() * 10000)}`;
  }
}
