const entryPoint = document.querySelector(".container");

function customerToHtml(customer) {
    let customerName = customer.name.first.charAt(0).toUpperCase() + customer.name.first.slice(1) + " " + customer.name.last.charAt(0).toUpperCase() + customer.name.last.slice(1)

    return `<div class = "customer-card">
    <img src = "${customer.picture.large}">
    <h2 class="customer-name">${customerName}</h2>
    <ul class = "customer-info">
              <li class="email">${customer.email}</li>
              <li class="address-line1">${customer.location.street.number} ${customer.location.street.name}</li>
              <li class="address-line2">${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}</li>
              <li class="dob">DOB: ${moment(customer.dob.date).format("MMM D, YYYY")}</li>
              <li class="customer-since">Customer Since: ${moment(customer.registered.date).format("MMM D, YYYY")}</li>
    </ul>
    </div>`
};

let allCustomers = customers.map((customer) => customerToHtml(customer)).join('\n');

entryPoint.innerHTML = allCustomers;