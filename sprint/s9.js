let max, nbre;
max = + prompt("Insérez le nombre 1");
for (let i = 2; i <= 5; i++) {
    nbre = + prompt(`Insérez le nombre ${i}`);
    if (nbre > max) {
        max = nbre;
    }
}
console.log(`Le plus grand est : ${max}`);
