class Library{
    constructor(){
        this.books = []; //sari books ka record yaah per hai
    }
    addBooks(books){
        this.books.push(...books);
    }
    listAllBooks(){
        this.books.forEach(function(book, index){
            console.log(`${index +1}) ${book.name} by ${book.author}`);
            
        })
    }
}

class  Book{
    constructor(name,isbn,price,author){
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readStatus = true;
    }
    info(){
        console.log(`${this.readStatus?"✅":"❌"}  ${this.name} is written by ${this.author} and you have ${this.readStatus?"read it":"not read this book"} and is available at amazon at a price  ${this.price}`);
    }

    changeReadStatus(){
        this.readStatus = !this.readStatus;
    }
}
 
let ayodhayLibrary = new Library();
let book1 = new Book("Wealtthis life", "4rrre",455,"Himanshu")
let book2 = new Book("Advanture", "4r47fd",1005,"panlo")
let book3 = new Book("Ikigai", "44gre",455,"peter")


ayodhayLibrary.addBooks([book1,book2,book3])





console.log(ayodhayLibrary.listAllBooks());




class MobileShop{
    constructor(){
        this.mobiles = [];
    }
    
    addMobile(mobile){
        this.mobiles.push(mobile)
    }
    listAllMobiles(){
        this.mobiles.forEach(function(mb, index){
            console.log(`${index+1}) ${mb.brand}- ${mb.color}- ${mb.price}`);
            
        })
    }
   
}

class Mobile{
    constructor(company, model, price, color, brand){
        this.id = Math.floor(Math.floor(Math.random()*100000));
        this.model = model;
        this.color = color;
        this.brand=  brand;
        this.price = price;
        this.sims = [];
    }

    getMobileInfo(){
        console.log(`${this.model} = ${this.price}- ${this.color}`);
        
    }

    insertSim(sim){
        if(this.sims.length ===2){
            console.log(`Sorryy you alredy have 2 sims insatalled.`);
            return;
            
        }
        this.sims.push(sim);
    }
}


class Sim{
    constructor(brand, balance){
        this.brand = brand;
        this.balance = balance;
    }

    addBalance(balance){
        if(balance<0){
            console.log("to add balance give amount greater than 0");
            
        }
        this.balance += balance;
    }


}


let myMobileShop = new MobileShop();

let samsung = new Mobile("Samsung","Galaxy s23 Ultra","120000","black");
let tatadocomo = new Sim("tata docomo",300);

samsung.insertSim(tatadocomo);
myMobileShop.addMobile(samsung)
console.log(myMobileShop);
