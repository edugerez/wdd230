

const button= document.getElementById("add-chapter");

const list= document.querySelector("#list")


button.addEventListener('click', function (){

   let li=document.createElement("li");
   const liDelete = document.createElement("button");
   liDelete.innerHTML="X"
   liDelete.style.color="red";
   let input=document.querySelector("#favchap").value;
   li.innerText=(input);
   list.append(li);
   let empty=document.getElementById("favchap").value=" ";
   let focus=document.getElementById("favchap")
   focus.focus()
   li.append(liDelete)
   liDelete.addEventListener("click", ()=>li.remove()) 
})

