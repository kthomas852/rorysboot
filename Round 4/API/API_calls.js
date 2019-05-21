//This tutorial will be all about making API calls
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/hello/', function(req, res){
    res.sendFile(__dirname +'/index.html');
})
//Giffy Challenge
let gifTag = "cats";
const queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + gifTag;

// axios.get(queryURL).then((response)=>{
//     console.log(response.data);

    // This is in jQuery
    // var imageUrl = response.data.images.original_still.url;
    // var gifImage = $("<img>");
    // gifImage.addClass('gif');
    // gifImage.attr("src", imageUrl);
    // gifImage.attr("alt", "Gif image");
    // gifImage.attr('data-animate', response.data.image_original_url);
    // gifImage.attr('data-still', imageUrl);
    // gifImage.attr('data-status', 'still');
// });

//Intro to CORS

//Listener for API calls
app.listen(PORT, () => console.log(`Server now listening on port ${PORT}`));