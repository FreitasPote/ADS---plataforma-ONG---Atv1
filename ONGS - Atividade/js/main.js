document.addEventListener("DOMContentLoaded", () => {
  const filtro = document.getElementById("categoria");
  const projetos = document.querySelectorAll(".projeto");

  filtro.addEventListener("change", () => {
    const categoriaSelecionada = filtro.value;

    projetos.forEach((projeto) => {
      const categoriaProjeto = projeto.getAttribute("data-categoria");

      if (
        categoriaSelecionada === "todos" ||
        categoriaProjeto === categoriaSelecionada
      ) {
        projeto.style.display = "block";
      } else {
        projeto.style.display = "none";
      }
    });
  });
});

function simularDoacao(campanha) {
  alert(
    `Obrigado por apoiar a campanha "${campanha}"! Sua contribuição faz a diferença.`
  );
}

document
  .getElementById("form-voluntario")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const vaga = document.getElementById("vaga").value;
    alert(
      `Obrigado, ${nome}! Sua inscrição para "${vaga}" foi recebida com sucesso.`
    );
    this.reset();
  });

document
  .getElementById("form-newsletter")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email-news").value;
    alert(`Obrigado por assinar nossa newsletter, ${email}!`);
    this.reset();
  });

document
  .getElementById("form-projeto")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    alert(`Projeto "${titulo}" cadastrado com sucesso!`);
    this.reset();
  });
