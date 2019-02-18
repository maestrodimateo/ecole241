let max = 0, nbre;
for (let i = 1; i <= 5; i++) {
    nbre = + prompt(`Insérez le nombre ${i}`);
    if (nbre > max) {
        max = nbre;
    }
}
console.log(`Le plus grand est : ${max}`);
