// Select the HTML element to manipulate
const date = document.querySelector("#date");
const message = document.querySelector("#emessage");
const nav = document.getElementById("nav");
const closeButton = document.getElementById("close");
const openButton = document.getElementById("open");

openButton.addEventListener("click", () => {
    nav.classList.add("nav");
})

closeButton.addEventListener("click", () => {
    nav.classList.remove("nav");
})




//  method with options
try {
    const options = {

        day: "numeric",
        month: "short",
        year: "numeric"
    };
    date.textContent = new Date().toLocaleDateString("en-US", options)
}
catch (e) {
    console.log("Error with code or your browser does not support Locale");
}


document.getElementById("update").innerHTML = new Date(document.lastModified);


