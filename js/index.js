$(document).ready(function() {

  var qlink = "http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";
  var tlink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

  $("#getNew").on("click", function(){
       getQuote();
  });

 function getQuote(){
    $.getJSON(qlink, function(result){
        $("#quote-new").text(result.quoteText);
        $("#author-new").text(result.quoteAuthor);
        $("#postTweet").attr("href",
                            tlink + encodeURIComponent("'" + result.quoteText + "' -" + result.quoteAuthor));
   });
  }
  //getQuote();
});
