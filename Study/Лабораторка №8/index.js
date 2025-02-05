'use strict'

console.log('Задание 1');

function func(){
    console.log('Ivan')
};

func();

console.log('Задание 2');

function func1(num){
    num=num**3
    console.log(num)
};

let number=2;

func1(number);

console.log('Задание 3');


function func2(num,num1,num2){
    let sum=num+num1+num2
    console.log(sum)
};

let number1=3;
let number2=4;

func2(number, number1, number2);

console.log('Задание 4');

function func3(num,num1){
    let koren3=Math.sqrt(num)
    let koren4=Math.sqrt(num1)
    console.log(koren3+koren4)
};

func3(number1, number2);

console.log('Задание 5');


function func4(num){
    let i=0
    for(i;num>=10;i++){
        num/=2
    }
    console.log(num+' '+i+' Кол-во итераций')
};

let number3=1234;

func4(number3);

console.log('Задание 6');

function func5(str){
    let arr=[]
    for(let elem of str){
        arr.push(elem)
    }
    console.log(arr)
};

let str='hello';

func5(str);

console.log('Задание 7');

function func6(str){
    str=str.split('').reverse().join('');
    console.log(str)
};

func6(str);

console.log('Задание 8');

function func7(str){
    str=str.charAt(0).toUpperCase()+str.slice(1)
    console.log(str)
};

func7(str);

console.log('Задание 9');

function func8(){
    let arr=[]
    for(let i=1;i<=10;i++){
        arr.push(i)
    }
    console.log(arr)
};

func8();

console.log('Задание 10');

function func9(sec){
    let day=sec/60/60/24
    console.log(day)
};

let sec=3600

func9(sec);

console.log('Задание 11');

function func10(){
    let arr=['что-то', 1038451, 'Олег', 4, true, 'six', 'семь']
    let index=Math.floor(Math.random ()*arr.length)
    console.log(arr[index])
};

func10();

console.log('Задание 12');

function func11(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0) console.log(num+' '+'не простое')
            return;
    }
    console.log(num+' '+'простое')
};

let number4=Math.floor(Math.random ()*3+2);

func11(number4);

console.log('Задание 13');

func=123;

console.log(func);

console.log('Задание 14');

func1=()=>1;

console.log(func1());

console.log('Задание 15');

function func12(arr){
    let ret=[];
    arr.forEach(e => {ret.push(e[0].toUpperCase()+e.slice(1));
    });
    console.log(ret);
};

let arr=['scorpion', 'ermak', 'tremor', 'rain', 'smoke'];

func12(arr);

console.log('Задание 16');

function func13(){
    return function(){
        return 1;
    };
};

function func14(){
    return function(){
        return 2;
    };
};

console.log(func13()()+func14()());

console.log('Задание 17');

function func15(arr){
    let ret=[];
    arr.forEach(e => {ret.push(e.split('').reverse().join(''));
    });
    console.log(ret);
};

func15(arr);

console.log('Задание 18');

function createcounter(){
    let count=10;
    function counter(){
        count--;
        console.log (count);
    }
    return counter;
};

let incrementCounter=createcounter();