const listItems = document.querySelectorAll('.items li');
console.log(listItems[1].innerText);

listItems.forEach(item => {
  item.style.color = 'black';
});

listItems[1].style.color = 'red';

const listItems2 = document.getElementsByClassName('items')[0].getElementsByTagName('li');
console.log(listItems2[3].innerText);

listItems2[3].style.color = 'blue';

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[2].innerText);

listItems3[2].style.color = 'green';
