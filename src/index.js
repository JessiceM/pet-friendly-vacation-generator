function displayVacation(response) {
  // Display the generated vacation

  // response.data.answer
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

function generateVacation(event) {
  event.preventDefault();
  let instructions = document.querySelector("#user-instructions");

  // Build the API URL
  let apiKey = "318a6097a5o76873954f26ba0t34240d ";
  let prompt = `User instructions: Generate a pet-friendly vacation about ${instructions.value}`;
  let context =
    "You are an expert in traveling the world with a pet to places that allow pets.  Your mission is to generate an itinerary of places, hotels, attractions, parks, and restaurants that people can visit with their pets. Make sure to only provide an itinerary to the location the user has provided. Display the itinerary in a list format and do not provide more than 5 items. Use the break line format <br /> for each item listed. Make the first line bold using the <strong> element. Add a paw outline icon in the beginning of each listed item. Add a signature at the end with 'SheCodes AI' inside a <strong> element.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating a furtastic vacation...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Prompt: ${context}`);

  //Displays the generating comment when clicking submit
  let vacationElement = document.querySelector("#poem");
  vacationElement.innerHTML = "Generating a furtastic vacation...";

  // Make a call to the API
  axios.get(apiUrl).then(displayVacation);
}

let vacationFormElement = document.querySelector("#vacation-generator-form");
vacationFormElement.addEventListener("submit", generateVacation);
