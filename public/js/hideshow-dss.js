// Criteria
const getCriteria = document.getElementById("criteria");
console.log(getCriteria);
const criteriaDisplay = getCriteria.style.display;
console.log(criteriaDisplay);

// Weighting
let getWeigthing = document.getElementById('weighting');
let weightingDisplay = getWeigthing.style.display;

// input-altr
let getInputAltr = document.getElementById('input-altr');
let inputAltrDisplay = getInputAltr.style.display;

// view-altr
let getViewAltr = document.getElementById('view-altr');
let viewAltrDisplay = getViewAltr.style.display;

// view-altr
let getOutput = document.getElementById('output');
let outputDisplay = getOutput.style.display;

// Show Criteria
let showCriteria = () =>{
    getCriteria.style.display = 'block';
    getWeigthing.style.display = 'none';
    getInputAltr.style.display = 'none';
    getViewAltr.style.display = 'none';
    getOutput.style.display = 'none';
}

// Show Weighting
let showWeighting = () =>{
    getCriteria.style.display = 'none';
    getWeigthing.style.display = 'block';
    getInputAltr.style.display = 'none';
    getViewAltr.style.display = 'none';
    getOutput.style.display = 'none';
}

// Show Input Alternative
let showInputAltr = () =>{
    getCriteria.style.display = 'none';
    getWeigthing.style.display = 'none';
    getInputAltr.style.display = 'block';
    getViewAltr.style.display = 'none';
    getOutput.style.display = 'none';
}

// Show View Alternative
let showViewAltr = () =>{
    getCriteria.style.display = 'none';
    getWeigthing.style.display = 'none';
    getInputAltr.style.display = 'none';
    getViewAltr.style.display = 'block';
    getOutput.style.display = 'none';
}

// Show Output
let showOutput = () =>{
    getCriteria.style.display = 'none';
    getWeigthing.style.display = 'none';
    getInputAltr.style.display = 'none';
    getViewAltr.style.display = 'none';
    getOutput.style.display = 'block';
}

