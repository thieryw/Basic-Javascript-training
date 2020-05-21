class Team{

    constructor(name, scores){
        this.teamName = name; 
        this.teamScores = scores;
    }

    getTeamName(){
        return this.teamName;
    }

    getTeamScores(){
        return this.teamScores;
    }

    getAverageScore(){
        if(!Array.isArray(this.teamScores)){
            return this.teamScores;
        };
        var average = 0;

        this.teamScores.forEach(score => {
            average += score;
        });

        return average / this.teamScores.length;
    }
}



var team = new Team("A team", [2000, 200, 2000]);

var team1 = new Team("B team", [116, 94, 123]);

var team2 = new Team("C team", [2000, 2000, 2000]);

var team3 = new Team("D team", [116, 94, 123, 1500]);

var team4 = new Team("E team", [116, 94, 123, 444, 543]);

var team5 = new Team("F team", 2000);

function getTeamWithHighestScore(teams){

    let averageScores = [];
    let average = 0;
    let results = [];
    let teamIndex = 0;

    teams.forEach(team => {
        averageScores.push(team.getAverageScore());
    });

    averageScores.forEach(averageScore => {

        if(averageScore === average){
            results.push(teams[teamIndex].getTeamName());
        }

        if(averageScore > average){
            results = [teams[teamIndex].getTeamName()];
            average = averageScore;
        }

        teamIndex++;

        
    });

    return results;
    
/*    const average = teams
        .map(team => team.getAverageScore())
        .reduce((prev,curr)=> prev+curr, 0) / teams.length
        ;

    return teams
        .filter(team => team.getAverageScore() >= average)
        .map(team=> team.getTeamName())
        ;*/

}

function printWiningTeams(teams){

    var teamsWithHighestScore = getTeamWithHighestScore(teams);


    if(teamsWithHighestScore.length === 1){
        console.log(teamsWithHighestScore[0] + " wins the game!");
        return;
    }

    console.log("there is a draw between");

    teamsWithHighestScore.forEach(team => {
        
        console.log(team);
        
    });

}

printWiningTeams([team, team1, team2, team3, team4, team5]);



var bills = [124, 48, 268];

function calculateTip(bills){
    var tips = [];

    bills.forEach(bill => {
        if(bill < 50){
            tips.push(bill * 0.2);
            return;
        }

        if(bill >= 50 && bill <= 200){
            tips.push(bill * 0.15);
            return;
        }

        tips.push(bill * 0.1);

    });

    return tips;
}

function calculateTotalPaid(bills){

    var tips = calculateTip(bills);
    var totals = [];
    var billIndex = 0;

    tips.forEach(tip => {
        totals.push(tip + bills[billIndex]);
        billIndex++;
    });

    return totals;

}

function calculateAverageTip(tips){

    if(!Array.isArray(tips)) return tips;
    
    var average = 0;

    tips.forEach(tip => {
        average += tip;
    });

    return average / tips.length;


}
    


console.log(calculateTip(bills));

console.log(calculateTotalPaid(bills));

console.log(calculateAverageTip(calculateTip(bills)));


class Person{
    constructor(name, height, mass){
        this.name = name;
        this.height = height; 
        this.mass = mass;
    }

    getBMI(){
        return this.mass / Math.pow(this.height, 2); 
    }

    compareWithOtherPersonsBMI(person){
        if(this.getBMI() > person.getBMI()){
            return this;
        }

        if(this.getBMI() < person.getBMI()){
            return person;
        }

        return [this, person];
    }
}

function printPersonWithHighestBMI(person1, person2){

    var personWithHighestBMI = person1.compareWithOtherPersonsBMI(person2);

    if(Array.isArray(personWithHighestBMI)){

        personWithHighestBMI.forEach(person => {
            console.log(person.name + " : " + person.getBMI());
        });

        return;
    } 

    console.log(personWithHighestBMI.name + " : " + personWithHighestBMI.getBMI());
   
}

var john = new Person("John", 1.73, 99);

var alex = new Person("Alex", 1.73, 98);



printPersonWithHighestBMI(john, alex);
