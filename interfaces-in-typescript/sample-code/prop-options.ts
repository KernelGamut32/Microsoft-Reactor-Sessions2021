interface IceCream {
   flavor: string;
   scoops: number;
   instructions?: string;
}

let iceCream: IceCream = {
   flavor: 'vanilla',
   scoops: 2
}

console.log(iceCream.flavor);

function tooManyScoops(dessert: IceCream) {
   if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
   } else {
      return 'Your order will be ready soon!';
   }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));
