// Display Current Time
$("#currentDay").text(moment().format(`MMMM Do YYYY, h:mm:ss a`));

// Change Color of Block by Time
function changeBlockColor() {

    let currentHour = moment().hours();
    
    $(`.time-block`).each(function () {
        var hour = parseInt($(this).attr('id'));
        if (currentHour > hour) {
            $(this).addClass("past");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
};
changeBlockColor();