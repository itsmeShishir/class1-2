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

// let arr1 = [1,2,3,4,5]
let arr2 = new Array(1,2,3,4)
// console.log(arr1, arr2)

// console.log(arr1[1])
// console.log(arr1.length)
// arr1.push(6)

// console.log(arr1)

// arr1.pop()
// console.log(arr1)
// arr1.unshift(0)
// console.log(arr1)
// arr1.shift()
// console.log(arr1)
// arr1.splice(0,3,[2,3,4,5])
// console.log(arr1)

// let arr1 = [1,2,3,4,5]

// //foreach
// arr1.forEach(index => console.log(index));

// //map
// let names = ["shsihir", "ujwol", "raju", "bigesh"]

// let a = names.map(index => console.log(index.toUpperCase()))

// //filter
// names.filter(index=> console.log(index.length > 5))
// console.log(names)

// //array destructuring
// let [f,b,c,d,e] = names;
// console.log(f)
// console.log(e)
// console.log(names.reverse())
// console.log(names.indexOf("shishir"))
// console.log(names.sort())
// console.log(names.includes("ram"))
// console.log(names.includes("raju"))
// console.log(names.concat(["ram", "hari"]))
// console.log(first)


// console.log("Hoisting")
// console.log(vone) 
// var vone  = 10;
// console.log(vone)



// a()
// console.log("onwe")
// function a(){
//     console.log("first")
// }
// a()

// //try and catch -> error handling
// try{
//     console.log(lone)
//     var lone  = 10;
//     console.log(lone)
// }catch(error){
//     console.log(error.message)
// }

// console.log('hello ujwol')


// //class and object OOP
// class Person{
//     constructor(fname, age, lname){
//         this.fname = fname;
//         this.age = age;
//         console.log("Helo my name is " + fname)
//     }

//     //methord
//     mobile(){
//         console.log(`hello ${this.fname}`);
//     }
// }
// class Teacher extends Person{
//     constructor(fname, lname, age){
//         super(fname, age);
//         this.lname  =lname
//     }
// }
// b = new Teacher("Shishir", "bhandari", 25);
// console.log(b.fname)
// b.mobile()
// b.age = 27;
// console.log(b.age)
// console.log(b)


// BOM -> BROWSER oBject model 
// window.alert("Hello world")
// a = Number(window.prompt("Enter a value "))
// b = Number(window.prompt("Enter a value "))
// c = a+b
// document.write(c)
// document.close()

//type conversion
// class Person{
//     static add(x,y){
//         console.log(x+y)
//     }
// }

// Person.add(2,2)

// export const a = 10;

console.log(11)
function a(callback){
    setTimeout(()=>{
        c = "Hello my name is shsihir";
        callback(c)
    },2000)
}
function b(c){
    console.log(c)
}
a(b)
console.log(12)
console.log(13)
console.log(14)












