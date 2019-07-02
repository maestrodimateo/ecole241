<!-- Utiliser Ajax en javascript -->
- Ajax permet d'exécuter des requêtes HTTP de manière asynchrone.
- La meilleure façon de recuperer les données d'une Api est de passer par la methode fetch

syntaxe
===

```javascript

    fetch("api.openweathermap.org/data/2.5/weather?q=libreville,ga&units=metric&lang=fr&appid=25498e1a0cf5b690e169f5c23e4ed8ee")
    .then(function(response){
        reponse.json()
        .then(function(valeur){
            console.log(valeur);
        });
    });
```
Dans ce code on effectue une requete GET


### Remarques
===

* Les promesses : les promesses sont représentées par l'objet `promise` et permettent d'effectuer des traitments de manieres asynchrone. Cela représente une valeur qui peut etre disponible maintenant, dans le futur ou jamais.