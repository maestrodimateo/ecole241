let nbre;
do {
    nbre = + prompt("Veuillez choisir un nombre");
}while (Number.isNaN(nbre));

for (let i = 1; i <= 10; i++) {
    console.log(`${nbre} x ${i} = ${nbre * i}`);
}