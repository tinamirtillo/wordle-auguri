// Funzione per creare i fuochi d'artificio
function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    // Posizione casuale sulla pagina
    firework.style.left = `${Math.random() * window.innerWidth}px`;
    firework.style.top = `${Math.random() * window.innerHeight}px`;

    // Aggiungi il fuoco d'artificio alla pagina
    document.getElementById('fireworks').appendChild(firework);

    // Rimuovi il fuoco d'artificio dopo che l'animazione è finita
    setTimeout(() => {
        firework.remove();
    }, 1000);
}

// Genera fuochi d'artificio ogni 0.5 secondi
setInterval(createFirework, 500);

// Funzione che verifica la parola e mostra il messaggio di auguri
function checkWordCompletion(word) {
    if (word.toLowerCase() === "cane") {  // La parola da indovinare è "CANE"
        document.getElementById('message').classList.remove('hidden');
    }
}

// Funzione per gestire la griglia di gioco
function createGameGrid() {
    const grid = document.getElementById('grid');
    const letters = ['C', 'A', 'N', 'E'];  // La parola da indovinare è "CANE"
    letters.forEach((letter) => {
        const div = document.createElement('div');
        div.textContent = letter;
        div.classList.add('letter-box');
        grid.appendChild(div);
    });
}

// Chiamare la funzione che crea la griglia all'inizio
createGameGrid();

// Modificare il comportamento in base alle interazioni o risultati del gioco
// Esegui il check dopo che la parola è stata completata
document.querySelector('#grid').addEventListener('click', function() {
    // Simulazione di completamento parola
    checkWordCompletion("Cane");  // Controlla la parola indovinata
});
