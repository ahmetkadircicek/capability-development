let output;

const parent = document.querySelector('.parent');
output = parent.childNodes;

output = parent.childNodes[0];
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerText;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].style.color = 'red';
output = parent.childNodes[3].style.backgroundColor = 'lightgrey';

output = parent.firstChild;
output = parent.lastChild;
parent.firstChild.textContent = 'First Child';
parent.firstElementChild.textContent = 'First Element Child';
parent.lastElementChild.textContent = 'Last Element Child';
parent.lastChild.textContent = 'Last Child';

const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;
secondItem.nextSibling.textContent = 'Next Sibling';
output = secondItem.previousSibling;
secondItem.previousSibling.textContent = 'Previous Sibling';
console.log(output);
