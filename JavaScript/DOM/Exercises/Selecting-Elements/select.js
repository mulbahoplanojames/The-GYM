/*
# Select the button element on the page

In this scenario, the existing code adds an eventListener for a click event on a variable **buttonElem**. It expects **buttonElem** to be the button element in the example UI. But, that element is not selected yet. Assign the button element to the variable ***buttonElem***. Click the button to verify that the code is working.

**Hint**: Make use of the unique *id* of the button element.
*/

const selectButtonElement = () => {
  const buttonElem = document.getElementById("button");
  const parentSection = document.querySelector(".section-1");

  buttonElem.addEventListener("click", (e) => {
    e.stopPropagation();
    const oldText = buttonElem.innerText;
    buttonElem.innerText =
      oldText === "ON"
        ? (parentSection.style.background = "red")
        : (parentSection.style.background = "blue");
    buttonElem.innerText = oldText === "ON" ? "OFF" : "ON";
  });
};

selectButtonElement();

/*
Here, the existing code expects the variables 'buttonElem' and 'inputElem' to represent the button and input elements in the example UI.Assign the respective elements to the variables.In this case, the two elements do not have unique identifiers - like for example an id. Instead they are direct descendents of a div element with id 'wrapper'. Use an appropriate selector method!Click the button to verify that the code is working.
*/

const queryingDecendentElements = () => {
  const wrapper = document.querySelector("#wrapper");
  const input = wrapper.querySelector("input");
  const list = document.querySelector("#list");

  wrapper.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log("first");

      const dcoFragment = document.createDocumentFragment();
      const li = document.createElement("li");

      const preValue = input.value;
      input.value = preValue === "OFF" ? "ON" : "OFF";

      li.innerText = input.value;
      dcoFragment.appendChild(li);
      list.appendChild(dcoFragment);
    }
  });
};

queryingDecendentElements();

const selectMultipleELements = () => {
  const listItems = document.querySelectorAll("#list li");

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", () => {
      // complete the code snippet
    });
  }
};

selectMultipleELements();
