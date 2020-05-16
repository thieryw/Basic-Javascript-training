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


// CLOSURES EXERCISE

function yearsUntilRetirment(ageOfRetirment){
    return (age) =>{
        return ageOfRetirment - age;
    }
}



/*console.log(dateCalculations(datesOfBirth, calculateAge));

console.log(dateCalculations(datesOfBirth, isOfAge));

console.log(dateCalculations(datesOfBirth, maxHeartRate));*/



console.log(yearsUntilRetirment(65)(calculateAge(1990)));


const retirmentUs = yearsUntilRetirment(66);

console.log(retirmentUs(calculateAge(1990)));





/*let today = new Date();

let currentYear = today.getFullYear();

console.log(currentYear);*/

const professions = ["designer", "teacher", "doctor"];

/*function interviewQuestion(job){
    if(job === "designer"){
        return function(name){
            console.log(`${name} , can you please explain what
            UX desing is?`)
        }
    }

    if(job === "teacher"){
        return function(name){
            console.log(`Hello ${name} , what subject do you 
            teach ?`)
        }
    }

    return function(name){
        console.log(`Hello ${name}, what dol you do?`);
    }
}

let interview = interviewQuestion(professions[0]);


interview("william");*/

function interviewQuestion(job){
    return (name) =>{
        if(job === "designer"){
            console.log(`${name}, can you please explain what UX design is?`);
            return;
        }

        if(job === "teacher"){
            console.log(`What subject do you teach, ${name} ?`);
            return;
        }

        console.log(`Hello ${name}, what do you do ?`);


    }
}

let designerQuestion = interviewQuestion(professions[0]);
let teacherQuestion = interviewQuestion(professions[1]);

designerQuestion("William");
teacherQuestion("Horace");
/* test */




