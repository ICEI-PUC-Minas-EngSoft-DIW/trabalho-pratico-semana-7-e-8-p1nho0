// Estrutura JSON com os artistas e álbuns
const artistas = [
  {
    id: 1,
    nome: "MC Ig",
    imagem: "fotos/mcig.png",
    descricao: "MC Ig é um dos principais nomes do trap/funk brasileiro, conhecido por suas letras autênticas e batidas marcantes.",
    album: "Favelado Chique (2024)",
    genero: "Trap / Funk",
  },
  {
    id: 2,
    nome: "Henrique e Juliano",
    imagem: "fotos/henriqueejuliano.jfif",
    descricao: "Dupla sertaneja consagrada, com músicas românticas e shows que arrastam multidões em todo o Brasil.",
    album: "Manifesto Musical (2023)",
    genero: "Sertanejo",
  },
  {
    id: 3,
    nome: "Artista 1",
    imagem: "fotos/artista1.png",
    descricao: "Novo talento da cena pop nacional, misturando ritmos modernos e letras inspiradoras.",
    album: "Céu Aberto (2025)",
    genero: "Pop",
  },
  {
    id: 4,
    nome: "Artista 2",
    imagem: "fotos/artista2.png",
    descricao: "Artista independente que combina sonoridades urbanas com influências eletrônicas.",
    album: "Eclipse (2024)",
    genero: "Indie / Eletrônico",
  },
];

// Função auxiliar
function q(sel) {
  return document.querySelector(sel);
}

// Renderiza a home (cards)
function renderHome() {
  const container = q("#cards-container");
  if (!container) return;

  container.innerHTML = "";
  artistas.forEach((artista) => {
    const card = document.createElement("div");
    card.className = "col-12 col-md-4 text-center";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${artista.imagem}" class="card-img-top" alt="${artista.nome}">
        <div class="card-body">
          <h5 class="card-title">${artista.nome}</h5>
          <p class="card-text">${artista.album}</p>
          <a href="detalhes.html?id=${artista.id}" class="btn btn-primary">Ver detalhes</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Renderiza a página de detalhes
function renderDetalhes() {
  const container = q("#detalhe-item");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const artista = artistas.find((a) => a.id === id);

  if (!artista) {
    container.innerHTML = "<p>Artista não encontrado!</p>";
    return;
  }

  container.innerHTML = `
    <img src="${artista.imagem}" class="img-fluid rounded mb-4" alt="${artista.nome}">
    <h2>${artista.nome}</h2>
    <p><strong>Álbum:</strong> ${artista.album}</p>
    <p><strong>Gênero:</strong> ${artista.genero}</p>
    <p class="mt-3">${artista.descricao}</p>
  `;
}

// Executa a função certa dependendo da página
document.addEventListener("DOMContentLoaded", () => {
  if (q("#cards-container")) renderHome();
  if (q("#detalhe-item")) renderDetalhes();
});
