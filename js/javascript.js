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
    
    let estrattore = document.getElementById(`estrattore`);
    listPop = list.pop();
    estrattore.innerHTML +=` ${listPop} `
    extracted.push(listPop)
    let winner = checker();
    console.log(winner[1])
    return extracted
} );
console.log(extracted)
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
    for(let i = 0+num*15; i < (num*15)+15;i++){
        list.push(i+1)
    }
    return list
}


/// GIOCATOI
// - funzione aggiungi giocatore
function addPlayer(num,test){
    for(let i = 0; i < num; i++){
        var giocatore = {
            id: i+1,
            nome:"Giocatore" + i+1,
            schede: {0:test,}
        }
        players.push(giocatore)
    } 
}



// CREAZIONE TABELLONE

var tabellone = {
    id: 0,
    nome: "Tabellone",
    schede: {
        0: linearNumbers15(0),
        1: linearNumbers15(1),
        2: linearNumbers15(2),
        3: linearNumbers15(3),
        4: linearNumbers15(4),
        5: linearNumbers15(5),
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
    return[ambo,0,"ambo"]
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
        let result = ActivePrice();
        console.log(result)
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
    prize = ActivePrice();
    console.log(players[1].schede[0][1])
    var winner = [];
    if (prize[0] == false && cinquina != true) {
        for(let i = 0; i < players.length; i++){
            for(let j = 0; j < players[i].schede.length;j++){
                for(let n =0; n < 3; n++){
                    if(players[i].schede[j][n].includes(extracted[extract.length-1])){
                    players[i].schede[j][n].splice(players[i].schede[j][n].indexOf(extracted[extract.length-1]), 1)
                    }
                }

            }
        }

        for(let i = 0; i < players.length; i++){
            for(let j = 0; j < players[i].schede.length;j++){
                for(let n =0; n < 3; n++){
                    if(players[i].schede[j][n].length==3-prize[1]){
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

    if(prize[0] == false && cinquina == true){
        for(let i = 0; i < players.length; i++){
            for(let j = 0; j < players[i].schede.length;j++){
                for(let n =0; n < 3; n++){
                    if(players[i].schede[j][n].includes(extracted[extract.length-1])){
                    players[i].schede[j][n].splice(players[i].schede[j][n].indexOf(extracted[extract.length-1]), 1)
                }
                }

            }
        }

        for(let i = 0; i < players.length; i++){
            for(let j = 0; j < players[i].schede.length;j++){
                    if(players[i].schede[j][0].length==4 && players[i].schede[j][1].length==4 && players[i].schede[j][2].length==4){
                        if(!(winner.includes(players[i].name))){
                            winner.push(players[i].name)
                        }
                        changePrice(prize[1])
                        win = true
                    }
                
                }

            }
        }
    return [winner, win] /// winner è la lista dei vincitori è counter è il premio vinto 0-Ambo, 1-Terna, 2-Quaderna, 3-Cinquina,4-Tombola
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