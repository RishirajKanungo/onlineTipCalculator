//function for 5% Tip
function fivePercent(){
  var x = document.getElementById("price").value;
  var newPrice = 1.05 * x;
  var addedTip = newPrice - x;
  var n = addedTip.toFixed(2);
  var m = newPrice.toFixed(2);
  document.getElementById("tip").innerHTML ="Tip Amount: " + n;
  document.getElementById("result").innerHTML ="Total Bill: " + m;
}

//10% Tip
function tenPercent() {
  var x = document.getElementById("price").value;
  var newPrice = 1.1 * x;
  var addedTip = newPrice - x;
  var n = addedTip.toFixed(2);
  var m = newPrice.toFixed(2);
  document.getElementById("tip").innerHTML ="Tip Amount: " + n;
  document.getElementById("result").innerHTML ="Total Bill: " + m;

}

//20% Tip
function twentyPercent() {
  var x = document.getElementById("price").value;
  var newPrice = 1.2 * x;
  var addedTip = newPrice - x;
  var n = addedTip.toFixed(2);
  var m = newPrice.toFixed(2);
  document.getElementById("tip").innerHTML ="Tip Amount: " + n;
  document.getElementById("result").innerHTML ="Total Bill: " + m;

}
