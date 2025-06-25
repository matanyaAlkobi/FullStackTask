// question number 1
function Phone(brand, model){
    this.brand = brand;
    this.model = model;
    this.details = function(){
        console.log(`brand: ${brand} model: ${model}`);
    }
}

// const phone1 = new Phone("samsong","s22");
// phone1.details();


// question 2
function Rectangle (width, height){
    this.width = width;
    this.height = height;
    this.area = function(){
        return width * height
    }
}

// const rec = new Rectangle(5,  10)
// console.log(rec.area())



// question 3

function BankAccount(owner){
    this.owner = owner;
    this.balance = 100;
    this.deposit = function(amount){
        this.balance += amount
        console.log(`your balance is: ${this.balance}`)
    }
    this.withdraw = function(amount) {
        if(amount > this.balance){
            console.log(`not There is not enough money in the account you only have ${this.balance}`);
        }
        else{
        this.balance -= amount;
        console.log(`Remaining in the account ${this.balance}`);
        }
    }
}

// const account1 =  new BankAccount("matan");
// account1.deposit(50);
// account1.withdraw(100);



// question 4

function Animal(name){
    this.name = name;
    this.speak = function(){
        console.log(`${name} makes a sound`)
    }
}

function  Dog(){
    this.bark = function(){
        console.log(`${this.name}  barks`)
    }
}

// const ani =  new  Animal("miki");
// ani.speak();
// const dog1 = new  Dog();
// Object.setPrototypeOf(dog1, ani);
// dog1.bark();



//  question number 5
function Vehicle(type){
    this.type = type;
    this.describe = function(){
        console.log(`This is a ${this.type}`);
    }
}

function Car(brand){
    this.brand  = brand;
    this.info = function(){
    console.log(`This is a ${this.brand} ${this.type}`);
    }
}

// const vehicle1 = new Vehicle("car");
// vehicle1.describe();
// const car1 = new Car("toyota");
// Object.setPrototypeOf(car1,vehicle1);
// car1.info();


//  question number 6
function Shape(){
    this.area = function(){
        console.log(0)
    }
}

function Circle(radius){
    this.radius =  radius;
    this.area = function(){
        console.log(Math.PI * this.radius**2)
    }
}

function Square(side){
    this.side = side;
    this.area = function(){
        console.log(side ** 2)
    }
}

// const shape1  =  new Shape();
// const circle1 = new  Circle(3);
// const square1 =  new Square(4)
// shape1.area();
// circle1.area();
// square1.area();



// question number 7
 class Book{
    constructor(title, author){
        this.title =  title;
        this.author = author;
        }
    info(){
        console.log(`${this.title} by ${this.author}`);
    }
}

book1 = new Book("The Hobbit", "Tolkien");
book1.info();



//  question number 8
 class Person{
    constructor(name){
        this.name =  name;
    }
    greet(){
        console.log(`Hello im ${this.name}`)
    }
 }

 class Student extends Person{
        constructor(personName,schoolName){
        super(personName)
        this.schoolName  = schoolName;
        }
        study(){
            console.log(`${this.name} is studying at ${this.schoolName}`)
        }
 }

// const student1 = new Student("Alice", "Oxford");
// student1.greet();
// student1.study();



/*
Exercise 9 - Employee & Manager (Polymorphism + Private Fields)
 ✅ Create Employee with private #salary, method getSalary() returns salary, work() ➞ Employee is working
 ✅ Create Manager inherits Employee, overrides work() ➞ Manager is managing
Example Run:
 salary = 4000
 getSalary() ➞ 4000
 work() ➞ Employee is working
 salary = 5000
 getSalary() ➞ 5000
 work() ➞ Manager is managing
 */

 class Employee{
    #salary;
    constructor(salary){
        this.#salary = salary
    }

    getSalary() {
        return this.#salary;
    }

    work(){
        console.log("Employee is working")
    }
 }

 class Manager extends Employee{
    constructor(salary){
        super(salary)
    }

    work(){
        console.log("Manager is managing")
    }
 }

 const employee1 = new  Employee(1000);
 console.log(employee1.getSalary());
employee1.work();

const manager =  new Manager(5000);
console.log(manager.getSalary());
manager.work();
