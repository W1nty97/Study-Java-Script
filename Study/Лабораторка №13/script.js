"use strict";

// task1

let inp1 = document.querySelector("#inp1");

inp1.addEventListener("blur", func1);

function func1() {
  let elem = this;
  function square() {
    return elem.value ** 2;
  }
  inp1.value = square();
}

// task2
console.log("Task # 2");

let task2 = document.querySelector("#task2");
let inps2 = task2.querySelectorAll(".main__task-input");

for (let inp of inps2) {
  console.log(inp.value);
}

// task3

let inp3 = document.querySelector("#inp3");
let txt3 = document.querySelector("#txt3");

func3.call(inp3, "Anikin", "Ivan");

function func3(surname, name) {
  txt3.textContent = this.value + ", " + name + " " + surname;
}

// task4

let inp4 = document.querySelector("#inp4");
let txt4 = document.querySelector("#txt4");

function func4(surname, name) {
  txt4.textContent = this.value + ", " + surname + " " + name;
}

func4.apply(inp4, ["Anikin", "Ivan"]);

// task5

let inp5 = document.querySelector("#inp5");
let txt5 = document.querySelector("#txt5");
let btn5 = document.querySelector(".main__task-btn");

function func5(name, surname) {
  txt5.textContent = this.value + ", " + name + " " + surname;
}

func5 = func5.bind(inp5);

btn5.addEventListener("click", () => {
  func5("John", "Smit");
});
btn5.addEventListener("dblclick", () => {
  func5("Eric", "Luis");
});

// task6

let btn6 = document.querySelector("#btn6");
let console6 = document.querySelector(".main__task-console");

btn6.addEventListener("click", func6);
function func6() {
  let int6 = setInterval(() => {
    let p = document.createElement("p");
    p.textContent = "true";
    console6.prepend(p);
    if (console6.getElementsByTagName("p").length >= 4) {
      clearInterval(int6);
    }
  }, 3000);
}

// task7,8,9,10,11,12,13,14,15

let txt7 = document.querySelector("#txt7");
let btn7 = document.querySelector("#btn7");
let inp7 = document.querySelector("#inp7");

btn7.addEventListener("click", function func7() {
  let i = Number(inp7.value);
  let int7 = setInterval(() => {
    txt7.textContent = i--;
    if (i < 0) {
      clearInterval(int7);
    }
    if (i % 2) {
      txt7.style.color = "red";
    } else {
      txt7.style.color = "green";
    }
  }, 100);
  this.removeEventListener("click", func7);
});

// task16

let txt16 = document.querySelector("#txt16");
let int16 = setTimeout(() => {
  txt16.textContent = "Hello world!";
}, 10000);

// task17
console.log("Task # 17");

let i = 0;

function int17() {
  setTimeout(() => {
    console.log(i);
    i++;
    if (i <= 10) {
      int17();
    } else {
      console.log("Timer complete");
    }
  }, i * 1000);
}
int17();

// task18,19,20,21,22,23

let ol18 = document.querySelector("#ol18");
let btn18 = document.querySelector("#btn18");
let j = 0;

let p1 = document.createElement("p");
p1.textContent = "start";
let p2 = document.createElement("p");
p2.textContent = "end";

ol18.insertAdjacentElement("afterend", p2);
ol18.insertAdjacentElement("beforebegin", p1);
btn18.addEventListener("click", function func18() {
  j++;
  let li18 = document.createElement("li");
  li18.textContent = "true";
  ol18.appendChild(li18);
  li18.className = "main__list-el";
  li18.addEventListener("click", (event) => {
    event.target.remove();
  });
  if (j >= 2) {
    if (ol18.firstChild.textContent == "start") {
      ol18.firstChild.remove();
    }
    if (ol18.lastChild.previousElementSibling.textContent == "finish") {
      ol18.lastChild.previousElementSibling.remove();
    }
  }
  let lista = document.createElement("li");
  let lifin = document.createElement("li");
  lista.textContent = "start";
  lifin.textContent = "finish";
  lifin.className = "main__list-el";
  lista.className = "main__list-el";
  ol18.append(lifin);
  ol18.prepend(lista);
});

// task 24
let parent = document.querySelector("#task24");
let inp24 = parent.querySelector("#inp24");
let btn24 = document.querySelector("#btn24");
btn24.addEventListener("click", () => {
  let clone = inp24.cloneNode(true);
  parent.appendChild(clone);
});
// task 25
let txt25 = document.querySelector("#txt25");
console.log(txt25.matches("p.main__task-txt"));
