// originale singola cartella

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
    for (var i = 0; i < 4; i++) card[0][tools.distRandNext()] = "";
    
    // Buco la seconda riga
    tools.distRandInit(9);
    for (var i = 0; i < 4; i++) card[1][tools.distRandNext()] = "";
    
    // Buco la terza riga in funzione delle righe
    // precendenti (ogni colonna deve avere almeno un numero)
    tools.distRandInit(9);
    var buchi = 0;
    while (buchi < 4) {
        const hit = tools.distRandNext();
    
        if (card[0][hit] != "" || card[1][hit] != "") {
            card[2][hit] = "";
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
    
    // creazione cartella
    // for(let i = 0 ; i<3; i++){
    //     let variabile = card[i];
    //     var rigaCartella = document.getElementById(`${i}`);
    //     console.log("variabile e " ,variabile)
    //     for(let j = 0 ; j < 9; j++){
    //         console.log("contenuto di variabile",variabile[j])
    //         newSquare = document.createElement('div');
    //         newSquare.classList.add(`cella-cartella`  );
    //         newSquare.innerHTML = `<h2>${variabile[j]}</h2>`;  
    //         rigaCartella.appendChild(newSquare);
    //     }
    // } 
    // test ---------------
    
    // tabella 1
    return card
    
}
let test = creaCartelle();
function generaTabella1(){
    creaCartelle();
    
    for(let i = 0 ; i<3; i++){
        let variabile = test[i];
        var rigaCartella = document.getElementsByClassName(`riga`);
        
        for(let j = 0 ; j < 9; j++){
            
            newSquare = document.createElement('div');
            newSquare.classList.add(`cella-cartella`  );
            newSquare.innerHTML = `<h2>${variabile[j]}</h2>`;  
            rigaCartella[i].appendChild(newSquare);
        }
        
    }
    
    
    
}
// for(let j = 0 ; j < 9; j++){
    
// }
function generaTabella2(){
    
    
    // tabella 2
    let q = 0;
    for(let i = 3 ; i<6; i++){
            test = creaCartelle();
        let variabiles = test[q];
        var rigaCartella = document.getElementsByClassName(`riga`);
        
        for(let j = 0 ; j < 9; j++){
        
            newSquare = document.createElement('div');
            newSquare.classList.add(`cella-cartella`  );
            newSquare.innerHTML = `<h2>${variabiles[j]}</h2>`;  
            rigaCartella[i].appendChild(newSquare);
        }
        q++
    }
}
function generaTabella3(){
    
    
    // tabella 3
    let q = 0
    for(let i = 6 ; i<9; i++){
            test = creaCartelle();
        let variabiles = test[q];
        var rigaCartella = document.getElementsByClassName(`riga`);
        
        for(let j = 0 ; j < 9; j++){
        
            newSquare = document.createElement('div');
            newSquare.classList.add(`cella-cartella`  );
            newSquare.innerHTML = `<h2>${variabiles[j]}</h2>`;  
            rigaCartella[i].appendChild(newSquare);
        }
        q++
    }
}
function generaTabella4(){
    
    
    // tabella 4
    let q = 0
    for(let i = 9 ; i<12; i++){
            test = creaCartelle();
        let variabiles = test[q];
        var rigaCartella = document.getElementsByClassName(`riga`);
        
        for(let j = 0 ; j < 9; j++){
        
            newSquare = document.createElement('div');
            newSquare.classList.add(`cella-cartella`  );
            newSquare.innerHTML = `<h2>${variabiles[j]}</h2>`;  
            rigaCartella[i].appendChild(newSquare);
        }
        q++
    }
}
function generaTabella5(){
    
    
    // tabella 5
    let q = 0
    for(let i = 12 ; i<15; i++){
            test = creaCartelle();
        let variabiles = test[q];
        var rigaCartella = document.getElementsByClassName(`riga`);
        
        for(let j = 0 ; j < 9; j++){
        
            newSquare = document.createElement('div');
            newSquare.classList.add(`cella-cartella`  );
            newSquare.innerHTML = `<h2>${variabiles[j]}</h2>`;  
            rigaCartella[i].appendChild(newSquare);
        }
        q++
    }
}
function generaTabella6(){
    
    
    // tabella 6
    let q = 0
    for(let i = 15 ; i<18; i++){
            test = creaCartelle();
        let variabiles = test[q];
        var rigaCartella = document.getElementsByClassName(`riga`);
        
        for(let j = 0 ; j < 9; j++){
        
            newSquare = document.createElement('div');
            newSquare.classList.add(`cella-cartella`);
            newSquare.innerHTML = `<h2 id="provaclic" onclick="segnaNumero()">${variabiles[j]}</h2>`;  
            rigaCartella[i].appendChild(newSquare);
            
        }
        q++
    }
    
}
// function segnaNumero(){
//     var clickedCell = document.getElementsByClassName(`cella-cartella`);
//     console.log(clickedCell[0])
//     for(let j = 0 ; j < 15; j++){
//         clickedCell[j].classList.add("pecetta");
//     }
    
// }
function segnaNumero() {
    // controllo bombe nella casella e controllo vittoria o sconfitta
    const clickedNumber = parseInt(this.querySelector('div').textContent);
    if (clickedNumber == Number){
        this.classList.add('pecetta')
        
        
    }
}
// richiamo creazioni cartelle
function inizioGame(){
    var select = document.getElementById('playSelect');
    var value = select.value;
    
    if(value == 1){
        generaTabella1();
    }else if(value == 2){
        generaTabella1();
        generaTabella2();
    }else if(value == 3){
        generaTabella1();
        generaTabella2();
        generaTabella3();
    }
    else if(value == 4){
        generaTabella1();
        generaTabella2();
        generaTabella3();
        generaTabella4();
    }
    else if(value == 5){
        generaTabella1();
        generaTabella2();
        generaTabella3();
        generaTabella4();
        generaTabella5();
    }
    else if(value == 6){
        generaTabella1();
        generaTabella2();
        generaTabella3();
        generaTabella4();
        generaTabella5();
        generaTabella6();
    }
}
document.getElementById('play').addEventListener('click', inizioGame);
// // 1 player
// document.getElementById('play1').addEventListener('click', generaTabella1);
// // 2 player
// document.getElementById('play2').addEventListener('click', generaTabella1);
// document.getElementById('play2').addEventListener('click', generaTabella2);
// // 3 player
// document.getElementById('play3').addEventListener('click', generaTabella1);
// document.getElementById('play3').addEventListener('click', generaTabella2);
// document.getElementById('play3').addEventListener('click', generaTabella3);
// // 4 player
// document.getElementById('play4').addEventListener('click', generaTabella1);
// document.getElementById('play4').addEventListener('click', generaTabella2);
// document.getElementById('play4').addEventListener('click', generaTabella3);
// document.getElementById('play4').addEventListener('click', generaTabella4);
// // 5 player
// document.getElementById('play5').addEventListener('click', generaTabella1);
// document.getElementById('play5').addEventListener('click', generaTabella2);
// document.getElementById('play5').addEventListener('click', generaTabella3);
// document.getElementById('play5').addEventListener('click', generaTabella4);
// document.getElementById('play5').addEventListener('click', generaTabella5);
// // 5 player
// document.getElementById('play6').addEventListener('click', generaTabella1);
// document.getElementById('play6').addEventListener('click', generaTabella2);
// document.getElementById('play6').addEventListener('click', generaTabella3);
// document.getElementById('play6').addEventListener('click', generaTabella4);
// document.getElementById('play6').addEventListener('click', generaTabella5);
// document.getElementById('play6').addEventListener('click', generaTabella6);




