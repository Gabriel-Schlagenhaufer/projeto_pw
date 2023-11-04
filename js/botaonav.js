const links = document.getElementsByClassName("links")[0];
const botaoNav = document.getElementsByClassName("barras")[0];

botaoNav.addEventListener("click", function() {
  links.classList.toggle("active")
})
