// Select the HTML element to manipulate
const date = document.querySelector("#date");
const message = document.querySelector("#emessage");

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