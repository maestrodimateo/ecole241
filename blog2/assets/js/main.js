
window.onload = function () {

    // les validations
    const validation = {
        email: /^[a-z]+(\d+)?[@][a-z]+\.[a-z]{2,4}/,
        nom: /^[A-Z]+([A-Z ]+)?[A-Z]$/,
        prenom: /^[A-Z][a-z]+([a-z -]+)?/,
        telephone: /^[0][0-9]{7,9}$/
    }

    // les elements
    const elements = {
        form: document.forms['newsletter'],
        messageAfterLoader: document.getElementById('message'),
        formContact: document.forms['contact']
    }



/**
 * L'objet de l'application
 */
    const app = {

        init:function(page){
            // Obtenir la temparature
            this.getWeather();
            switch (page) {
                case 'accueil':
                    accueil.run();
                    break;
                case 'contact':
                    contact.run();
                    break;
                default:
                    break;
            }
        },

        // Api de météo
        getWeather: async function() {
            try{
                const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=libreville,ga&units=metric&lang=fr&appid=25498e1a0cf5b690e169f5c23e4ed8ee");
                if (response.ok) {
                    const data = await response.json();
                    let meteo = document.getElementById('meteo');
                    meteo.innerHTML = `<img width="30" src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'> ${data.main.temp} °C -  ${data.name}`;
                } else {
                    console.error(response.status);
                }
        
            } catch(error){
                console.error(error);
            }
        },



    }


/**
 * Les pages
 */

    // page d'accueil
    const accueil = {
        
        run:function () {
            elements.form['email'].addEventListener('input', this.emailvalidation);
            elements.form.addEventListener('submit', function (e) {
                e.preventDefault();
                accueil.formSubmit(this)
            });
        },

        // validation des email
        emailvalidation: function () {
            let message = this.nextElementSibling;
            if (!validation.email.test(this.value)) {

                message.classList.replace('d-none', 'd-block');
                message.classList.add('text-danger');
                message.textContent = "Email vide ou incorrect";
                this.classList.add('is-invalid');
                elements.form['ok'].setAttribute('disabled', "");

            } else {
                this.classList.replace('is-invalid', 'is-valid');
                message.classList.replace('d-block', 'd-none');
                elements.form['ok'].removeAttribute('disabled');
            }
        },
        formSubmit:function (form) {

            // Faire disparaitre le formulaire et apparaitre le loader
            form.classList.add('d-none');
            loading.classList.replace('d-none', 'd-block');
    
            // Apparition du message apres 3 secondes
            setTimeout(function(){
                loading.classList.replace('d-block', 'd-none');
                elements.messageAfterLoader.classList.add('d-block', 'text-green');
                elements.messageAfterLoader.textContent = "Merci d'avoir souscrit à notre newsletter";
            }, 3000);
        }
    }

    // page de contact
    const contact = {

        run:function () {
            elements.formContact['email'].addEventListener('input', this.emailvalidation);
            elements.formContact['tel'].addEventListener('input', this.telephonevalidation);
            elements.formContact['nom'].addEventListener('input', this.nomvalidation);
            elements.formContact['prenom'].addEventListener('input', this.prenomvalidation);
            elements.formContact.addEventListener('submit', function (e) {
                e.preventDefault();
                contact.formSubmit(this)
            });
        },

        emailvalidation: function () {
            let elt = this.nextElementSibling;
            if (!validation.email.test(this.value)) {
                contact.errors("Email vide ou incorrect", elt, this);
            } else {
                contact.success(elt, this);
            }

        },

        nomvalidation: function () {
            let elt = this.nextElementSibling;
            if (!validation.nom.test(this.value)) {
                contact.errors("Votre nom doit être en majuscule", elt, this);
            } else {
                contact.success(elt, this);
            }
        },

        prenomvalidation: function () {
            let elt = this.nextElementSibling;
            if (!validation.prenom.test(this.value)) {
                contact.errors("Votre prenom doit commencer par une lettre majuscule", elt, this);
            } else {
                contact.success(elt, this);
            }
        },

        telephonevalidation: function () {
            let elt = this.nextElementSibling;          
            if (!validation.telephone.test(this.value)) {
                contact.errors("Votre numero de telephone n'est pas au bon format", elt, this);
            } else {
                contact.success(elt, this);
            } 
        },

        errors: function (message, elt, input) {
            elt.classList.replace('d-none', 'd-inline');
            elt.classList.add('text-danger');
            elt.textContent = message;
            input.classList.add('is-invalid');
            elements.formContact['ok'].setAttribute('disabled', "");
        },

        success: function (elt, input) {
            input.classList.replace('is-invalid', 'is-valid');
            elt.classList.replace('d-inline', 'd-none');
            elements.formContact['ok'].removeAttribute('disabled');
        },

        formSubmit:function (form) {
            for (const champ of form) {
                if (!champ.value) {
                   contact.errors("Ce champ ne doit pas etre vide", champ.nextElementSibling, champ)
                }
            }

        }
    }

    let apps = document.getElementById('app');
    // initialisation de l'application
    app.init(apps.dataset.id);
}

