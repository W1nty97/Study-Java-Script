"use strict";

console.log("Задание 1")

let str = "abcde"
console.log(str[0]+str[2]+str[4])

console.log("Задание 2")

let str2 = "abcde"
let qwerty = str2[4]+str2[3]+str2[2]+str2[1]+str2[0];

console.log("Задание 3")

let str3 = "abcde"
let num = str3[0]
console.log(num)

console.log("Задание 4")

let str4 = "Как каннибалы называют беременных женщин? Киндер сюрприз"
let last = str4.length-1
console.log(str4[last])

console.log("Задание 5")

let str5 = "Мне бы не выпустить из рук бензопилу"
let last2 = str5.length-2
console.log(str5[last2])

console.log("Задание 6")

let str6 = "12345"
console.log(Number(str6[0])+Number(str6[1])+Number(str6[2])+Number(str6[3])+Number(str6[4]))

console.log("Задание 7")

let str7 = "12345"
console.log(Number(str7[0])*Number(str7[1])*Number(str7[2])*Number(str7[3])*Number(str7[4]))

console.log("Задание 8")

let num1 = 47;
num1 += 7;
num1 -= 18;
num1 *= 10;
num1 /= 15;
console.log(num1)

console.log("Задание 9")

let num2 = 10;
num2++;
num2++;
num2--;
console.log(num2)

console.log("Задание 10")

let vosrast = prompt("Укажите ваш возраст")
console.log("Ваш возраст: " + vosrast)

console.log("Задание 11")

document.write("Какой-то текст")

console.log("Задание 12")

console.log("1"+"\n"+"2"+"\n"+"3"+"\n"+"4"+"\n"+"5")

console.log("Задание 13")

let str8 ="123"
console.log(str8[0])
console.log("Задание с ошибкой")

console.log("Задание 14")

console.log(1 * 24 * 60 * 60) 

console.log("Задание 15")

console.log(1 * 365 * 24 * 60)

console.log("Задание 16")

let a = 2
let s = a**2
console.log(s)

console.log("Задание 17")

let arr = ['1', '8', '3', '15']
console.log(arr)

console.log("Задание 18")

let arr2 = ['1', '2', '3']
console.log(arr2[0])

console.log("Задание 19")

let arr3 = ['a', 'b', 'c', 'd'];
console.log(arr3[0]+arr3[1]+arr3[2]+arr3[3])

console.log("Задание 20")

let arr4 =[Math.floor (Math.random () * (5 - 1 + 1)) + 1,Math.floor (Math.random () * (5 - 1 + 1)) + 1,Math.floor (Math.random () * (5 - 1 + 1)) + 1]
console.log(arr4.length)

console.log("Задание 21")

let arr5= ['a','b','c']
arr5[0] = 1
arr5[1] = 2
arr5[2] = 3
console.log(arr5)

console.log("Задание 22")

let arr6= [1,5,6]
arr6[0] +=3
arr6[1] +=3
arr6[2] +=3
console.log(arr6)

console.log("Задание 23")

let arr7= ['1','2','3']
arr7[0] ++
arr7[1] ++
arr7[2] ++
console.log(arr7)

console.log("Задание 24")

let arr8 = ['1','2','3']
arr8.push('4','5')
console.log(arr8)

console.log("Задание 25")
let arr9 = [];
arr9[3] = 'a';
arr9[8] = 'b';
console.log(arr9.length)

console.log("Задание 26")

let arr10 = []
arr10.push('1','2','3')
console.log(arr10)

console.log("Задание 27")

let arr11 = {1:'a', 2:'b', 3:'c'}; let key = 2
console.log(arr11[key])

console.log("Задание 28")

let arr12 = ['a', 'b', 'c', 'd', 'e']
delete arr12[3]
delete arr12[0]
console.log(arr12.length)
console.log(arr12)