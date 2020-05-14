const datesOfBirth = [1990, 2005, 1967, 1930, 2012];



function dateCalculations(arr, fn){
    const result = [];

    arr.forEach(element => {
        result.push(fn(element));
    });

    return result;
}


function calculateAge(yearOfBirth){

    return (new Date()).getFullYear() - yearOfBirth;

}


function isOfAge(yearOfBirth){

    return calculateAge(yearOfBirth) > 18;

}

function maxHeartRate(yearOfBirth){

    return 220 - calculateAge(yearOfBirth);

}




console.log(dateCalculations(datesOfBirth, calculateAge));

console.log(dateCalculations(datesOfBirth, isOfAge));

console.log(dateCalculations(datesOfBirth, maxHeartRate));





/*let today = new Date();

let currentYear = today.getFullYear();

console.log(currentYear);*/


