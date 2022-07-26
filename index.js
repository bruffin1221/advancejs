function Company(name){
    this.name = name  
}

function Person(firstName, lastName, position, name){
    this.firstName = firstName
    this.lastName = lastName
    this.position = position 
    Company.call(this, name)

}

let Bruce = new Person("Bruce", "Ruffin", "Shitty Job", "Plantation")
console.log(Bruce)




// function Family(lastName){
//     this.lastName = lastName
// }

// let ruffin = new Family("Ruffin")
// console.log(ruffin)

// function Person(lastName, firstName, age){
//     Family.call(this, lastName)
//     this.firstName = firstName
//     this.age= age 
// }


// let bruce = new Person("Ruffin", "Bruce", 34)
// let karla = new Person("Dettwyler", "Karla", 22)
// console.log(bruce)
// console.log(karla)

// let person = {
//     firstName: "Bruce",
//     lastName: "Ruffin",
//     description: "My job is shitty",
//     sayName: function(){
//         console.log("My name is " + this.firstName + " "+ this.lastName + " and "+ this.description)
//     }
// }

// let dNomad = {
//     firstName: "Chris",
//     lastName: "The FreeLancer",
//     description: "Coding is Awesome"
// }

// person.sayName.call({
//     firstName: "Awesome",
//     lastName: "Life",
//     description: "I am awesome"})


// function a(){
//     b()
//     console.log("John")
// }

// function b(){
//     console.log("Hello World")
// }

// function c(){
//     a()
// }
// c()



// var group = "John"
// for(var i= 0; i< 12; i++){
//     console.log(i)
// }

// function greeting(greeting){
//     return function myName(name){
//         console.log(greeting + " " + name + "!")
//     }
// }

// let john = greeting("Hi")("John")
// let carol = greeting("Hello")("Carol")

// function add(num1){
//     return function moreAdd(num2){
//         console.log(num1 + num2 )
//     }
// }

// let nine  = add(3)(6)
// let tweleve = add(4)(8)

// function age(){
//     let num = 40
//     return function writeAge(){
//         console.log(num)
//     }
// }

// let twenty = age()()
// let myName = "Bruce"

// function sayMyName(name){
//     function speak(){
//          console.log(name)
//     }
//     return speak
// }

// let bruce = sayMyName(myName)
// bruce()

// myName = "Xavien"
// let xavien = sayMyName(myName)
// xavien()

// let Son = {
//     firstName: "Xavien",
//     lastName: "Ruffin"
// }

// let sonOfBruce = Object.create(Son)
// console.log(sonOfBruce.firstName)

// let Son = function(lastName, firstName, age, grade){
//     this.lastName = lastName
//     this.firstName= firstName
//     this.age = age
//     this.grade = grade

// }


// let mike = new Son("Donald", "Mike", 14, 8)
// mike.father= "Don Corell"

// Son.prototype.speak= function(){
// console.log("I want candy")}

// console.log(mike.speak())

// let Pet = function(animal, name, age, owner){
//     this.animal = animal
//     this.name = name
//     this.age = age
//     this.owner = owner
// }
// Pet.prototype.sound= function(){
//     console.log("Woof! Woof!")
// }
// let fido = new Pet("dog", "Fido", 2, "Matt Turner")
// console.log(fido.sound())

// let addbtn = document.querySelector("button#add-btn")
// console.log(typeof 5)

// addbtn.addEventListener("click", function(e){
//     var val1 = document.querySelector("input#number1").value
//     var val2 = document.querySelector("input#number2").value
//     var sign = document.querySelector("#sign").value
//     let answer =`${val1} ${sign} ${val2}`
    
//     let number = document.querySelector("div#number")
//     let theAnswer = eval(answer)
//     number.innerHTML = `<p> ${theAnswer}</p>`
    
   
 
//  })






// let product = function(x, y){
//     z = x * y
//     console.log(z)
// }

// product(3, 4)

// let button = document.querySelector("button#button")
// button.addEventListener("click", function(){
//     hello()
// }) 

// function hello(){
//     console.log("Hello World")
// }

// function hello(){
//     console.log("Hellow World")
// }

// hello()

// function add(x, y){
//     z = x + y
//     console.log(z)
// }

// add(4, 5)

// function testScore( score, name){

//     if(score > 60){
//         console.log("Congrats! " + name +" passed the test!")
//     }else{
//         console.log( name + " failed the test!")
//     }
// }
// testScore(20, "Billie")

// let secondP = document.querySelector("div.manip p:last-child")
// secondP.innerText = "Gladys"


// let thirdP = document.querySelector("div.manip p:nth-child(3)")
// thirdP.innerText= "Scrub"
// thirdP.style.color = "green"


// let button = document.querySelector("button#button")
// button.addEventListener("click", ()=>{
//    changeColor()
//    changeFontSize()
   
// })

// let changeColor=()=>{
//      let thirdP = document.querySelector("div.manip p:nth-child(3)")
//     thirdP.innerText = "I am a POS"
//     thirdP.style.color = "blue"
// }

// let changeFontSize=()=>{
//     let p = document.querySelector("div.manip p:nth-child(4)")
//    p.innerText = "I am"
//    p.style.fontSize = "30px"
// }

// let child={
//     name: "Xavien",
//     grade: 6,
//     saying: function(){
//         return "I want money"
//     },
//     crying: function(){
//         return "WHaaa!"
//     }, 
//     parent: function(name){
//         return `${name}`
//     }


// }

// console.log(child.name)
// console.log(child.parent("DaDa"))
// console.log(child.crying())

// let son= {
//     name:{
//         firstName: "Xavien", 
//         lastName: "Ruffin"
//     },
//     age:{
//         number: 11, 
//         grade: "6th"
//     },
//     parents:{
//         mother: "Karla Ruffin",
//         father: "Xaiven Ruffin"
//     },
//     favorite: function(){
//         return "I love " +  this.parents.mother
//     }
// }
// console.log(son.favorite())


// son.sibilings.brother = "Leo"
// son.sibilings.sister = "Dorothy"
// console.log(son)
// console.log(son["name"]["firstName"])
// console.log(son.age.number)
// console.log(son.favorite("salad"))


