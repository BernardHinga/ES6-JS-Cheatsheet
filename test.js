//_________JS Cheatsheet__________
// Remove comment tags to run code________________


/*Variables---------------------------------------------------------------------------------------------------*/

// let firstName = 'Bernard';    //--variable can change
// const lastName = 'Hinga';     //---variable is fixed
// const yearOfBirth = 1999;

// console.log(`My name is ${firstName} ${lastName}. I was born in the year ${yearOfBirth}.)


/*Object-------------------------------------------------------------------------------------------------------*/

// let currentYear = 2020
// let me = {
//     firstName: 'Bernard',
//     lastName: 'Hinga',
//     yearOfBirth: 1999,
// }

// let myAge = currentYear - me.yearOfBirth

// console.log(`My name is ${me.firstName} ${me.lastName}. I was born in the year ${me.yearOfBirth}. Currently I am ${myAge} years old.`)


/*Arrays-------------------------------------------------------------------------------------------------------*/

// let me = ['Bernard', 'Hinga']
// console.log(me)

// let prime = [2, 3, 5]
// let number = [7, 9]
// let allPrime = prime.concat(number)   //---joining two arrays to one

// console.log(prime)
// console.log(allPrime)


/*CONTROL FLOW----------------------------------------------------------------------------------------------------*/

//________for loops____________________

// for (let i = 0; i <= 5; i++) {
//     console.log(`Loop ${i}`)
// }
// console.log('Done!')


//let shopping = ['bread', 'salt', 'sugar', 'butter', 'flour']

// for (let i = 0; i < shopping.length; i++) {
//     console.log(shopping[i])
// }                                     //---- .length gets the number of individual char/num/indeces
// console.log('Done shopping')


//________while loop_____________________

//let i = 0
// while (i <= 5) {
//     console.log(`Loop ${i}`)
//     i++;
// }
// console.log('Done!')

// while (i < shopping.length) {
//     console.log(shopping[i])
//     i++
// }
// console.log('Done shopping')


//__________do-while loop____________________

// let i = 5
// do {
//     console.log(`Value of i is ${i}`)
//     i++
// } while (i < 5)


//______________if, else, if-else statements_____________

// let age = 18
// if (age >= 18) {
//     console.log(`You may enter..!!`)
// } else {
//     console.log(`Please provide parent contact`)
// }


//___________Logical operators::OR(||) AND(&&)_________________

// let age = 7
// if (age <= 5) {
//     console.log('You should be in kindergarten')
// } else if (age >= 14 && age < 18) {
//     console.log('You should be in highschool')
// } else {
//     console.log('You are in primary school')
// }
// let password = '@jack'
// if (password.length <= 8) {
//     console.log(`Password insufficient!`)
// } else if (password.includes('@') || password.includes('.')) {
//     console.log(`Password is strong!`)
// } else {
//     console.log(`Password is sufficient!`)
// }


//___________break & continue_______________

// let score = [10, 60, 50, 0, 20, 100, 30]

// for (let i = 0; i < score.length; i++) {
//     if (score[i] === 0) {
//         continue
//     }

//     console.log(`Your game score is ${score[i]}`)

//     if (score[i] === 100) {
//         console.log(`You got the high score !!`)
//         break
//     }
// }


//___________Switch statements_________________

// const grade = 'B'

// switch (grade) {
//     case 'A':
//         console.log(`You got an A`)
//         break
//     case 'B':
//         console.log(`You got an B`)
//         break
//     case 'C':
//         console.log(`You got an C`)
//         break
//     case 'D':
//         console.log(`You got an D`)
//         break
//     case 'E':
//         console.log(`You got an E`)
//         break
//     case 'F':
//         console.log(`You got an F`)
//         break
// }


/* FUNCTIONS --------------------------------------------------------------------------------------------- */


//function declaration-------------------
// function greet() {                          
//     console.log(`Hello there`)
// }

// greet()

//function expression---------------------
// const greet = function(name, time) {
//     console.log(`Good ${time} ${name}`)
// }

// greet('John', 'afternoon')

//returning values in functions------------------------------
// const calcArea = function(radius) {
//     return 3.142 * radius ** 2
// }

// let area = calcArea(5)
// console.log(`Area is: ${area}`)

// const calcVol = function(height) {
//     return area * height
// }

// let volume = calcVol(10)
// console.log(`Volume is: ${volume}`)

//Arrow functions----------------------------
const calcArea = (radius) => 3.142 * radius ** 2

let area = calcArea(5)
console.log(`Area is: ${area}`)

const calcVol = (height) => area * height

let volume = calcVol(10)
console.log(`Volume is: ${volume}`)