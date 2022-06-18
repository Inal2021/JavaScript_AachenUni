//LÖSUNGEN

//Lösung 1
// for (let i = 30; i > 4 ; i--) {
//     document.write(i+"<br>")
// }

//Lösung 2
// for (let i = 5; i <= 50; i+=5) {
//     document.write(i+"<br>")
// }

// Lösung 3

//
// do{
//     var password=parseInt(window.prompt("Bitte geben Sie ein Passwort: ",""));
//
// } while (password!=2022)
// window.alert("Herzlich Willkommen!");

// Lösung 4

// do {

//     var username = window.prompt("Username: ","");
//     var password = window.prompt("Passwort: ","");
//
// if(username=="hakan" && password==2022) {
// window.alert("Herzlich Willkommen!");
// }
// else {
//     window.alert("Versuchen Sie nochmal!")
// }
// } while (username!="hakan" && password!=2022);

// Lösung 5

// var sterne= window.prompt("Geben Sie eine Zahl für die Zahl von Sterne ein: ","");
// var string="";
//
// for (let i = 0; i < sterne; i++) {
//     string+="*";
// }
// window.alert(string)

// Lösung 6

// var erste=window.prompt("Geben Sie bitte erste Zahl vom Rechteck : ","")
// var zweite=window.prompt("Geben Sie bitte zweite Zahl vom Rechteck : ","")
//
// let string = "";
//
// for(let i = 0; i < erste; i++) {
//     for(let j = 0; j < zweite; j++) {
//         string += "* ";
//     }
//     string += "\n";
// }
// window.alert(string);

// Lösung 7

// var arr = [
//     {
//     note: 66,
//     student: "Frankeshtein"
//     },
//     {
//         note: 88,
//         student: "Quantin Tarantino"
//     },
//     {
//         note: 92,
//         student: "Angela Merkel"
//     },
//     {
//         note: 76,
//         student: "George Orwell"
//     },{
//         note: 82,
//         student: "Johhny Depp"
//     }
// ];
//
//
// const average = arr.reduce((a, b) => a + b.note, 0) / arr.length;
// window.alert(average);

















