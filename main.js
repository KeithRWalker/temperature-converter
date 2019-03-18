// C = (F -32) / 1.8
// F = (C * 1.8) + 32
// 32F = 0
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const cBtn = document.getElementById('cBtn');
const fBtn = document.getElementById('fBtn');
const tempOutput = document.getElementById('tempOutput');
const tempInput = document.getElementById('tempInput');

const init = () => {//init
    eventListeners();
};

const printToDom = (divId, textToPrint) => {//This is a standard print function
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const eventListeners = () => {//event listeners
    convertBtn.addEventListener('click', determineConverter);
    clearBtn.addEventListener('click', clear);
};


const determineConverter = () => {//This decides if you clicked C or F and runs accordingly
    if(cBtn.checked === true){
        toC(tempInput.value);
    } else if(fBtn.checked === true){
        toF(tempInput.value);
    } else{
        console.log('Please Select a Unit');
    };
};

const clear = () => {//clears input & output
    const cleared = '';
    tempInput.value = null;
    printToDom('tempOutput', cleared);
};


const toC = (temp) => {// C = (F -32) / 1.8     //F to C converter
    const a = parseFloat(temp - 32)/1.8;
    const roundedA = Math.round(a);
    domStringBuilder(roundedA, "C");
};

const toF = (temp) => {// F = (C * 1.8) + 32    //C to F converter
    const a = parseFloat(temp * 1.8) + 32;
    const roundedA = Math.round(a);
    domStringBuilder(roundedA, "F");
};

const domStringBuilder = (finalTemp, unit) => {//This builds the string to type back to you
    const domString = `<h2>${finalTemp} degrees ${unit}</h2>`;
    printToDom('tempOutput', domString);
};

init();



