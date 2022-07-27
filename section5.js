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

// let bruce = {
//     firstName: "Bruce",
//     lastName: "Ruffin"
// }

// let newBruce={
//     firstName: "Erof",
//     lastName: "Oreod"
// }


// function lifeCon(now, future){
//     console.log(this.firstName +" " +this.lastName +"'s life is " +now + " but will be " + future)
// }

// lifeCon.call(bruce, "sucks", "epic")

// lifeCon.apply(newBruce, ["frustrating", "amazing"])


let goalBtn = document.querySelector("button#goal-button")
goalBtn.addEventListener("click", function(){
    
    var firstName = document.querySelector("input#fName")
    var lastName = document.querySelector("input#lName")
    var goal1 = document.querySelector("input#goal1")
    var goal2 = document.querySelector("input#goal2")
    var goal3 = document.querySelector("input#goal3")
    var goalList = document.querySelector("div#goal-list")
    console.log(goalList)
    var myName ={
        fName: firstName.value,
        lName: lastName.value
    }
    
    let myGoalsObj = myGoals.apply(myName,[goal1.value, goal2.value, goal3.value])
    goalList.innerHTML =
        `<p><strong>${myGoalsObj.firstName} ${myGoalsObj.lastName}</strong></p>
         <p>Goal 1: ${myGoalsObj.goals[0]}</p>
         <p>Goal 2: ${myGoalsObj.goals[1]}</p>
         <p>Goal 3: ${myGoalsObj.goals[2]}</p>
        `   

})

function myGoals(goal1, goal2, goal3){
      let goalsObj= {
        firstName: this.fName,
        lastName: this.lName,
        goals: [goal1, goal2, goal3]
      }
  return goalsObj  
}

// let bruce  = {
//     firstName: "Bruce",
//     lastName: "Ruffin"
// }

// function newValues(value1, value2){
//     console.log(this.firstName, this.lastName, value1, value2)
// }

// let bruceValue = newValues.bind(bruce, "becoming financially independent", "traveling" )
// bruceValue()
function steps( step1, step2, step3){
    let stepsObj= {
        goal: this.goal, 
        stepOne: step1, 
        stepTwo: step2, 
        stepThree: step3}
    return stepsObj
}

var stepsBtn = document.querySelector("button#steps-button")
stepsBtn.addEventListener("click", function(){
  
    var myGoal = document.querySelector("input#the-goal")
    var steps1 = document.querySelector("input#step1")
    var steps2 = document.querySelector("input#step2")
    var steps3 = document.querySelector("input#step3")
    var thePlan = document.querySelector("div#the-plan")
    
    let theGoal={
        goal: myGoal.value
    }

    theSteps = steps.bind(theGoal, steps1.value, steps2.value, steps3.value)
    let mySteps = theSteps()

    thePlan.innerHTML = `
    <p><strong>${mySteps.goal}</strong></p> 
    <p>Step One: ${mySteps.stepOne}</p>
    <p>Step Two: ${mySteps.stepTwo}</p>
    <p>Step Three: ${mySteps.stepThree}</p>`
    
})




