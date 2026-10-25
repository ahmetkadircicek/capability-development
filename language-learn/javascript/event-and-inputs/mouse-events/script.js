const logo = document.querySelector('h1');

const onClick = () => {
  console.log('clicked');
};

const onDoubleClick = () => {
  if (document.body.style.backgroundColor != 'white') {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'red';
  }
  console.log('double clicked');
};

logo.addEventListener('click', onClick);

logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('mouseenter', () => {
  console.log('mouseenter');
});

logo.addEventListener('mouseleave', () => {
  console.log('mouseleave');
});

logo.addEventListener('mousemove', () => {
  console.log('mousemove');
});

logo.addEventListener('mouseup', () => {
  console.log('mouseup');
});

logo.addEventListener('mousedown', () => {
  console.log('mousedown');
});

logo.addEventListener('mouseout', () => {
  console.log('mouseout');
});

logo.addEventListener('mouseover', () => {
  console.log('mouseover');
});

logo.addEventListener('dragstart', () => {
  console.log('onDrag');
});

logo.addEventListener('dragend', () => {
  console.log('onDragend');
});

logo.addEventListener('dragover', () => {
  console.log('onDragover');
});

logo.addEventListener('drop', () => {
  console.log('onDrop');
});

logo.addEventListener('scroll', () => {
  console.log('onScroll');
});
