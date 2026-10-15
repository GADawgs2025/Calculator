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
};

const power = function (a, b) {
  return a ** b;
};

// Track if the user has already typed a first number to separate it from default 0
let isFirstNumberSet = false;
let isSecondNumberSet = false;
let isCalculationFinished = false;

//Retrieve Labels from HTML:
const inputLabel = document.querySelector('.calculator-input');
const buttonGrid = document.querySelector('.calculator-buttons-grid');

//Operations Array:
const operationArray = [
    {number1: 0, operator: "", number2: 0}
];

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
    const currentOp = operationArray[0];
    console.log(`Clicked: ${button.name} | Label: ${button.label} | Type: ${button.type}`);
    //Numbers:
    if(button.label === "1" || button.label === "2" || button.label === "3" || button.label === "4" || button.label === "5" || button.label === "6" || button.label === "7" 
        || button.label === "8" || button.label === "9" || button.label === "0"){

    // NEW: If a calculation just finished, typing a number starts a fresh operation
        if (isCalculationFinished) {
            inputLabel.value = "";
            isFirstNumberSet = false;
            isSecondNumberSet = false;
            isCalculationFinished = false;

            // Reset your data object back to defaults
            operationArray[0] = { number1: 0, operator: "", number2: 0 };
        }

    // Check if we need to clear the screen for number2
    if (isFirstNumberSet && !isSecondNumberSet) {
        // Clear the screen so the user can type number2 fresh
        inputLabel.value = "";
        isSecondNumberSet=true;

    }
        inputLabel.value += `${button.label}`;
    }
    //Operations:
    else if (button.label === "X"|| button.label === "+" || button.label === "-" || button.label === "/"){
        // If they click an operator after an '=', they want to use the result as number1
        if (isCalculationFinished) {
            isCalculationFinished = false;
        }

        if(inputLabel.value){
            if(!isFirstNumberSet){
               currentOp.number1 = Number(inputLabel.value);
               isFirstNumberSet=true;
            }
            //Number2 needs to be set... FULL DATA for Operate to be called
            else if(currentOp.operator && isSecondNumberSet){
                
                currentOp.number2 = Number(inputLabel.value);
                currentOp.number1 = operate(currentOp);
                isCalculationFinished = true;
                inputLabel.value = currentOp.number1;
 
                //Reset Number2
                currentOp.number2 = 0;
                isSecondNumberSet = false;
            }
        }

        // Save the chosen operator (converting visual "X" to math "*")
        if(isCalculationFinished){
            currentOp.operator = ""; //Restore to default
        }
        else{2
            currentOp.operator = button.label === "X" ? "*" : button.label;
        }
        22
        
        console.log("* stored as operation", operationArray);
    }

    else if (button.label === "="){
        if(isFirstNumberSet && isSecondNumberSet){
            currentOp.number2 = Number(inputLabel.value); // Ensure number2 grabs current screen value before operating
            currentOp.number1 = operate(currentOp);

            //Restore Defaults
            currentOp.operator = ""; //Restore to default...
            currentOp.number2 = 0;
            inputLabel.value = currentOp.number1;

            // Allow the result to be used as number1 for the next operation
            isSecondNumberSet = false;
            isCalculationFinished = true; // NEW: Set flag so the app knows a calculation just ended
        }
    }

    //Clear:
    else if(button.label === "C"){
        // Clear display
        inputLabel.value = "";
        
        // Reset tracking flags
        isFirstNumberSet = false;
        isSecondNumberSet = false;
        isCalculationFinished = false; 

        // Mutate the const array back to default values safely
        operationArray.length = 0; 
        operationArray.push({ number1: 0, operator: "", number2: 0 });
        
        console.log("Calculator reset to defaults", operationArray);

    }
}

function isFull(array){
    
}

// Presses "=" Consists of: [number] [operator] [number]
function operate (array){
    // 1. Extract the object from the first position of the array
    if(array.operator === "+"){
        return add(array.number1,array.number2);
    }
    else if (array.operator === "-"){
        return subtract(array.number1,array.number2);
    }
    else if (array.operator === "*"){
         //  Wrap the values in an array so reduce() works
        return multiply([array.number1,array.number2]);
    }
    else if (array.operator === "/"){
         //  Wrap the values in an array so reduce() works
        return divide([array.number1,array.number2]);
    }
    else{
        return 
    }

    
}
