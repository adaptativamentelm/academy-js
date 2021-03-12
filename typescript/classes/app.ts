class Animal {
  name: string;
  private position: number;

  constructor(theName: string) {
    this.name = theName;
    this.position = 1;
  }

  private desencriptar(): string {
    return 'adaptativamente';
  }

  move(newPosition: number) {
    let adapt: string = this.desencriptar();
    let heightPosition: number = 10;
    this.position = newPosition;

    console.log('adapt', adapt);
    console.log('h', this.position);
    console.log('pos', heightPosition);
    return this.position;
  }
}

let python = new Animal('python');
python.move(120);

let dog = new Animal('dog');

let cat = new Animal('cat');

// let python2: any = {
//   "name": 'python',
//   "move": function (distanceInMeters) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   },
//   "run": function (velocity = 1) {
//     velocity++;
//     console.log(`The velocity is ${velocity}`);
//     this.move(velocity + 5);
//   }
// }
