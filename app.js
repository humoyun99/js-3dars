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
const sayhello=function(name,day){
    console.log(`hayrli ${day} ${name}`)
}
sayhello('humoyun','tong')
const calcArea=function(radus){
    const area=3.14 * radus ** 2
    return area
}
const a=calcArea(5)
console.log(a)
const calsAreo=(raduse)=>{
    const area=3.14 * raduse ** 2
    return area
}
const al=calsAreo(5)
console.log(al)