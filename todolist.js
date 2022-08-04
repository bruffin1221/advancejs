var values =(function(){
        
    function ValueObj(value, describe){
        this.value = value
        this.description= describe
        }  
       
        var val = new ValueObj()
        return val
    

   
   
})()
        
var todoPage=(function(){

    var todoArr={
        divValues: document.querySelector("div#values"),
        createValues: document.querySelector("button#create-values"), 
        divCreate: document.querySelector("div#create-value"),
        divUpdate: document.querySelector("button#update-values"),
        divList: document.querySelector("button#values-list")
    }
    return todoArr

})();


(function(myLife, page){
    
    var valArr= []
    page.createValues.addEventListener("click", function(){
       page.divCreate.innerHTML=`
       <div class="value-form">
         <label for="myValue">Value</label>
         <br>
         <input type="text" name="myValue" id="myValue">
         <br>
         <label for="description">Description</label>
         <br>
         <textarea name="description" id="description" cols="30" rows="5"></textarea>
         <br>
         <button class="make-value">Create Value</button>
       <div>`
        
    })
    page.divCreate.addEventListener("click", function(e){
       
        if(e.target.classList.contains("make-value")){
           
            var inputMyValue = document.querySelector("input#myValue")
            var inputDescription = document.querySelector("textarea#description")
            
            myLife={
                value: inputMyValue.value,
                description: inputDescription.value
            }

           

            page.divCreate.innerHTML = `
            <div class="display-myLife">
            <p>${myLife.value}</p>
            <p>${myLife.description}</p>
            <button class="submit-myLife">Submit</button>
            <br>
            <br>
            <br>
            <p class="return">Return</p>
            </div>`

        }
        if(e.target.classList.contains("return")){

            page.divCreate.innerHTML=`
            <div class="value-form">
              <label for="myValue">Value</label>
              <br>
              <input type="text" name="myValue" value="${myLife.value}"id="myValue">
              <br>
              <label for="description">Description</label>
              <br>
              <textarea name="description" id="description" cols="30" rows="5">${myLife.description}</textarea>
              <br>
              <button class="make-value">Create Value</button>
            <div>`
        }
        if(e.target.classList.contains("submit-myLife")){
            valArr.push(myLife)
            localStorage.setItem("valueArr", JSON.stringify(valArr))
              
        }
        if(e.target.classList.contains("li-val")){
            var valArray = JSON.parse(localStorage.getItem("valueArr")) 
            var number = parseInt(e.target.firstElementChild.value)-1
            var val = valArray[number]
            
            page.divCreate.innerHTML=`
            <div id="display-myLife">
            <input type="hidden" id="index" value="${number}">
             <p>${val.value}</p>
             <p>${val.description}</p>
             <button class="update-list">Update Value</button>
             <button id="add-goals">Add Goals</button>
             <br>
             <p class="return-values">Return</p>
            </div>
            `
        }
        if(e.target.classList.contains("return-values")){
          
            page.divCreate.innerHTML=" "

            var ul = document.createElement("ul")
            ul.classList.add("ul-val")
            page.divCreate.appendChild(ul)
     
            var valArray = JSON.parse(localStorage.getItem("valueArr"))
            for( var i = 0; i<valArray.length; i++){
             var index = i+1
     
             var li = document.createElement("li")
             li.classList.add("li-val")
             var valText = document.createTextNode(valArray[i].value)
             li.appendChild(valText)
     
             var hidInput = document.createElement("input")
             hidInput.setAttribute("type", "hidden")
             hidInput.setAttribute("value", index)
             hidInput.setAttribute("id", "index")
             li.appendChild(hidInput)
             ul.appendChild(li)
            }
        }
        if(e.target.classList.contains("update-list")){
            var valArray = JSON.parse(localStorage.getItem("valueArr"))
            var num = document.querySelector("input#index").value

            var theValue = valArray[num].value
            var theDescription = valArray[num].description

            page.divCreate.innerHTML=`
            <div class="update-form">
              <label for="theValue">Value</label>
              <input type="hidden" id="number" value="${num}">
              <br>
              <input type="text" name="theValue" value="${theValue}"id="theValue">
              <br>
              <label for="theDescription">Description</label>
              <br>
              <textarea name="theDescription" id="theDescription" cols="30" rows="5">${theDescription}</textarea>
              <br>
              <button class="update-button">Update Value</button>
            <div>`

        }
        if(e.target.classList.contains("update-button")){
           var inputNum = document.querySelector("input#number").value
           var inputValue = document.querySelector("input#theValue").value
           var inDescription = document.querySelector("textarea#theDescription").value

           var valArr = JSON.parse(localStorage.getItem("valueArr"))
           valArr[inputNum].value = inputValue
           valArr[inputNum].description =  inDescription

           var value = valArr[inputNum].value
           var description = valArr[inputNum].description

           page.divCreate.innerHTML=`
            <div id="update-myLife">
              <input type="hidden" id="index" value="${inputNum}">
               <p>${value}</p>
               <p>${description}</p>
               <button class="update-myValue">Submit</button>
               <br>
               <p class="return-update">Return</p>
            </div>
           `    
        }
        if(e.target.classList.contains("update-myValue")){
           var inputHidden = document.querySelector("input#index").value
           var firstP = e.target.parentElement.firstElementChild.nextElementSibling.innerText
           var secondP = e.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText

           var valArr = JSON.parse(localStorage.getItem("valueArr"))
           valArr[inputHidden].value = firstP
           valArr[inputHidden].description = secondP

           localStorage.setItem("valueArr", JSON.stringify(valArr))   
        }
        if(e.target.classList.contains("return-update")){
            
           
        }
    })
    page. divList.addEventListener("click", function(){
        var valArray = JSON.parse(localStorage.getItem("valueArr"))
       page.divCreate.innerHTML=""
       var ul = document.createElement("ul")
       ul.classList.add("ul-val")
       page.divCreate.appendChild(ul)

       var valArray = JSON.parse(localStorage.getItem("valueArr"))
       for( var i = 0; i<valArray.length; i++){
        var index = i+1

        var li = document.createElement("li")
        li.classList.add("li-val")
        var valText = document.createTextNode(valArray[i].value)
        li.appendChild(valText)

        var hidInput = document.createElement("input")
        hidInput.setAttribute("type", "hidden")
        hidInput.setAttribute("value", index)
        hidInput.setAttribute("id", "index")
        li.appendChild(hidInput)
        ul.appendChild(li)
       }
        
    }) 

})(values, todoPage)





