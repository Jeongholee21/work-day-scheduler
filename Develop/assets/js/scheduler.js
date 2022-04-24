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

// Save Button Click
$(".saveBtn").on("click", function() {
    let plan =  $(this).siblings(".plan").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, plan);
});

// Get Item from Local Storage
$("#8am .plan").val(localStorage.getItem("#8am"));
$("#9am .plan9am").val(localStorage.getItem("#9am"));
$("#10am .plan").val(localStorage.getItem("#10am"));
$("#11am .plan").val(localStorage.getItem("#11am"));
$("#12pm .plan").val(localStorage.getItem("#12pm"));
$("#1pm .plan").val(localStorage.getItem("#1pm"));
$("#2pm .plan").val(localStorage.getItem("#2pm"));
$("#3pm .plan").val(localStorage.getItem("#3pm"));
$("#4pm .plan").val(localStorage.getItem("#4pm"));
$("#5pm .plan").val(localStorage.getItem("#5pm"));
$("#6pm .plan").val(localStorage.getItem("#6pm"));
$("#7pm .plan").val(localStorage.getItem("#7pm"));
$("#8pm .plan").val(localStorage.getItem("#8pm"));