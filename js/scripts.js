$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    let pythonCount=0;
    let rubyCount=0;
    let cSharpCount=0;
    //get values of questions
    const answer1 = $("input:radio[name=question-1]:checked").val();
    const answer2 = $("input:radio[name=question-2]:checked").val();
    const answer3 = $("input:radio[name=question-3]:checked").val();
    const answer4 = $("input:radio[name=question-4]:checked").val();
    const answer5 = $("input:radio[name=question-5]:checked").val();

  });
});