function replaceElement() {
  const firstItem = document.querySelector('li:first-child');
  const li = document.createElement('li');
  li.textContent = 'Replaced First';
  firstItem.replaceWith(li);
}

replaceElement();

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');
  const li = document.createElement('li');
  li.textContent = 'Replaced Second';
  secondItem.replaceWith(li);
}

replaceSecondItem();

function replaceAllItems() {
  const items = document.querySelectorAll('li');
  items.forEach(item => {
    // item.outerHTML = '<li>Replaced All</li>';
    item.innerHTML = 'Replaced All';
  });
}

replaceAllItems();

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');
  const h2 = document.createElement('h2');
  h2.textContent = 'Replaced Child Heading';
  header.replaceChild(h2, h1);
}

replaceChildHeading();
