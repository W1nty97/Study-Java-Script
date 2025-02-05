"use strict"

// task1
let coordinatestask1 = document.querySelector(".mian__task-coordinates");

document.addEventListener('mousemove', (event)=>{
    coordinatestask1.textContent = "X: " + event.clientX + " Y: " + event.clientY
}); 
// task2
let btntask2 = document.querySelector(".main__task-btn");

btntask2.addEventListener('click', func);
btntask2.addEventListener('dblclick', func);

function func(event) {
    if(event.type=='click'){
        btntask2.textContent = "GREEN";
        btntask2.style.webkitTextStroke = "0.5px rgb(0, 118, 2)";
    }else if(event.type=='dblclick'){
        btntask2.textContent = "RED";
        btntask2.style.webkitTextStroke = "0.5px rgb(255, 0, 0)";
    };
};
// task3
let listtask3 = document.querySelector(".main__task-list");

listtask3.addEventListener('click', (event)=>{
    if(event.target.tagName=="UL"){
        console.log(listtask3);
    }else if(event.target.tagName=="LI"){
        event.target.textContent += "!!!";
    };
});
// task4
let inp4 = document.querySelector(".main__task-input");

inp4.addEventListener('keydown', (event)=>{
    inp4.value = event.code;
});
// task5
let inp5 = document.querySelector("#inp5")
let txt5 = document.querySelector("#txt5")

inp5.addEventListener('keydown', (event)=>{
    if(event.code=="Enter"){
        txt5.textContent=event.target.value;
        event.target.value="";
    };
});
// task6
let btn6 = document.querySelector("#btn6");

btn6.addEventListener("click", (event)=>{
    if(event.altKey){
        btn6.style.webkitTextStroke = "0.5px rgb(255, 1, 1)";
    }if(event.shiftKey){
        btn6.style.webkitTextStroke = "0.5px rgb(52, 1, 255)";
    }if(event.ctrlKey){
        btn6.style.webkitTextStroke = "0.5px rgb(3, 182, 0)";
    }
})
// task7
let links = document.querySelectorAll(".main__link")

for(let elem of links){
    elem.addEventListener('click', (event)=>{
        event.preventDefault();
        event.target.textContent+=elem.href;
    });
};
// task8
let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let link8 = document.querySelector("#link8");
let txt8 = document.querySelector("#sum");

link8.addEventListener('click', (event)=>{
    event.preventDefault();
    txt8.textContent= Number(inp1.value) + Number(inp2.value);
});
// task9
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
let elem4 = document.querySelector("#elem4");

elem1.addEventListener('click', ()=> {
	alert('Legend');
});
elem2.addEventListener('click', ()=> {
	alert('Epic');
});
elem3.addEventListener('click', ()=> {
	alert('Rare');
});
elem4.addEventListener('click', ()=> {
	alert('Cammon');
});
// task10
let div10 = document.querySelector("#ten");

div10.addEventListener('click', (event)=>{
    if(event.target.tagName=="DIV"){
        event.target.style.border = "3px solid rgb(0, 8, 255)"
    }if(event.target.tagName=="UL"){
        event.target.style.border = "3px solid rgb(255, 60, 0)"
    }if(event.target.tagName=="LI"){
        event.target.textContent += "!"
        event.target.style.border = "3px solid rgb(0, 186, 6)"
    };
});
