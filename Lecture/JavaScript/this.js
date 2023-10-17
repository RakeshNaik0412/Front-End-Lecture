// let student = {
//     cname : "rakesh",
//     city : 'kolhapur',
//     state : "MH",
//     getinfo : function () {
//         console.log(student.cname);
//     }
// }
// let student1 = {
//     cname : "akash",
//     city : 'kolhapur',
//     state : "MH",
//     getinfo : function () {
//         console.log(student1.cname);
//     }
// }


// console.log(student.cname);
// student.getinfo()
// student1.getinfo()

// This Function

let student = {
    cname : "rakesh",
    city : 'kolhapur',
    state : "MH",
    getinfo : function () {
        console.log(this.cname);
        console.log(this.city);
        console.log(this.state);
    }
}
student.getinfo()