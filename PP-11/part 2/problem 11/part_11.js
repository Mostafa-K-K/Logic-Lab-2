var x = prompt("Enter 1st number ");
var y = prompt("Enter 2nd number ");
var z = prompt("Enter 3rd number ");

var a = x % 10 ;
var b = y % 10 ;
var c = z % 10 ;

if(a == b && a == c) {
    alert("The 3 numbers have the same last digit : " + a);
}
else {
    alert("They don’t have the same last.");
}