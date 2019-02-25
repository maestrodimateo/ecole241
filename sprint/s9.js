let nbres = [];
for (let i = 1; i <= 5; i++) {
    nbres.push(+ prompt(`Insérez le nombre ${i}`));
}
console.log(`Le plus grand est : ${Math.max(...nbres)}`);