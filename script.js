// //control statement
// // Condition ->if,  else, else if,
// // for , while, do while 

// //Condition
// // if(condition){
// //   //statement
// // }

// let a = 18;
// if (a >= 18) { //false
//   console.log("is greater than 18")
// }else if (a == 18){
//   console.log("is equal to")
// }
// else{
//   console.log(" is less than " + a)
// }
// let c = (a>18) ? "yes is 18" : "no not 18";
// console.log(c)

// //switch contition
// let date = new Date()
// console.log(date)
// b = date.getDay()+1

// switch(b){
//     case "sunday":
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//         console.log("Tuesday")
//         break;
//     default:
//         console.log("default value " + a)
// }
// console.log("Hello")

// names = "bigesh"
// switch(names){
//   case "shishir":
//     console.log(`${names}  = shihsir`)
//     break;
//   case "bigesh":
//     console.log(`${names}  = bigesh`)
//     break;
//   case "ujwol":
//     console.log(`${names}  = bigesh`)
//     break;
//   default:
//     console.log("none of the above name")
// // }
// names = "shsihir"
// let a = (names == "shsihir") ? "yes he is shihsir" : "no he is not"
// console.log(a)

// loop -> for, while,do while
// for(initialize; condition; inc/dec){ loop body }
// for(i = 0; i<= 10; i++){
//   for(j = 10; j>= 0; j--){
//     console.log(j);
//   }
//   console.log(i)
// }

// a = 5;
// for(i = 0; i<=10; i++){
//   console.log(`Multiplication TABLE of ${i}`)
//   for(j = 0; j<= 10; j++){
//     console.log(`${i} * ${j} = ${i*j}`)
//   }
// }

// // while(condition){clg, inc/dec}
// while(a>=0){
//   console.log(a)
//   a--
// }
// console.log(a)
// console.log("do while")
// a = 5
// do{
//   console.log(a);
//   a--;
// }while(a>=0);

// //break and continue -> 
// for(i = 0; i < 10; i++){
//   if(i %2 == 0){
//     continue;
//   }
//   console.log(i);
// }
// // write 

// //function
// // function functionName(){// function body}

// function myName(){
//   console.log("My name is shishir bandari")
// }
// myName();
// myName();
// myName();
// myName();
// // return
// function funReturn(a, b){
//   return a+b
// }

// // with parameter
// function mynameParamter(name, age){
//   console.log(`Hello my my name is ${name} ${age}`)
// }
// mynameParamter("shsishir", 27)
// mynameParamter("ujwol", 21)
// mynameParamter("raju", 21)


// console.log(funReturn(3,3))
// // variable function or ano
// let variableFun = function (){
//   console.log("variable function")
// }
// variableFun()

// //write a program that print sun of tho number
// let addvariable = function (a, b){
//   console.log(a+b)
// }
// addvariable(5,6)
// //arrow function
// let arrow = () =>  "hello"
// console.log(arrow())


// let arrows = () => { 
//   return "hello" 
// }
// console.log(arrows())


// let arros = () => console.log("Hello")

// arros()

// //parameter type

// //default parameter
// function defaultP(a ,b = 4){
//   console.log(a+b)
// }
// defaultP(5, 9)

// function spreads(...numbers){
//   console.log(numbers)
// }
// spreads(1,2,3,4,5)

// //Object in js
// obj1 = {
//   1: "shishir",
//   2: "bhndari",
//   3: "JS",
//   "4":"four",
//   5: true,
//   6:[1,2,3,4,5]
// }
// console.log(obj1[1])
// console.log(obj1[3])
// console.log(obj1[6])
// console.log(obj1["4"])

// obj1[1] = "Shishir Bhandari"
// console.log(obj1[1])


// //array in js

let arr1 = [1,2,3,4,5]
let arr2 = new Array(1,2,3,4)
console.log(arr1, arr2)

console.log(arr1[1])
console.log(arr1.length)
arr1.push(6)

console.log(arr1)

arr1.pop()
console.log(arr1)
arr1.unshift(0)
console.log(arr1)
arr1.shift()
console.log(arr1)
arr1.splice(0,3,[2,3,4,5])
console.log(arr1)




