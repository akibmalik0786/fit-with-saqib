const PASSWORD = "malik@786";
let products = JSON.parse(localStorage.getItem("products")) || [];

function login() {
  if (document.getElementById("pass").value === PASSWORD) {
    document.querySelector(".admin-box").style.display = "none";
    document.getElementById("panel").style.display = "block";
    render();
  } else {
    alert("Wrong password");
  }
}

function addProduct() {
  products.push({
    name: pname.value,
    price: pprice.value,
    img: pimg.value,
    desc: pdesc.value
  });
  localStorage.setItem("products", JSON.stringify(products));
  render();
}

function render() {
  list.innerHTML = "";
  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="card">
        <b>${p.name}</b> – ₹${p.price}
        <button onclick="del(${i})">Delete</button>
      </div>`;
  });
}

function del(i) {
  products.splice(i,1);
  localStorage.setItem("products", JSON.stringify(products));
  render();
}
