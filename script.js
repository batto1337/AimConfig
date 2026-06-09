function showMessage() {
  alert("Witaj w AimConfig!");
}

let visits = localStorage.getItem("visits");

if (visits === null) {
  visits = 1;
} else {
  visits = Number(visits) + 1;
}

localStorage.setItem("visits", visits);

const counter = document.getElementById("visitor-counter");

if (counter) {
  counter.textContent = "Odwiedziny: " + visits;
}
