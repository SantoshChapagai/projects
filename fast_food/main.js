'use tsrict'
const form = document.querySelector('form');

// inputs
const customer = document.querySelector('#name');
const address = document.querySelector('#address');
const pizza = document.querySelectorAll('[name="size"]');
const burger = document.querySelectorAll('[name = "portion"]');
const fries = document.querySelectorAll('[name="sort"]');
const drink = document.querySelectorAll('[name="drinks"]');
const delivery = document.querySelector('#delivery');

// outputs

const order_name = document.querySelector('#order_name');
const order_address = document.querySelector('#order_address');
const order_pizza = document.querySelector('#order_pizza');
const order_burger = document.querySelector('#order_burger');
const order_fries = document.querySelector('#order_fries');
const order_drinks = document.querySelector('#order_drinks');
const order_delivery = document.querySelector('#order_delivery');
const order_price = document.querySelector('#order_price');


const customerOrder = () => {
  let customerName = customer.value;
  let customerAddress = address.value;
  let pizzaResult = '';
  let pizzaText = '';
  let burgerResult = '';
  let burgerText = '';
  let friesResult = '';
  let friesText = '';
  let drinkResult = '';
  let drinkText = '';
  let deliveryResult = delivery.options[delivery.selectedIndex].value;

  let total = 0;

  pizza.forEach((item) => {
    if (item.checked) {
      pizzaResult = item.value;
      pizzaText = `pizza for ${pizzaResult}`;
    }
  });
  switch (pizzaResult) {
    case 'one':
      total += 5;
      order_pizza.textContent = pizzaText;
      break;
    case 'two':
      total += 7.50;
      order_pizza.textContent = pizzaText;
      break;
    case 'three':
      total += 10;
      order_pizza.textContent = pizzaText;
      break;
  }
  burger.forEach((item) => {
    if (item.checked) {
      burgerResult = item.value;
      burgerText = `You choose ${burgerResult} burger `;
    }
  });
  switch (burgerResult) {
    case 'small':
      total += 3;
      order_burger.textContent = burgerText;
      break;
    case 'medium':
      total += 5;
      order_burger.textContent = burgerText;
      break;
    case 'large':
      total += 8;
      order_burger.textContent = burgerText;
      break;
  }
  fries.forEach((item) => {
    if (item.checked) {
      friesResult = item.value;
      friesText = `You choose ${friesResult}`;
    }
  });
  switch (friesResult) {
    case 'small pack':
      total += 2;
      order_fries.textContent = friesText;
      break;
    case 'medium pack':
      total += 3.50;
      order_fries.textContent = friesText;
      break;
    case 'large pack':
      total += 5;
      order_fries.textContent = friesText;
      break;
  }
  drink.forEach((item) => {
    if (item.checked) {
      drinkResult = item.value;
      drinkText = `You choose ${drinkResult}`;
    }
  });
  switch (drinkResult) {
    case 'cola':
      total += 2.50;
      order_drinks.textContent = drinkText;
      break;
    case 'sprite':
      total += 3;
      order_drinks.textContent = drinkText;
      break;
    case 'fanta':
      total += 2;
      order_drinks.textContent = drinkText;
      break;
  }
  if (deliveryResult == 'home') {
    total += 8;
  }
  if (deliveryResult != 'empty') {
    order_delivery.textContent = deliveryResult;
  }
  order_name.textContent = customerName;
  order_address.textContent = customerAddress;
  order_price.textContent = total;


}
form.addEventListener('input', customerOrder);