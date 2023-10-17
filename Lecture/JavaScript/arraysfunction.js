// Arrays Methods in Functions
// length
l = [1,2,3,4,5,6,7,8]
function lengthitem(element) {
    console.log(element.length);
}
lengthitem(l)

// sort
so = ['test','west','rest','best']
function sortitem(element) {
    console.log(element.sort());
}
sortitem(so)

// toString
ts = ['abc','def','ghi','jkl']
function tostringitem(element) {
    console.log(element.toString());
}
tostringitem(ts)

// pop
p = ['test','west','rest','best']
function popitem(element) {
    console.log(element.pop());
}
popitem(p)

// push
pu = [123,456,789,148]
function pushitem(element,num) {
    element.push(num)
    console.log(element);
}
pushitem(pu,900)

// shift
sh = ['abc','def','ghi','jkl']
function shiftitem(element) {
    console.log(element.shift());
}
shiftitem(sh)

// unshift
us = [1,2,3,4,5,6,7,8]
function unshiftitem(element,num) {
    element.unshift(num)
    console.log(element);
}
unshiftitem(us,9)

// join
j = ['test','west','rest','best']
function joinitem(element) {
    console.log(element.join(" "));
}
joinitem(j)

// concat
co = [123]
at = [456]
nc = [789]
function concatitem(a,b) {
    console.log(a.concat(b));
}
concatitem(co,at)

// flat
f = [[12],[34],[56],[78,90]]
function flatitem(element) {
    console.log(element.flat());
}
flatitem(f)

// splice
sp = ['Mango','Banana','Apple','Orange']
function spliceitem(element,num1,num2,abc,ghi) {
    element.splice(num1,num2,abc,ghi)
    console.log(element);
}
spliceitem(sp,2,0,'Lemon','Dry Fruits')

// slice
sl = ['Mango','Banana','Apple','Orange']
function sliceitem(element,num1) {
    console.log(element.slice(num1));
}
sliceitem(sl,2)

