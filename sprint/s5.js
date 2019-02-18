var nbres = [];
for (let index = 1; index <= 2; index++) {
    nbres.push(Number.parseInt(prompt(`Donnez le nombre ${index}`)));
}
console.log(nbres.sort().reverse()[0]);