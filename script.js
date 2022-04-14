// Moment.js

var today = moment().format('MMMM Do YYYY')
console.log(today) 
$("#currentDay").text(today)

// text area

$("textArea").each(function () {
    var textAreatime = $(this).attr("id")
    console.log(textAreatime)
    if(moment().hour() === parseInt(textAreatime)) {
       $(this).addClass("present") 
    }
    if (moment().hour() > parseInt(textAreatime)) {
    $(this).addClass("past")
    }
    if (moment().hour() < parseInt(textAreatime)) {
        $(this).addClass("future")
    }
})
// functionality

$("button").on("click", function (event) {
    event.preventDefault()  
    var textAreatime = $(this).siblings("textarea").attr("id")
    var usertask = $(this).siblings("textarea").val()
    localStorage.setItem(textAreatime, usertask)
})

// Local Storage Key value

for (var i = 0; i < localStorage.length; i++){
    var keyValue = localStorage.key(i)
    var usertask = localStorage.getItem(keyValue)
    $("#" + keyValue).val(usertask)
}

