# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o projeto escolhido.  
A página principal (home-page) mostra uma visão dos vários itens existentes no site.  
Ao clicar em um item, o usuário é direcionado para a página de detalhes, que exibe todas as informações sobre o artista e seu álbum.

---

## Informações Gerais

- **Nome:** Pedro Henrique Pinho Silva
- **Matrícula:** [900763]  
- **Proposta de projeto escolhida:** Site de Artistas e Álbuns Musicais  
- **Breve descrição sobre seu projeto:**  
  O projeto exibe uma lista de artistas e seus álbuns, com uma página inicial dinâmica que apresenta os artistas em destaque.  
  Ao clicar em "Ver detalhes", o usuário acessa uma página específica com informações completas do artista, como nome, álbum, gênero e descrição.

---

## Print da Home-Page

![Home Page](./fotos/home-page.png)  
*(Print: “Home page.PNG” enviado pelo autor)*

---

## Print da página de detalhes do item

![Página de Detalhes](./fotos/detalhes-page.png)  
*(Print: “js detalhes.PNG” enviado pelo autor)*

---

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
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
