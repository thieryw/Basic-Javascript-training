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



var team = new Team("A team", [2000, 2000, 2000]);

var team1 = new Team("B team", [116, 94, 123]);

var team2 = new Team("C team", [2000, 2000, 2000]);

var team3 = new Team("D team", [116, 94, 123, 1500]);

var team4 = new Team("E team", [116, 94, 123, 444, 543]);

var team5 = new Team("F team", 2000);

function getTeamWithHighestScore(teams){
    var average = 0;
    var teamAverage;

    var teamsWithHighestScore;

    teams.forEach(team => {
        teamAverage = team.getAverageScore();

        if(average === teamAverage){
            teamsWithHighestScore.push(team.getTeamName());
        }

        if(average < teamAverage){
            teamsWithHighestScore = [team.getTeamName()];
            average = teamAverage;
        }

        
    });

    return teamsWithHighestScore;


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
    


console.log(calculateTip(bills));

console.log(calculateTotalPaid(bills));










