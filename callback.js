// setTimeout(helloWorld, 8000)

function helloWorld(){
    console.log("Hello World")
}

function add(x, y){
    console.log(x+y)

}

function red(element){
    element.classList.toggle("color")

}


var button = document.querySelector("button#click")
button.addEventListener("click", function(){
    
    helloWorld()
    add(3,4)

    var div = document.querySelector("div")
    red(div)

    
})

