// 1. COLOQUE SEUS LINKS DE FOTOS AQUI
const fotos = [
  "https://i.postimg.cc/vT9rhCjd/unnamed-jpgesaaa.jpg",
  "https://i.postimg.cc/T1y2g6Kf/unnamed-jpgkkkkkkkk.jpg",
  "https://i.postimg.cc/pXHG7BB1/unnamed-jpgmodoserio.jpg",
];

const fraseHacker = "Ao seu lado, a felicidade bate à porta e a vida se torna mais leve e divertida. Lembrando que não pode mais dar rollback, hein! Agora é na saúde, na riqueza e às vezes até na 'violência' kkkkkk... Você é o commit essencial na minha vida. Amo você, meeu amoor! ❤️. Uptime de 100% no meu coração! 🚀";

let i = 0;
let fotoIndex = 0;
let sistemaIniciado = false;

window.iniciarSistema = function() {
  if (sistemaIniciado) return;
  sistemaIniciado = true;

  // Troca de telas
  document.getElementById('boas-vindas').style.display = 'none';
  document.getElementById('tela-sistema').style.display = 'block';
  document.getElementById('botao-hacker').style.display = 'none';

  // Inicia a música pelo YouTube (O clique no botão libera o autoplay)
  const player = document.getElementById('player-youtube');
  player.innerHTML = `<iframe width="0" height="0" src="https://www.youtube.com/embed/NZ4Of3lID84?autoplay=1" frameborder="0" allow="autoplay"></iframe>`;

  digitar();
  trocarFoto();
  initMatrix();
};

function digitar() {
  const el = document.getElementById("texto-hacker");
  if (i < fraseHacker.length) {
    el.innerHTML += fraseHacker.charAt(i);
    i++;
    setTimeout(digitar, 45);
  }
}

function trocarFoto() {
  const img = document.getElementById("foto-dinamica");
  if(fotos.length > 0) {
    img.src = fotos[fotoIndex];
    fotoIndex = (fotoIndex + 1) % fotos.length;
    setTimeout(trocarFoto, 4000); // Troca a cada 4 segundos sem piscar
  }
}

function initMatrix() {
  const c = document.getElementById('matrix');
  const ctx = c.getContext('2d');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  const columns = c.width / 16;
  const drops = Array(Math.floor(columns)).fill(1);
  setInterval(() => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0F0";
    ctx.font = "16px monospace";
    drops.forEach((y, x) => {
      const text = "01".charAt(Math.floor(Math.random() * 2));
      ctx.fillText(text, x * 16, y * 16);
      if (y * 16 > c.height && Math.random() > 0.975) drops[x] = 0;
      drops[x]++;
    });
  }, 35);
}