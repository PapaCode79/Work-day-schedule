// Moment.js

var today = moment().format('MMMM Do YYYY')
console.log(today) 
$("#currentDay").text(today)

// text area

$("textArea").each(function () {
    var textAreaTime = $(this).attr("id")
    console.log(textAreaTime)
    if(moment().hour() === parseInt(textAreaTime)) {
       $(this).addClass("present") 
    }
    if (moment().hour() > parseInt(textAreaTime)) {
    $(this).addClass("past")
    }
    if (moment().hour() < parseInt(textAreaTime)) {
        $(this).addClass("future")
    }
})
// functionality

$("button").on("click", function (event) {
    event.preventDefault()  
    var textAreaTime = $(this).siblings("textArea").attr("id")
    var userTask = $(this).siblings("textArea").val()
    localStorage.setItem(textAreaTime, userTask)
})

// Local Storage Key value

for (var i = 0; i < localStorage.length; i++){
    var keyValue = localStorage.key(i)
    var userTask = localStorage.getItem(keyValue)
    $("#" + keyValue).val(userTask)
}

