  new window.VLibras.Widget('https://vlibras.gov.br/app');

//   function toggleMenu() {
//   document.getElementById("menu").classList.toggle("active");
// }

function toggleMenu() {
  const menu = document.getElementById("menu");
  const btn = document.getElementById("btn");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    btn.textContent = "✖";
  } else {
    btn.textContent = "☰";
  }
}

function calcularTotal() {
  let total = 0;

  const checkboxes = document.querySelectorAll('input[name="pedido[]"]:checked');

  checkboxes.forEach(cb => {
    total += Number(cb.dataset.preco);
  });

  document.getElementById("total").innerText = total.toFixed(2);
}

function enviar() {
  let estrelas = document.querySelector('input[name="estrela"]:checked');

  if (!estrelas) {
    alert("Escolha uma avaliação!");
    return;
  }

  let valor = estrelas.value;

  let email = "gabriele-6796221@estudante.rs.gov.br"; // TROQUE PELO SEU EMAIL
  let assunto = "Avaliação do site";
  let corpo = `O usuário avaliou com ${valor} estrelas`;

  window.location.href = `mailto:${email}?subject=${assunto}&body=${corpo}`;
}