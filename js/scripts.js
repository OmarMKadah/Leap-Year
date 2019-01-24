// var leapYear = function(year) {
//   return false;
// }

function leapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};


$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
		console.log("submitted")
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
