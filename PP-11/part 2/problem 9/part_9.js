var a = prompt("Enter a month number please.");

var b = "";

    switch(a){
        case 1: b = "January";
            break;
        case 2: b = "February";
            break;
        case 3: b = "March";
            break;
        case 4: b = "April";
            break;
        case 5: b = "May";
            break;
        case 6: b = "June"; 
            break;
        case 7: b = "July";
            break;
        case 8: b = "August";
            break;
        case 9: b = "September";
            break;
        case 10: b = "October";
            break;
        case 11: b = "November";
            break;
        case 12: b = "December";
            break;
        }

if((a==12) || (a==1) || (a==2)){

    alert(" We are in winter.")
}
else
if((a==3) || (a==3) || (a==5)){

    alert(" We are in Spring.")
}
else 
if((a==6) || (a==7) || (a==8)){

    alert(" We are in Summer.")
}
else 
if((a==9) || (a==10) || (a==11)){

    alert(" We are in Autumn.")
}