
window.onload = function () {
    
    // On recupere le formulaire, 
    let form = document.forms['newsletter'];
    let loading = document.getElementById('loading');
    let messageAfterLoader = document.getElementById('message');

    // initialisation de l'expression reguliere
    let regex = /^[a-z]+(\d+)?[@][a-z]+\.[a-z]{2,4}/;

    const getWeather = async function () {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=libreville,ga&units=metric&lang=fr&appid=25498e1a0cf5b690e169f5c23e4ed8ee");
        const data = await response.json();

        console.log(data);
        let meteo = document.getElementById('meteo');
        meteo.innerHTML = "<span class='text-green'>"+data.main.temp+"</span>";
        
    }
getWeather();

    // validation du champs email
    form['email'].addEventListener('input', function(e) {
        let message = this.nextElementSibling;
        if (!regex.test(this.value)) {
            message.classList.replace('d-none', 'd-block');
            message.classList.add('text-danger');
            message.textContent = "Email vide ou incorrect";
            form['ok'].setAttribute('disabled', "");
        } else{
            message.classList.replace('d-block', 'd-none');
            form['ok'].removeAttribute('disabled');
        }
    });
    // soumission du formulaire
    form.addEventListener('submit', function(e){
    
        // Annulation du comportement par defaut
         e.preventDefault();
        
         // Faire disparaitre le formulaire et apparaitre le loader
        this.classList.add('d-none');
        loading.classList.replace('d-none', 'd-block');
    
        // Apparition du message apres 3 secondes
        setTimeout(function(){
            loading.classList.replace('d-block', 'd-none');
            messageAfterLoader.classList.add('d-block', 'text-green');
            messageAfterLoader.textContent = "Merci d'avoir souscrit à notre newsletter";
        }, 3000);
    });
    
    function displayInputmessage(tag, message) {
        tag.classList.replace('d-none','d-block');
        tag.classList.add('text-danger');
        tag.textContent = message;
    }
}