const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const getMonth = months[new Date().getMonth()];
const getDay = new Date().getDay();

const heading = document.getElementById('month');
const month = document.createTextNode(getMonth);
heading.appendChild(month);

function getInput() {
  const category = document.getElementById('category').value;
  const item = document.getElementById('item').value;
  const cost = document.getElementById('cost').value;
  const inputs = [category, item, cost];
  return inputs;
}


function addPayment(inputs) {
  const newPayment = document.createElement('payment');
  const newElement = document.createElement('span');
  const newData = document.createTextNode(`${inputs[1]}: \u0024${inputs[2]}`);
  newElement.appendChild(newData);
  newPayment.appendChild(newElement);
  document.getElementById(inputs[0]).appendChild(newPayment);
}

function updateTotal() {

}

function addElement() {
  const inputs = getInput();
  addPayment(inputs);
}

const submit = document.getElementById('submit');
submit.addEventListener('click', addElement);