# diemrt-github-action-helper

## Descrizione:

Questa è una semplice utility Node.js a linea di comando progettata per estrarre informazioni specifiche da una URL fornita come input. È particolarmente utile per generare nomi di file YAML personalizzati durante la creazione di workflow per GitHub Actions.

## Utilizzo:

Un esempio di utilizzo comune:

``` 
node index.js URL --template TEMPLATE_NAME
```

- **URL** L'URL da cui estrarre le informazioni (ad esempio, il nome dell'applicazione, il nome del branch e il numero della pull request).
- **TEMPLATE_NAME** Il template da utilizzare per generare il nome del file. Attualmente, è supportato solo il template YAML.
Comandi Disponibili:

Esempio:

```
node index.js https://my-awesome-app-main-123.web.app --template yaml
```

Questo comando genererà l'output:

```
azure-static-web-apps-my-awesome-app-main-123.yml
```

**Per la lista degli altri comandi usare il comando ```--help```**

Come funziona:

1. Parsing degli argomenti: L'applicazione analizza gli argomenti della linea di comando per estrarre l'URL e il template specificato.
2. Estrazione dei dati: Utilizzando una espressione regolare, estrae l'app name, il branch name e il numero della pull request dall'URL.
3. Generazione del nome del file: Basandosi sul template selezionato, crea il nome del file YAML.

### Limitazioni:

- L'URL di input deve rispettare il formato specificato dalla regex.