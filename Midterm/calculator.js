
var displayVal = "";

function display(G) {
 displayVal = displayVal + G;
  $("#result").val(displayVal);   
}

function calculate() {
 $("#result").val(eval(displayVal));
}
