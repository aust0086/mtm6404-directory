// List function
const list = (clients) => {
  return clients.map((client, index) => `
<li class="list-group-item d-flex justify-content-between" data-index="${index}">
  ${client.name}
  <strong>$ ${client.balance}</strong>
</li>
`)
    .join("");
};

// Order function
const order = (clients, property) => {
  return [...clients].sort((a, b) =>
    a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0
  );
};

// Total function
const total = (clients) => {
  return clients.reduce((sum, client) => sum + client.balance, 0);
};

// Info function 
const info = (index) => {
  return clients.find((client, i) => i === index);
};

// Search function 
const search = (query) => {
  return clients.filter((client) =>
    client.name.toLowerCase().includes(query.toLowerCase())
  );
};

// Event listener 
document.querySelector("client-list").addEventListener("click", (event) => {
  const listItem = event.target.closest("li");
  if (!listItem) return;

  const index = Number(listItem.dataset.index);
  const client = info(index);

  document.querySelector("client-info").innerHTML = `
    <h4>${client.name}</h4>
    <p>Email: ${client.email}</p>
    <p>Balance: $${client.balance}</p>
  `;
});
