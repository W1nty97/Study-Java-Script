'use strict'

console.log('Задание 1')

let arr=['a','b','c','d','e']; 
for(let elem of arr) { //for of позволяет последовательно перебирать элементы массивов
    console.log(elem)
};

console.log('Задание 2')

let obj = {x: 1, y: 2, z: 3};
for(let key in obj) { //for in предусмотрен для перебора уже объектов
    console.log(key)
};

console.log('Задание 3')

let i=11;
while(i<=33){ //while безперерывно выполняет цикл, пока условие в скобках не перестанет быть true
    console.log(i);i++ //i++ означает что с каждым новым повторением циклом итерация то есть i возрастает на 1 
}

console.log('Задание 4')

 let num=Math.floor(Math.random () * 9 + 1) //вводим переменную с любой цифрой ну то есть от 1 до 9
 i=0 //Let i добавляем итерацию, но я её просто перезаписал стобы эфективнее использовать память
 while(num<=1000){ // условие : цикл будет продолжаться пока переменная меньше или равна 1000
    num*=3;i++ // переменная будет умножатся на 3 каждое повторение циклов
 }
console.log(i+'(кол-во итераций)'+' '+num+'(конечное число)')//задание: узнать кол-во итераций цикла и конечное число, после того как переменная
                                                             //условие не станет false, а то есть num>=1000
console.log('Задание 5')
let str=''
for(let i=1;i<=100;i++){
    str+=i+' '; 
}
console.log(str)

console.log('Задание 6')

str=''
for(let i=1;i<=100;i++){
    if(i %2==0){
        str+=i+' ';
    }}
console.log(str)

console.log('Задание 7')

str=''
for(let i=100;i>=0;i--){ //в скобках указано 1) добавление переменной i(итерации) 2)условие 3) i-- итерация будет
    str+=i+' ';//уменьшатся на 1 таким образом мы идём от 100 до 0
}
console.log(str)

console.log('Задание 8')

arr = ['a', 'b', 'c', 'd', 'e'];
for(let elem of arr) {
    if(elem!=arr[0]&&elem!=arr[4]){ // elem не равно первому и последнему символу
        console.log(elem)//выведет все кроме первого и последнего
}}

console.log('Задание 9')


for(let i= arr.length-1;i>=0; i--){//итерация равна последнему символу а значит с него начинается и перебирает 
    console.log(arr[i]);//массив задом наперёд
}

console.log('Задание 10')

obj = {a: 1, b: 2, c: 3, d: 4, e: 5}
for(let key in obj){
    if(obj[key]%2!=0){ //значение ключа должно быть нечётным
        console.log(key)
}}

console.log('Задание 11')

let sum=0;
for(let i=1;i<=99;i++){ 
    if(i %2!=0){ //если число нечётное
        sum+=i // то прибавляем его к сумме и таким образом получаем сумму нечётных чисел от 1 до 99 
}}
console.log(sum)

console.log('Задание 12')
let sum1=0;
arr = [2, 5, 9, 3, 1, 4];
for(let elem of arr){
    if(elem %2==0){ //суммируем только чётные эелементы массива
        sum1+=elem
}}
console.log(sum1)

console.log('Задание 13')

str=''
for(let i=9;i>=1;i--){
        str+=i;
}
console.log(str)

console.log('Задание 14')

str=''
for(let i=-1;i>=-9;i--){
    str+=i;
}
console.log(str)

console.log('Задание 15')

str=''
for(let i=10;i<=1000;i++){
    str=String(i); //чтобы обращаться к индекам нужно переобразовать в строку
    console.log(str[0]); // выводит только первый символ каждого числа от 10 до 1000 
}

console.log('Задание 16')

sum=0;
for(let i=10;i<=1000;i++){
    str=String(i);
    console.log(Number(str[0])+Number(str[1])); //сделали строкой, но выводим под номерным типом данных
}

console.log('Задание 17')

