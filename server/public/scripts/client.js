console.log('client.js has been loaded');

$(document).ready(function () {
    console.log('JQ has been loaded!');
    $.ajax({
        method: "GET",
        url: '/quote/random',
        success: function (response) {
            console.log('random quote response', response);
            // $('p').replaceWith('<p>' + response.quoteText + '</p>');
            $('p').text(response.quoteText);
        },
        error: function (error) {
            console.log('there was an error getting a random quote', error);

        }
        // this response is what ever is in our res.send
        // callback function
        // to REPLACE WITH, gotta have the .quote to send back a STRING
        // if you just to (replace), it sends back an object, which sux
        // .quote is a PROPERTY

    })

    $.ajax({
        method: "GET",
        url: '/quote/first',
        success: function (response) {
            console.log('first quote response', response);
            $('p').text(response.quoteText);
        }
    })

    $.ajax({
        method: "GET",
        url: '/quote/all',
        success: function (response) {
            for (let i = 0; i < response.length; i++) {
                $('ul').append('<li>' + response[i].quoteText + '</li>');
            }
        }
    })

    $('#newQuoteButton').on('click', function () {
        // console.log('new quote');
        $.ajax({
            method: "POST",
            url: '/quote/new',
            data: { quote_to_add: $('#inputBox').val()},
            success: function (response) {
                console.log('new quote post response', response);
                getAllQuotes();
            }
        })
    })
});

function getAllQuotes() {
    $.ajax({
        method: "GET",
        url: '/quote/all',
        success: function (response) {
            console.log('all quotes array', response);
            $('ul').html('');
            for (let i = 0; i < response.length; i++) {
                $('ul').append('<li>' + response[i].quoteText + '</li>');
            }
        }
    })
}