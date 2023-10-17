//Methods of Classes
// polymorphisam,inheritence,encapsulation,abstraction
// Polymorphisam - Same Function with Different Meaning
// class Dog {
//     constructor(cname){
//         this.cname = cname
//     }
//     info(){
//         console.log("Dog's name is " + this.cname);
//     }
// }
// d = new Dog("Roxy")

// class Cat {
//     constructor(cname){
//         this.cname = cname
//     }
//     info(){
//         console.log("Cat's name is " + this.cname);
//     }
// }
// c = new Cat("Pixy")

// function details(a) {
//     a.info()
// }
// details(d)
// details(c)

// Inheritence

// class Employee{
//     constructor(cname,course){
//         this.cname = cname
//         this.course = course
//     }
//     info1(){
//         console.log("Employee's name is "+ this.cname);
//         console.log("Employee's course is "+ this.course);
//     }

// }
// e = new Employee("Rakesh","Dmart")
// e.info1()

// class Details{
//     constructor(duration,idnum){
//         this.duration = duration
//         this.idnum = idnum
//     }
//     info2(){
//         console.log("Employee's course duration is "+this.duration);
//         console.log("Employee's idnum is "+this.idnum);
//     }
// }
// class Income extends {Employee, Details}{
//     constructor(cname,course,duration,idnum,salary){
//         super(cname,course)
//         super(duration,idnum)
//         this.salary = salary
//     }
//     info(){
//         this.info1()
//         this.info2()
//         console.log("Employee's Salary is "+ this.salary);
//     }
// }
// i = new Income("Rakesh","UI UX","6 Months",12345678,1200000)
// i.info()

// class Bank {
//     constructor(cname, accno, balance) {
//         this.cname = cname
//         this.accno = accno
//         let _balance = balance


//         this._getBalance = function () {
//             return _balance
//         }
//         this.info = function () {
//             console.log("Customer's name is", this.cname);
//             console.log("Customer's account no is", this.accno);
//             console.log("Customer's balance is", this._getBalance());
//         }
//         this.deposit = function (amt) {
//             _balance += amt
//         }
//         this.withdrwa = function (amt) {
//             _balance -= amt
//         }
//         this.updatedbalance = function () {
//             console.log("Customer's updated balance is", this._getBalance());
//         }
//     }
// }
// b = new Bank("Rakesh", 1220, 10000)
// b.info()
