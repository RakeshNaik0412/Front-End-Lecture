rakesh = [1234,5678,9090,8765,4321]
dhanraj = [18364,982375,9387,98745,98734]
// output = 0

// for (let i = 0; i < rakesh.length; i++) {
//     output += rakesh[i]
    
// }
// console.log(output);

// Function
// function name(params) {
//     execuion code
// }

// Function Defination
// Function Execuation
// Function Calling

// function expenses(money) {
//     output = 0
//     for (let i = 0; i < money.length; i++) {
//         output += money[i]
        
//     }
//     console.log(output);
// }
// expenses(rakesh)
// expenses(dhanraj)

// Types Of Functions
// Function With No Parameter
function test() {
    console.log("This is a Basic Function");
}
test()

// Function With Parameter
function test1(num1, num2) {
    console.log(num1+num2);
}
test1(1,3)

// Function With Default Parameter
function test3(num1=10, num2=20) {
    console.log(num1+num2);
}
test3()
test3(232,765)

// Function With Return Parameter
function test4(a,b) {
    return a*b
}
output = test4(2,8)
console.log(output);
console.log(test4(2,8));