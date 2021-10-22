

$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    let pythonCount=0;
    let rubyCount=0;
    let cSharpCount=0;
    let noneAnswers=0;
    //get values of questions
    const answer1 = $("input:radio[name=question-1]:checked").val();
    const answer2 = $("input:radio[name=question-2]:checked").val();
    const answer3 = $("input:radio[name=question-3]:checked").val();
    const answer4 = $("input:radio[name=question-4]:checked").val();
    const answer5 = $("input:radio[name=question-5]:checked").val();

    if (answer1=="python"){
      pythonCount++;
    }
    else if (answer1=="ruby"){
      rubyCount++;
    }
    else if (answer1=="c#"){
      cSharpCount++;
    }
    else(){
      noneAnswers++;
    }

    if (answer2=="python"){
      pythonCount++;
    }
    else if (answer2=="ruby"){
      rubyCount++;
    }
    else if (answer2=="c#"){
      cSharpCount++;
    }
    else(){
      noneAnswers++;
    }
    if (answer3=="python"){
      pythonCount++;
    }
    else if (answer3=="ruby"){
      rubyCount++;
    }
    else if (answer3=="c#"){
      cSharpCount++;
    }
    else(){
      noneAnswers++;
    }
    if (answer3=="python"){
      pythonCount++;
    }
    else if (answer3=="ruby"){
      rubyCount++;
    }
    else if (answer3=="c#"){
      cSharpCount++;
    }
    else(){
      noneAnswers++;
    }
    if (answer4=="python"){
      pythonCount++;
    }
    else if (answer4=="ruby"){
      rubyCount++;
    }
    else if (answer4=="c#"){
      cSharpCount++;
    }
    else(){
      noneAnswers++;
    }
    if (answer5=="python"){
      pythonCount++;
    }
    else if (answer5=="ruby"){
      rubyCount++;
    }
    else if (answer5=="c#"){
      cSharpCount++;
    }
    else(){
      noneAnswers++;
    }

    //run function to return result with count of different answers
    const result = getResult(pythonCount, rubyCount, cSharpCount, noneAnswers);
  });
});