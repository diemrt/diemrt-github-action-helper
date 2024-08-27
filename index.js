const inputString = process.argv[2];
const template = process.argv[4];

// Verifica il formato della stringa di input
const regex = /https:\/\/(\w+)-(\w+)-(\d+)/g;
const match = regex.exec(inputString);

if (!match) {
    console.log("Formato della stringa di input non valido");
    return;
}

const [, firstPart, secondPart, thirdPart] = match;

switch (template) {
    case "yaml":

        console.log(`azure-static-web-apps-${firstPart}-${secondPart}-${thirdPart}.yml`);
        break;

    default:
        console.log("Template non valido");
        break;
}
