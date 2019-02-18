let nbres = [];
for (let i = 1; i <= 5; i++) {
    nbres.push(+prompt(`Inserez le nombre : ${i}`));
}
console.log(nbres.sort().reverse()[0]);