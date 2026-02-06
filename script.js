let selectedProduct = "";

function openForm(product) {
  selectedProduct = product;
  document.getElementById("orderForm").style.display = "block";
}

function closeForm() {
  document.getElementById("orderForm").style.display = "none";
}

function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (!name || !phone || !address) {
    alert("Please fill all details");
    return;
  }

  const message =
`New COD Order - Fit With Saqib

Product: ${selectedProduct}
Name: ${name}
Mobile: ${phone}
Address: ${address}`;

  const whatsappNumber = "919781468942";
  const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

  window.location.href = url;
}

