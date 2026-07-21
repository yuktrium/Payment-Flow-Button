const btn = document.getElementById("coBtn");
const label = document.getElementById("coLabel");
const sub = document.getElementById("coSub");
let busy = false;

function run() {
  if (busy) return;
  busy = true;
  btn.classList.add("play");
  label.textContent = "Processing…";
  sub.textContent = "Hang tight";
  setTimeout(() => {
    btn.classList.add("done");
    label.textContent = "Payment complete";
    sub.textContent = "Thank you";
  }, 1250);
  setTimeout(() => {
    btn.classList.remove("play", "done");
    label.textContent = "Checkout";
    sub.textContent = "Secure payment";
    busy = false;
  }, 3200);
}

btn.addEventListener("click", run);
btn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    run();
  }
});
