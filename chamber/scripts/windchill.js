const apiKey = 'd152097c78776b848ed381f122623ee2';
const cityName = 'San%20Luis,AR';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

const temperatureElement = document.querySelector('#weather');
const ico=document.getElementById("ico");
const place=document.getElementById("place");
const infoW = document.getElementById("infoW");
const detail= document.getElementById("detail");


function getWeather(){
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const city = data.name;
    const info=data.main
    const weatherinfo = data.weather[0].description;
    const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const imgIco=document.createElement("img");
    imgIco.src=weatherIcon
    ico.appendChild(imgIco);
    place.textContent=city
    temperatureElement.textContent=weatherinfo
    getdetail(info)
  });
}

function getdetail(info){
    //I want to change the size of the number of degrees so I will use the
    // for with an if to select only that and put it into a var to then do what
    // I want with it...then the other I will create a p element to interar for
  // the object and put it into the section weather..
    let i=0 ; 
    for (let item in info) {
        //dont want to show more than 4 itmes
        if(i<=1){

        if (item === 'temp') {
          const degreeDiv = document.createElement('p'); 
          const kellvin=info[item]
          const Ncelcius=kellvin-273.15;
          const celcius=Ncelcius.toFixed(1);
          degreeDiv.textContent = `${celcius} C`;
          infoW.append(degreeDiv);
        } else {
          const pdetail = document.createElement('p');
          pdetail.textContent = `${item}: ${info[item]}`;
          pdetail.style.padding=".3em";
          detail.appendChild(pdetail);
        }
      i++;
    }

}
}




// Actualice el contenido del elemento con la temperatura actual


export { getWeather };