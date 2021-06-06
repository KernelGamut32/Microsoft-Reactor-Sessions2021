interface IceCreamArray {
  [index: number]: string;
  length: number;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
console.log(myIceCream[1]);
console.log(myIceCream.length);

interface States {
  [index: string]: string;
}

let state: States = { 'O': 'open', 'C': 'closed' };
console.log(state);
console.log(state['C']);
console.log(state[0]);
