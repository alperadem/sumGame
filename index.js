const buttonDOM = document.getElementById("insert");
const inputDOM = document.getElementById("number-input");
let sayiHtml1 = document.getElementById("number1");
let sayiHtml2 = document.getElementById("number2");
let sayi1, sayi2, sayiToplam;
let highScore = document.getElementById("number4");
let hScore = parseInt(highScore.innerHTML);
// let resultT = document.getElementById("answer-correct");
// let resultF = document.getElementById("answer-false");
function getRandomInteger(){
    sayi1 = getRndInteger(0,49);
    sayi2 = getRndInteger(0,49);
    sayiToplam = sayi1 + sayi2;
    sayiHtml1.innerHTML = sayi1;
    sayiHtml2.innerHTML = sayi2;
}
getRandomInteger();



const sayi3 = document.getElementById("number3");
let score = parseInt(sayi3.innerHTML);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min));
}
function myFunction(){
    if(inputDOM.value == sayiToplam){
        score++;
        sayi3.innerHTML = score;
        console.log("Aferin")
        console.log(sayi1, sayi2, sayiToplam,"score :", score);
        document.body.style.backgroundColor =  "#b4f9a5";
        document.querySelector('#number-input').value = '';
        setTimeout(function(){ document.body.style.backgroundColor =  "#fff"; }, 1000);
        getRandomInteger();
    }else{
        console.log("score", score, highScore)
        if(score > highScore.innerHTML){
            highScore.innerHTML = score;
            score = 0;
        }
        document.body.style.backgroundColor =  "#9e1a1a";
        setTimeout(function(){ document.body.style.backgroundColor =  "#fff"; }, 1000);
        console.log("Salak");
        sayi3.innerHTML = 0;
        document.querySelector('#number-input').value = '';
}
    
}

buttonDOM.addEventListener("click", myFunction);
inputDOM.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        myFunction();
}}
);






console.log(sayi1, sayi2, sayiToplam,"score :", score);