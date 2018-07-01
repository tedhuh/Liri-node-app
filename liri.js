require("dotenv").config();
var keys = require("./keys")
var Twitter = require('twitter')
var Spotify = require('node-spotify-api')
var Axios = require("axios")
var fs = require("fs")
var inputOne = process.argv[2];

///////------------TWITTER!!!!--------------///////////
if(inputOne === "my-tweets"){
    var myTweets = function () {
        var twitterClient = new Twitter(keys.twitter);
        var params = {screen_name: "CodingBootCAMP Ted", count: 20};
        twitterClient.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                for(var i = 0; i < 20; i++){
                console.log(tweets[i].text)
                }
            }
            else {
                console.error("There is an error");
            }
            //for loop to display 20 tweets
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
   
  console.log("Artist Name :" + data.tracks.items[0].artists[0].name); 
  console.log("Song Name :" + data.tracks.items[0].name); 
  console.log("Song URL: " + data.tracks.items[0].external_urls.spotify); 
console.log("Album Name: " + data.tracks.items[0].album.name); 
  }); 
}
songSearch()
}


///////////////////////---------------AXIOS--------------------/////////////////////////
if(inputOne === "movie-this"){
    var movieSearch = function(){
    var insertMovie = process.argv.slice(3).join(" ")



var queryUrl = "http://www.omdbapi.com/?t=" + insertMovie + "&y=&plot=short&apikey=trilogy";


console.log(queryUrl);

var axios = require("axios");

axios({
   url: queryUrl,
   method: "GET"
   })
   .then(function(response){
       console.log("Movie Name: " + response.data.Title);
       console.log("Movie Release Date " + response.data.Year);
       console.log("IMDB Movie Rating : " + response.data.imbdRating);
       console.log("Rotten Tomato Rating: " + response.data.Metascore);
       console.log("Movie Produced Location: " + response.data.Country);
       console.log("Movie Language: " + response.data.Language);
       console.log("Movie Plot: " + response.data.Plot);
       console.log("Actors: " + response.data.Actors);



   })
   .catch(function(err){
       console.error(err);
   });

}
movieSearch()
}
//////-----------------FS REQUIRE--------------------////
if(inputOne === "do-what-it-says"){
var readText = function(){
fs.readFile("random.txt", "utf8", function(error,data){
    if(error){
        return console.log(error)
    }
    console.log(data)
})
}
readText();
}