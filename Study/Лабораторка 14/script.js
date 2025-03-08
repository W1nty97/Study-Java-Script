"use strict";

// task 1

function task1() {
  const t_ul = document.querySelector("#ult1");
  let arr = ["Hello", "my", "world"];

  let i = 0;
  while (i < 3) {
    let li = document.createElement("li");

    t_ul.appendChild(li);
    li.textContent = arr[i];
    // task 2
    li.addEventListener("click", (event) => {
      console.log(event.target.textContent);
    });
    i++;
  }
}
task1();

//task 3

function task3() {
  const t = document.querySelector("#t3");
  let table = document.createElement("table");

  t.appendChild(table);

  for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < 5; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      // task 4
      td.textContent = "x";
    }
  }
}
task3();

// task 5

function task5() {
  const t = document.querySelector("#t5");
  let table = document.createElement("table");

  t.appendChild(table);

  for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < 5; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.className = "td5";
      let arr = document.querySelectorAll(".td5");
      for (let k = 0; k < arr.length; k++) {
        arr[k].textContent = k + 1;
      }
    }
  }
}
task5();

// task 6

function task6() {
  const t = document.querySelector("#t6");
  let table = document.createElement("table");
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];

  t.appendChild(table);
  for (let subArr of arr) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let elem of subArr) {
      let td = document.createElement("td");
      td.textContent = elem;
      tr.appendChild(td);
    }
  }
}
task6();

// task 7

function task7() {
  const t = document.querySelector("#t7");
  let table = document.createElement("table");
  let data = [
    { name: "employee1", age: 30, salary: 400 },
    { name: "employee2", age: 31, salary: 500 },
    { name: "employee3", age: 32, salary: 600 },
  ];
  t.appendChild(table);

  for (let elem of data) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = elem.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = elem.age;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = elem.salary + "p";
    tr.appendChild(td3);

    table.appendChild(tr);
  }
}

task7();

// task8

function task8() {
  const t = document.querySelector("#t8");
  let table = document.createElement("table");

  t.appendChild(table);

  for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < 5; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.className = "td8";
      let arr = document.querySelectorAll(".td8");
      for (let k = 0; k < arr.length; k++) {
        arr[k].textContent = k + 1;
      }
    }
  }
  let btn = document.createElement("button");
  t.appendChild(btn);
  btn.addEventListener("click", () => {
    let arr = document.querySelectorAll(".td8");
    for (let k = 0; k < arr.length; k++) {
      arr[k].textContent *= 2;
    }
  });
}
task8();

// task 9,10

function task9() {
  const btn = document.getElementById("btn9");
  const ul = document.getElementById("ul9");

  btn.addEventListener("click", () => {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = "hello";
    let arr = ul.getElementsByTagName("li");
    for (let el of arr) {
      el.addEventListener("click", (event) => {
        event.target.remove();
      });
    }
  });
}
task9();

// task 11

function task11() {
  const ul = document.querySelector("#ul11");
  let list = ul.getElementsByTagName("li");
  for (let elem of list) {
    elem.addEventListener("click", function func() {
      let input = document.createElement("input");
      input.value = elem.textContent;

      elem.textContent = "";
      elem.appendChild(input);

      // task 12
      let p = document.createElement("p");
      elem.appendChild(p);
      p.textContent = "delete";

      p.addEventListener("click", () => {
        elem.remove();
      });

      input.addEventListener("blur", function () {
        elem.textContent = this.value;
        elem.addEventListener("click", func);
      });

      elem.removeEventListener("click", func);
    });
  }
}
task11();

// task 13

function task13() {
  const t = document.querySelector("#t13");
  const p = t.getElementsByTagName("p");

  for (let el of p) {
    let a = document.createElement("a");
    el.appendChild(a);
    a.textContent = "sink";
    a.preventDefault;
    a.addEventListener("click", () => {
      el.querySelector("span").style.textDecoration = "line-through";
    });
  }
}
task13();

// task 14

function task14() {
  const t = document.querySelector("#t14");
  const arr = t.getElementsByTagName("li");

  for (let el of arr) {
    el.addEventListener("click", () => {
      el.style.color = "red";
    });
  }
}
task14();

// task 15

function task15(selector, text) {
  const t = document.querySelector("#t15");

  console.log(text);
  const elem = t.querySelector(selector);
  elem.textContent = text;
}
// Примеры вызова функции
// task15("#text1", "ваш текст")
// task15("#text2", "ваш текст")
// task15("#text3", "ваш текст")

// task 16, 17
forEach("p", function (elem, index) {
  elem.textContent = String(index) + ": " + elem.textContent + "!";
});

function forEach(selector, func) {
  const t = document.querySelector("#t16");
  let elems = t.getElementsByTagName(selector);

  for (let i = 0; i < elems.length; i++) {
    func(elems[i], i);
  }
}
forEach();

// task 18

function task18() {
  function appendText(elem, text) {
    elem.textContent += text;
  }
  let elem1 = document.getElementById("elem1");
  appendText(elem1, " - Привет");

  let elem2 = document.getElementById("elem2");
  appendText(elem2, " - Мир");
}
task18();

// task 19

function task19(selector, elem, text) {
  const sel = document.querySelector(selector);
  let el = document.createElement(elem);
  sel.appendChild(el);
  el.textContent = text;
}
task19(".ul19", "li", "переданный текст");

// task 20

function task20(selector, elem, elem1, elem2, text) {
  const sel = document.querySelector(selector);
  let el = document.createElement(elem);
  sel.appendChild(el)
  for (let i = 0; i < 5; i++) {
    let tr = document.createElement(elem1);
    el.appendChild(tr);
    for (let j = 0; j < 5; j++) {
      let td = document.createElement(elem2);
      tr.appendChild(td);
      td.textContent = text;
    }
  }
}
task20("#t20","teble","tr","td", "x")