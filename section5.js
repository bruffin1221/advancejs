function Person(firstName, lastName, age, description){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.description = description 
}


function Pet(firstName, lastName, age, type){
    Person.call(this, firstName, lastName, age)
    this.type = type
}


let infoB = document.querySelector("button#your-info")
infoB.addEventListener("click", function(){

    let firstName = document.querySelector("input#fname")
    let lastName = document.querySelector("input#lname")
    let age = document.querySelector("input#age") 
    let description = document.querySelector("input#description")
    

    let bruce = new Person(firstName.value, lastName.value, age.value,
        description.value)
    console.log(bruce)

    let info = document.getElementById("info")
    
    info.innerHTML = `<p>${bruce.firstName} ${bruce.lastName}</p>
    <p>${bruce.age}</p>
    <p>${bruce.description}</p>`
     
})

let petInfoB = document.querySelector("button#pet-info")
petInfoB.addEventListener("click", function(){

    let petFirst = document.querySelector("input#first-name")
    let petSecond = document.querySelector("input#last-name")
    let ageOfPet = document.querySelector("input#pet-age")
    let petType = document.querySelector("input#type")
    
    let myPet = new Pet(petFirst.value, petSecond.value, ageOfPet.value, petType.value)
    
    let petInfo = document.querySelector("div#pet-info")
    petInfo.innerHTML = `<p>${myPet.firstName} ${myPet.lastName}</p>
    <p>${myPet.age}</p>
    <p>${myPet.type}</p>`

})

function MoreInfo(firstName, lastName, age, hobbies, goals){
    Person.call(firstName, lastName, age)
    this.hobbies = hobbies
    this.goals = goals
}


let moreInfoB = document.querySelector("button#more-info")
moreInfoB.addEventListener("click", function(){
    
    var infoFirst = document.querySelector("input#info-fname")
    var infoSecond = document.querySelector("input#info-lname") 
    var infoAge = document.querySelector("input#info-age")
    var infoHobbies = document.querySelector("input#info-hobbies")
    var infoGoals = document.querySelector("input#info-goals")
    

    let myInfo = new MoreInfo(infoFirst.value, infoSecond.value , infoAge.value,
        infoHobbies.value, infoGoals.value)
   
    var theInfo = document.getElementById("the-info")

    theInfo.innerHTML = `<p>${myInfo.firstName} ${myInfo.lastName}</p>
    <p>${myInfo.age}</p>
    <p>${myInfo.hobbies}</p>
    <p>${myInfo.goals}</p>`


})






