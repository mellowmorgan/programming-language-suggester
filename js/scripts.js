//returns programming language with most answers
function getResult(count1, count2, count3){
  if (count1>count2 && count1>count3){
    return "python";
  }
  else if (count2>count1 && count2>count3){
    return "ruby";
  }
  else if (count3>count1 && count3>count2){
    return "cSharp";
  }
  //account for possibility of 2 of each
  else {
    return "draw";
    }
}

$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();

    let pythonCount=0;
    let rubyCount=0;
    let cSharpCount=0;
    let nonAnswerCount=0; //for finding out if they didn't answer one

    //get answers/values of questions
    const answer1 = $("input:radio[name=question-1]:checked").val();
    const answer2 = $("input:radio[name=question-2]:checked").val();
    const answer3 = $("input:radio[name=question-3]:checked").val();
    const answer4 = $("input:radio[name=question-4]:checked").val();
    const answer5 = $("input:radio[name=question-5]:checked").val();

    //clear checked radio buttons on submit
    $("input:radio[name=question-1]:checked").prop('checked', false);
    $("input:radio[name=question-2]:checked").prop('checked', false);
    $("input:radio[name=question-3]:checked").prop('checked', false);
    $("input:radio[name=question-4]:checked").prop('checked', false);
    $("input:radio[name=question-5]:checked").prop('checked', false);

    //count the answers
    if (answer1==="python"){
      pythonCount++;
    }
    else if (answer1==="ruby"){
      rubyCount++;
    }
    else if (answer1==="c#"){
      cSharpCount++;
    }
    else{
      nonAnswerCount++;
    }

    if (answer2==="python"){
      pythonCount++;
    }
    else if (answer2==="ruby"){
      rubyCount++;
    }
    else if (answer2==="c#"){
      cSharpCount++;
    }
    else{
      nonAnswerCount++;
    }

    if (answer3==="python"){
      pythonCount++;
    }
    else if (answer3==="ruby"){
      rubyCount++;
    }
    else if (answer3==="c#"){
      cSharpCount++;
    }
    else{
      nonAnswerCount++;
    }

    if (answer4==="python"){
      pythonCount++;
    }
    else if (answer4==="ruby"){
      rubyCount++;
    }
    else if (answer4==="c#"){
      cSharpCount++;
    }
    else{
      nonAnswerCount++;
    }
    
    if (answer5==="python"){
      pythonCount++;
    }
    else if (answer5==="ruby"){
      rubyCount++;
    }
    else if (answer5==="c#"){
      cSharpCount++;
    }
    else{
      nonAnswerCount++;
    }
    
    if (nonAnswerCount===0){
      //run function to return result of most-answered language
      const result = getResult(pythonCount, rubyCount, cSharpCount);
      if (result==="python"){
        $("#result-div").css('visibility', 'visible')
        $("#result").text("The best first language for you is Python!");
      }
      else if (result==="ruby"){
        $("#result-div").css('visibility', 'visible')
        $("#result").text("The best first language for you is Ruby!");   
      }
      else if (result==="cSharp"){
        $("#result-div").css('visibility', 'visible')
        $("#result").text("The best first language for you is C#!");
      }
      else{
        $("#result-div").css('visibility', 'visible')
        $("#result").text("It's a draw! Please try again.");
      }
    }
    else{
      //make them resubmit if they didn't answer a question
      $("#result-div").css('visibility', 'visible');
      $("#result").text("You must answer all questions. Please resubmit.");
      
    }
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
 
});

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}