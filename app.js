function save() {
    // Aquí es donde meterás la lógica de la API de Gemini
    let card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = "Objeto detectado - €50";
    document.getElementById('history-container').appendChild(card);
    document.getElementById('modal').style.display = 'none';
}