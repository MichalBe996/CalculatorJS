


function numberButton(number){
    document.querySelector(".screen").textContent += String(number)
};



function addition(){
    firstNumber = document.querySelector(".screen").textContent;
    symbol = "+";
    document.querySelector(".screen").textContent = "";
}

function subtraction(){
    firstNumber = document.querySelector(".screen").textContent;
    symbol = "-";
    document.querySelector(".screen").textContent = "";
}

function multiply(){
    firstNumber = document.querySelector(".screen").textContent;
    symbol = "*";
    document.querySelector(".screen").textContent = "";
    
}

function divide(){
    firstNumber = document.querySelector(".screen").textContent;
    symbol = "/";
    document.querySelector(".screen").textContent = "";
}

function equals(){
    secondNumber = document.querySelector(".screen").textContent;
    if(symbol === "+"){
        console.log(parseInt(firstNumber)+ parseInt(secondNumber));
        document.querySelector(".screen").textContent = parseInt(firstNumber) + parseInt(secondNumber)
        firstNumber = toString(document.querySelector(".screen").textContent);

        
    } else if(symbol==="-"){
        console.log(parseInt(firstNumber) - parseInt(secondNumber));
        document.querySelector(".screen").textContent = parseInt(firstNumber) - parseInt(secondNumber);
        firstNumber = toString(document.querySelector(".screen").textContent);
    } else if(symbol==="*"){
        console.log(parseInt(firstNumber) * parseInt(secondNumber));
        document.querySelector(".screen").textContent = parseInt(firstNumber) * parseInt(secondNumber);
        firstNumber = toString(document.querySelector(".screen").textContent);
    } else if(symbol==="/"){
        console.log(parseInt(firstNumber) / parseInt(secondNumber));
        document.querySelector(".screen").textContent = parseInt(firstNumber) / parseInt(secondNumber)
        firstNumber = toString(document.querySelector(".screen").textContent);
    };
    if(document.querySelector(".screen").textContent.length >= 13){
        document.querySelector(".screen").textContent = "TOO LARGE"
    }
};


function cButton(){
    document.querySelector(".screen").textContent = "";
    firstNumber = "";
    secondNumber= "";
};

function ceButton(){
    document.querySelector(".screen").textContent = document.querySelector(".screen").textContent.slice(0, -1);
};