var a, b, c, d;
var result = 0;
var average = 0;

function calculate() {
    a = parseInt(document.form1.textNum1.value);
    b = parseInt(document.form1.textNum2.value);
    c = parseInt(document.form1.textNum3.value);
    d = parseInt(document.form1.textNum4.value);

    result = a + b + c + d;
    average = result / 4;

    var output = "The Total is :<b>" + result + "</b><br>";
    output += "The Average is :<b>" + average + "</b><br>";

if ((average>= 90) && (average<=100)){
        output += "The Grade is :<b>Excellent!!!</b>";
     } 
else if ((average>= 80) && (average<=89.99)){
     output += "The Grade is :<b>Very Good!!</b>";
    } 
else if ((average>= 70) && (average<=79.99)){
    output += "The Grade is :<b>Good!</b>";
    } 

else if ((average>= 60) && (average<=69.99)){
   output += "The Grade is :<b>Satisfactory</b>";
    } 
else if ((average>= 50) && (average<=59.99)){
        output += "The Grade is :<b>Qualified for supplimentary exam</b>";
    } else {
       output += "The Grade is :<b>Fail</b>";
    }

    document.getElementById("result").innerHTML = output;
}
document.getElementById('back').addEventListener('click', function() {
    history.back();
 });
