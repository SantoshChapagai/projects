const form = document.querySelector('form');

// inputs
const customer = document.querySelector('#name');
const age = document.querySelectorAll('[name ="age"] ');
const health = document.querySelectorAll('[name="health"]');
const goodHabits = document.querySelectorAll('[name = "good_habits"]');
const badHabits = document.querySelectorAll('[name = "bad_habits"]');



// outputs
const input_name = document.querySelector('#input_name');
const input_age = document.querySelector('#input_age')
const input_health = document.querySelector('#input_health');
const input_good = document.querySelector("#input_good");
const input_bad = document.querySelector("#input_bad");
const total = document.querySelector("#input_total")



const insuranceCalculation = () => {
  let customerName = customer.value;
  let ageResult = '';
  let ageText = '';
  let healthResult = [];
  let goodResults = [];
  let badResults = [];


  const amount = 500;

  let totalAmount = 0;

  age.forEach((item) => {
    if (item.checked) {
      ageResult = item.value;
      ageText = `Age is ${ageResult}`;
    }

  });
  switch (ageResult) {
    case 'Below 18':
      totalAmount += amount;
      input_age.textContent = ageText;
      break;
    case 'between 18 and 25':
      totalAmount += amount + (amount * 10 / 100);
      input_age.textContent = ageText;
      break;
    case 'between 26 and 35':
      totalAmount += amount + (amount * 30 / 100);
      input_age.textContent = ageText;
      break;
    case 'between 36 and 45':
      totalAmount += amount + (amount * 60 / 100);
      input_age.textContent = ageText;
      break;
    case 'between 46 and 55':
      totalAmount += amount + (amount * 100 / 100);
      input_age.textContent = ageText;
      break;
    case 'between 56 and 65':
      totalAmount += amount + (amount * 150 / 100);
      input_age.textContent = ageText;
      break;
    case 'over 65':
      totalAmount += amount + (amount * 210 / 100);
      input_age.textContent = ageText;
      break;
  }
  health.forEach((item) => {
    if (item.checked) {
      healthResult.push(item.value);
    }
  });
  if (healthResult.length > 0) {
    totalAmount += (healthResult.length) * amount * 1 / 100;
  }
  goodHabits.forEach((item) => {
    if (item.checked) {
      goodResults.push(item.value);
    }

  });
  if (goodResults.length > 0) {
    totalAmount -= (goodResults.length) * amount * 5 / 100;
  }
  badHabits.forEach((item) => {
    if (item.checked) {
      badResults.push(item.value);
    }

  });
  if (badResults.length > 0) {
    totalAmount += (badResults.length) * amount * 5 / 100;
  }
  input_name.textContent = customerName;
  input_health.textContent = healthResult.join(', ');
  input_good.textContent = goodResults.join(', ');
  input_bad.textContent = badResults.join(', ');
  total.textContent = totalAmount;





};




form.addEventListener('input', insuranceCalculation)