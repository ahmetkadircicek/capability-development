function insertElement() {
  const filter = document.querySelector('.filter');
  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';
  filter.insertAdjacentElement('afterend', h1);
}

// insertElement();

function insertText() {
  const item = document.querySelector('li:first-child');
  item.insertAdjacentText('afterend', 'Hello World');
}

// insertText();

function insertAdjacentHTML() {
  const item = document.querySelector('li:first-child');
  item.insertAdjacentHTML('afterend', '<h2>Hello World</h2>');
}

// insertAdjacentHTML();

function insertBefore() {
  const item = document.querySelector('ul');
  const newItem = document.createElement('li');
  newItem.textContent = 'Bananas';
  item.insertBefore(newItem, item.firstElementChild);
}

insertBefore();
insertBefore();
