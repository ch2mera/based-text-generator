function formatText(input) {
    const replaceVowels = (word) => {
        return word.replace(/a/gi, '4')
                   .replace(/i/gi, '1')
                   .replace(/o/gi, '0');
    };

    const intentionallyMisspell = (word) => {
        if (Math.random() < 0.2) {
            const randomIndex = Math.floor(Math.random() * word.length);
            return word.slice(0, randomIndex) + word[randomIndex].repeat(2) + word.slice(randomIndex + 1);
        }
        return word;
    };

    let words = input.split(' ');

    let formattedWords = words.map((word) => {
        if (Math.random() < 0.5) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        word = replaceVowels(word);
        word = intentionallyMisspell(word);

        if (Math.random() < 0.1) {
            word += '&';
        }
        if (Math.random() < 0.1) {
            word += '.';
        }
        if (Math.random() < 0.1) {
            word += '_';
        }
        if (Math.random() < 0.05) {
            word += '▓';
        }
        if (Math.random() < 0.1) {
            word += ',';
        }
        if (Math.random() < 0.05) {
            word += '&&';
        }
        if (Math.random() < 0.07) {
            word += ',,';
        }

        if (Math.random() < 0.2) {
            const randomIndex = Math.floor(Math.random() * word.length);
            word = word.slice(0, randomIndex) + word[randomIndex] + word.slice(randomIndex);
        }

        return word;
    });

    return formattedWords.join(' '.repeat(Math.floor(Math.random() * 2) + 1));
}

document.getElementById('formatButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const formattedText = formatText(inputText);
    document.getElementById('outputText').textContent = formattedText;
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
});
