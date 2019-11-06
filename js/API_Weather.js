// API : https://openweathermap.org/api

// Clé api
const API_KEY = "2a9f7e5e-a212-c0e5-588e-371a1d4d47d1";
// Url API
const API_URL = "http://www.airparif.asso.fr/services/api/1.1";
// Base source icon
const API_URL_ICON = "http://www.airparif.asso.fr/services/cartes/indice/date/jour";
const API_URL_ICON_NO2 ="http://www.airparif.asso.fr/services/cartes/indice/date/jour/pol/NO2";
const API_URL_ICON_O3 ="http://www.airparif.asso.fr/services/cartes/indice/date/jour/pol/O3";
const API_URL_ICON_PM10 ="http://www.airparif.asso.fr/services/cartes/indice/date/jour/pol/PM10";


class API_WEATHER{
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === undefined){
      city = "paris";
    }
    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  fetchTodayForecast(){
    return axios
    .get(`${API_URL}/indiceJour?date=jour&key=${API_KEY}`, {
      crossdomain: true
    })
  }

  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON} class="weather-icon"/>`
  }
  getHTMLElementFromIconno2(icon){
    return `<img src=${API_URL_ICON_NO2} class="weather-icon"/>`
  }
  getHTMLElementFromIcono3(icon){
    return `<img src=${API_URL_ICON_O3} class="weather-icon"/>`
  }
  getHTMLElementFromIconpm10(icon){
    return `<img src=${API_URL_ICON_PM10} class="weather-icon"/>`
  }
}