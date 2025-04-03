const corretorBtn = document.querySelector(".corretor-btn");
if (corretorBtn) {
    corretorBtn.addEventListener("click", function () {
        let confirmar = confirm("Deseja falar com um corretor agora?");
        if (confirmar) {
            alert("Um corretor entrará em contato em breve!");
        } else {
            alert("Tudo bem! Se precisar, estamos à disposição.");
        }
    });
}

function carregarMaisImoveis(button) {
    const container = button.previousElementSibling;
    if (container && container.classList.contains("cards-container")) {
        alert("Carregando mais imóveis...");

        for (let i = 1; i <= 3; i++) {
            let novoCard = document.createElement("div");
            novoCard.classList.add("card");
            novoCard.innerHTML = `
                    <div class="cardHeader">NOVO LANÇAMENTO</div>
                    <img src="imagem-placeholder.png" alt="Novo imóvel">
                    <div class="card-body">
                        <p class="titulo">Novo Edifício ${i}</p>
                        <p>Detalhes do imóvel aqui.</p>
                    </div>
                `;
            container.appendChild(novoCard);
        }

        alert("Novos imóveis carregados!");
    }
}


const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s";
    });

    card.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});


const formInputs = document.querySelectorAll(".cadastrar input");
const submitButton = document.querySelector(".cadastrar button");

if (submitButton) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let nome = formInputs[0].value.trim();
        let email = formInputs[1].value.trim();

        if (nome === "" || email === "") {
            alert("⚠️ Por favor, preencha todos os campos.");
            return;
        }

        if (!validarEmail(email)) {
            alert("❌ E-mail inválido! Insira um e-mail correto.");
            return;
        }

        alert("✅ Cadastro realizado com sucesso! Seja bem-vindo(a), " + nome + "!");
    });
}

function validarEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
