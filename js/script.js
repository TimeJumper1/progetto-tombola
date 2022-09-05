// originale singola cartella
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

var cartella =[];
for(var i = 0; i < 6; i++){
    cartella.push(card)
};
// -------------------------------------------------------------------------------------
// test
function creaCartelle(){
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
    
    var cartella =[];
    for(var i = 0; i < 6; i++){
        cartella.push(card)
    };
    
}

document.getElementById('play').addEventListener('click', creaCartelle);
// creazione cartella
function provaCreazione(){
    // for(let i = 0; i < 9; i++){
    //     const rigaCartella = document.getElementsByClassName(`riga`);
    //     const newSquare = document.createElement('div');
    //     newSquare.classList.add(`cella-cartella`  );
    
    //     newSquare.innerHTML = `<h2>${card[i]}</h2>`;
    //     rigaCartella[i].appendChild(newSquare)
    // }
    
    
    for (var i = 0; i < 18; i++) {
        const rigaCartella = document.getElementsByClassName(`riga`);
            
            
        card[i].forEach(element => {
            
            newSquare = document.createElement('div');
            newSquare.classList.add(`cella-cartella`  );
            newSquare.innerHTML = `<h2>${element}</h2>`;  
            rigaCartella[i].appendChild(newSquare);
                
        });
        
        
    }
    // for(let k = 0; k<18; k++){
    //     newSquare.innerHTML = `<h2>${card[i]}</h2>`;  
    //     rigaCartella[k].appendChild(newSquare)
    // }
}

document.getElementById('play').addEventListener('click',provaCreazione );