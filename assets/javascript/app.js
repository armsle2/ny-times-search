$(document).ready(function () {


    $('#searchButton').on('click', function (e) {
        e.preventDefault();
        $("#articlelist").empty();
        var search = $('#search').val();
        var searchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2d6d8bb60364453d8ab1e776b1a25537&q=" + search;
        var records = $('#records').val();
        console.log('search val: ' +search);
        $.ajax({
            url: searchURL,
            method: 'GET'
        }).done(function (json) {

            console.log(searchURL);
            console.log(json);
            for (var i = 0; i < records; i++) {
                var newHeadline = json.response.docs[i].headline.main;
                $("#articlelist").append("<p>"  + newHeadline + "</p>")
            }

            // console.log(response.response.docs[0].headline.main);
            // console.log(response);
        });
    });

});