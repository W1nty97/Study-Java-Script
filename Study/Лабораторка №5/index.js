"use strict"

console.log("Задание 1")

let obj={1:'Понедельник',2:'Вторник',3:'Среда',4:'Четверг',5:'Пятница',6:'Суббота',7:'Воскресенье'}
console.log(obj[1]+", "+obj[2]+", "+obj[3]+", "+obj[4]+", "+obj[5]+", "+obj[6]+", "+obj[7])

console.log("Задание 2")

obj={1:"Январь",2:"Февраль",3:"Март",4:"Апрель",5:"Май",6:"Июнь",7:"Июль",8:"Август",9:"Сентябрь",10:"Октябрь",11:"Ноябрь",12:"Декабрь"}
console.log(obj)

console.log("Задание 3")

let user={"name":"Oleg","surname":"Sinitsin","patronymic":"Ivanovich"}
console.log(user.surname+" "+user.name+" "+user.patronymic);

console.log("Задание 4")

let date={"year":"2024","mounth":"10","day":"28"}
console.log(date.day+"."+date.mounth+"."+date.year)

console.log("Задание 5")

obj={"1a":1,"b2":2,"c-c":3,"d4":4,"e5":5}
console.log(obj["1a"])
console.log(obj["b2"])
console.log(obj["c-c"])
console.log(obj["d4"])
console.log(obj["e5"])

console.log("Задание 6")

obj = {'x':1,'y':2,'z':3}
console.log(obj.x**2)
console.log(obj.y**2)
console.log(obj.z**2)

console.log('Задание 7')

obj = {'x':obj.x**2,'y':obj.y**2,'z':obj.z**2}
console.log(obj)

console.log('Задание 8')

console.log(Object.keys(obj).length)

console.log('Задания 9')

let key = obj['y']
console.log(key)

console.log('Задание 10')
//1
obj = {}
obj.a='right'
obj.b='left'
obj.c=2
console.log(obj)
//2
obj = {'x': 1, 'y': 2, 'z': 3}
key = obj.x
console.log(key)

console.log('Задание 11')

obj = {'x': 1,'y': 2,'z': 3}
key = obj.x
let key0 = obj.y
let key1 = obj.z
console.log(key)

console.log('Задание 12')

console.log('x'in obj)

console.log('Задание 13')

delete obj.y
console.log(obj)

console.log('Задание 14')

obj = {'x':'Один','y':'Два','z':'Три'}
console.log(typeof obj +' '+typeof obj.x)

console.log('Задание 15')

console.log('number'+' '+'string'+' '+'boolean'+' '+'null'+' '+'undefined')

//Доп задания
console.log("Ex1")

let a= 2
let b= 3
let c= 4

if(b<a&&b<c){
    console.log('b')
}else if(c<a&&c<b){
        console.log('c')
}else if(a<b&&a<c){
           console.log('a') 
}else{
        console.log('error')
    }
    
console.log("Ex2")

b='3'
c=true

if(a===b){
    console.log(true)
}else{
    b='2'
};
if(a===b){
    console.log(true)
}else if(a==b){
    console.log(true)
}else{
    console.log(false)
};

console.log("Ex3")

if(typeof b=="number"){
    console.log(true)
}else{ 
    b=true  
    if(typeof b=="number"){
    console.log(true)
    }else{
        b=9
        if(typeof b==="number"){
        console.log(true)
        }else{
         console.log('Error')
}}}