// String Methods to Classes
class Strings{
    constructor(element,num1,num2,abc,xyz,a,b,c){
        this.element = element
        this.num1 = num1
        this.num2 = num2
        this.abc = abc
        this.xyz = xyz
        this.a = a
        this.b = b
        this.c = c
    }
    lengthitem() {
            console.log(this.element.length);
    }
    sliceitem() {
        console.log(this.element.slice(this.num1,this.num2));
    }
    substringitem() {
        console.log(this.element.substring(this.num1,this.num2));
    }
    substritem() {
        console.log(this.element.substr(this.num1));
    }
    replaceitem() {
        console.log(this.element.replace(this.abc,this.xyz));
    }
    replaceallitem() {
        console.log(this.element.replaceAll(this.abc,this.xyz));
    }
    touppercaseitem() {
        console.log(this.element.toUpperCase());
    }
    tolowercaseitem() {
        console.log(this.element.toLowerCase());
    }
    concatitem() {
        console.log(this.element.concat(this.abc));
    }
    trimitem() {
        console.log(this.element.trim());
    }
    trimstartitem() {
        console.log(this.element.trimStart());
    }
    trimenditem() {
        console.log(this.element.trimEnd());
    }
    padstartitem() {
        console.log(this.element.padStart(this.a));
    }
    padenditem() {
        console.log(this.element.padEnd(this.a));
    }
    charatitem() {
        console.log(this.element.charAt(this.num2));
    }
    charcodeatitem() {
        console.log(this.element.charCodeAt(this.num2));
    }
    splititem() {
        console.log(this.element.split());
    }
    indexofitem() {
        console.log(this.element.indexOf(this.b));
    }
    lastindexofitem() {
        console.log(this.element.lastIndexOf(this.c));
    }
    searchitem() {
        console.log(this.element.search(this.b));
    }
    matchitem() {
        console.log(this.element.match(this.c));
    }
    includesitem() {
        console.log(this.element.includes(this.abc));
    }
    startsswithitem() {
        console.log(this.element.startsWith(this.b));
    }
    endswithitem() {
        console.log(this.element.endsWith(this.c));
    }
}

i = new Strings("  I am learning JavaScript  ",4,10,"am","Am",100,"I","t")
i.lengthitem()
i.sliceitem()
i.substringitem()
i.replaceitem()
i.replaceallitem()
i.touppercaseitem()
i.tolowercaseitem()
i.concatitem()
i.trimitem()
i.trimstartitem()
i.trimenditem()
i.padstartitem()
i.padenditem()
i.charatitem()
i.charcodeatitem()
i.splititem()
i.indexofitem()
i.lastindexofitem()
i.searchitem()
i.matchitem()
i.includesitem()
i.startsswithitem()
i.endswithitem()
