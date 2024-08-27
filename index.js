const inputString = process.argv[2];

const templateIndex = process.argv.indexOf("--template");
const template = templateIndex !== -1 ? process.argv[templateIndex + 1] : undefined;

const allowedTemplates = ["yaml"]; // Aggiungi qui i template ammessi

if (process.argv.includes("--help") || process.argv.includes("-h")) {
    console.log("Comandi disponibili:");
    console.log("--template: Specifica il template da utilizzare");
    console.log("--help, -h: Mostra l'elenco dei comandi disponibili");
    return;
}

const regex = /https:\/\/(\w+)-(\w+)-(\d+)/g;
const match = regex.exec(inputString);

if (!match) {
    console.log("Formato della stringa di input non valido");
    return;
}

const [, firstPart, secondPart, thirdPart] = match;

if (allowedTemplates.includes(template)) {
    switch (template) {
        case "yaml":
            console.log(`azure-static-web-apps-${firstPart}-${secondPart}-${thirdPart}.yml`);
            break;
        default:
            console.log("Template non valido");
            break;
    }
} else {
    console.log("Template non valido");
}
