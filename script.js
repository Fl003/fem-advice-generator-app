$(document).ready(function () {
    newAdvice();

    function newAdvice() {
        $.ajax({
            type: "GET",
            url: "https://api.adviceslip.com/advice",
            data: "data",
            dataType: "json",
            success: function (response) {
                console.log(response);
                $("#adviceId").text(response.slip.id);
                $("#advice").text('"' + response.slip.advice + '"');
            }
        });
    }

    $('#roll').click(function () { 
        newAdvice();
    });
});