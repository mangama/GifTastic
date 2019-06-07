

// initial array of landscapes
var topics = ["Rain forest nature landscapes", "Rain forest nature", "Green nature landscapes", "Green nature", "Green nature landscapes",
    "Vegetation and rain landscapes", "Vegetation and rain", "Nature landscapes", "Nature", "Green nature landscapes", "Green nature"];


function renderButtons() {
    $("#landscape-buttons").empty();
    topics.forEach(function (landscape) {
        //Each time through we have access to an indiv array memeber, 
        //which is in this case landscape
        var button = $("<button class='display-images-button'>");
        button.text(landscape);
        //data-title+"whaterlandscape"
        button.attr("data-tittle", landscape);
        $("#landscape-buttons").append(button);
    })
}

function displaylandscape(data) {
    // console.log(data);
    var imageList = data.data;

    for (var i = 0; i < imageList.length; i++) {
        var landscapeDiv = $("<div class=\"landscape\">");
        var landscapeRating = $("<p>").text("Rating: " + imageList[i].rating);
        var landscapeImage = $("<img>")
            .attr("src", imageList[i].images.downsized_medium.url)
            .attr("alt", imageList[i].title)
            .attr("data-state", "animate")
            .attr("data-still", imageList[i].images.downsized_still.url)
            .attr("data-animate", imageList[i].images.downsized_medium.url);
        landscapeDiv.append(landscapeRating);
        landscapeDiv.append(landscapeImage);
        $("#landscape-info").prepend(landscapeDiv);
    }
}

$("#add-landscape").on("click", function (event) {
    //Overriding the default submit button behavior
    event.preventDefault();

    //.val() gets the value, .val("") sets the value
    var landscape = $("#landscape-input")
        .eq(0)
        .val()
        .trim(); //collect the value
    if (landscape.length === 0) {

    } else if (landscape.length > 0) {
        topics.push(landscape);
    }
    $("#landscape-input").val("");
    renderButtons(topics, "lanscape", "#landscape-buttons");
})

renderButtons(topics, "lanscape", "#landscape-buttons");


//Main process
renderButtons();

//Event delegation sentax. This makes click events work for existing and future elements
$("#landscape-buttons").on("click", ".display-images-button", function () {
    var title = $(this).attr("data-tittle");
    // for later 
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${title}&api_key=B23uy0t41LJrEzhJfVl45uC2zCs7ZbhR&limit=10`;

    $.ajax({
        method: "GET",
        url: queryURL
        //The response below is the data. Response only resides insode this function
    }).then(function (response) {
        //.then has the landscape data that we want to use to create a new landscape. In order to do that, we need to call the 
        //displaylandscape function and give it the data about this landscape.
        displaylandscape(response);
    });
})

$("#landscape-info").on("click", "img", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});