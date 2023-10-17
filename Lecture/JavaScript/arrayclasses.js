// Arrays Methods to Classes
class Arrays {
    constructor(element,element1,num1,num2,num3,num4){
        this.element = element
        this.element1 = element1
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
        this.num4 = num4
    }
    lengthitem() {
        console.log(this.element.length);
    }
    sortitem() {
        console.log(this.element1.sort());
    }
    tostringitem() {
        console.log(this.element1.toString());
    }
    popitem() {
        console.log(this.element.pop());
    }
    pushitem() {
        this.element.push(this.num1)
        console.log(this.element);
    }
    shiftitem() {
        console.log(this.element1.shift());
    }
    unshiftitem() {
        this.element.unshift(this.num1)
        console.log(this.element);
    }
    joinitem() {
        console.log(this.element1.join(" "));
    }
    concatitem() {
        console.log(this.element.concat(this.num1));
    }
    flatitem() {
        console.log(this.num2.flat());
    }
    spliceitem() {
        this.element.splice(this.num3,this.num4,this.num1,this.num2)
        console.log(this.element);
    }
    sliceitem() {
        console.log(this.element1.slice(this.num4));
    }
}
i = new Arrays([1,2,3,4,5,6,7,8],['test','west','rest','best'],44,[12,[32,45],67],3,0)
i.lengthitem()
i.sortitem()
i.tostringitem()
i.popitem()
i.pushitem()
i.shiftitem()
i.unshiftitem()
i.joinitem()
i.concatitem()
i.flatitem()
i.spliceitem()
i.sliceitem()
