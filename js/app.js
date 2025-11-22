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
