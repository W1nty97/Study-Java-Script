//1
let elem = document.getElementById('elem')
let out = document.getElementById('output')

elem.addEventListener('blur', function() {
    out.textContent = elem.value
})
//2-3
let input = document.querySelector('#input')
let button = document.querySelector('#button')  
let buttonn = document.querySelector('#buttonn')

button.addEventListener('click', function() {
    input.disabled = true
})

buttonn.addEventListener('click', function() {
    input.disabled = false
})
//4-5
let check = document.querySelector('#check')
let baton = document.querySelector('#baton')
let para = document.querySelector('#p')

baton.addEventListener('click', function(){
    if (check.checked) {
        p.textContent = 'privet'
    } else {
        p.textContent = 'poka'
    }})

let r = document.querySelector('#r')

r.addEventListener('click', function() {
    if (check.checked == false) {
        check.checked = true
    } else {
        check.checked = false
    }
})
//6

let buttonnn = document.querySelector('#radio4');
let div = document.querySelector('#div');

let radioButtons = document.querySelectorAll('input[name="radio"]');

buttonnn.addEventListener('click', function() {

    for (let radio of radioButtons) {
        
        if (radio.checked) {
            
            div.textContent = radio.value;
            break;
        }
    }
});

//7

let inn = document.querySelector('#in')
let div1 = document.querySelector('#div1')

inn.addEventListener('blur', function() {
    div1.textContent = inn.value
})

//8

let c = document.querySelector('#c1')
let div2 = document.querySelector('#div2')

c.addEventListener("click", function() {
    if (c.checked == true){
        div2.textContent = 'checked'
    }
    else {
        div2.textContent = 'no checked'
        
    }
})

//9

let inc = document.querySelector('#inc')

inc.addEventListener('blur', function() {
    if (inc.value.length <= 5) {
       inc.style.borderColor = 'green'
    } else{
        inc.style.borderColor = 'red'
    }
})

//10

let inp = document.querySelector('#inp')
let div3 = document.querySelector('#div3')

inp.addEventListener('input', function(){
    div3.textContent = 'Осталось: '+(5 - inp.value.length)
    if (inp.value.length > 5){
        div3.textContent = 'Ты черт. Не больше 5 символов'
        
    }
})

//12

let select = document.querySelector('#select')
let div4 = document.querySelector('#div4')

select.addEventListener('change', function() {
    if ((select.value % 4 === 0 && select.value  % 100 !== 0) || select.value % 400 === 0) {
        div4.textContent = 'Висикосной год'
    }else {
        div4.textContent = 'не висикосной год :('
    }
})

//13

let select1 = document.querySelector('#select1')

let div5 = document.querySelector("#div5")

select1.addEventListener('change', function() {
    if(select1.value == 6 || select1.value == 7){
        div5.textContent = 'ЧИНАЗЕС'
    } else {
        div5.textContent = 'Хочу Домой'
    }
})

//14

let select2 = document.querySelector('#select2')

let div6 = document.querySelector('#div6')

let date = new Date()

console.log(date.getMonth)
select2.addEventListener('change', function() {
    if (select2.value == date.getMonth()) {
        div6.textContent = 'This month'
    }
})

let ins = document.querySelector('#ins') 

let select3 = document.querySelector('#select3')

ins.addEventListener('blur', function(){
    if (ins.value == select3.value) {
        select3.style.borderColor = 'red'
    }
    else {
        select3.style.borderColor = 'green'
    }
})
