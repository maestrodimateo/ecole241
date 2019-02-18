let nbre = prompt("Veuillez saisir un nombre negatif")
while (nbre > 0 || Number.isNaN(nbre)) {
    nbre = prompt("Erreur! saisissez un nombre negatif hein!!!");
}
console.log("Well done my friend");
