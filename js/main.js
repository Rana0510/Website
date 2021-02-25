const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "assets/coffee1.jpg"
  },
  {
    name: "Voluptatem",
    image: "assets/coffee2.jpg"
  },
  {
    name: "Explicabo",
    image: "assets/coffee3.jpg"
  },
  {
    name: "Rchitecto",
    image: "assets/coffee4.jpg"
  },
  {
    name: " Beatae",
    image: "assets/coffee5.jpg"
  },
  {
    name: " Vitae",
    image: "assets/coffee6.jpg"
  },
  {
    name: "Inventore",
    image: "assets/coffee7.jpg"
  },
  {
    name: "Veritatis",
    image: "assets/coffee8.jpg"
  },
  {
    name: "Accusantium",
    image: "assets/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("../../serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }