let count = document.getElementById("count").innerText;

function increment() {
  count = parseInt(count) + 1;
  document.getElementById("count").innerText = count;
}

function save() {
  document.getElementById("save-el").textContent += count + " - ";
  document.getElementById("count").innerText = 0;
  count = 0;
}
