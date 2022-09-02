// prova
class RandTools {
    // Inizializza l'array interno sequenzialmente con interi
    distRandInit (end, start = 0) {
        this.dist_rand = [];
        for (var i = start; i < end; i++) {
            this.dist_rand.push(i);
        }
    }

    // Ottiene casualmente un elemento dall'array e lo rimuove
    distRandNext () {
        return this.dist_rand.splice(Math.floor(Math.random() * this.dist_rand.length), 1)[0];
    }
}

const tools = new RandTools(); 
const extract_pool = [];
var card = [[], [], []];

// Inizializzo un array per colonna
for (var i = 0; i < 9; i++) {
    extract_pool[i] = new RandTools();
    extract_pool[i].distRandInit((i * 10) + 11, (i * 10) + 1);
}

// Estrazione per ogni riga
for (var i = 0; i < 9; i++) {
    card[0].push(extract_pool[i].distRandNext());
    card[1].push(extract_pool[i].distRandNext());
    card[2].push(extract_pool[i].distRandNext());
}

// Buco la prima riga
tools.distRandInit(9);
for (var i = 0; i < 4; i++) card[0][tools.distRandNext()] = -1;

// Buco la seconda riga
tools.distRandInit(9);
for (var i = 0; i < 4; i++) card[1][tools.distRandNext()] = -1;

// Buco la terza riga in funzione delle righe
// precendenti (ogni colonna deve avere almeno un numero)
tools.distRandInit(9);
var buchi = 0;
while (buchi < 4) {
    const hit = tools.distRandNext();

    if (card[0][hit] != -1 || card[1][hit] != -1) {
        card[2][hit] = -1;
        buchi++;
    }
}

// La variabile card contiene la cartella generata,
// contiene "-1" negli spazi vuoti
console.log(card);