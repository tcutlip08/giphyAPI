var gifArray = ["dog"];

function addGifButtons() {

    renderButtons();

}

function renderButtons() {

    $("#displayButtons").empty();

    for (var i = 0; i < gifArray.length; i++) {

        var a = $('<button>"');
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

$(document).on("click", ".gif", addGifButtons);

renderButtons();

// $("button").on("click", function () {
//     var person = $(this).attr("data-person");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         gifArray + "&api_key=dc6zaTOxFJmzC&limit=10";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             var results = response.data;

//             for (var i = 0; i < results.length; i++) {
//                 var gifDiv = $("<div>");

//                 var rating = results[i].rating;

//                 var p = $("<p>").text("Rating: " + rating);

//                 var personImage = $("<img>");
//                 personImage.attr("src", results[i].images.fixed_height.url);

//                 gifDiv.prepend(p);
//                 gifDiv.prepend(personImage);

//                 $("#gifs-appear-here").prepend(gifDiv);
//             }
//         });
// });