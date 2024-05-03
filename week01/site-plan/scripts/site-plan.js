
const date = document.querySelector("#date");
const message = document.querySelector("#emessage");


try {
    const options = {

        day: "numeric",
        month: "short",
        year: "numeric"
    };
    date.innerHTML = `<span class="highlight"> ${new Date().toLocaleDateString("en-US", options)}</span>!`;
} catch (e) {
    console.log("Error with code or your browser does not support Locale");
}


document.getElementById("update").innerHTML = new Date(document.lastModified);