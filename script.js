//Document title is set in Javascript
 document.title = "JavaScript Calculator"


//UI div
var mainDiv = document.createElement('div');
mainDiv.setAttribute('class', "stuff-box");

var title = document.createElement('h1');
title.textContent = "JavaScript Calculator";

var direction = document.createElement('h2');
direction.textContent = "Create An Expression:";

//Computation Elements
var form = document.createElement('form');

//First number
var num1Input = document.createElement("input");
num1Input.type = "number";
num1Input.id = "num1";
num1Input.name = "num1";
num1Input.placeholder = "1";

//Operands
var selectOperand = document.createElement("select");
selectOperand.name = "operands";
selectOperand.id = "operands";

var add = document.createElement("option");
add.value = "+";
add.textContent = "+";

var subtract = document.createElement("option");
subtract.value = "-";
subtract.textContent = "-";

var multiply = document.createElement("option");
multiply.value = "*";
multiply.textContent = "*";

var divide = document.createElement("option");
divide.value = "/";
divide.textContent = "/";

var mod = document.createElement("option");
mod.value = "%";
mod.textContent = "%";

var pow = document.createElement("option");
pow.value = "**";
pow.textContent = "**";

selectOperand.appendChild(add);
selectOperand.appendChild(subtract);
selectOperand.appendChild(multiply);
selectOperand.appendChild(divide);
selectOperand.appendChild(mod);
selectOperand.appendChild(pow);

//Second number
var num2Input = document.createElement("input");
num2Input.type = "number";
num2Input.id = "num2";
num2Input.name = "num2";
num2Input.placeholder = "4";

var br = document.createElement("br");

var computeButton = document.createElement("input");
computeButton.type = "submit";
computeButton.value = "Compute";

//Color Picker
var label = document.createElement("label");
label.textContent = "Color Of New Result <div>:";

var colorInput = document.createElement("input");
colorInput.type = "color";
colorInput.id = "divColor";
colorInput.name = "divColor";
colorInput.value ="#0db1e7";

mainDiv.appendChild(title);
mainDiv.appendChild(direction);
mainDiv.appendChild(num1Input);
mainDiv.appendChild(selectOperand);
mainDiv.appendChild(num2Input);
mainDiv.appendChild(computeButton);
mainDiv.appendChild(br);
mainDiv.appendChild(label);
mainDiv.appendChild(colorInput);

document.body.appendChild(mainDiv);



//Return time/date string
function getDateTimeString(date) {
    var today = date.toString().split(" ").splice(0,5);
    return today.join(" ") + " ";

}

//Return answer or null if inputs are invalid
function getAnswer(num1, num2, chosenOperand){
    var answer = "";
    var answerString = "";
    if(num1Input.value == "" || num2Input.value == ""){
        answerString = null;
    }
    //Handle non number inputs
    else if(isNaN(num1) || isNaN(num2)){
        answerString = null;
    }
    //Get computation based on operand chosen
    else if(chosenOperand == "+"){
        answer = (parseFloat(num1) + parseFloat(num2));
        answerString += num1 + " + " + num2 + " = " + answer;
    }
    else if(chosenOperand == "-"){
        answer = (parseFloat(num1) - parseFloat(num2));
        answerString += num1 + " - " + num2 + " = " + answer;
        }
    else if(chosenOperand == "*"){
        answer = (parseFloat(num1) * parseFloat(num2));
        answerString += num1 + " * " + num2 + " = " + answer;
        }
    else if(chosenOperand == "/"){
        answer = (parseFloat(num1) / parseFloat(num2));
        answerString += num1 + " / " + num2 + " = " + answer;
    }
    else if(chosenOperand == "%"){
        answer = (parseFloat(num1) % parseFloat(num2));
        answerString += num1 + " % " + num2 + " = " + answer;
    }
    else if(chosenOperand == "**"){
        answer = (parseFloat(num1) ** parseFloat(num2));
        answerString += num1 + " ** " + num2 + " = " + answer;
    }
    else{
    answerString = null;
    }
    return answerString;
}

//Event listener for the compute button: Create new divs
computeButton.addEventListener('click', function (event){
    var newDiv = document.createElement('div');
    var newDivText = document.createElement('h4');
    var newDivString = "";
    var operandSelector = document.getElementById("operands");
    var chosenOperand = operandSelector.options[operandSelector.selectedIndex];
    newDivString += getDateTimeString(new Date());
    var answerString = getAnswer(num1Input.value, num2Input.value, chosenOperand.value);

    //Color div and use error message if needed
    if(answerString == null){
        newDiv.setAttribute('class', 'red');
        newDivString += " Error! Missing One Or More Operands!";
    }
     else{
        newDiv.style.background = colorInput.value;
        newDivString += answerString;
    }
    newDivText.textContent = newDivString;
    newDiv.appendChild(newDivText);
    document.body.insertBefore(newDiv, mainDiv.nextSibling);
    //Add event listener to delete clicked divs
    newDiv.addEventListener('click', function (event){
        newDiv.remove();
    });
});


