// C = (F -32) / 1.8
// F = (C * 1.8) + 32
// 32F = 0
const convertBtn = document.getElementById('convertBtn');
const cBtn = document.getElementById('cBtn');
const fBtn = document.getElementById('fBtn');
const tempOutput = document.getElementById('tempOutput');
const tempInput = document.getElementById('tempInput');

const determineConverter = () => {
    if(cBtn.checked === true){
        console.log(`${tempInput.value}C°`);
        printToDom('tempOutput', `${tempInput.value}C°`);
    } else if(fBtn.checked === true){
        console.log(`${tempInput.value}F°`);
        printToDom('tempOutput', `${tempInput.value}F°`);
    } else{
        console.log('Please Select a Unit');
    };
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

convertBtn.addEventListener('click', determineConverter);




