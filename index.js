// Esempio di utilizzo: node index.js https://<app-name>-<branch-name>-<pr-number>.web.app --template yaml

// Estrai la stringa di input dall'array process.argv
const inputString = process.argv[2];

// Se non è specificato un template, il valore sarà undefined
const templateIndex = process.argv.indexOf("--template");
const template = templateIndex !== -1 ? process.argv[templateIndex + 1] : undefined;

// Template ammessi
const allowedTemplates = ["yaml", "github_token"]; // Aggiungi qui i template ammessi

// Comando per mostrare l'elenco dei comandi disponibili
if (process.argv.includes("--help") || process.argv.includes("-h")) {
    console.log("Comandi disponibili:");
    console.log("--template: Specifica il template da utilizzare");
    console.log("--template-list, -tl: Mostra l'elenco dei template ammessi");
    console.log("--help, -h: Mostra l'elenco dei comandi disponibili");
    return;
}

// Comando per mostrare l'elenco dei template ammessi
if (process.argv.includes("--template-list") || process.argv.includes("-tl")) {
    console.log("Template ammessi:");
    console.log(allowedTemplates.join("\n"));
    return;
}

// Regex per estrarre i dati dall'input
const regex = /https:\/\/(\w+)-(\w+)-(\d+)/g;
const match = regex.exec(inputString);

// Se il formato della stringa di input non è valido, termina il programma
if (!match) {
    console.log("Formato della stringa di input non valido");
    return;
}

// Estrai i dati dall'input
const [, appName, branchName, prName] = match;

// Se il template non è contenuto nell'array allowedTemplates, termina il programma
if (allowedTemplates.includes(template)) {
    switch (template) {
        case "yaml":
            console.log(`azure-static-web-apps-${appName}-${branchName}-${prName}.yml`);
            break;
        case "github_token":
            console.log(`AZURE_STATIC_WEB_APPS_API_TOKEN_${appName?.toString().toUpperCase()}_${branchName?.toString().toUpperCase()}_${prName?.toString().toUpperCase()}`);
            break;
        default:
            console.log("Template non valido");
            break;
    }
} else {
    console.log("Template non valido");
}
