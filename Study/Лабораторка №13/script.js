"use strict"

// task1
let inp1 = document.querySelector("#inp1");

inp1.addEventListener('blur', func1);

function func1(){
    let elem = this;
    function square(){
        return elem.value ** 2;
    };
    inp1.value=square();
};
// task2
let task2 = document.querySelector("#task2");
let inps2 = task2.querySelectorAll(".main__task-input");

for(let inp of inps2){
    console.log(inp.value)
};
// task3
let inp3 = document.querySelector("#inp3");
let txt3 = document.querySelector("#txt3");

func3.call(inp3, "Anikin", "Ivan");

function func3(surname, name) {
	txt3.textContent = this.value + ', ' + name + ' ' + surname;
};
// task4
let inp4 = document.querySelector("#inp4");
let txt4 = document.querySelector("#txt4");

function func4(surname, name) {
	txt4.textContent = this.value + ', ' + surname + ' ' + name;
}

func4.apply(inp4, ["Anikin", "Ivan"]);
// task5
let inp5 = document.querySelector("#inp5");
let txt5 = document.querySelector("#txt5");
let btn5 = document.querySelector(".main__task-btn");

function func5(name, surname) {
	txt5.textContent = this.value + ', ' + name + ' ' + surname;
}

func5 = func5.bind(inp5);

btn5.addEventListener('click', ()=>{
    func5('John', 'Smit');
});
btn5.addEventListener('dblclick', ()=>{
    func5('Eric', 'Luis');
});
// task6
let btn6 = document.querySelector("#btn6");
let console6 = document.querySelector(".main__task-console");

btn6.addEventListener('click', func6);
function func6(){
    setInterval(()=>{ 
        console6.textContent+="Hello World!";
    }, 3000);
}
    