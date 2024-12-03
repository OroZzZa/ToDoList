const display =document.getElementById("display");

function appendToDisplay(element){
          display.value+=element;
}

function clearDisplay(){
          display.value= "";
}
 
function calculate(){
         try{
          display.value=eval(display.value);
         }
         catch(error){
          display.value="a7a";
         }
}