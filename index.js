const arr = [
  {
    type: "Sedans",
    img: "./images/icon-sedans.svg",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    type: "SUVs",
    img: "./images/icon-suvs.svg",
    text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    type: "Luxury",
    img: "./images/icon-luxury.svg",
    text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

const root = document.getElementById("root");

const ul = document.createElement("ul");

root.appendChild(ul);

const createLi = (type, img, text) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <img src="${img}" alt="${type}" />
    <h2>${type}</h2>
    <p>${text}</p>
    <button>Learn More</button>
  `;
  li.classList.add(type.toLowerCase());
  return li;
};

const createList = (arr) => {
  arr.forEach((item) => {
    ul.appendChild(createLi(item.type, item.img, item.text));
  });
};

createList(arr);
