var gifArray = ["cat"];

renderButtons();

// $(document).on("click", ".gif", addGifButtons);

// function addGifButtons() {
//     renderButtons();
// }

function renderButtons() {

    $("#displayButtons").empty();

    for (var i = 0; i < gifArray.length; i++) {

        var a = $("<button>");
        a.addClass("btn btn-secondary gif");
        a.attr("data-name", gifArray[i]);
        a.text(gifArray[i]);
        $("#displayButtons").append(a);
    }
}

$("#addGif").on("click", function (event) {

    event.preventDefault();
    var gif = $("#gifInput").val().trim();
    gifArray.push(gif);
    renderButtons();
    $("#gifInput").val("");
});

// <button class="btn btn-secondary gif" data-name="cat">cat</button>
// <button class="btn btn-secondary gif" data-name="cat">cat</button>
$(document).on("click", "button", function () {
    var gif = $(this).attr("data-name");
    console.log(gif);
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //     gif + "&api_key=TI0kxI9vVsmT8MAq2r6BCEoVozy5t7xz&limit=1";

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // })
    //     .then(function (response) {
    //         console.log(response);
    //         var results = response.data;

    //         for (var i = 0; i < results.length; i++) {
    //             var gifDiv = $("<div>");

    //             var rating = results[i].rating;

    //             var p = $("<p>").text("Rating: " + rating);

    //             var gifImage = $("<img>");
    //             gifImage.attr("src", results[i].images.fixed_height.url);

    //             gifDiv.prepend(p);
    //             gifDiv.prepend(gifImage);

    //             $("#displayGifs").prepend(gifDiv);
    //         }
    //     });
});