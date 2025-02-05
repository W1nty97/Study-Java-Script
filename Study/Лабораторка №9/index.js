'use strict'

//Задание 1

let change=document.querySelector('.change');
let input=document.querySelector('.input');

input.addEventListener('blur', func);

function func(){
    change.textContent = input.value;
};

//Задание 2

let sum=document.querySelector('.sum');
let num=document.querySelector('.input1');
let num1=document.querySelector('.input2');
let button=document.querySelector('.btn');

button.addEventListener('click', funcsum);

function funcsum(){
    sum.textContent = Number(num.value) + Number(num1.value);
};

//Задание 3

let sum1=document.querySelector('.sum1');
let num2=document.querySelector('.input3');

num2.addEventListener('blur', funcsum1);

function funcsum1(){
    sum=0;
    let arr = num2.value.split('');
    for(let elem of arr){
        sum+=Number(elem)
    };
    sum1.textContent=sum
};

//Задание 4

let result=document.querySelector('.sred');
let num3=document.querySelector('.input4');

num3.addEventListener('blur', funcsred);

function funcsred(){
    sum=0;
    let arr = num3.value.split(',');
    for(let elem of arr){
        sum+=Number(elem) / arr.length
    }
    result.textContent=sum
};

//Задание 5

let fio=document.querySelector('.fio');
let name=document.querySelector('.name');
let surname=document.querySelector('.surname');
let patronymic=document.querySelector('.patronymic');

fio.addEventListener('blur', funchum);

function funchum(){
    let arr=fio.value.split(' ');
    surname.value=arr[0]
    name.value=arr[1];;
    patronymic.value=arr[2];
};

//Задание 6

let fio1=document.querySelector('.fio1');
let result1=document.querySelector('.result1');

fio1.addEventListener('blur', ToUpperCasefio);

function ToUpperCasefio(){
    let arr=fio1.value.split(' ');
    let arr1=[];
    arr.forEach(el => {arr1.push(el[0].toUpperCase()+el.slice(1))    
    });
    fio1.value=arr1.join(' ');
};

//Задание 7

let imp=document.querySelector('.input5');
let len=document.querySelector('.len');

imp.addEventListener('blur', lengfunc);

function lengfunc(){
    let arr=imp.value.split(' ');
    len.textContent=arr.length;
};

//Задание 8

let inp1=document.querySelector('.input6');

inp1.addEventListener('blur', funcreverse);

function funcreverse(){
    let result=inp1.value.split('.').reverse().join('-')
    inp1.value=result
};

//Задание 9

let result2=document.querySelector('.result2');
let inp2=document.querySelector('.input7');

inp2.addEventListener('blur', funcproverka);

function funcproverka(){
    let zn=inp2.value;
    let zn1=inp2.value.split('').reverse().join('');
    if(zn==zn1){
        result2.textContent+=true
    }else{
        result2.textContent+=false
    };
};

//Задание 10

let result3=document.querySelector('.result3');
let inp3=document.querySelector('.input8');

inp3.addEventListener('blur', funcproverka1);

function funcproverka1(){
    let arr=inp3.value.split('');
    for(let el of arr){
        if(el==3){
           return result3.textContent+=true;
        };
    };
    return result3.textContent+=false
};

//Задание 11

let btn=document.querySelector('.btn1');
let arrp=document.querySelectorAll('.wow');

btn.addEventListener('click', funczapoln);

function funczapoln(){
    for(let i=0;i<=arrp.length-1;i++){
        arrp[i].textContent=i+1
    };
};

//Задание 12

let arrlink=document.querySelectorAll('.link');

    for(let i=0;i< arrlink.length;i++){
        arrlink[i].innerHTML=arrlink[i].innerHTML+'('+ arrlink[i].href +')'
    };

//Задание 13

let numberq = document.querySelectorAll(".square");

numberq.forEach((numberq) => {
  numberq.addEventListener("click", function(){
    numberq.textContent=Number(numberq.textContent)**2
  });
});

//Задание 14

let inp4=document.querySelector('.input9');

inp4.addEventListener('blur', function(){
    let week=['вс','пн','вт','ср','чт','пт','сб'];
    let str=inp4.value;
    let arr=str.split('.').reverse().join(',');

    let date=new Date(arr);
    let day=date.getDay();

    let days=week[day];

    inp4.value=days;
});

//Задание 15

let num4=document.querySelector('.text1');
let btn2=document.querySelector('.btn2');
let btn3=document.querySelector('.btn3');

btn2.addEventListener('click', funccount);

function funccount(){
    let count=Number(num4.textContent);
        count++;
        num4.textContent=count

};

btn3.addEventListener('click', funccountdown);

function funccountdown(){
    if(num4.textContent>0){
        let count=Number(num4.textContent);
        count--;
        num4.textContent=count
    };
};

//Задание 16 

let inp5=document.querySelector('.input10');
let num5=document.querySelector('.num5');
let num6=document.querySelector('.num6');

num5.addEventListener('click', function(){
    let count1=Number(num5.textContent);
    count1++;
    num5.textContent=count1
});


num6.addEventListener('click', function(){
    let count2=Number(num6.textContent);
    count2++;
    num6.textContent=count2
});


inp5.addEventListener('focus', function(){
    let one=num5.textContent
    let two=num6.textContent
    inp5.value=Number(one)+Number(two)
});

//Задание 17

let div=document.querySelectorAll('.div');
let btn4=document.querySelector('.btn4');

btn4.addEventListener('click', function(){
    for(let i=0;i<div.length;i++){
        div[i].textContent = div[i].textContent.slice(0,-10)
    };
});

//Задание 18

    let inp6 = document.querySelector('.input11');
    let btn5 = document.querySelector('.btn5');
  
    btn5.addEventListener('click', random);
  
    function random() {
      let str = '';
      let znach = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
      for (let i = 0; i < 8; i++) {
        str += znach.charAt(Math.floor(Math.random() * znach.length));
      }
  
      inp6.value = str;
    };

    //Задание 19

    // let inp12=document.querySelector('.input12');
    // let result4=document.querySelector('.text2');

    // inp12.addEventListener('blur', function(){
    //     let str='';
    //     let arr=inp12.value.split('');

    //     for(let i=0;i<arr.length;i++){
    //         str+=arr[i].(Math.floor(Math.random() * arr.length))

    //     };
    //     inp12.value=str
    // });

    //Задание 20

    let ptext=document.querySelector('.text3');
    let btn6=document.querySelector('.btn6');
    let inp13=document.querySelector('.input13');

    btn6.addEventListener('click', function(){
        let celsiy = (Number(inp13.value)-32)*5/9
        ptext.textContent=celsiy
    });