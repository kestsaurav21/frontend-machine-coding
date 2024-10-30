

const createBox = () => {
    let container = document.querySelector("#container");

    let colors = [
        "green",
        "green",
        "green",
        "red",
        "red",
        "red",
        "blue",
        "blue",
        "blue"
    ]

    colors.forEach((color) => {
        let newBox = document.createElement("div");
        newBox.style.background = color;
        newBox.classList.add("box");
        newBox.addEventListener("click", () => swapColor(newBox) )

        container.appendChild(newBox);
    })


}

createBox();

let counter = 0;
let boxOne = boxTwo = null;
let colorOne = colorTwo = "";

const swapColor = (box) => {

    counter+=1;
    if(counter === 1){
        boxOne = box;
        colorOne = box.style.background;
    }

    if (counter === 2){
        boxTwo = box;
        colorTwo = box.style.background;

         //Swap color 
        
        boxOne.style.background = colorTwo;
        boxTwo.style.background = colorOne;

        //Reset

        counter = 0;
        boxOne = boxTwo = null;
        colorOne = colorTwo = "";
    }

   
    
    
}

