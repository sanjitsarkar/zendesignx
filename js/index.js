//Slider
const slider = document.querySelector("#slider");
const output = document.querySelector("#slider-value");
output.textContent = slider.value; 

slider.oninput = function() {
  output.textContent = this.value;
}


const modal = document.querySelector("#modal");

var openModal = document.querySelector("#open-modal");

var close = document.querySelector("#close");

openModal.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}