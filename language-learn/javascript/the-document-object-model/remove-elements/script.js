function removeFirstItem() {
  const item = document.querySelector('li:first-child');
  item.remove();
}

// removeFirstItem();

function removeItem() {
  const item = document.querySelector('li:first-child');
  item.remove();
}

// removeItem();

function removeAllItems() {
  const items = document.querySelectorAll('li');
  items.forEach(item => item.remove());
}

// removeAllItems();

function removeSecondItem() {
  const item = document.querySelector('li:nth-child(2)');
  item.remove();
}

// removeSecondItem();

function removeChild() {
  const header = document.querySelector('header');
  header.removeChild(header.firstElementChild);
}

removeChild();
