// String Methods to Functions
// length
l = "I am learning JavaScript "
function lengthitem(element) {
    console.log(element.length);
}
lengthitem(l)

// slice
sl = "JavaScript is Easy"
function sliceitem(element,num1,num2) {
    console.log(element.slice(num1,num2));
}
sliceitem(sl,4,10)

// substring
ss = "HTML is used for Structure a Web Page"
function substringitem(element,num1,num2) {
    console.log(element.substring(num1,num2));
}
substringitem(ss,0,16)

// substr
sts = "HTML is used for Structure a Web Page"
function substritem(element,num) {
    console.log(element.substr(num));
}
substritem(sts,8)

// replace
re = "Javascript is not easy but you can make it easy"
function replaceitem(element,abc,xyz) {
    console.log(element.replace(abc,xyz));
}
replaceitem(re,"easy","Easy")

// replaceAll
ra = "Javascript is not easy but you can make it easy"
function replaceallitem(element,abc,xyz) {
    console.log(element.replaceAll(abc,xyz));
}
replaceallitem(ra,"easy","Easy")

// toUpperCase
uc = "CSS is used for Styling a Web Page"
function touppercaseitem(element) {
    console.log(element.toUpperCase());
}
touppercaseitem(uc)

// toLowerCase
lc = "CSS is used for Styling a Web Page"
function tolowercaseitem(element) {
    console.log(element.toLowerCase());
}
tolowercaseitem(lc)

// concat
cc = "HTML is used for Structure a Web Page "
cn = "CSS is used for Styling a Web Page"
function concatitem(element,abc) {
    console.log(element.concat(abc));
}
concatitem(cc,cn)

// trim
t = "    Bootstrap is used for Creations of Websites and Web apps    "
function trimitem(element) {
    console.log(element.trim());
}
trimitem(t)

// trimStart
ts = "    Bootstrap is used for Creations of Websites and Web apps    "
function trimstartitem(element) {
    console.log(element.trimStart());
}
trimstartitem(ts)

// trimEnd
te = "    Bootstrap is used for Creations of Websites and Web apps    "
function trimenditem(element) {
    console.log(element.trimEnd());
}
trimenditem(te)

// padStart
ps = "Javascript is used for Devlopment of Web Page"
function padstartitem(element,a) {
    console.log(element.padStart(a));
}
padstartitem(ps,100)

// padEnd
pe = "Javascript is used for Devlopment of Web Page"
function padenditem(element,b) {
    console.log(element.padEnd(b));
}
padenditem(pe,220)

// charAt
ca = "Use GitHub Daily"
function charatitem(element,num) {
    console.log(element.charAt(num));
}
charatitem(ca,4)

// charCodeAt
cca = "Use GitHub Daily"
function charcodeatitem(element,num) {
    console.log(element.charCodeAt(num));
}
charcodeatitem(cca,4)

// split
sp = "Javascript Language"
function splititem(element) {
    console.log(element.split());
}
splititem(sp)

// indexOf
io = "Javascript Language"
function indexofitem(element,abc) {
    console.log(element.indexOf(abc));
}
indexofitem(io,'L')

// lastIndexOf
lio = "Javascript Language"
function lastindexofitem(element,abc) {
    console.log(element.lastIndexOf(abc));
}
lastindexofitem(lio,'a')

//search 
sh = "Practice makes Man Perfect"
function searchitem(element,abc) {
    console.log(element.search(abc));
}
searchitem(sh,'a')

//match 
mh = "Practice makes Man Perfect"
function matchitem(element,abc) {
    console.log(element.match(abc));
}
matchitem(mh,'e')

//includes 
ic = "Practice makes Man Perfect"
function includesitem(element,abc) {
    console.log(element.includes(abc));
}
includesitem(ic,'women')

//startsWith 
sw = "Practice makes Man Perfect"
function startsswithitem(element,abc) {
    console.log(element.startsWith(abc));
}
startsswithitem(sw,"Pra")

//endsWith 
ew = "Practice makes Man Perfect"
function endswithitem(element,abc) {
    console.log(element.endsWith(abc));
}
endswithitem(ew,"ect")
