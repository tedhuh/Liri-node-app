require("dotenv").config();
var keys = require("./keys")
var Twitter = require('twitter')
var Spotify = require('node-spotify-api')
var inputOne = process.argv[2];

///////------------TWITTER!!!!--------------///////////
if(inputOne === "my-tweets"){
    var myTweets = function () {
        var twitterClient = new Twitter(keys.twitter);
        var params = {screen_name: "CodingBootCAMP Ted", count: 20};
        twitterClient.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                console.log(tweets[0])
            }
            else {
                console.error("There is an error");
            }
            //for loop to display 20 tweetsh
           
        });
    }
    myTweets()

}




////////--------SPOTIFY-----------/////////////////
if(inputOne === "spotify-this-song"){
var songSearch = function(){
        var insertSong = process.argv.slice(3).join(" ")
    var spotify = new Spotify(keys.spotify);
spotify.search({ type: 'track', query: insertSong}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(insertSong); 
  }); 
}
songSearch()
}

