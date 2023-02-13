

const button= document.getElementById("add-chapter");
const input =document.querySelector("#favchap");

const list= document.querySelector("#list")


button.addEventListener('click', function (){
   if(input.value !==''){

   let li=document.createElement("li");
   const liDelete = document.createElement("button");
   liDelete.innerHTML="X"
   liDelete.style.color="red";
   const book=input.value;
   li.innerText=(book);
   list.append(li);
   const empty=input.value="";
   const focus=input
   focus.focus()
   li.append(liDelete)
   liDelete.addEventListener("click", ()=>li.remove())};
})

