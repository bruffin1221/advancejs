// var values =(function(){
        
//     function ValueObj(value, describe){
//         this.value = value
//         this.description= describe
//         }  
       
//         var val = new ValueObj()
//         return val

// })();

// var goals=(function(theValue){

//     var goalsObj={

//         value: theValue,
//         goals:{

//         }
       
//     }
//     return goalsObj

// })();
        
// var todoPage=(function(){

//     var todoArr={
//         divValues: document.querySelector("div#values"),
//         createValues: document.querySelector("button#create-values"), 
//         divCreate: document.querySelector("div#create-value"),
//         divUpdate: document.querySelector("button#update-values"),
//         divList: document.querySelector("button#values-list"),
//         divGoals: document.querySelector("div#create-goals")
//     }
//     return todoArr

// })();


// (function(myLife, theGoal, page){
//     // console.log(myGoals.goals)
//     var valArr= []
//     var goalArr=[]
//     page.createValues.addEventListener("click", function(){
//        page.divCreate.innerHTML=`
//        <div class="value-form">
//          <label for="myValue">Value</label>
//          <br>
//          <input type="text" name="myValue" id="myValue">
//          <br>
//          <label for="description">Description</label>
//          <br>
//          <textarea name="description" id="description" cols="30" rows="5"></textarea>
//          <br>
//          <button class="make-value">Create Value</button>
//        <div>`
        
//     })
//     page.divCreate.addEventListener("click", function(e){
       
//         if(e.target.classList.contains("make-value")){
           
//             var inputMyValue = document.querySelector("input#myValue")
//             var inputDescription = document.querySelector("textarea#description")
            
//             myLife={
//                 value: inputMyValue.value,
//                 description: inputDescription.value
//             }

           

//             page.divCreate.innerHTML = `
//             <div class="display-myLife">
//             <p>${myLife.value}</p>
//             <p>${myLife.description}</p>
//             <button class="submit-myLife">Submit</button>
//             <br>
//             <br>
//             <br>
//             <p class="return">Return</p>
//             </div>`

//         }
//         if(e.target.classList.contains("return")){

//             page.divCreate.innerHTML=`
//             <div class="value-form">
//               <label for="myValue">Value</label>
//               <br>
//               <input type="text" name="myValue" value="${myLife.value}"id="myValue">
//               <br>
//               <label for="description">Description</label>
//               <br>
//               <textarea name="description" id="description" cols="30" rows="5">${myLife.description}</textarea>
//               <br>
//               <button class="make-value">Create Value</button>
//             <div>`
//         }
//         if(e.target.classList.contains("submit-myLife")){
//             valArr.push(myLife)
//             localStorage.setItem("valueArr", JSON.stringify(valArr))
              
//         }
//         if(e.target.classList.contains("li-val")){
//             var valArray = JSON.parse(localStorage.getItem("valueArr")) 
//             var number = parseInt(e.target.firstElementChild.value)-1
//             var val = valArray[number]
            
//             page.divCreate.innerHTML=`
//             <div id="display-myLife">
//             <input type="hidden" id="index" value="${number}">
//              <p>${val.value}</p>
//              <p>${val.description}</p>
//              <button class="update-list">Update Value</button>
//              <button class="add-goals">Add Goals</button>
//              <br>
//              <p class="return-values">Return</p>
//             </div>
//             `
//         }
//         if(e.target.classList.contains("return-values")){
          
//             page.divCreate.innerHTML=" "

//             var ul = document.createElement("ul")
//             ul.classList.add("ul-val")
//             page.divCreate.appendChild(ul)
     
//             var valArray = JSON.parse(localStorage.getItem("valueArr"))
//             for( var i = 0; i<valArray.length; i++){
//              var index = i+1
     
//              var li = document.createElement("li")
//              li.classList.add("li-val")
//              var valText = document.createTextNode(valArray[i].value)
//              li.appendChild(valText)
     
//              var hidInput = document.createElement("input")
//              hidInput.setAttribute("type", "hidden")
//              hidInput.setAttribute("value", index)
//              hidInput.setAttribute("id", "index")
//              li.appendChild(hidInput)
//              ul.appendChild(li)
//             }
//         }
//         if(e.target.classList.contains("update-list")){
//             var valArray = JSON.parse(localStorage.getItem("valueArr"))
//             var num = document.querySelector("input#index").value

//             var theValue = valArray[num].value
//             var theDescription = valArray[num].description

//             page.divCreate.innerHTML=`
//             <div class="update-form">
//               <label for="theValue">Value</label>
//               <input type="hidden" id="number" value="${num}">
//               <br>
//               <input type="text" name="theValue" value="${theValue}"id="theValue">
//               <br>
//               <label for="theDescription">Description</label>
//               <br>
//               <textarea name="theDescription" id="theDescription" cols="30" rows="5">${theDescription}</textarea>
//               <br>
//               <button class="update-button">Update Value</button>
//             <div>`

