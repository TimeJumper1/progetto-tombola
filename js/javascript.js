//// FUNZIONI DI ESTRAZIONI
/// CREAZIONE DELLA SEQUENZA DI ESTRAZIONE -------

function listExtraction(){

    var extraction = [];

    while (extraction.length < 90){
        var num = Math.floor(Math.random() * 90)+1;
        if (!(extraction.includes(num))){
            extraction.push(num)
        }
    }

    return extraction
}

// AZIONE DI ESTRAZIONE --------------------------------------------

function extract(list){
    
    let estrattore = document.getElementById(`estrattore`);
    listPop = list.pop();
    estrattore.innerHTML +=`${listPop}`
    extracted.push(listPop)
    return listPop
}

var listPop
/// Istanza della lista di estrazioni da fare e della lista degli estratti
var extracted = [];
var list = listExtraction();
var prova = true;
document.getElementById('estrattore').addEventListener('click',() =>{
    if(prova){
        list = listExtraction(); 
        prova = false 
    }
    console.log(extracted)
    let estrattore = document.getElementById(`estrattore`);
    listPop = list.pop();
    estrattore.innerHTML +=` ${listPop} `
    extracted.push(listPop)
    
} );

// SCHEDE CREAZIONE
function addScheda(){
    var list15 = [];
    var final = [];
    while (list15.length < 15){
        var num = Math.floor(Math.random() * 90)+1;
        if (!(list15.includes(num))){
            list15.push(num)
        }
    }
    for(let i = 0; i < 3; i++){
        row = list15.slice(5*i,5+5*i)
        final[i] = row
    }
    return final
}



// FUNZIONE UTILI PER TABELLA --------- sequenza di 15 numeri
function linearNumbers15(num){
    list = [];
    for(let i = 0; i < num*15;i++){
        list.push(i+1)
    }
    return list
}


/// GIOCATOI
// - funzione aggiungi giocatore
function addPlayer(num){
    for(let i = 0; i < num; i++){
        var giocatore = {
            id: i+1,
            nome:"Giocatore" + i+1,
            schede: {scheda:addScheda(),}
        }
        players.push(giocatore)
    } 
}



// CREAZIONE TABELLONE

var tabellone = {
    id: 0,
    nome: "Tabellone",
    schede: {
        scheda1: linearNumbers15(1),
        scheda2: linearNumbers15(2),
        scheda3: linearNumbers15(3),
        scheda4: linearNumbers15(4),
        scheda5: linearNumbers15(5),
        scheda6: linearNumbers15(6),
    }
    
}

// Lista giocatori inizializzata con solo il tabellone
var players = [tabellone];


// Lista premi istanzializati a inizio partita.
var ambo = false;
var terno = false;
var quaterna = false;
var cinquina = false;
var tombola = false;

// Controllo Premio attivo
function ActivePrice(){
    var counter = 0;
    var premio = ""
    if(tombola == true){
        tombola = null;
        counter = 5;
        premio = "tombola"
        return [tombola,counter, premio]
    }
    if(cinquina == true){
        counter = 4
        premio = "cinquina"
        return [tombola, counter,premio] 
    }
    if(quaterna == true){
        counter = 3
        premio = "quanterna"
        return [cinquina,counter,premio]
    }
    if(terno == true){
        counter = 2
        premio = "terno"
        return [quaterna, counter, premio]
    }
    if(ambo == true){
        counter = 1
        premio = "ambo";
        return [terno, counter, premio]
    }
 // 0 -si va per l'ambo, 1 si va per la terna, 2 ai va per la quaterna, 3 si va per la cinquina, 4 si va per la tombola, 5 Tombola ottenuta
}
var testiamoInsime=document.getElementById(`premioCorrente`);
console.log(testiamoInsime);
var counter = 0;
testiamoInsime.addEventListener('click', ()=>{
    
    
        if(counter == 0){
            ambo = true
        }
        if(counter == 1){
            terno = true
        }
        if(counter == 2){
            quaterna = true
        }
        if(counter == 3){
            cinquina = true
        }
        if(counter == 4){
            tombola = true
        }
        var premioScritto = document.getElementById(`premioCorrente`);
        var result = ActivePrice();

        premioScritto.innerHTML =`${result[2]}`
        counter++
    
});

