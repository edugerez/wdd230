const input=document.querySelector("#favchap").value

const button= document.getElementById("add-chapter")

const list= document.querySelector("#list")


button.addEventListener('click', function (){
   let li=document.createElement("li")
   li.innerText=(input)
   list.append(li)
})