var nameObj=(function(myName){

    let family = new Object()
    family.name = myName
    family.members = []
    return family
    
})()



var page =(function(){

    var familyPage = {
        divName: document.querySelector("input#name"),
        nameBtn: document.getElementById("make-name"),
        inputRel: document.querySelector("input#relation"),
        inputMem: document.querySelector("input#member-name"),
        famBtn: document.getElementById("make-family"),
        famLBtn: document.getElementById("family-list"),
        divFam: document.querySelector("div#family"),
        removeBtn: document.getElementById("remove-family")
    }

    return familyPage


})();


(function(theName, famPage){

    var familyArray =[] 

    famPage.nameBtn.addEventListener("click", function(){
       
        theName={name: famPage.divName.value}
        console.log(theName)
  
    })

    famPage.famBtn.addEventListener("click", function(){
      
         var relationship = famPage.inputRel.value
         var famName = famPage.inputMem.value

         var member = {
            relation: relationship,
            name: famName
         }
         theName.members.push(member)
         console.log(theName.members)
          
    
  
    })
        famPage.removeBtn.addEventListener("click", function(){

            famPage.divFam.innerHTML = " "

        })

    famPage.famLBtn.addEventListener("click", function(){

       console.log(theName)
       familyArray.push(theName)
       console.log(familyArray)
   
    })
   

})(nameObj, page)



// famObj.name= "Michael Ruffin"
// famObj.members = {}
// var members = famObj.members

// members["Wife"] = "Mistye Ruffin"
// members["Son"] = "Deonte Ruffin"
// members["Daughter"] = "Milaya Ruffin"
// console.log(famObj)










