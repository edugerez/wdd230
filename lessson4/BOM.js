const input=document.querySelector("#favchap")

const button= document.getElementById("add-chapter")

const list= document.querySelector("#list")


button.addEventListener('click', function (){
   let li=document.createElement("li")
   li.innerHTML=button.value
   list.append(li)
})