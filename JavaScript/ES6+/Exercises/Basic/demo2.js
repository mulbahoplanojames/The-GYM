// note: Just doing some testing
// function getClothing(isCold) {
//   if (isCold) {
//     var freezing = "Grab a jacket!";
//   } else {
//     var hot = "It’s a shorts kind of day.";
//     console.log(freezing);
//   }
// }

// function getClothing(isCold) {
//   if (isCold) {
//     const freezing = "Grab a jacket!";
//   } else {
//     const hot = "It’s a shorts kind of day.";
//     console.log(freezing);
//   }
// }

// getClothing(false);

const posts = [
  {
    title: "React Js",
    description: "I love react js",
    tags: ["React Js", "Javascript"],
  },
  {
    title: "Javascript",
    description:
      "Javascript is one of the best programming languages int the world",
    tags: ["programming", "Javascript"],
  },
];

// for (let post of posts) {
//   console.table(post);
// }

const cheetah = {
  name: "Cheetah",
  scientificName: "Acinonyx jubatus",
  lifespan: "10-12 years",
  speed: "68-75 mph",
  diet: "carnivore",
  summary:
    "Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.",
  fact: "Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.",
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
  const cardHTML = `<div class="card">
        <h3 class="name">${animal.name} </h3>
        <img src='${animal.name}.jpg' alt='${animal.name}' class="picture">
        <div class="description">
            <p class="fact"> ${animal.fact}</p>
            <ul class="details"> 
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>                
                <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                <li><span class="bold">Diet</span>: ${animal.diet}</li>
            </ul>
            <p class="brief">${animal.summary}</p>
        </div>
    </div>`;

  return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));
