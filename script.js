const form = document.querySelector("form");
const inputName = document.querySelector("#name");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputName.value) {
        console.log();
    } else {
        console.log('Nome está vazio');
    }

    
    console.log("Nome:", inputName.value);
    console.log("Email:", email.value);
    console.log("Mensagem:", mensagem.value);
});

