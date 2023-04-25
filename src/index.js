// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const result = price.innerHTML * quantity.value
  const subTotal = product.querySelector('.subtotal span')
  return subTotal.innerHTML = result
}
      

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const product = document.getElementsByClassName('product')
  for (let i = 0; i < product.length; i++) {
  updateSubtotal(product[i])
  }
  // ITERATION 3
  let totalValue = 0;
  for (let i = 0; i < product.length; i++) {
    let total = document.querySelector('#total-value span');
    const value = product[i].querySelector('.subtotal span');
    valueInner = parseInt(value.innerHTML)
    totalValue += valueInner
    total.innerHTML = totalValue
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
