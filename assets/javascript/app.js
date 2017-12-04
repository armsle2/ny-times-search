$(document).ready(function(){

 $("#searchButton").on("click", function(event) {
        
        event.preventDefault();

       
        var queryTerms = $("#search").val().trim().split(' ');
        var articleMaxCount = $("#records").val().trim();
        var startYr = $("#start").val().trim();
        var endYr = $("#end").val().trim();



      var articleQuery = {
        terms: queryTerms,
        count: articleMaxCount,
        startYear: startYr,
        endYear: endYr,
      }
      console.log(articleQuery);


     });

  $("#clearButton").on("click", function(event) {

    $("#search").empty();
    $("#records").empty();
    $("#start").empty();
    $("#end").empty();
    $("#articlelist").empty();

  });


  

});