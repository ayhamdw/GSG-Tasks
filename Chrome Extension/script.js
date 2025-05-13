let leads = [];
const inputField = document.getElementById("input-el");
const addBtn = document.getElementById("add-btn");
const tabBtn = document.getElementById("tab-btn");
const clearBtn = document.getElementById("clear-btn");
const listEl = document.getElementById("leads-list");

const storedLeads = JSON.parse(localStorage.getItem("leads"));

if (storedLeads) {
  leads = storedLeads;
  renderLeads(leads);
}
addBtn.addEventListener("click", () => {
  const value = inputField.value;
  if (value) {
    leads.push(value);
    inputField.value = "";
    localStorage.setItem("leads", JSON.stringify(leads));
    renderLeads(leads);
  }
});
tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    leads.push(tabs[0].url);
    localStorage.setItem("leads", JSON.stringify(leads));
    renderLeads(leads);
  });
});
clearBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  leads = [];
  renderLeads(leads);
});
function renderLeads(leadsArray) {
  listEl.innerHTML = "";
  for (const lead of leadsArray) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = lead;
    a.textContent = lead;
    a.target = "_blank";
    li.appendChild(a);
    listEl.appendChild(li);
  }
}
