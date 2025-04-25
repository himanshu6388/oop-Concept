function Toffee(name){
    this.name = name;
    // this.price = 10;
}


 Toffee.prototype.price = 10;
let t1 = new Toffee("alpenliebe");
let t2 = new Toffee("Dairy Milk")

console.log(t1.price);
console.log(t2);



function Human(name, age){
    this.name = name;
    this.age = age;
}

Human.prototype.sayHello = function(){
    console.log("Hello");
    
}

let h1 = new Human("Himanshu", 20)
console.log(h1);


// sabse pahle property ko object me dhundhege nahi mila to prototype  mein dhundte hai

  

