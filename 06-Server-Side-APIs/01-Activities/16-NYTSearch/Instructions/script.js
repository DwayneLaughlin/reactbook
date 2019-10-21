$(document).ready(function(){
    $("#searchButton").click(function(){
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=dqQF7LxRUpiQNpov4ASexiVQ3jEWx7Nu&q=" + searchTerm;
        var searchTerm = "";
        
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response){
            var realData= response.response;
            console.log(realData)
            
            
            
        
        })
    })    
});
