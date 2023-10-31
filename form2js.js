const rangeLabel = document.querySelector(".custom_range_slider");
const rangeInput = rangeLabel.children[0];

rangeLabel.insertAdjacentHTML(
  "beforeend",
  `<span class="bubble">${rangeInput.value}</span>`
);

const rangeBubble = rangeLabel.children[1];

rangeInput.addEventListener("input", () => {
  const { min, max, value } = rangeInput;
  const total = Number(max) - Number(min);
  const perc = (Number(value) - Number(min)) / total;

  rangeBubble.style.left = `${perc * 100}%`;
  rangeBubble.style.transform = `translateX(-${perc * 100}%)`;
  rangeBubble.textContent = value;
});