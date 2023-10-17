// Methods of Classes
// Encapsulation
// class Bank{
//     constructor(cname,accno,balance){
//         this.cname = cname
//         this.accno = accno
//         let _balance = balance
//     }
//     _getBalance = function(){
//         return _balance
//     }
//     info(){
//         console.log("Customer's name is",this.cname);
//         console.log("Customer's account no is ",this.accno);
//         console.log("Customer's balance is ",this._getBalance());
//     }
//     deposit(amt){
//         _balance += amt
//     }
//     withdraw(amt){
//         _balance -= amt
//     }
// }
// b = new Bank("Rakesh",90897867,10000)
// b.info()
// b.deposit()


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
//         this.withdraw = function (amt) {
//             _balance -= amt
//         }
//         this.updatedbalance = function () {
//             console.log("Customer's updated balance is", this._getBalance());
//         }
//     }
// }
// b = new Bank("Rakesh", 1220, 10000)
// b.info()
// b.deposit(5000)
// b.updatedbalance()
// b.withdraw(1220)
// b.updatedbalance()

// Abstraction - to hide execution
class Car{
    price(){
        console.log("This is abtraction class");
    }
}
class Honda extends Car{
    price(){
        console.log("Price of Honda Car is 15L");
    }
}
class BMW extends Car{
    price(){
        console.log("Price of BMW Car is 150L");
    }
}
class RollsRoyce extends Car{
    price(){
        console.log("Price of RollsRoyce Car is 1500L");
    }
}