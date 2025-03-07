// Funzione per creare i fuochi d'artificio
function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    // Posizione casuale sulla pagina
    firework.style.left = `${Math.random() * window.innerWidth}px`;
    firework.style.top = `${Math.random() * window.innerHeight}px`;

    // Aggiungi il fuoco d'artificio alla pagina
    document.body.appendChild(firework);

    // Rimuovi il fuoco d'artificio dopo che l'animazione è finita
    setTimeout(() => {
        firework.remove();
    }, 1000); // Durata dell'animazione dei fuochi d'artificio
}

// Genera fuochi d'artificio ogni 0.5 secondi
setInterval(createFirework, 500);

// Funzione per adattare gli elementi in modo responsive
function adjustForMobile() {
    // Ridurre la dimensione dei cagnolini sui telefoni
    const dogs = document.querySelectorAll('.dog');
    dogs.forEach(dog => {
        dog.style.width = '80px';   // Aumenta la dimensione dei bassotti
        dog.style.left = '10px';     // Posizione più centrata
        dog.style.bottom = '40px';  // Posiziona i bassotti più in basso
    });

    // Cambiare la dimensione dei fuochi d'artificio e renderli più visibili
    const fireworks = document.querySelectorAll('.firework');
    fireworks.forEach(firework => {
        firework.style.width = '15px';    // Aumentare la dimensione
        firework.style.height = '15px';
        firework.style.backgroundColor = 'gold';  // Colore più visibile
        firework.style.animationDuration = '1s';   // Velocità dell'animazione
    });

    // Modifica la posizione del messaggio per dispositivi mobili
    const message = document.getElementById('message');
    if (message) {
        message.style.fontSize = '20px';  // Aumentare la leggibilità del messaggio
    }

    // Modifica il layout della griglia per avere più spazio
    const grid = document.getElementById('grid');
    if (grid) {
        grid.style.gridTemplateColumns = 'repeat(3, 50px)';  // Mostra solo 3 lettere per riga
    }
}

// Funzione che verifica la dimensione dello schermo
function checkForResponsiveDesign() {
    if (window.innerWidth <= 600) {
        adjustForMobile();  // Attiva le modifiche per dispositivi mobili
    }
}

// Verifica se il design è responsivo ogni volta che la finestra cambia dimensione
window.addEventListener('resize', checkForResponsiveDesign);

// Chiamata iniziale per verificare la dimensione della finestra
checkForResponsiveDesign();
