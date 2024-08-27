const inputString = process.argv[2];

// Verifica il formato della stringa di input
const regex = /https:\/\/(\w+)-(\w+)-(\d+)/g;
const match = regex.exec(inputString);

if (!match) {
    console.log("Formato della stringa di input non valido");
    return;
}

const [, firstPart, secondPart, thirdPart] = match;

console.log(firstPart, secondPart, thirdPart);
