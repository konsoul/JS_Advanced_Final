(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('You suck, but you are right');
            //store the score in a variable and call the score function
            sc = callback(true);
        } else {
            console.log('You suck, and you are wrong');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log('You have: ' + score + ' points');
        console.log('-----------------------------');
    }
    
    var q1 = new Question('What is the meaning of life?', ['nothing', 'something'], 1);
    var q2 = new Question('Why are you so freaking dumb?', ['I just am', 'I am not!', 'Someday I will be a real boy'], 2);
    var q3 = new Question('What is your favorite color?', ['red', 'blue...I mean..re..AHHHHHH'], 2);

    var questions = [q1, q2, q3];

    
    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    //stores the score function in keepScore variable, which has acces to the sc variable
    var keepScore = score();

    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Answer the damn question');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }

    }
    nextQuestion();
})();



















































