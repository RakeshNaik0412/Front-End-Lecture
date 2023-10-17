// function defination(params) {
//     execution
// }
// calling

// class info{
//     constructor(cname,age,city,address){
//         this.cname = cname
//         this.age = age
//         this.city = city
//         this.address = address
//         console.log("This is Constructor"); //we never write execution in constructor..
//     }
//     getinfo(){
//         console.log(this.cname);
//         console.log(this.age);
//     }
//     place(){
//         console.log(this.city);
//         console.log(this.address);
//     }
// }
// i = new info("Rakesh",24,"Kolhapur","MH")
// i.getinfo()
// i.place()

class Rectangle{
    constructor(length,width){
        this.length = length
        this.width = width
    }
    area(){
        console.log("Area of Rectangle is :",this.length * this.width);
    }
    test(height){
        console.log(this.length + this.width + height);
    }

}
r = new Rectangle(100,150)
r.area()
r.test(250)