arr=[1, 3, 4, 27, 0, 10, 2, 3];
for(let elem of arr){
    if(elem==0){ // когда находит ноль
        console.log(elem) //выводит его 
        break;   // и завершает цикл
    }else{
        console.log(elem)
    }
}

console.log('Задание 18')

arr=[4, 1, 10, 47, 97, 3, 8, 22, 457];
for(let elem of arr){
    if(elem==3){
        console.log(arr.indexOf(elem)) //выводим индекс найденного элемента в данном случае числа 3
        break;// и завершаем цикл
}}

console.log('Задание 19')

sum=0;
i=0
while(sum<=100){
    sum+=i+1;i++
}
console.log(i)

console.log('Задание 20')

str=''
for (let i = 1; i <= 3; i++) { //вложенные циклы выполняют каждый свою функцию
  for (let j = 1; j <= 3; j++) { //но работают вместе
    str+=String(i)+String(j)+' '; //соединяем значения которые они выводят
  }
}
document.write(str)//выводим на экран, а не в консоль
console.log('выведено на экран')

console.log('Задание 21')

arr=[];
for(let i=1;i<=10;i++){
    arr.push(i) //заполняем пустой массив числами с помощью значения итерации
}
console.log(arr)

console.log('Задание 22')

arr=[1, -3, 97, -4, 404, 265, 35, -567];
let arr1=[];
for(let elem of arr){
    if(elem>0){
        arr1.push(elem) 
}}
console.log(arr1)

console.log('Задание 23')

console.log('метод for') // ЭТО ТЕБЕ НУЖНО

arr=[5, 4, 3, 4, 10, 6, 7];
for(let elem in arr){ // тут используется for in
    arr[elem]=arr[elem]**2 // заменяем каждый элемент массива на возведённый в квадрат
}
console.log(arr)

console.log('метод map') //Это не нужно

arr=arr.map(el=>el**2)
console.log(arr)

console.log('Задание 24')

arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
arr1 = [1, 2, 3, 4, 5, 6, 7];
obj={};
for (let i=0;i<=6;i++){
    let numday=arr1[i];
    let day=arr[i];
    obj[numday]=day;
}
console.log(obj)

console.log('Задание 25')

obj = {x: 1, y: 2, z: 3};
for(let key in obj){
    obj[key]=obj[key]+1 // поднимаем каждое значение ключа на 1
}
console.log(obj)

console.log('Задание 26')

arr=[1, 31, 2, -404, 9, 3, 45, 98, 8, -1];
for(let elem of arr){
    if(elem>0&&elem<10){
        console.log(elem)
    }
}

console.log('Задание 27')

sum=1
let pr=prompt('Задание 27: выберите число от 1 до 5', 1, 2, 3, 4, 5)
for(let i=1;i<=pr;i++){ 
    sum=sum*i // находим факториал, а то есть число которое получается если умножать каждое число на следующее
}//пока не дойдём до выбранного
console.log(sum)

console.log('Задание 28')
str=''
arr=['З', 'а', 'д', 'а', 'н', 'и', 'е', '2', '8'];
for(let elem of arr){
    str+=elem+'<br>'; // тут используется не '\n', а '<br>' потому что мы выводим на экран проходя HTML
}// а там абзац обозначется так '<br>'
document.write('<br>'+str);



console.log('Дополнительное задание')

let obj1=[
    {login: 1234, password: 2657, surename: 'Anikin', Name: 'Ivan'},
    {login: 5678, password: 4693, surename: 'Morozova', Name: 'Vlada'},
    {login: 9101, password: 9410, surename: 'Borisova', Name: 'Aleksandra'}
];

let log=prompt('введите логин');
let pass=prompt('введите пароль');

for (let i=0; i< obj1.length; i++){
    if(obj1[i].login==log&&obj1[i].password==pass){
        console.log('Добро пожаловать, '+obj1[i].surename+' '+obj1[i].Name+'!');
}}
 
