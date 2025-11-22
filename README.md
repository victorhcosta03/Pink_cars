# 📘 Projeto – Página Web com Temas Dinâmicos (Light, Dark e Original)

Este projeto consiste em uma página web responsiva desenvolvida com **HTML**, **CSS**, **Bootstrap** e **JavaScript**, que permite alternar dinamicamente entre três temas visuais: **Original**, **Light** e **Dark**. Toda a interface foi planejada para manter consistência visual mesmo durante a troca de temas, preservando elementos como imagens, cards, formulários e seções com background.

---

## 🧩 **Tecnologias Utilizadas**

* **HTML5** – Estruturação da página
* **CSS3** – Estilização customizada
* **Bootstrap 5.3.8** – Layout responsivo e componentes
* **Bootstrap Icons** – Conjunto de ícones
* **JavaScript puro** – Alternância dinâmica de temas
* **AOS Library** – Animações ao rolar a página

---

## 🎨 **Funcionalidade Principal: Sistema de Temas**

A página possui três botões:

* **Original** – Mantém o estilo padrão do site
* **Light** – Tema claro, com fundo branco, textos escuros e redução de contraste
* **Dark** – Tema escuro, ideal para navegação noturna

O JavaScript adiciona classes ao elemento `<body>` para controlar o tema:

```js
let body = document.body;

function limpar() {
    body.classList.remove("light-theme", "dark-theme", "original-theme");
}

document.getElementById("light").addEventListener("click", function () {
    limpar();
    body.classList.add("light-theme");
});

document.getElementById("dark").addEventListener("click", function () {
    limpar();
    body.classList.add("dark-theme");
});

document.getElementById("original").addEventListener("click", function () {
    limpar();
});
```

As classes **light-theme** e **dark-theme** alteram cores de:

* Navegação
* Títulos
* Cards
* Formulários
* Rodapé
* Seções principais

Alguns backgrounds com imagens são substituídos por cores sólidas nos temas para melhorar a leitura.

---

## 🖼️ **Layout da Página**

A estrutura principal do site inclui:

### 🔹 **Navbar**

* Logotipo redondo
* Menu com dropdown
* Formulário de busca
* Botões de troca de tema

### 🔹 **Carrossel**

* 3 slides com legendas animadas

### 🔹 **Seção "Nossos Produtos"**

* Lista lateral com produtos e miniaturas
* Cards de lançamentos em grid responsivo

### 🔹 **Newsletter**

* Formulário para nome e senha
* Botão centralizado

### 🔹 **Rodapé**

* Ícones de redes sociais
* Fundo adaptado ao tema selecionado

---

## 💡 **Recursos Visuais Customizados**

* Backgrounds com imagens nas seções principais
* Bordas laterais decorativas (`bg-title`)
* Cards estilizados com Bootstrap
* Componentes animados com AOS
* Imagens circulares utilizando `border-radius: 50%`

---

## 📱 **Responsividade**

A página utiliza **grid do Bootstrap** garantindo adaptação automática para:

* Smartphones
* Tablets
* Notebooks
* Monitores widescreen
