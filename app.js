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
 const bill=function(pruduct,tax){
    let total=0
    for (let i = 0; i < pruduct.length; i++) {
        total+=pruduct[i]+pruduct[i]*tax
    }
    return total
 }
 const result=bill([10,13,45],0.2)
 console.log(result)
 function calsAge(bithday,firstday){
    const age=2024-bithday
    console.log(`${firstday} siz ${age} yoshga kirdingiz`)
    return age
 }
 const ag=calsAge(1999,'humoyun')
 //bir funksiyani ichiga ikinchi funksiyan yozish
 const myFunc=(callbackFunk)=>{
    let number=50
    callbackFunk(number)
 }
 myFunc(function(value){
    console.log(value)
 })
 //for ech
 const ism=['humoyun','sanjar','ravshan']
 const newism=[]
 ism.forEach(function(is){
    const newIsm=is.charAt().toUpperCase+is.slice(1).toLowerCase+'shoh'
    newism.push(newIsm)
 })
 console.log(newism)
 //obyiktlar
 const user={
    name:'humoyun',
    age:26,
    email:'baxronoofxumoyun@gmail.com',
    lang:['uzbek','rus','nimis'],
    location:'samarqand'
 }
 console.log(user)
 console.log(user.location)