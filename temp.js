let textBox=document.getElementById("text");
let toCelcius=document.getElementById("toCelcius")
let toFahrenheit=document.getElementById("toFahrenheit")
let button =document.getElementById("btn");
let display=document.getElementById("result");
let temp;
let calculatedTemp;

button.onclick=function convert(){ 


    if(toCelcius.checked){
        temp=textBox.value
        temp=Number(temp);
        calculatedTemp=Math.floor((temp - 32) / 1.8)+"\u00B0C"
        display.textContent=calculatedTemp
        
    }
    else if(toFahrenheit.checked){
        temp=textBox.value
        temp=Number(temp);
        calculatedTemp=Math.floor((temp * 1.8) + 32)+"\u00B0F"
        display.textContent=calculatedTemp
    }
    else{
        display.textContent="Select the conversion type"
    }

}




