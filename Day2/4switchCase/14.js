//  switch statement

let day = prompt(" please enter a number, only from 0 to 6'. ");

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("saale gawar 0 se 6 tak hi enter karna tha");
        break;
}