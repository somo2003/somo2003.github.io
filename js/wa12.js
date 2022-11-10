function check()
{
    console.log('test');
}

function submit()
{
    const output = output1.textContent + output2.textContent + output3.textContent + output4.textContent + output5.textContent +
    output6.textContent + output7.textContent + output8.textContent + output9.textContent + output10.textContent;
    alert(output);
}

function reset()
{
    const resetValue = 0;
    output1.textContent = resetValue;
    output2.textContent = resetValue;
    output3.textContent = resetValue;
    output4.textContent = resetValue;
    output5.textContent = resetValue;
    output6.textContent = resetValue;
    output7.textContent = resetValue;
    output8.textContent = resetValue;
    output9.textContent = resetValue;
    output10.textContent = resetValue;
}

/* function plusRunner()
{
    plus(outputInt);
}
*/

/* function plus(num) 
{
    if(outputInt < 9999999999)
    {
        outputInt++;
        output.textContent = outputInt;
    }
}
*/

/* function minus()
{
    if(outputInt > 0)
    {
        outputInt--;
        output.textContent = outputInt;
    }
}
*/

function random() 
{
    if(randomNumber(0,10) === 1)
    {
        output1Int = randomNumber(0, 9);
        output1.textContent = output1Int;
    }
    else if(randomNumber(0,10) === 2)
    {
        output2Int = randomNumber(0, 9);
        output2.textContent = output2Int;
    }
    else if(randomNumber(0,10) === 3)
    {
        output3Int = randomNumber(0, 9);
        output3.textContent = output3Int;
    }
    else if(randomNumber(0,10) === 4)
    {
        output2Int = randomNumber(0, 9);
        output2.textContent = output2Int;
    }
    else if(randomNumber(0,10) === 5)
    {
        output5Int = randomNumber(0, 9);
        output5.textContent = output5Int;
    }
    else if(randomNumber(0,10) === 6)
    {
        output6Int = randomNumber(0, 9);
        output6.textContent = output6Int;
    }
    else if(randomNumber(0,10) === 7)
    {
        output7Int = randomNumber(0, 9);
        output7.textContent = output7Int;
    }
    else if(randomNumber(0,10) === 8)
    {
        output8Int = randomNumber(0, 9);
        output8.textContent = output8Int;
    }
    else if(randomNumber(0,10) === 9)
    {
        output9Int = randomNumber(0, 9);
        output9.textContent = output9Int;
    }
    else
    {
        output10Int = randomNumber(0, 9);
        output10.textContent = output10Int;
    }
}

function randomNumber(min, max)
{
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

const output1 = document.querySelector('.output1');
let output1Int = parseInt(output1.textContent);
const output2 = document.querySelector('.output2');
let output2Int = parseInt(output2.textContent);
const output3 = document.querySelector('.output3');
let output3Int = parseInt(output3.textContent);
const output4 = document.querySelector('.output4');
let output4Int = parseInt(output4.textContent);
const output5 = document.querySelector('.output5');
let output5Int = parseInt(output5.textContent);
const output6 = document.querySelector('.output6');
let output6Int = parseInt(output6.textContent);
const output7 = document.querySelector('.output7');
let output7Int = parseInt(output7.textContent);
const output8 = document.querySelector('.output8');
let output8Int = parseInt(output8.textContent);
const output9 = document.querySelector('.output9');
let output9Int = parseInt(output9.textContent);
const output10 = document.querySelector('.output10');
let output10Int = parseInt(output10.textContent);

// const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
// const plusButton = document.querySelector('.plus-button').addEventListener('click', plusRunner);
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

/* var slider = document.getElementById("myRange");
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output");

function update()
{
    sliderOutput.textContent = slider.value;
}
*/