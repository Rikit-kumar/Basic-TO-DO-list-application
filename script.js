let inp = document.querySelector("#top-bar-inp");
let addBtn = document.querySelector(".add");
let taskSection = document.querySelector(".task-section");

let editingTask = null;

addBtn.addEventListener("click", () => {
  let val = inp.value;

  if (val.trim() === "") return;

  if (editingTask) {
    editingTask.textContent = val;
    editingTask = null;
    inp.value = "";
    return;
  }

  let div = document.createElement("div");
  div.setAttribute("class", "task");

  let h3 = document.createElement("h3");
  h3.textContent = val;

  let taskBtn = document.createElement("div");
  taskBtn.setAttribute("class", "task-btns");

  let btn1 = document.createElement("button");
  btn1.setAttribute("id", "edit");
  btn1.textContent = "Edit";

  let btn2 = document.createElement("button");
  btn2.setAttribute("id", "del");
  btn2.textContent = "Delelte";

  taskSection.append(div);
  div.append(h3);
  div.append(taskBtn);
  taskBtn.append(btn1, btn2);

  btn2.addEventListener("click", () => {
    div.remove();
  });

  btn1.addEventListener("click", () => {
    inp.value = h3.textContent;
    editingTask = h3;
  });

  inp.value = "";
});
