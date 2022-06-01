const allCustomers = document.querySelector("#directory");
//Loop of each customer
for (let customer of customers) {
  console.log(`${customer.name.first} ${customer.name.last}`);
  let customerDiv = document.createElement("div");
  customerDiv.classList.add("person");
}
