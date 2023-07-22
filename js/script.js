
function submitAnswers() {
    var total = 5;
    var score = 0;

    // get user input
    var q1 = document.forms["quiz-form"]["q1"].value;
    var q2 = document.forms["quiz-form"]["q2"].value;
    var q3 = document.forms["quiz-form"]["q3"].value;
    var q4 = document.forms["quiz-form"]["q4"].value;
    var q5 = document.forms["quiz-form"]["q5"].value;  
    
    // validation 

    for( i=1; i<=total; i++ ) {
        if(eval('q'+i) == null || eval('q'+i)  == ''){
            alert('You Missed Quetion '+ i);
            return false;
        }
    }

    // Set Correct answers to array

    var answers = ["b","a","d","b","d"];
    
    // check the answers

    for( i=1; i<=total; i++ ) {
        if(eval('q'+i) == answers[i - 1]){
            score++;
        }
    }
    
    // display result 
    var results = document.getElementById('results');

    results.innerHTML = '<h3> You Scored <span> ' +score+ ' </span> out of <span> ' +total+ '<span></h3>'; 
    alert('You Scored ' +score+ ' out of ' + total);
    return false;
}
