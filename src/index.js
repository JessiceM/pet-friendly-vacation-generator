function generateVacation(event) {
  event.preventDefault();

  let vacationElement = document.querySelector("#vacation");

  new Typewriter("#vacation", {
    strings: "Testing here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let vacationFormElement = document.querySelector("#vacation-generator-form");
vacationFormElement.addEventListener("submit", generateVacation);
