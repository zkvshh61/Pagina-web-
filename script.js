// Array de mensajes bíblicos con sus versículos
const bibleMessages = [
    {
        message: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
        reference: "Juan 3:16"
    },
    {
        message: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.",
        reference: "Jeremías 29:11"
    },
    {
        message: "Todo lo puedo en Cristo que me fortalece.",
        reference: "Filipenses 4:13"
    },
    {
        message: "Encomienda a Jehová tu camino, y confía en él; y él hará.",
        reference: "Salmos 37:5"
    },
    {
        message: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
        reference: "Mateo 11:28"
    },
    {
        message: "El Señor es mi pastor, nada me faltará.",
        reference: "Salmos 23:1"
    },
    {
        message: "Porque para Dios nada hay imposible.",
        reference: "Lucas 1:37"
    },
    {
        message: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.",
        reference: "Mateo 6:33"
    },
    {
        message: "Y conoceréis la verdad, y la verdad os hará libres.",
        reference: "Juan 8:32"
    },
    {
        message: "Te damos la bienvenida a nuestra comunidad de fe. Aquí encontrarás amor, esperanza y la palabra de Dios.",
        reference: "Ministerio SION"
    }
];

let currentIndex = 0;
const messageText = document.getElementById('messageText');
const verseReference = document.getElementById('verseReference');

// Función para cambiar el mensaje con animación
function changeMessage() {
    const currentMessage = bibleMessages[currentIndex];
    
    // Efecto de desvanecimiento
    messageText.style.opacity = '0';
    verseReference.style.opacity = '0';
    
    setTimeout(() => {
        messageText.textContent = currentMessage.message;
        verseReference.textContent = `- ${currentMessage.reference}`;
        
        // Efecto de aparición
        messageText.style.opacity = '1';
        verseReference.style.opacity = '1';
    }, 500);
    
    // Pasar al siguiente mensaje
    currentIndex = (currentIndex + 1) % bibleMessages.length;
}

// Cambiar mensaje cada 5 segundos
setInterval(changeMessage, 5000);

// Cambiar mensaje inmediatamente al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(changeMessage, 2000); // Primer cambio después de 2 segundos
}); 