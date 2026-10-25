function createListItem(item) {
  const li = createListItemElement();
  const button = createButton();
  const icon = createIcon();

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('ul').appendChild(li);
}
createListItem('Apples');
createListItem('Bananas');

function createButton() {
  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  return button;
}

function createIcon() {
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';
  return icon;
}

function createListItemElement() {
  const li = document.createElement('li');
  return li;
}
