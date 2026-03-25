const versiA = ["Doppia collina", "Tonda dolcezza", "Due forme amiche", "Bella curva lì", "Sogno di carne", "Lì ci si siede", "Morbida curva", "Bianca luna piena", "Forma perfetta", "L'occhio si posa", "Soffice dono", "Sostegno caldo", "Arte del corpo", "Base sicura", "Punto d'appoggio", "Orizzonte tondo", "Soffice peso", "Morbido ponte", "Due lune rosa", "Pietra preziosa", "Sogno d'estate", "Bella rotonda", "Sempre presente", "Fianco sinuoso", "Anima calda", "Orizzonte", "Base del mondo", "Dono prezioso", "Forma che vive", "Sguardo prezioso", "Pietra levigata", "Morbido fiore", "Onda che passa", "Soffio di carne", "Collina bianca", "Punto di luce", "Sogno sospeso", "Bella geometria", "Forma scolpita", "Morbido cuscino"];
const versiB = ["Morbida per sedersi", "Regge il peso del mondo", "Due mezze lune piene", "Come pesca matura", "Quando cammini oscilla", "Jeans stretti e fatica", "Salda radice e forza", "Dolce collina rosa", "L'arte si fa rotonda", "Attira sguardi falsi", "Cuscino di ogni sera", "Scolpita nella carne", "Oscilla a ritmo lento", "Sempre ci segue dietro", "Forma che incanta l'occhio", "Quando si balla ruota", "Morbida come fiore", "Due guance sempre piene", "Forte ma delicato", "Regge il tuo riposo", "In ogni posa splende", "Soffice come nuvola", "Dolce come miele", "Scolpita dal respiro", "Oscilla e poi si ferma", "Sempre ci guarda dietro", "Porta la nostra forza", "Morbida come acqua", "Bella curva di carne", "Danza con ogni passo", "Sempre al nostro fianco", "Orizzonte che vibra", "Regge l'intero corpo", "Morbido punto d'ombra", "Collina che si muove", "Quando ci si siede ride", "Forma che non stanca", "Morbida come seta", "Bella forma levigata", "Scolpita dalla vita"];
const versiC = ["Che gran sedere", "Cuscino per me", "Opera d'arte", "Ritmo che incanta", "Dolce cuscino", "Senza parole", "Sostegno caldo", "Aamore tondo", "Carne viva lì", "Orizzonte", "Guarda che roba", "Bello da vedere", "Base del corpo", "Tondo sorriso", "Sogno di carne", "Sempre fedele", "Soffice peso", "Forma sospesa", "Opera viva", "Bella da toccare", "Forte appoggio", "Dono di carne", "Sogno d'estate", "Morbido dono", "Anima tonda", "Bella geometria", "Sempre presente", "Che bella curva", "Morbida carne", "Base sicura", "Pietra di luce", "Orizzonte", "Tondo sorriso", "Senza parole", "Soffice dono", "Morbida roccia", "Sempre fedele", "Fianco sicuro", "Bella geometria", "Carne preziosa"];

let ultimoHaikuRaw = ""; 

class RandomBag {
    constructor(items) {
        this.originalItems = [...items];
        this.currentBag = [];
    }
    next() {
        if (this.currentBag.length === 0) {
            this.currentBag = [...this.originalItems].sort(() => Math.random() - 0.5);
        }
        return this.currentBag.pop(); 
    }
}

const bagA = new RandomBag(versiA);
const bagB = new RandomBag(versiB);
const bagC = new RandomBag(versiC);

function generaHaikulo() {
    const haikuBox = document.getElementById('haikuBox');
    haikuBox.classList.add('fade-out');

    setTimeout(() => {
        const riga1 = bagA.next();
        const riga2 = bagB.next();
        const riga3 = bagC.next();
        
        const nuovoHaikuHtml = `${riga1}<br>${riga2}<br>${riga3}`;
        ultimoHaikuRaw = `${riga1}\n${riga2}\n${riga3}`;
        
        haikuBox.innerHTML = nuovoHaikuHtml;
        haikuBox.classList.remove('fade-out');
    }, 400);
}

