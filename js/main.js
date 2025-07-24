document.addEventListener("DOMContentLoaded", () => {
  // Frases para inspirar a Mamma!
  const frasiDelGiorno = [
    "Chi va piano, va sano e va lontano. (Quem vai devagar, vai seguro e vai longe.)",
    "L'italiano è la lingua dell'amore e della musica.",
    "Ogni giorno è una nuova opportunità per imparare.",
    "Sei bravissima, Mamma!",
    "Il viaggio di mille miglia comincia con un solo passo.",
  ];

  const fraseElement = document.getElementById("frase-do-dia");
  if (fraseElement) {
    const randomIndex = Math.floor(Math.random() * frasiDelGiorno.length);
    fraseElement.textContent = frasiDelGiorno[randomIndex];
  }
});
