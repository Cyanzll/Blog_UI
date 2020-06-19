/*
*  key 值为用户提交的时间
*/
let data = {};
let unflist = document.getElementById("unf");
let finlist = document.getElementById("fin");

function handleClick(e) {
  let li = e.target.parentNode;
  delete data[li.id];
  localStorage.setItem("data", JSON.stringify(data));
  reRender();
}

function handleSubmit() {
  let date = Date.now();
  let input = document.getElementById("text");
  let li = document.createElement("li");
  let p = document.createElement("p");
  let checkbox = document.createElement("input");
  let button = document.createElement("button");
  let buttext = document.createTextNode("删除");
  let text = document.createTextNode(input.value);
  li.id = date;
  checkbox.type = "checkbox";
  checkbox.className = "check";
  checkbox.addEventListener("change", handleChange);
  button.addEventListener("click", handleClick);
  button.appendChild(buttext);
  li.appendChild(checkbox);
  p.appendChild(text);
  li.appendChild(p);
  li.appendChild(button);
  unflist.appendChild(li);
  data[date] = { 
    text: input.value,
    finished: false
  };
  localStorage.setItem("data", JSON.stringify(data));
  input.value = '';
}

function handleChange(e) {
  let li = e.target.parentNode
  let key = li.id;
  data[key].finished = e.target.checked;
  localStorage.setItem("data", JSON.stringify(data));
  reRender();
}

function clear(list) {
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function reRender() {
  clear(unflist);
  clear(finlist);
  renderList();
}

function renderList() {
  data = JSON.parse(localStorage.getItem("data")) || {};
  for(let key in data) {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let text = document.createTextNode(data[key].text);
    let checkbox = document.createElement("input");
    let button = document.createElement("button");
    let buttext = document.createTextNode("删除");
    li.id = key;
    checkbox.type = "checkbox";
    checkbox.className = "check";
    checkbox.checked = data[key].finished;
    checkbox.addEventListener("change", handleChange);
    button.appendChild(buttext);
    button.addEventListener("click", handleClick);
    p.appendChild(text);
    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(button);
    if(data[key].finished) {
      finlist.appendChild(li);
    } else {
      unflist.appendChild(li);
    }
  }
}

let submit = document.getElementById("submit");
window.addEventListener("load", renderList);
submit.addEventListener("click", handleSubmit);