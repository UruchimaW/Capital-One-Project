var bigresults;
var numberTracker=0;

// categories?count=99",
function JeapordyTest(ending){
  $.ajax(
    {
      url:"http://jservice.io/api/" + ending + "",
      type:'GET',
      dataType: 'json',
      success:function(results){
        console.log(results);
        bigresults = results;
      },
    }
  )
}

//building click function
function resultsBuilder(results,iteration){
  if(numberTracker == 99){
    numberTracker = 0;
  }
  document.getElementById("pi_numbers").innerHTML = results[iteration]['title'];
}

function categoryLister(){
  var div = "";
  allQuestions = document.getElementById("allQuestions");
  for(i=0;i<bigresults.length;i++){
    console.log(bigresults[i]['title']);
// list all results on webpage
    internalResults = "<p>" + (bigresults[i]['title']) + "</p>";
    div = div + "<div data-aos="+ "fade" + ">" + internalResults + "</div>";
  }
  allQuestions.innerHTML = div;
}

function randomBuilder(){
  console.log('hello');
  document.getElementById("category").innerHTML = "<strong>"+"Category: " +"</strong>"+ bigresults[0]['category']['title'];
  document.getElementById("question").innerHTML = "<strong>"+"Question: " +"</strong>"+ bigresults[0]['question'];
  document.getElementById("answer").innerHTML = "<strong>"+"Answer: " +"</strong>"+ bigresults[0]['answer'];
  document.getElementById("airdate").innerHTML = "<strong>"+"Airdate: " +"</strong>"+ bigresults[0]['airdate'];
}

window.addEventListener('load', () => {
  // JeapordyTest();
  document.querySelector('#pi_numbers').addEventListener("click", () => {
    console.log(bigresults);
    
    var ending = "categories?count=99";
    JeapordyTest(ending);
    resultsBuilder(bigresults,numberTracker);
    numberTracker++;
    categoryLister();
  });
  document.querySelector('#randomFinder').addEventListener("click", () => {
    var ending = "random"
    JeapordyTest(ending)
    randomBuilder();
  });
});
