let nbre = Number.parseFloat(prompt("Veuillez saisir un nombre negatif"))
while (nbre > 0 || Number.isNaN(nbre)) {
    nbre = Number.parseFloat(prompt("Erreur! saisissez un nombre negatif hein!!!"));
}
console.log("Well done my friend");