// Cambio DELL Premio
function changePrice(counter){
    if(counter == 0){
        ambo = true
    }
    if(counter == 1){
        terno = true
    }
    if(counter == 2){
        quaterna = true
    }
    if(counter == 3){
        cinquina = true
    }
    if(counter == 4){
        tombola = true
    }
}


// CONTROLLA CHI HA VINTO- CONTOLLORE --------------------------
function checker(){
    var win = false;
    prize,counter = ActivePrice();
    var winner = [];
    if (prize == false && cinquina != true) {
        for(let i = 0; i < players.length; i++){
            for(let j = 0; j < players[i].schede.length;j++){
                for(let n =0; n < 3; n++){
                    if(players[i].schede[j][n].includes(extracted[extract.length-1])){
                    players[i].schede[j][n].pop(extracted[extract.length-1])
                    }
                }

            }
        }

        for(let i = 0; i < players.length; i++){
            for(let j = 0; j < players[i].schede.length;j++){
                for(let n =0; n < 3; n++){
                    if(players[i].schede[j][n].length==3-counter){
                        if(!(winner.includes(players[i].name))){
                            winner.push(players[i].name)
                        }
                        changePrice(counter);
                        win = true;
                    }
                }
                }

            }
    }

    if(prize == false && cinquina == true){
        for(let i = 0; i < players.length; i++){
            for(let j = 0; j < players[i].schede.length;j++){
                for(let n =0; n < 3; n++){
                    if(players[i].schede[j][n].includes(extracted[extract.length-1])){
                    players[i].schede[j][n].pop(extracted[extract.length-1])
                }
                }

            }
        }

        for(let i = 0; i < players.length; i++){
            for(let j = 0; j < players[i].schede.length;j++){
                    if(players[i].schede[j][0].length==0 && players[i].schede[j][1].length==0 && players[i].schede[j][2].length==0){
                        if(!(winner.includes(players[i].name))){
                            winner.push(players[i].name)
                        }
                        changePrice(counter)
                        win = true
                    }
                
                }

            }
        }
    return winner, win /// winner è la lista dei vincitori è counter è il premio vinto 0-Ambo, 1-Terna, 2-Quaderna, 3-Cinquina,4-Tombola
    // Qui avvisa se in quel turno qualcuno ha vinto. Se c'è una vincita si mostra la lista dei vincitori e poi con premiattivi ActivePrize() usanto il counter
    // capiamo cosa ha vinto, visto che sarà il premio del counter attuale che si è alzato meno uno.
} 


// FINE GIOCO E COMANDO RIGIOCO
function endGame(){
    var prize,_ = ActivePrice();
    if(prize == null){
/// RIGIOCA??? STARTGAME()
    }
}


/// Resettaggio
function startGame(num){
    ambo = false;
    terno = false;
    quaterna = false;
    cinquina = false;
    tombola = false;
    list = listExtraction();
    extracted = [];
    players = [tabellone];
    players.addPlayer(num)
    // genera numero nel DOM

    
    
}



// All'inizio sopra il tabello la dichiarazione dell premio per cui si va con ActivePrize()

/// Per ogni estrazione -Extract() [estrae] 
///-cheker() controlla se qualcuno ha vinto
//-endGame() [qui potremmo astenerci per le prime 15 uscite ma per semplicità lo mettiamo come controllo sempre] Controlla Il fine nel gioco
// Poi, sempre per ogni estrazione dopo endGame -ActivePrize() Per aggiornare il prossimo premio. Il counter