async function condividiTutto() {
    if (!ultimoHaikuRaw) { alert("Genera prima un Haikulo!"); return; }
    const shareBtn = document.getElementById('share-icon-btn');
    shareBtn.style.opacity = '0.3'; 

    try {
        await document.fonts.ready; 
        
        const imageBlob = await generaScreenshotBlob();
        if (!imageBlob) throw new Error("Generazione immagine fallita.");

        const file = new File([imageBlob], "haikulo-poesia.png", { type: "image/png" });
        const testoShare = `Un Haikulo per te:\n\n${ultimoHaikuRaw}\n\nGenerato su Haikulo ✿`;

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: 'Haikulo - L\'Arte Rotonda',
                text: testoShare
            });
        } else {
            await navigator.clipboard.writeText(testoShare);
            alert("Testo copiato negli appunti! ✨ (Condivisione file non supportata qui)");
        }
    } catch (error) {
        console.error('Errore:', error);
        navigator.clipboard.writeText(`Un Haikulo per te:\n\n${ultimoHaikuRaw}`);
        alert("Errore. Il testo è stato copiato negli appunti.");
    } finally {
        shareBtn.style.opacity = ''; 
    }
}

function generaScreenshotBlob() {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const width = 1080; const height = 1920; 
        canvas.width = width; canvas.height = height;

        const gradient = ctx.createRadialGradient(width*0.1, height*0.1, 0, width*0.1, height*0.1, width*2);
        gradient.addColorStop(0, '#ffe4e1'); gradient.addColorStop(0.5, '#fff0f5');
        ctx.fillStyle = gradient; ctx.fillRect(0, 0, width, height);

        const boxW = width * 0.85; 
        const boxH = height * 0.55;
        const boxX = (width - boxW) / 2; 
        const boxY = (height - boxH) / 2;
        
        ctx.save();
        // Aggiornato il colore del box interno allo screenshot per renderlo più "fade" come il sito
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.05)';
        ctx.shadowBlur = 40; 
        ctx.shadowOffsetY = 20;

        let r = 40; 
        ctx.beginPath();
        ctx.moveTo(boxX + r, boxY);
        ctx.arcTo(boxX + boxW, boxY, boxX + boxW, boxY + boxH, r);
        ctx.arcTo(boxX + boxW, boxY + boxH, boxX, boxY + boxH, r);
        ctx.arcTo(boxX, boxY + boxH, boxX, boxY, r);
        ctx.arcTo(boxX, boxY, boxX + boxW, boxY, r);
        ctx.fill();
        ctx.restore();

        ctx.fillStyle = '#ffb7c5'; ctx.font = 'bold 50px serif'; 
        ctx.fillText('✿', boxX + 40, boxY + 70); 
        ctx.fillText('✿', boxX + boxW - 80, boxY + boxH - 40); 

        ctx.textAlign = 'center';
        
        ctx.font = '700 90px "Cormorant Garamond", serif'; 
        ctx.fillStyle = '#4a1d2e';
        ctx.fillText('Haikulo', width / 2, boxY + 140);

        ctx.font = 'italic 40px "Open Sans", sans-serif'; 
        ctx.fillStyle = '#8b5a2b';
        ctx.fillText('L\'arte prende forma, rotonda.', width / 2, boxY + 200);

        ctx.font = '600 100px "Cormorant Garamond", serif'; 
        ctx.fillStyle = '#333333';
        const righeHaiku = ultimoHaikuRaw.split('\n');
        const startY = boxY + boxH / 2 - 20; 
        righeHaiku.forEach((riga, index) => {
            // Aggiunto boxW - 80 per forzare la riga a stare dentro il riquadro se fosse troppo lunga
            ctx.fillText(riga, width / 2, startY + index * 130, boxW - 80);
        });

        canvas.toBlob((blob) => resolve(blob), 'image/png', 1);
    });
}

function creaPetalo() {
    const container = document.getElementById('sakura-container');
    if(!container) return;
    const petalo = document.createElement('div');
    petalo.classList.add('petal');
    const size = Math.random() * 10 + 8 + 'px';
    petalo.style.width = size; petalo.style.height = size;
    petalo.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 5 + 5 + 's';
    petalo.style.animationDuration = duration;
    petalo.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(petalo);
    setTimeout(() => { petalo.remove(); }, (parseFloat(duration) + 5) * 1000);
}
setInterval(creaPetalo, 300);

generaHaikulo();