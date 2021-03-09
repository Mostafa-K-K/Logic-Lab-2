alert("Enter 5 numbers.")
var i = 0;
var arr = [];
for (x = 0; x <= 5; x++) {
    arr[i] = prompt("Enter a number : ");
    i++;
}
var b = arr[0];
var a = arr[0];
for (i = 1; i <= 5; i++){
    if (a < arr[i]) {
        a = arr[i];
        i++;
    }
    if (b > arr[i]) {
        b = arr[i];
        i++;
    }
}


alert("Min : " + b + "    Max : " + a);