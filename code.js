const api = [
  {
    img: "hot-megan-fox.jpg",
    color: "#d78896",
    name: "Black",
  },
  {
    img: "kylie-jenner.jpg",
    color: "#cae129",
    name: "Dark brown",
  },
  {
    img: "img-3.webp",
    color: "#080a16",
    name: "White",
  },
];

const optionsBtn = document.querySelector(".more-options-btn");

optionsBtn.addEventListener("click", () => {
  const moreOptions = document.querySelector(".more-options");
  moreOptions.classList.toggle("show-options");

  anime({
    targets: moreOptions,
    scaleY: [0, 1],
    duration: 1000,
  });

  anime({
    targets: ".icon-anim",
    scale: [0, 1],
    opacity: [0, 1],
    delay: (el, i) => i * 160 + 300,
  });
});

function setBackground(array, element, index) {
  element.style.backgroundImage = `url(${array[index].img})`;
}

const imageContainer = document.querySelector(".image-container");
let count = 0;
setBackground(api, imageContainer, count);

document.querySelector(".image-change-icon").addEventListener("click", () => {
  count = (count + 1) % api.length;
  setBackground(api, imageContainer, count);
});

function createColors(array, appendTo) {
  return array.map((item) => {
    const colorItem = document.createElement("div");
    colorItem.style.background = item.color;
    colorItem.title = item.name;
    colorItem.classList.add("color-item");
    appendTo.appendChild(colorItem);
    return colorItem;
  });
}

const availableColors = createColors(
  api,
  document.querySelector(".available-colors")
);

availableColors.forEach((colorItem) => {
  colorItem.addEventListener("click", (e) => {
    const selectedColor = api.find((item) => item.name === e.target.title);
    if (selectedColor) {
      imageContainer.style.backgroundImage = `url(${selectedColor.img})`;
      count = api.indexOf(selectedColor);
    }
  });
});

document.querySelector(".heart-icon").addEventListener("click", () => {
  const heartIcon = document.querySelector(".heart-icon");
  heartIcon.classList.toggle("bi-heart");
  heartIcon.classList.toggle("bi-heart-fill");
});
