let isQuizrunning = true;

function Quiz(questionsAndAnswers){
    this.questionsAndAnswers = questionsAndAnswers;
}

Quiz.prototype.selectRandomQuestion = function selectRandomQuestion(){
    const randomQuestionNumber = Math.floor(Math.random() * this.questionsAndAnswers.length)

    return this.questionsAndAnswers[randomQuestionNumber];
}

Quiz.prototype.popQuestionFromQuiz = function popQuestionFromQuiz(question){

    let result = [];

    this.questionsAndAnswers.forEach(quizQuestion => {
        if(question != quizQuestion){
            result.push(quizQuestion);
        }
        
    });


    return new Quiz(result);

}



function askQuestion(quiz){


    if(quiz.questionsAndAnswers.length === 0){
        return;
    }

    const question = quiz.selectRandomQuestion();

    const userAnswer = prompt(question[0],"").toLowerCase();


    if(userAnswer === "exit"){

        return;
    }
    


    RESULTS: {
        if(userAnswer === question[1]){
            console.log("well done! you got the right answer!");
            score++;
            break RESULTS;
        }

        console.log("Wrong Answer!");
    }

    return askQuestion(quiz.popQuestionFromQuiz(question));

}





askQuestion(new Quiz([["What is the capital of Senegal ?", "dakar"], 
["What is the queen of englands first name ?", "elisabeth"], ["Ho is the president of USA?", "donald trump"]]));











