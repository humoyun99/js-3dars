//TDZ ulik zona
//const va letni elon qilmasdan oldin ishlatmaymiz
let age=24
console.log(age)
//bu hato narsa 
console.log(yosh)
var yosh=23
//funksiyalar
//function decloration
function seyHello(){
    console.log("salom humoyun")
}
//odiy funksiyaqada buni farqi yuq
seyHello()
//function expression
const seyByebye=function (){
    console.log("hayr osiyo")
}
// constanta orqali birilgan funksiyalar hardoim tagida chaqirilishi kirak
seyByebye()
//arraw funktion
const nice=()=>{
    console.log("this is arraw function")
}
nice()
