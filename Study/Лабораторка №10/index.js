'use strict'

    console.log('Task #1');
    let inp1=document.querySelector('.input1');
    let atr1=inp1.getAttribute('value');
    console.log(atr1);

    console.log('Task #2');
    inp1.setAttribute('value','My name is Ivan!');
    console.log(inp1.value);

    // console.log('Task #3');
    inp1.removeAttribute('value');

    console.log('Task #4');
    console.log(inp1.hasAttribute('value'));

    // console.log('Task #5');
    let div1=document.querySelector('.task5');
    div1.addEventListener('click', function(){
        div1.textContent+=div1.dataset.text
    });

    // console.log('Task #6');
    let btn1=document.querySelector('.button1');
    let txt6=document.querySelector('.task6text');
    btn1.addEventListener('click', function(){
        btn1.dataset.num= Number(btn1.dataset.num)+1;
        txt6.textContent=btn1.dataset.num;
    });

// console.log('Task #7');
    let inp2=document.querySelector('.input2');
    inp2.addEventListener('focus', function(){
        inp2.removeAttribute('value');
    });
    inp2.addEventListener('blur', function(){
        if(inp2.value.length==inp2.dataset.leng){
            console.log('Task #7');
            console.log('код успешно получен');
        }else{
            console.log('Task #7');
            inp2.removeAttribute('value');
            console.log('код обязан состоять из 5 символов');
        };
    });

    // console.log('Task #8');
    let div2=document.querySelector('.product');
    div2.addEventListener('click', function(){
        div2.textContent+=Number(div2.dataset.productPrice)*Number(div2.dataset.productAmount)
    });
    
    // console.log('Task #9');
    let arr9=document.querySelectorAll('.task9text');
        for(let i=0;i<arr9.length;i++){
            arr9[i].addEventListener('click', function(){
            arr9[i].dataset.sequenseNum = i+1;
            arr9[i].textContent=arr9[i].dataset.sequenseNum
    })};

    // console.log('Task #10');
    let parent10=document.querySelector('.ul1');
    let child10=parent10.firstElementChild;
    child10.style.color='red';

    // console.log('Task #11');
    let children=parent10.children;
    for(let elem of children){
        elem.textContent+='!';
    };

    // console.log('Task #12');
    let child12=document.querySelector('.child12');
    let parent12=child12.parentElement
    parent12.style.borderColor='red'

    console.log('Task #13');
    let elem=document.querySelector('#elem');
    let parent13=elem.closest('.www')
    console.log(parent13)

    console.log('Task #14');
    let el1=document.querySelector('#txt1');
    let el2=el1.previousElementSibling;
    console.log(el2.textContent);

    console.log('Task #15');
    let el3=el1.nextElementSibling;
    let el4=el3.nextElementSibling;
    console.log(el4.textContent)

    console.log('Task #16');
    let puppet=document.getElementById('puppet');
    puppet.value='tin tin tili tili tin tin';
    console.log(puppet.value);
    puppet.textContent="Hello! I'm puppet! Let's play with me?";

    // console.log('Task #17&18');
    let tags=document.getElementsByClassName('li1'); 
    // Сделал через классы т.к. тегов <li> много во всей работе
    for(let tag of tags){
        tag.style.color='red';
    };

    // console.log('Task #19');
    let parent19=document.querySelector('#parent19');
    
    let arrwww=parent19.querySelectorAll('.www');
    for(let i=0; i<arrwww.length;i++){
        arrwww[i].addEventListener('click', function(){
            arrwww[i].style.color='red'
        });
    };
    let arrggg=parent19.querySelectorAll('.ggg');
    for(let i=0; i<arrggg.length;i++){
        arrggg[i].addEventListener('click', function(){
            arrggg[i].style.color='blue'
        });
    };

    // console.log('The end');
    let txt=document.querySelector('.endtxt')
    let colors = ['red', 'blue', 'grey', 'orange', 'green', 'purple', 'aquamarine', 'pink'];

    window.setInterval(changeColor, 150);
  let i = 0;

  function changeColor() {
    txt.style.color = colors[i]; i++;
    if (i >= colors.length) i = 0;
  };