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
             <p>${val.value}</p>
             <p>${val.description}</p>
             <button id="update-list">Update Value</button>
             <button id="add-goals">Add Goals</button>
             <br>
             <br>
             <p id="return-values">Return</p>
            </div>
            `
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





