const input = document.getElementById("favchap");
const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener('click', function () {
    if (input.value != "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "x";
        const book = input.value;
        input.value = "";
        input.focus();
        console.log(book);
        li.innerText = (book);
        list.append(li);
        li.append(deleteButton);
        deleteButton.addEventListener('click', function () {
            li.remove();
            input.focus();
        })

    }

})