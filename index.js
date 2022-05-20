let animals = ["🦓", "🦁", "🦓","🦓", "🦒", "🦁","🦒","🦒","🐍","🐒","🐒","🐒","🐍"]

let lionCage = document.getElementById("lion-cage")
let zebraCage = document.getElementById("zebra-cage")
let monkeyCage = document.getElementById("monkey-cage")
let snakeCage = document.getElementById("snake-cage")
let giraffeCage = document.getElementById("giraffe-cage")
let allAnimals = document.getElementById("allAnimals")


function printAnimals(){
    for(let i=0 ; i < animals.length; i++){
       allAnimals.textContent += animals[i]
    }
}

function sortAnimals(){
    for(let i = 0 ; i < animals.length; i++){
        if(animals[i] === "🦁" ){
            lionCage.textContent +="🦁"
        }else if(animals[i] === "🦓") {
            zebraCage.textContent += "🦓"
        }else if(animals[i] === "🐒"){
            monkeyCage.textContent += "🐒"
        }else if(animals[i] === "🐍"){
            snakeCage.textContent += "🐍"
        }else {
            giraffeCage.textContent +="🦒"
        }
        }
    }

    


    