$(document).ready(function () {

    $("#add").on("click", function () {
        var item = $("#itementry").val();
        $("ul").append("<li>" + item + "</li>")
        $("input").val(" ");
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 13) {
            $("#add").click();
        }
    });

    $(document).on("click", "li", function () {
        $(this).toggleClass("purchase");
    });

    $(document).on("dblclick", "li", function () {
        $(this).remove();
    });



})
