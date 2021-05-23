exports.twoDimArray = (row, collum) =>{
    let arr = [];
    for(let i = 0; i < row; i++){
        arr.push(new Array(collum));
    }
    return arr;
}

exports.calculateMatrixR = (arr) => {
    let rowLength = arr.length;
    let collumLength = arr[0].length;

    let arrCollSum = [];
    let temp = 0;

    for(let i = 0; i < rowLength; i++){
        for(let j = 0; j < collumLength; j++){
            temp += arr[i][j]*arr[i][j];
        }
        arrCollSum.push(parseFloat(Math.sqrt(temp).toFixed(3)));
        temp = 0;
    } 

    let normR = this.twoDimArray(rowLength, collumLength);

    for(let i = 0; i < rowLength; i++){
        for(let j = 0; j < collumLength; j++){
            temp = arr[i][j]/arrCollSum[i];
            normR[i][j] = parseFloat(temp.toFixed(3));                
        }
    }
    return normR;
}

exports.calculateMatrixY = (matriks, weight) => {
    let rowLength = matriks.length;
    let collumLength = matriks[0].length;

    let temp = 0;
    let normY = this.twoDimArray(rowLength, collumLength);

    for(let i = 0; i < rowLength; i++){
        for(let j = 0; j < collumLength; j++){
            temp = matriks[i][j]*weight[i];
            normY[i][j] = parseFloat(temp.toFixed(3));
        }
    }

    return normY;
}

exports.calSolidPlus = (normY, typeCriteria) =>{

    let temp = [];
    for(let i = 0; i < typeCriteria.length; i++){
        if(typeCriteria[i] == 0){
            //Min value
            temp.push(Math.min.apply(null, normY[i]));
        }else{
            //Max value
            temp.push(Math.max.apply(null, normY[i]));
        }
    }

    return temp;
}

exports.calSolidMin = (normY, typeCriteria) =>{

    let temp = [];
    for(let i = 0; i < typeCriteria.length; i++){
        // console.log(typeCriteria[i]);
        if(typeCriteria[i] === 0){
            //Max value
            temp.push(Math.max.apply(null, normY[i]));
        }else{
            //Min value
            temp.push(Math.min.apply(null, normY[i]));
        }
    }

    return temp;
}

exports.calGapPlus = (normY, solPlus) =>{
    let rowLength = normY.length;
    let collumLength = normY[0].length;

    let tempValue = 0;
    let temp = this.twoDimArray(collumLength, rowLength);
    // transpose matrix for simplify calculate matrix
    for(let i = 0; i < rowLength; i++){
        for(let j = 0; j < collumLength; j++){
            tempValue = Math.pow((solPlus[i]-normY[i][j]),2);
            temp[j][i] = tempValue;
        }
    }

    let arrTemp = [];
    for(let i = 0; i < collumLength; i++){
        tempValue = 0;
        for(let j = 0; j < rowLength; j++){
            tempValue += temp[i][j];
        }
        tempValue = Math.sqrt(tempValue);
        arrTemp.push(parseFloat(tempValue.toFixed(4)));
    }

    return arrTemp;
}

exports.calGapMin = (normY, solMin) =>{
    let rowLength = normY.length;
    let collumLength = normY[0].length;

    let tempValue = 0;
    let temp = twoDimArray(collumLength, rowLength);
    // transpose matrix for simplify calculate matrix
    for(let i = 0; i < rowLength; i++){
        for(let j = 0; j < collumLength; j++){
            tempValue = Math.pow((normY[i][j]-solMin[i]),2);
            temp[j][i] = tempValue;
        }
    }

    let arrTemp = [];
    for(let i = 0; i < collumLength; i++){
        tempValue = 0;
        for(let j = 0; j < rowLength; j++){
            tempValue += temp[i][j];
        }
        tempValue = Math.sqrt(tempValue);
        arrTemp.push(parseFloat(tempValue.toFixed(4)));
    }

    return arrTemp;
}

exports.preferensiValue = (solMin, solPlus) => {

    let vValue = [];
    let temp = 0;

    for(let i = 0; i < solMin.length; i++){
        temp = solMin[i]/(solMin[i]+solPlus[i]);
        vValue.push(parseFloat(temp.toFixed(4)));
    }

    return vValue;
}

// let matrixR = calculateMatrixR(arrAlternatifVal);
// // console.log((matrixR));

// let matrixY = calculateMatrixY(matrixR, arrCriteriaBobot);
// // console.log(matrixY);

// let aPlus = calSolidPlus(matrixY, arrType);
// // console.log(aPlus);

// let aMin = calSolidMin(matrixY, arrType);
// // console.log(aMin);

// let dPlus = calGapPlus(matrixY, aPlus);
// // console.log(dPlus);

// let dMin = calGapPlus(matrixY, aMin);
// // console.log(dMin);

// let valueV = preferensiValue(dMin, dPlus);
// console.log(valueV);