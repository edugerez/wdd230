
("🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.")

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


function menuToggle() {
	document.querySelector("header ul").classList.toggle("open");
	document.querySelector("nav").classList.toggle("open");

}

const x = document.getElementById("menuBtn")
x.onclick = menuToggle;
const span = document.getElementById("span")
span.onclick = menuToggle;



document.getElementById("update").innerHTML = new Date(document.lastModified);

const bannerAlert = document.getElementById("banner")
function banner() {
	if (d.getDay() == 1 || d.getDay() == 2) {
		bannerAlert.classList.toggle("active")
	}

}

banner()



// discover js code//

// Seleccionamos todas las imágenes dentro del contenedor de imágenes
const images = document.querySelectorAll('.image-container img');

// Función que se ejecutará cuando una imagen sea observada
const handleIntersection = (entries, observer) => {
	entries.forEach((entry) => {
		// Si la imagen es visible en el viewport
		if (entry.isIntersecting) {
			// Cambiamos el src de la imagen para que cargue la versión de alta resolución
			entry.target.src = entry.target.dataset.src;

			// Dejamos de observar la imagen para no cargarla de nuevo
			observer.unobserve(entry.target);
		}
	});
};

// Opciones para el observer
const options = {
	rootMargin: '0px',
	threshold: 0.1
};

// Creamos el observer y lo configuramos con las opciones
const observer = new IntersectionObserver(handleIntersection, options);

// Observamos cada imagen
images.forEach((image) => {
	observer.observe(image);
});
