// What is oops
//  Objects ko create karnna jo ki sirf data hold na kre unki functioality bhi hold kare , aur aise object ko create karna with a blueprint model  


function Toffee(flavor, price, expiry){
    this.flavor = flavor;
    this.price = price;
    this.expiry = expiry;
}

let t1 = new Toffee("vanilla", 10, "2023-12-03")
let t2 = new Toffee("chocolate", 15, "2025-12-03")
let t3 = new Toffee("strawberry", 12, "2021-12-03")

// console.log(t2.flavor);
// console.log(t1.flavor);
// console.log(t3.flavor);


class Car{
    // har  class banate hi pahli  cheej jo banate hai uski aadat daal lo usko kahte hai constructor
    constructor(color,price , model){
        this.color = color;
        this.price = price;
        this.model = model;
    }
}

let c1  = new Car("White", 1500000, "Lambo");
console.log(c1)