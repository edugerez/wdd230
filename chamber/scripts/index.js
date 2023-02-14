
( "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.")

const date = document.querySelector("#date");

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = ` ${dayName}, ${d.getDate()} ${monthName}  ${year}`; 
document.querySelector("#date").textContent = fulldate;


function menuToggle(){
    document.getElementById("naver").classList.toggle("open");
	document.querySelector("nav").classList.toggle("open");

}

const x= document.getElementById("menuBtn")
x.onclick=menuToggle;
const span= document.getElementById("span")
span.onclick=menuToggle;



document.getElementById("update").innerHTML= new Date(document.lastModified);

const bannerAlert=document.getElementById("banner")
function banner(){
	if(d.getDay()==1 || d.getDay()==2){
	bannerAlert.classList.toggle("active")       
}

}

banner()