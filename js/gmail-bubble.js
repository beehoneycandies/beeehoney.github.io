var teste2 = document.getElementById("chat-bubble");
var teste = document.getElementById("ssvg-4");
teste.addEventListener(
  "click",
  function () {
    if (teste2.style.display === "none") {
      teste2.style.display = "block";
    } else {
      teste2.style.display = "none";
    }
  },
  false
);
