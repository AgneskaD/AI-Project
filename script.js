function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Nic dwa razy się nie zdarza i nie zdarzy",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
