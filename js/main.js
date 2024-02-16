//task 1 - Show the JavaScript Resources
const resources = document.querySelector("#resources");
const showResources = document.querySelector("#show-resources");

showResources.addEventListener("click", handleShowResources);

function handleShowResources(e) {
  e.preventDefault();

  resources.classList.remove("d-none");
}

//Task 2 Making the links bold.
resources.addEventListener("mouseover", onHandleResourcesMouseOverEvent);

function onHandleResourcesMouseOverEvent(e) {
  console.log(e.target);
  e.target.classList.add("fw-bold");
}
resources.addEventListener("mouseout", onHandleResourcesMouseOutEvent);

//Task 3 – Remove the bold font from the links
function onHandleResourcesMouseOutEvent(e) {
  e.target.classList.remove("fw-bold");

  //Task 5 – Remove Italic
  e.target.classList.remove("fst-italic");
}

//Task 4 – Italicize a clicked item.
resources.addEventListener("click", onHandleResourcesClickEvent);

function onHandleResourcesClickEvent(e) {
  e.target.classList.add("fst-italic");
}
