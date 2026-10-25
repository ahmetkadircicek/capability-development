function onClear() {
  const itemList = document.querySelector('ul');
  itemList.innerHTML = '';
  const items = document.querySelectorAll('li');
  items.forEach(item => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

function onAdd() {
  console.log('onAdd');
}
// JavaScript Event Listener

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', onClear);
clearBtn.addEventListener('click', onAdd);

// setTimeout(() => {
//   clearBtn.removeEventListener('click', onClear);
// }, 3000);

// setTimeout(() => {
//   clearBtn.click();
// }, 3000);
