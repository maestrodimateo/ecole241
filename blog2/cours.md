<!-- Utiliser Ajax en javascript -->
- Ajax permet d'exécuter des requêtes HTTP de manière asynchrone.
- La meilleure façon de recuperer les données d'une Api est de passer par la methode fetch

syntaxe
===

```javascript
const getSomething = async function(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=libreville,ga&units=metric&lang=fr&appid=25498e1a0cf5b690e169f5c23e4ed8ee");
    const data = await response.json();
    let meteo = document.getElementById('meteo');
    meteo.innerHTML = `<img width="30" src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'> ${data.main.temp} °C -  ${data.name}`;
}
```
Dans ce code on effectue une requete GET


## Les bonnes pratiques



### Remarques
===

* Les promesses : les promesses sont représentées par l'objet `promise` et permettent d'effectuer des traitments de manieres asynchrone. Cela représente une valeur qui peut etre disponible maintenant, dans le futur ou jamais.

* async permet de signifier qu'une fonction est asynchrone
* await permet de dire qu'une fonction ne sera pas execute tant que celle sur laquelle se trouve `await` ne l'a pas fait 