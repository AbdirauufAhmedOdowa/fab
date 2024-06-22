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


const light = document.querySelector("#light")
const onButton = document.querySelector("#onbtn")
const offButton = document.querySelector("#offbtn")

onButton.addEventListener("click", function(){
    light.style.backgroundColor = "yellow"
})

offButton.addEventListener("click", function(){
    light.style.backgroundColor = "black"
})
