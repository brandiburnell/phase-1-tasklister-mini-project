document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  // add dropdown
  let select = document.createElement("select");
  select.id = "dropdown";
  document.querySelector("#create-task-form").appendChild(select);
  createOption("Low");
  createOption("Medium");
  createOption("High");

  // user should be able to type a task into input field
  let form = document.getElementById("create-task-form")

  form.addEventListener ('submit', (e) => {
    e.preventDefault();
    // build list
    buildTODO(document.getElementById("new-task-description").value);
    // reset input box
    form.reset();
  })

  // add item to to-do list
  function buildTODO(task) {
    // add list item
    let li = document.createElement("li");
    li.textContent = task + " ";
    console.log(li);
    document.querySelector("#tasks").appendChild(li);

    // delete list item
    let btn = document.createElement("button");
    btn.textContent = " x ";
    li.appendChild(btn);
    btn.addEventListener('click', deleteTODO);
  }
});

// delete function
function deleteTODO(e) {
    e.target.parentNode.remove();
}

// create option
function createOption(text) {
  let option = document.createElement("option");
  option.textContent = text;
  document.querySelector("#dropdown").appendChild(option);
}