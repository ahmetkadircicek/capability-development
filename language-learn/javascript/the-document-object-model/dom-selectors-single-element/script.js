console.log(document.getElementById('app-title'));
console.log(document.getElementById('item-form').id);
console.log(document.getElementById('item-form').className);

console.log(document.getElementById('item-form').getAttribute('id'));

document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').getAttribute('title');
document.getElementById('app-title').setAttribute('title', 'Shopping List');

const title = document.getElementById('app-title');
console.log(title);
title.textContent = 'Shopping List';
title.innerText = 'Shopping List';
title.innerHTML = '<strong>Shopping List</strong>';

title.style.color = 'red';
title.style.backgroundColor = 'lightgrey';
title.style.padding = '10px';
title.style.borderRadius = '5px';
title.style.fontSize = '20px';
title.style.textTransform = 'uppercase';

document.querySelector('#app-title').style.backgroundColor = 'lightblue';
document.querySelector('input[type="text"]').style.border = '1px solid #ccc';

document.querySelector('li:nth-child(2)').style.color = 'red';
