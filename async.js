
var activities = (function(firstN, lastN, myGoal, activityOne, activityTwo, activityThree){
    var passionateWork={
        firstName: firstN,
        lastName: lastN,
        goal: myGoal,
        activity1: activityOne,
        activity2: activityTwo,
        activity3: activityThree 
    }
    return passionateWork
})();

var pursuits = (function(activity, pursuit1, pursuit2, pursuit3){
    var myValuesLives={
        theActivity: activity, 
        pursuitOne: pursuit1,
        pursuitTwo: pursuit2,
        pursuitThree: pursuit3  
    }
    return myValuesLives
})()

var asyncPage = (function(){
    var asyncAtt = {
        asyncBtn: document.querySelector("button#activities"),
        fNameInput: document.querySelector("input#first-name"),
        lNameInput: document.querySelector("input#last-name"),
        goalInput: document.querySelector("input#goal"),
        oneInput: document.querySelector("input#activity-one"),
        twoInput: document.querySelector("input#activity-two"),
        threeInput: document.querySelector("input#activity-three"),
        establishV: document.querySelector("div#establish-values")  
    }
    return asyncAtt
})();

(function(workValue, understanding,  livingThem){
    
    livingThem.asyncBtn.addEventListener("click", function(){

       workValue.firstName = livingThem.fNameInput.value
       workValue.lastName= livingThem.lNameInput.value
       workValue.goal = livingThem.goalInput.value
       workValue.activity1 = livingThem.oneInput.value
       workValue.activity2 = livingThem.twoInput.value
       workValue.activity3 = livingThem.threeInput.value

    
       let createV = document.createElement("div")
       createV.classList.add("create-values")
       createV.innerHTML=`
        <h1>${workValue.firstName} ${workValue.lastName}</h1>
        <h2>${workValue.goal}</h2>
        <p class="live-values"> ${workValue.activity1}</p>
        <p class="live-values"> ${workValue.activity2}</p>
        <p class="live-values"> ${workValue.activity3}</p>
        `
       livingThem.establishV.appendChild(createV)
       
    })

    livingThem.establishV.addEventListener("click", function(e){
        if(e.target.classList.contains("live-values")){
            
            var createValue = e.target.parentElement
            createValue.remove()
 
            var pursuitForm = document.createElement("div")
            pursuitForm.classList.add("define-values")
            livingThem.establishV.appendChild(pursuitForm)

            pursuitForm.innerHTML = `
             <h2> ${e.target.innerText} </h2>
             <label for="pursuit-one">Pursuit One</label>
             <br>
             <input type="text" name="pursuit-one" id="pursuit-one">
             <br>
             <br>
             <label for="pursuit-two">Pursuit Two</label>
             <br>
             <input type="text" name="pursuit-two" id="pursuit-two">
             <br>
             <br>
             <label for="pursuit-three">Pursuit Three</label>
             <br>
             <input type="text" name="pursuit-three" id="pursuit-three">
             <br>
             <br>
             <button class="pursuits">Create Pursuits</button> `
             
             understanding.theActivity = e.target.innerText
           


        }
        if(e.target.classList.contains("pursuits")){

            var  pur1 = document.querySelector("input#pursuit-one")
            console.log(pur1.value)
            var  pur2 = document.querySelector("input#pursuit-two")
            console.log(pur2.value)
            var  pur3 = document.querySelector("input#pursuit-three")
            console.log(pur3.value)
           
           
            understanding.pursuitOne = pur1.value
            understanding.pursuitTwo = pur2.value
            understanding.pursuitThree = pur3.value
            console.log(understanding)

            let displayPursuits = document .createElement("div")
            displayPursuits.classList.add("pursuing")
            livingThem.establishV.appendChild(displayPursuits)

            displayPursuits.innerHTML = `
             <p>${understanding.pursuitOne}</p>
             <p>${understanding.pursuitTwo}</p>
             <p>${understanding.pursuitThree}</p>`



        }

    }
    )

    


})(activities, pursuits, asyncPage)


