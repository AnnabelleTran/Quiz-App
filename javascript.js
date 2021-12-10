
function score(){
var points = 0;
var a1 = document.quiz.q1.value;
var a2= document.quiz.q2.value;
var a3 = document.quiz.q3.value;
var a4= document.quiz.q4.value;
var two = document.quiz.two.value;
var three = document.quiz.three.value;
var four = document.quiz.four.value;
var five = document.quiz.five.value;


    if(a1 == "A" && a4 == "D") {points++;}
    if(two =="D"){points++;}
    if(three =="C"){points++;}
    if(four =="B"){points++;}
    if(five =="C"){points++;}

    var percent = (points/5)*100;
    document.getElementById("answer").innerHTML = "Your Score: "+ parseInt(percent)+"%";


}
