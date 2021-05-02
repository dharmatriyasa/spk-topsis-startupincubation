// Criteria
const getCriteria = document.getElementById("criteria");
console.log(getCriteria);
const criteriaDisplay = getCriteria.style.display;
console.log(criteriaDisplay);

// Weighting
let getWeigthing = document.getElementById('weighting');
let weightingDisplay = getWeigthing.style.display;


// Show Criteria
let showCriteria = () =>{
    getCriteria.style.display = 'block';
    getWeigthing.style.display = 'none';
}

// Show Weighting
let showWeighting = () =>{
    getCriteria.style.display = 'none';
    getWeigthing.style.display = 'block';
}

