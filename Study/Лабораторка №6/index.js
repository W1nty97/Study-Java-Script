'use strict'

console.log('Задание 1')

let x = 4 // добавляем переменную 4
if(x!=0&&x>-2){ // условие x не равен 0 и x больше -2
    let y = 1/x+Math.sqrt(x+1)// Math.sqrt находит квадратный корень
    console.log(y)
}else{
    console.log('Функция не выполнена')
}

console.log('Задание 2')

let age = Math.floor(Math.random () * 100 + 1) //Math.random выбирает случайное значение из данного ему диапазона чисел 
let abult = age>=18 ? 'доступ разрешён': 'доступ запрещён'; //Тернарный оператор. имеет всего два возможных ответа
console.log(age)
console.log(abult)

console.log('Задание 3')

let year = Math.floor(Math.random () * 20 + 2005)
if(year %4==0&&year %100==0||year %400==0){ //% это деление без остатка || это "ИЛИ" для того чтобы всё сработало
    console.log(year+'г. является высокосным')                      //должно быть верным хотя бы одно
}else{
    console.log(year+'г. является невысокосным')
}

console.log('Задание 4')

let f = 1
let n = 9
let a = 8
let ff = 7
if(f>n&&f>a&&f>ff){
    console.log(f)
}else if(n>f&&n>a&&n>ff){
    console.log(n)
}else if(a>f&&a>n&&a>ff){ //сранение каждого с каждым в поисках наибольшего
    console.log(a)
}else if(ff>f&&ff>n&&ff>a){
    console.log(ff)
}

console.log('Задание 5')

let role = prompt('Кто ты воин?', 'админ','механик','начальник','электрик') //prompt выводин на экран вопрос на
if(role=='начальник'){                                                              // который можно дать ответ
    console.log('Открывает информацию для начальника')
}else if(role=='админ'){
    console.log('Открывает информацию для админа')
}else if(role=='электрик'){
    console.log('Открывает информацию для электрика')
}else if(role=='механик'){
    console.log('Открывает информацию для механика')
}else{
    console.log('who are you?!')
}

console.log('Задание 6')
let month = Math.floor(Math.random () * 12 + 1)
if(month ==1||month ==2||month==12){ //Если переменная равна выбранным месяцам, то выходит нужное значение
    console.log(month)                  //== сравнивает значение независимо от типа данных
    console.log('Зима')                 //=== сравнивает тип данных то есть например строка и число будут неравны
}else if(month ==3||month ==4||month==5){   // Даже если число там написано одинаковое
    console.log(month)
    console.log('Весна')
}else if(month ==6||month ==7||month==8){
    console.log(month)
    console.log('Лето')
}else if(month ==9||month ==10||month==11){
    console.log(month)
    console.log('Осень')
}

console.log('Задание 7')

let str ='abcde'
if(str[0]=='a'){ //str[0] обращается к первому символу в нашей переменной так так отсчёт идет с нуля то есть 
    console.log(true)    //в твоём имени индексы символов такие С[0]а[1]ш[2]а[3]
}else{
    console.log(false)
}

console.log('Задание 8')
let num = 12345
str = String(num) // переобразует числовое значение в строчное, чтобы можно было проверить символы по их индексам
if(str[0]==1||str[0]==2||str[0]==3){
    console.log(true)
}else{
    console.log(false)
}

console.log('Задание 9')

let sum = 936
let qwerty = Math.floor(sum/100)+Math.floor(sum/10%10)+(sum%10); //Math.floor округляет в меньшую сторону числа
console.log(qwerty)

console.log('Задание 10')

let sum1= 123321
sum1=String(sum1) // переобразовали в строку
let sum2=sum1[0]+sum1[1]+sum1[2] // разделили 1 переменную на 2
let sum3=sum1[3]+sum1[4]+sum1[5]
sum2=Number(sum2) // переобразовали в число
sum3=Number(sum3)
let qwerty1=Math.floor(sum2/100)+Math.floor(sum2/10%10)+(sum2%10);
let qwerty2=Math.floor(sum3/100)+Math.floor(sum3/10%10)+Math.floor(sum3%10)
if(qwerty1==qwerty2){ // проверяем равны ли суммы каждой тройки цифр
    console.log(qwerty1)
    console.log(qwerty2)
    console.log(true)
}else{
    console.log(qwerty1)
    console.log(qwerty2)
    console.log(false)
}

console.log('Задание 11')

num=Math.floor (Math.random () * 100 + 1)
if(num %2==0){
    console.log(num+' '+'чётное')
}else{
    console.log(num+' '+'не чётное')
}

console.log('Задание 12')

let arr =['Зеленоград', 'Москва', 'Уфа']
if(Object.keys(arr).length==3){
    console.log(Object.keys(arr).length) // Object.keys(arr).length проверяет количество элементов в массиве
}else{
    console.log(false)
}

console.log('Задание 13')

let b=7
let m=16
let abult1=b>m? b: m;
console.log(abult1)

console.log('Задание 14')

let lang='ru'
switch (lang){
    case 'ru':
        console.log('рус')
    break;
    case 'en':
        console.log('анг') // метод через switch(обращается к переменной) и case(условие) 
    break; // break пропускает оставшиеся операции если условие будет выполнено
    case 'de':
        console.log('нем')
    break;
    default:
        console.log('Язык не поддерживается')
    break;
}
