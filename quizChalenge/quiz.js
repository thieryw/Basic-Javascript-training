let isQuizrunning = true;

function Quiz(...questionsAndAnswers){
    this.questionsAndAnswers = questionsAndAnswers;
}

Quiz.prototype.selectRandomQuestion = function selectRandomQuestion(){
    const randomQuestionNumber = Math.floor(Math.random() * this.questionsAndAnswers.length)

    return this.questionsAndAnswers[randomQuestionNumber];
}


function askQuestion(quiz){

    if(!isQuizrunning){
        return;
    }

    const question = quiz.selectRandomQuestion();

    const userAnswer = prompt(question[0],"");

    if(userAnswer === question[1]){
        console.log("well done! you got the right answer!");
        return;
    }

    if(userAnswer === "exit"){
        isQuizrunning = false;
        return;
    }

    console.log("Wrong Answer!");

}


let quiz = new Quiz(["What is the capital of Senegal ?", "dakar"], 
["What is the queen of englands first name ?", "Elisabeth"], ["Ho is the president of USA?", "Donald Trump"]);

function runQuiz(quiz){
    while(isQuizrunning){
        askQuestion(quiz);
    }
}

runQuiz(quiz);










