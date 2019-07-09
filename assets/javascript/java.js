var gifArray = ["cat", "dog", "fish", "monkey"];

renderButtons();

// $(document).on("click", ".gif", addGifButtons);

// function addGifButtons() {
//     renderButtons();
// }

function renderButtons() {

    $("#displayButtons").empty();

    for (var i = 0; i < gifArray.length; i++) {

        var a = $("<button>");
        a.addClass("btn btn-secondary gifButton");
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

$(document).on("click", ".gifButton", function () {
    var gif = $(this).attr("data-name");
    console.log(gif);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=TI0kxI9vVsmT8MAq2r6BCEoVozy5t7xz&limit=1";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                //                 <div class="card" style="width: 18rem;">
                //                     <img src="..." class="card-img-top" alt="...">
                //                         <div class="card-body">
                //                             <h5 class="card-title">Card title</h5>
                //                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //                             <a href="#" class="btn btn-primary">Go somewhere</a>
                //                         </div>
                //                 </div>
                var gifDiv = $("<div>");
                gifDiv.addClass("card w-75 text-center");

                var rating = results[i].rating;

                var p = $("<h5>").text("Rating: " + rating);

                var gifImage = $("<img>");
                gifImage.addClass("gif");
                gifImage.attr("src", results[i].images.fixed_width_still.url);
                gifImage.attr("data-still", results[i].images.fixed_width_still.url);
                gifImage.attr("data-animate", results[i].images.fixed_width.url);
                gifImage.attr("data-state", "still");

                var imageTitle = $("<h4>");
                var title = results[i].title.split(" GIF");
                imageTitle.html(title[0].toUpperCase());

                var imageDetail = $("<div>");
                imageDetail.addClass("imageDetail");
                imageDetail.append(imageTitle);

                var favButton = $("<button>");
                favButton.addClass("btn btn-primary").attr("id", "favBtn").text("✩Favorites");

                gifDiv.prepend(favButton);
                gifDiv.prepend(p);
                gifDiv.prepend(imageDetail);
                gifDiv.prepend(gifImage);

                $("#displayGifs").prepend(gifDiv);
            }
        });
});

$(document).on("click", "#favBtn", function () {
    console.log($(this).attr("id"));

    $(this).attr("class", "btn btn-success").html("Gif Saved");

    setTimeout(function () {
        console.log($(this));
        $(this).attr("class", "btn btn-danger").attr("id", "remFavBtn").html("&times;Remove");
    }, 500);

});

// function returnRedButton() {
//     window.setTimeout(function () {
//         var array = ["btn btn-danger", "remFavBtn", "&times;Remove"]
//         // $(this).attr("class", "btn btn-danger").attr("id", "remFavBtn").html("&times;Remove");
//         return array;
//     }, 500);
// }

$(document).on("click", "#remFavBtn", function () {
    console.log($(this).attr("id"));
    $(this).attr("class", "btn btn-primary").attr("id", "favBtn").html("✩Favorites");
});

$(document).on("click", ".gif", function () {

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    } else {
        console.log("Oops");
    }
});