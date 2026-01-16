/**
 * At,charAt,CharCodeAt
 */


let a=54;


let str=`abcdefghi${a}`;

console.log(str);

//at
console.log(str.at(5));

//CharAt
console.log(str.charAt(3));

//charCodeAt
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(-4));