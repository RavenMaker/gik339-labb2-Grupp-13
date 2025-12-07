/****** UPPGIFT 4 - Skapa variabler ******* */ 

const checkbox = document.getElementById("divStyle"); // hämtar kryssrutan
const textfield = document.querySelectorAll("textfield"); //hämtar alla text fält
const button = document.querySelector("button"); // hämtar knappen
const div = document.getElementById("responsFromJsToHTML"); //fältet förändringen ska ske i.


/****** UPPGIFT 5 - Skapa en fördefinierad funktion ******* */
function eventListener(e){
    //Alla ändringar som görs fångas upp av e

    //e.target = elementet, name = värdet i elementet. Sparar i input
    const input = e.target.name  
    if(input ==="content"){ // om värdet är lika med fältet  
        div.innerHTML = e.target.value; //Skriver över innerhållet med inputen 

    }
}


/****** UPPGIFT 6 - Koppla eventlyssnare ******* */
// ber webbläsaren lyssna på checkbox elementet 
checkbox.addEventListener("change", function(){ 
    //När change händer körs function () 
    console.log("div ändras");
    
    const newColor = color.value // sparar värdet från color i variabeln newColor
    div.style.backgroundColor = newColor;


});

//Eventlyssnare för textfälten 
//Väljer alla textfield element
const textFields = document.querySelectorAll(".textfield"); 
textFields.forEach(field => {
    //För varje nytt field ska det läggas till en Eventlyssnaren
    //Varje gång användaren ändrar något i fältet körs funktionen eventListener
    field.addEventListener("input", eventListener)
})

const btn = document.querySelector(".button");

btn.addEventListener("click",function(){
    //div.innerHTML = "";
    //div.style.backgroundColor ="";
    //div.
    console.log("responsFromJsToHTML tagits bort");
    div.remove();
});