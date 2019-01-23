let fieldEl = document.getElementById("message")
let outputEl_1 = document.getElementById("1")
let outputEl_2 = document.getElementById("2")

fieldEl.addEventListener("keyup", function (event) {
    outputEl_1.innerHTML = event.target.value
    outputEl_2.innerHTML = event.target.value

})