//         }
//         if(e.target.classList.contains("update-button")){
//            var inputNum = document.querySelector("input#number").value
//            var inputValue = document.querySelector("input#theValue").value
//            var inDescription = document.querySelector("textarea#theDescription").value

//            var valArr = JSON.parse(localStorage.getItem("valueArr"))
//            valArr[inputNum].value = inputValue
//            valArr[inputNum].description =  inDescription

//            var value = valArr[inputNum].value
//            var description = valArr[inputNum].description

//            page.divCreate.innerHTML=`
//             <div id="update-myLife">
//               <input type="hidden" id="index" value="${inputNum}">
//                <p>${value}</p>
//                <p>${description}</p>
//                <button class="update-myValue">Submit</button>
//                <br>
//                <p class="return-update">Return</p>
//             </div>
//            `    
           
//         }
//         if(e.target.classList.contains("update-myValue")){
//            var inputHidden = document.querySelector("input#index").value
//            var firstP = e.target.parentElement.firstElementChild.nextElementSibling.innerText
//            var secondP = e.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText

//            var valArr = JSON.parse(localStorage.getItem("valueArr"))
//            valArr[inputHidden].value = firstP
//            valArr[inputHidden].description = secondP

//            localStorage.setItem("valueArr", JSON.stringify(valArr))
//            page.divCreate.innerHTML=`<p class="center">Your goal is submitted!</p>`

//         }
//         if(e.target.classList.contains("return-update")){
            
//             var hiddenIn = parseInt(document.querySelector("input#index").value)
//             var valueP = document.querySelector("div#update-myLife").firstElementChild.nextElementSibling.innerHTML
//             var descriptionP = document.querySelector("div#update-myLife").firstElementChild.nextElementSibling.nextElementSibling.innerHTML
            
//             page.divCreate.innerHTML=`
//              <div class="update-form">
//               <label for="theValue">Value</label>
//               <input type="hidden" id="number" value="${hiddenIn}">
//               <br>
//               <input type="text" name="theValue" value="${valueP}"id="theValue">
//               <br>
//               <label for="theDescription">Description</label>
//               <br>
//               <textarea name="theDescription" id="theDescription" cols="30" rows="5">${descriptionP}</textarea>
//               <br>
//               <button class="update-button">Update Value</button>
//              <div>`       
           
//         }
//         if(e.target.classList.contains("add-goals")){
           
//              page.divGoals.innerHTML=`
//               <div class="goal-form">
//                 <label for="goal-name">Name</label>
//                 <br>
//                 <input type="text" name="goal-name" id="goal-name">
//                 <br>
//                 <br>
//                 <label for="goal-description">Description</label>
//                 <br>
//                 <textarea name="goal-description" id="goal-description" cols="30" rows="5"></textarea>
//                 <br>
//                 <button class="goal-button">Make Goal</button>
//               </div>
//              `
//         }
//     })
//     page. divList.addEventListener("click", function(){
//         var valArray = JSON.parse(localStorage.getItem("valueArr"))
//        page.divCreate.innerHTML=""
//        var ul = document.createElement("ul")
//        ul.classList.add("ul-val")
//        page.divCreate.appendChild(ul)

//        var valArray = JSON.parse(localStorage.getItem("valueArr"))
//        for( var i = 0; i<valArray.length; i++){
//         var index = i+1

//         var li = document.createElement("li")
//         li.classList.add("li-val")
//         var valText = document.createTextNode(valArray[i].value)
//         li.appendChild(valText)

//         var hidInput = document.createElement("input")
//         hidInput.setAttribute("type", "hidden")
//         hidInput.setAttribute("value", index)
//         hidInput.setAttribute("id", "index")
//         li.appendChild(hidInput)
//         ul.appendChild(li)
//        }
        
//     }) 
//     page.divGoals.addEventListener("click", function(e){
//         if(e.target.classList.contains("goal-button")){
//             var defVal = page.divCreate.firstElementChild.firstElementChild.nextElementSibling.innerText
//             theGoal.value = defVal

//             var inputGoal = document.querySelector("input#goal-name")
//             var inputDes = document.querySelector("textarea#goal-description")
            
//             page.divGoals.innerHTML = `
//              <div id="double-check">
//               <p>${inputGoal.value}</p>
//               <p>${inputDes.value}</p>
//               <button class="submit-goal">Submit</button>
//               <p class="return-goal">Return</p>
//              </div>`

//              console.log(theGoal)

//         }
//         if(e.target.classList.contains("submit-goal")){
//             // console.log(goalArr)
//             var goalObj = theGoal.goals
//             var goalKey = e.target.parentElement.firstElementChild.innerText
//             var goalVal = e.target.parentElement.firstElementChild.nextElementSibling.innerText
            

//             console.log(theGoal)




//         }

//     })
    

// })(values, goals, todoPage)













