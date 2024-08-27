const inputString = process.argv[2];

let template;
// Verifica se è stato specificato il campo "--template" nella console app
if (process.argv.includes("--template") || process.argv.includes("-t")) {
    const templateIndex = process.argv.indexOf("--template");
    template = process.argv[templateIndex + 1];
}

// Verifica se è stato specificato il comando "--help" nella console app
if (process.argv.includes("--help") || process.argv.includes("-h")) {
    console.log("Comandi disponibili:");
    console.log("--template, -t: Specifica il template da utilizzare");
    console.log("--help, -h: Mostra l'elenco dei comandi disponibili");
    return;
}

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
