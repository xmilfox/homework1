
// 2 завдання
let surname ='Khmil'; 
console.log(surname)


// 3 завдання

let a; 
let b;
a = 5;
b = 7;
alert(a,b);
a = 5;
b = 7;
a=b;
alert (a,b)



// завдання 4
const person = {
    String : '',
    Number : 223,
    Boolean :( true,false),
    undefined : undefined,
    null : null,


}
console.log(Number);


// завдання 5 

let isAdult = confirm("Ти повнолітній?");

console.log( isAdult );


// завдання 6

let name = 'Nazar'
let surname = 'Khmil';
let year = 2003;
let group = '602 JS Core';
let single = true;

let nameType = typeof name
let surnameType = typeof surname
let yearType = typeof year
let groupType = typeof group
let singleType = typeof single
console.log(nameType, surnameType, yearType, groupType, singleType)

console.log(year, single, name, surname, group)

let firtsVar = undefined;
let secondVar = null;

console.log(typeof firtsVar);
console.log(typeof secondVar)






// завдання 7 
let login = prompt("Введіть ваш логін");
let  email = prompt("Введіть ваш емайл");
let password = prompt("Введіть ваш пароль");

 alert ("dear" + " " + login + " " + "your email is " + email + " " + "your password is" + " " + password)





// завдання 8
let hour = (60*60);
let day = (60*60*24);
let month = (60*60*24*30);
alert ("Секунд в годині дорівнє " + " " + hour +  " " + "В добі " + " " + day + " " + "В місяці" + " " + month ) ;