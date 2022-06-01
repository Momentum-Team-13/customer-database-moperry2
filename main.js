const allCustomers = document.getElementById("directory");
//Loop of each customer
for (let customer of customers) {
  console.log(`${customer.name.first} ${customer.name.last}`);
  let customerDiv = document.createElement("div");
  customerDiv.classList.add("person");
  // What's in the box
  //Image
  let imageCust = document.createElement("img");
  imageCust.classList.add("img");
  imageCust.src = customer.picture.large;
  customerDiv.appendChild(imageCust);

  //Name

  let nameEl = document.createElement("h3");
  nameEl.innerText = `${customer.name.first} ${customer.name.last}`;
  customerDiv.appendChild(nameEl);

  //Email
  let customerEmail = document.createElement("div");
  customerEmail.classList.add("email");
  customerEmail.innerText = `${customer.email}`;
  customerDiv.appendChild(customerEmail);

  //Address

  //DOB
  allCustomers.appendChild(customerDiv);
}
//   let imageElement = document.createElement("img");
//   imageElement.src = "http://placekitten.com/g/600/300";
//   imageElement.alt = "image of kitten";
//   imageElement.classList.add("db", "w-100", "br2", "br--top");
//   contentElement.appendChild(imageElement);
//   reportElement.appendChild(contentElement);
//   let infoElement = document.createElement("div");
//   infoElement.classList.add("pa2", "ph3-ns", "pb3-ns");
//   let cityElement = document.createElement("h1");
//   cityElement.classList.add("5", "f4-ns", "mv0");
//   cityElement.innerText = `Location: ${report.city}`;
//   contentElement.appendChild(cityElement);
//   weatherList.appendChild(reportElement);
