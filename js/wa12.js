function check()
{
    console.log('test');
}

function submit()
{
    alert(output.textContent);
}

function reset()
{
    const resetValue = 000000000;
    output.textContent = resetValue;
}

function plusRunner()
{
    plus(outputInt);
}

function plus(num) 
{
    if(outputInt < 9999999999)
    {
        outputInt++;
        output.textContent = outputInt;
    }
}

function minus()
{
    if(outputInt > 0)
    {
        outputInt--;
        output.textContent = outputInt;
    }
}

function random() 
{
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max)
{
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);

const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plusRunner);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);

/* 
const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
}
*/

var slider = document.getElementById("myRange");
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output");

function update()
{
    sliderOutput.textContent = slider.value;
}