
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const jour = data.date;
      const indice = data.global.indice;
      const carte = apiWeather.getHTMLElementFromIcon(data.global.url_carte);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = jour;
      document.getElementById('today-forecast-more-info').innerHTML = indice;
      document.getElementById('icon-weather-container').innerHTML = carte;
      document.getElementById('today-forecast-temp').innerHTML = "global";

      // On récupère l'information pour no2
      const indice2 = data.no2.indice;
      const carte2 = apiWeather.getHTMLElementFromIconno2(data.no2.url_carte);


      // Modifier le DOM
     // document.getElementById('today-forecast-main-2').innerHTML = jour;
      document.getElementById('today-forecast-more-info-1').innerHTML = indice2;
      document.getElementById('icon-weather-container-1').innerHTML = carte2;
      document.getElementById('today-forecast-temp-1').innerHTML = "no2";

      // On récupère l'information pour o3
      const indice3 = data.global.indice;
      const carte3 = apiWeather.getHTMLElementFromIcono3(data.o3.url_carte);


      // Modifier le DOM
      //document.getElementById('today-forecast-main-3').innerHTML = jour;
      document.getElementById('today-forecast-more-info-2').innerHTML = indice3;
      document.getElementById('icon-weather-container-2').innerHTML = carte3;
      document.getElementById('today-forecast-temp-2').innerHTML = "o3";
      
      // On récupère l'information pour pm10
      const indicepm10 = data.global.indice;
      const cartepm10 = apiWeather.getHTMLElementFromIconpm10(data.pm10.url_carte);


      // Modifier le DOM
      //document.getElementById('today-forecast-main-3').innerHTML = jour;
      document.getElementById('today-forecast-more-info-3').innerHTML = indicepm10;
      document.getElementById('icon-weather-container-3').innerHTML = cartepm10;
      document.getElementById('today-forecast-temp-3').innerHTML = "pm10";
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
