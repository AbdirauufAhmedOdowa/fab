// let btnElement = document.getElementById("btn")

// let title = document.getElementsByTagName("p")[0]

// let tel = document.getElementsByClassName("btn")[0]

// let getform = document.querySelector("form")

// let down = document.querySelector("#ex")



// console.log(btnElement)
// console.log(title)
// console.log(tel)
// console.log(getform)
// console.log(down)




// const title = document.querySelector("#title")
// title.innerHTML = "this is DOM js...."
// title.style.backgroundColor="red"
// title.style.color = "blue"


// const description = document.querySelector("#description")
// description.innerHTML = "This is a phragraph"
// description.style.backgroundColor = "orange"
// description.style.color = "green"


//class work
// const non = document.querySelector("#non")
// non.innerHTML = "asallamu calleykum"
// non.style.backgroundColor = "blue"
// non.style.color = "white"





// add event listener

// const button = document.querySelector("#btn")
// button.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red"
// })


/*const light = document.querySelector("#light")
const onButton = document.querySelector("#onbtn")
const offButton = document.querySelector("#offbtn")

onButton.addEventListener("click", function(){
    light.style.backgroundColor = "yellow"
})

offButton.addEventListener("click", function(){
    light.style.backgroundColor = "black"
})*/


// const number = document.querySelector("#tiro")
// const incerementButton =  document.querySelector("#incerementBtn")
// const resetBtn =  document.querySelector("#resetBtn")
// const nonBtn = document.querySelector("#nonBtn")

// let initialvalue = 4

// incerementButton.addEventListener("click", function(){
//     initialvalue++
//     number.innerHTML = initialvalue

//     if (initialvalue ==4){
//         number.style.backgroundColor= "red"
//     }
//     else if (initialvalue ==5){
//         number.style.backgroundColor= "yellow"
//     }
//     else if (initialvalue ==6){
//         number.style.backgroundColor= "gray"
//     }
//     else if (initialvalue ==7){
//         number.style.backgroundColor= "green"
//     }
//     else if (initialvalue ==8){
//         number.style.backgroundColor= "purple"
//     }
//     else if (initialvalue ==9){
//         number.style.backgroundColor= "white"
//     }
    
// })


// nonBtn.addEventListener("click", function(){
//     initialvalue--
//     number.innerHTML = initialvalue
// })

// //reset button

// resetBtn.addEventListener("click", function(){
//     initialvalue = 0
//     number.innerHTML = initialvalue
// })


const me = document.querySelector("#tiro")
const you = document.querySelector("#incerementBtn")
const mac = document.querySelector("#nonBtn")
const we = document.querySelector("#resetBtn")

let initialvalue = 0

you.addEventListener("click", function(){
    initialvalue++
    me.innerHTML = initialvalue

    if(initialvalue ==3){
        me.style.backgroundColor = "green"
        me.style.color = "white"
        
    }
    else if(initialvalue ==4){
        me.style.backgroundColor = "yellow"
        me.style.color = "red"
    }

    else
    me.style.backgroundColor = "white"
    me.style.color = "black"
})
mac.addEventListener("click", function(){
    initialvalue--
    me.innerHTML = initialvalue
})

we.addEventListener("click", function(){
    initialvalue=0
    me.innerHTML = initialvalue
})







