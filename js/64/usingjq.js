(function () {
    'use strict';

    $("<form action = '' method='GET' id = 'nameForm'>" +
        "<input class = 'formInputs' id = 'getName' name = 'name' placeholder = 'Please enter your Name:'> " +
        "<input class = 'formInputs' id='getAddress' name='address' placeholder='Please enter your Address:'> " +
        "<button value='register' id='formButton'></form>")
        .submit(function (e) {

            if ($('#check').is(':checked') && $('#returnName').is(':empty') && $('#returnAddress').is(':empty') && $('#getName').val() && $('#getAddress').val()) {
                $('#returnName').append(`Your name is: ${$('#getName').val()}`);
                $('#returnAddress').append(`Your address is: ${$('#getAddress').val()}`);
            }
            e.preventDefault();
        })
        .appendTo("body");

    $("<input id = 'check' type='checkbox'>Check the box to display your info here!</input>")
        .appendTo("body");

    $("<div class='message'><span id= returnName></span></div >")
        .appendTo("body");
    $("<div class='message'><span id='returnAddress'></span></div >")
        .appendTo("body");

    $("#nameForm")
        .css("border", "solid blue  2px")
        .css("height", "6em")
        .css("width", "22em")
        .css("padding", "1em")
        .css("background-color", "green");

    $(".formInputs")
        .css("width", "25em")
        .css("margin", ".5em");

    $("#formButton")
        .css('display', 'block')
        .css('margin', 'auto')
        .html("Submit");
    
    $('.message')
        .css('color', 'purple');

}());