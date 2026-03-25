const versiA = ["Doppia collina", "Tonda dolcezza", "Due forme amiche", "Bella curva lì", "Sogno di carne", "Lì ci si siede", "Morbida curva", "Piena armonia", "Forma perfetta", "L'occhio si posa", "Soffice dono", "Sostegno caldo", "Arte del corpo", "Base sicura", "Punto d'appoggio", "Orizzonte tondo", "Soffice peso", "Morbido ponte", "Due lune rosa", "Pietra preziosa", "Sogno d'estate", "Bella rotonda", "Sempre presente", "Fianco sinuoso", "Anima calda", "Base del mondo", "Dono prezioso", "Forma che vive", "Sguardo furtivo", "Pietra levigata", "Morbido fiore", "Onda che passa", "Soffio di vita", "Collina bianca", "Punto di luce", "Sogno sospeso", "La simmetria", "Curva scolpita", "Morbido letto", "Senza confini", "Pesca d'estate", "Dolce rifugio", "Marmo di luna", "Calda accoglienza", "Seta leggera", "Tondo mistero", "Nuvola piena", "Forza nascosta", "Soffice nido", "L'arco d'argento", "Curva di luce", "Pura magia", "Ritmo silente", "Palla di neve", "Soffice vanto", "Tela d'artista", "Morbida culla", "Vera bellezza", "Sogno segreto", "Nobile forma", "Pura poesia", "Centro del mondo", "Soffice luna", "Tondo gioiello", "Morbida pesca", "Tratto d'artista", "Dolce scultura", "Forza vitale", "Culla dei sogni", "Curva divina", "Soffice posa", "Onda di mare", "L'arte perfetta", "Soffio leggero", "Magico tondo", "Forma decisa", "Soffice danza", "Tonda magia", "Punto di forza", "Morbido incanto"];
const versiB = ["Morbida per sedersi", "Regge il peso del mondo", "Due mezze lune piene", "Come pesca matura", "Quando cammini oscilla", "Jeans stretti e gran fatica", "Salda radice e forza", "Dolce collina rosa", "L'arte si fa rotonda", "Attira sguardi audaci", "Cuscino di ogni sera", "Scolpita nella carne", "Oscilla a ritmo lento", "Sempre ci segue dietro", "Forma che incanta l'occhio", "Quando si balla ruota", "Morbida come un fiore", "Due guance sempre piene", "Forte ma delicato", "Regge il tuo riposo", "In ogni posa splende", "Soffice come nuvola", "Dolce come il buon miele", "Scolpita dal respiro", "Oscilla e poi si ferma", "Sempre ci guarda il dorso", "Porta la nostra forza", "Morbida come l'acqua", "Bella curva di carne", "Danza con ogni passo", "Sempre al nostro bel fianco", "Orizzonte che vibra", "Regge l'intero corpo", "Morbido punto d'ombra", "Collina che si muove", "Quando ti siedi ride", "Forma che mai si stanca", "Morbida come seta", "Bella forma perfetta", "Scolpita dalla vita", "Sembra di stare in cielo", "Culla per le fatiche", "Morbido scivolo d'oro", "Due nuvole di sogni", "Centro del nostro moto", "Un quadro di bravura", "Morbido accoglimento", "Nasconde il vero centro", "Forza che ci sostiene", "Come la luna piena", "Morbida sensazione", "Che bella prospettiva", "Morbido appoggio al suolo", "Danza senza canzone", "Onda che si rinnova", "Come un fiore di loto", "Scultura senza tempo", "Soffice come spuma", "Curva che toglie il fiato", "Regno della morbidezza", "Bella da contemplare", "Forma d'antica dea", "Morbida tentazione", "Regge il respiro affannato", "Come un cuscino caldo", "Onda che mai si ferma", "Due specchi di dolcezza", "Bella natura morta", "Segreto ben celato", "Forza di gravità", "Attira i pensieri", "Morbida meraviglia", "Un arco di trionfo", "Dolce peso leggero", "Sinfonia di curve", "Soffice consistenza", "Forma che il vento accarezza", "Morbido contrappeso", "Centro dell'armonia", "Bella senza pudore"];
const versiC = ["Che gran sedere", "Cuscino per me", "Opera d'arte", "Ritmo che incanta", "Dolce riposo", "Senza parole", "Sostegno caldo", "Amore tondo", "Carne viva lì", "Bello da vedere", "Guarda che roba", "Forma sincera", "Base del corpo", "Tondo sorriso", "Sogno di carne", "Sempre fedele", "Soffice peso", "Forma sospesa", "Opera viva", "Bello da toccare", "Forte appoggio", "Dono di carne", "Sogno d'estate", "Morbido dono", "Anima tonda", "La simmetria", "Sempre presente", "Che bella curva", "Morbida carne", "Base sicura", "Pietra di luce", "Orizzonte blu", "Tondo respiro", "Senza parole", "Soffice dono", "Morbida roccia", "Punto di pace", "Fianco sicuro", "Carne preziosa", "Perfetto così", "Vera bellezza", "Morbida posa", "Tondo tesoro", "Sogno segreto", "Forma divina", "Magica luna", "Dolce scultura", "Tonda armonia", "Pura delizia", "Culla dei sogni", "Centro del mondo", "Soffice vanto", "Onda d'amore", "Punto di forza", "Morbida pace", "Bella visione", "Tondo piacere", "Forma decisa", "Nobile curva", "Sogno ad occhi", "Soffice nido", "Pura magia", "Arte segreta", "Tratto d'artista", "Morbido letto", "Senza confini", "Palla di neve", "Soffice luna", "Tondo mistero", "Marmo di luna", "Caldo riposo", "Forza nascosta", "Seta leggera", "Curva di luce", "Soffice danza", "Magico tondo", "Dolce rifugio", "Pura poesia", "L'arco d'argento", "Morbido incanto"];

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

// --- Condivisione corretta con SOLO la frase stabilita ---
async function condividiTutto() {
    if (!ultimoHaikuRaw) { alert("Genera prima un Haikulo!"); return; }
    const shareBtn = document.getElementById('share-icon-btn');
    shareBtn.style.opacity = '0.3'; 

    try {
        await document.fonts.ready; 
        
        const imageBlob = await generaScreenshotBlob();
        if (!imageBlob) throw new Error("Generazione immagine fallita.");

        const file = new File([imageBlob], "haikulo-poesia.png", { type: "image/png" });
        
        // TESTO CONDIVISIONE: Solo ed esclusivamente questa frase
        const testoShare = 'Un Haikulo tutto per te ✿';

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
        // Anche in caso di errore di condivisione file, copiamo solo la frase
        navigator.clipboard.writeText('Un Haikulo tutto per te ✿');
        alert("Errore. La frase è stata copiata negli appunti.");
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

        ctx.font = 'italic 600 50px "Cormorant Garamond", serif'; 
        ctx.fillStyle = '#8b5a2b';
        ctx.fillText('L\'arte prende forma, rotonda.', width / 2, boxY + 200);

        ctx.font = '600 100px "Cormorant Garamond", serif'; 
        ctx.fillStyle = '#333333';
        const righeHaiku = ultimoHaikuRaw.split('\n');
        const startY = boxY + boxH / 2 - 20; 
        righeHaiku.forEach((riga, index) => {
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