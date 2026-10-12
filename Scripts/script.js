const add = (a,b) =>{
    return a+b;
};

const subtract = (a,b) =>{
    return a-b;
}

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const divide = (array)=>{
    return array.reduce((total,current)=> total/current);
}
const power = function (a, b) {
  return a ** b;
};

//Retrieve Labels from HTML:
const inputLabel = document.querySelector('.calculator-input');
const buttonGrid = document.querySelector('.calculator-buttons-grid');

//Create Array for Buttons
const buttons = [
    {label: "1",type:"number" ,name: "One"},
    {label: "2",type:"number" ,name: "Two"},
    {label: "3",type:"number" ,name: "Three"},
    {label: "+",type:"operation",name: "Plus"}, //Op
    {label: "4",type:"number" ,name: "Four"},
    {label: "5",type:"number" ,name: "Five"},
    {label: "6",type:"number" ,name: "Six"},
    {label: "-",type:"operation",name: "Minus"}, //Op
    {label: "7",type:"number" ,name: "Seven"},
    {label: "8",type:"number" ,name: "Eight"},
    {label: "9",type:"number" ,name: "Nine"},
    {label: "X",type:"operation",name: "Multiply"}, //Op
    {label: "C",type:"clear" ,name: "Clear"}, //Clear
    {label: "0",type:"number" ,name: "Zero"},
    {label: "=",type:"operation" ,name: "Equal"}, //Op
    {label: "/",type:"operation",name: "Divide"} //Op
];
//.calc-btn
//.calc-btn-number
//.calc-btn-operation

//.map() through the buttons array
const buttonDisplay = buttons.map(button => {
    //1. Create a Button item
    const btn = document.createElement('button');
    
    btn.textContent = button.label;
    btn.className = `btn calc-btn-${button.type}`;
    btn.id = button.name;

    //Create Event Listener for btn click (Using Event delegation):
    btn.addEventListener('click', () =>{
    // You have direct lexical scope access to the 'button' object properties here
        handleInput(button);
    });

    return btn;
});

//Append to Button Grid
buttonGrid.append(... buttonDisplay);

//Function to handle Click Event
function handleInput(button){
    console.log(`Clicked: ${button.name} | Label: ${button.label} | Type: ${button.type}`);
    //Numbers:
    if(button.label === "1"){
        inputLabel.value += `${button.label}`;
    }
    else if (button.label === "2"){
        inputLabel.value += `${button.label}`;
    }
    else if (button.label === "3"){
        inputLabel.value += `${button.label}`;
    }
    else if (button.label === "4"){
        inputLabel.value += `${button.label}`;
    }
    else if (button.label === "5"){
        inputLabel.value += `${button.label}`;
    }
    else if (button.label === "6"){
        inputLabel.value += `${button.label}`;
    }
    else if (button.label === "7"){
        inputLabel.value += `${button.label}`;
    }
    else if (button.label === "8"){
        inputLabel.value += `${button.label}`;
    }
    else if (button.label === "9"){
        inputLabel.value += `${button.label}`;
    }
    else if (button.label === "0"){
        inputLabel.value += `${button.label}`;
    }
    //Operations:
    //Clear:
    else if(button.label === "C"){
        if(inputLabel.value){
            inputLabel.value = "";
        }
    }
}

