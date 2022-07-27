// (function(){
//     console.log("Hello World")
// })();

// (function(x, y){
//     console.log(x+y)
// })(3, 4);

let personValues= (function(firstName, lastName, value1, value2, value3){
    var name={
        fName: firstName,
        lName: lastName,
        value1: value1,
        value2: value2,
        value3: value3 

    }
    return name
})()

let button=(function(){
    var iffeP={
        valB: document.querySelector("button#value-button"),
        firstName: document.querySelector("input#first-name"),
        lastName: document.querySelector("input#last-name"),
        lastName: document.querySelector("input#last-name"),
        firstValue: document.querySelector("input#value1"),
        secondValue: document.querySelector("input#value2"),
        thirdValue: document.querySelector("input#value3"),
        valueList: document.querySelector("div#value-list")
        

    }
   return iffeP
})();

(function(personInfo, defVal){
   
    defVal.valB.addEventListener("click", function(){

        personInfo.fName = defVal.firstName.value
        personInfo.lName = defVal.lastName.value
        personInfo.value1 = defVal.firstValue.value
        personInfo.value2 = defVal.secondValue.value
        personInfo.value3 = defVal.thirdValue.value

        defVal.valueList.innerHTML =`
        <p><strong>${personInfo.fName} ${personInfo.lName}</strong></p>
        <p>Value 1: ${personInfo.value1}</p>
        <p>Value 2: ${personInfo.value2}</p>
        <p>Value 3: ${personInfo.value3}</p>
        `
    })
   

})(personValues, button)

