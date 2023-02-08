const addButton = document.getElementById("add");
const ul = document.querySelector(".list-grid");
const addedTask = document.getElementById("added-text");

addButton.addEventListener("click", () => {
  const taskNode = document.createElement("input");
  taskNode.type = "checkbox";
  taskNode.classList = "checkbox";
  taskNode.id = new Date();

  const label = document.createElement("label");
  label.setAttribute("for", taskNode.id);
  label.innerText = addedTask.value;
  label.classList = "checkbox-text";
  ul.appendChild(taskNode);
  ul.appendChild(label);
});
