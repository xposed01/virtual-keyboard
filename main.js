let body = document.querySelector('body');
let txtInput = document.querySelector('.text');
let keys = document.querySelectorAll('.key');
let shiftLeft = document.querySelector('.shift-left');
let shiftRight = document.querySelector('.shift-right');
let ctrlLeft = document.querySelector('.ctrl-left');
let ctrlRight = document.querySelector('.ctrl-right');
let altLeft = document.querySelector('.alt-left');
let altRight = document.querySelector('.alt-right');
let space = document.querySelector('.space');
let tab = document.querySelector('.tab');
let capsLock = document.querySelector('.capslock');
let deleteKey = document.querySelector('.delete');
let windowsKey = document.querySelector('.windowsKey');
let arrowUp = document.querySelector('.arrowUp');
let arrowDown = document.querySelector('.arrowDown');
let arrowLeft = document.querySelector('.arrowLeft');
let arrowRight = document.querySelector('.arrowRight');
let keyboard = document.querySelector('.keyboard');



keyboard.addEventListener('click', (event) => {
  if (event.target.closest('key')) {
    txtInput.value += event.target.id;
  }
});

keyboard.addEventListener('mousedown', (event) => {
  
  if (event.target.classList.contains('key')) {
    txtInput.value += event.target.id;
    event.target.classList.remove('key-inactive')
    event.target.classList.add('key-active');
  }
});

keyboard.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('key')) {
    event.target.classList.remove('key-active');
    event.target.classList.add('key-inactive');
  }
});





// добавление атрибутов

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('id', keys[i].innerText);
  keys[i].setAttribute('uppercase', keys[i].innerText.toUpperCase());
}

// анимация нажатия

/* 
window.addEventListener('keydown', (event) => {
  console.log(event.code);
  txtInput.focus();
  if (event.code === 'Space') {
    space.classList.remove('key-inactive');
    space.classList.add('key-active');
    return;
  }
  if (event.code === 'CapsLock') {
    capsLock.classList.remove('key-inactive');
    capsLock.classList.add('key-active');
    return;
  }
  if (event.code === 'Tab') {
    txtInput.focus();
    tab.classList.remove('key-inactive');
    tab.classList.add('key-active');
    return;
  }
  if (event.code === 'Delete') {
    deleteKey.classList.remove('key-inactive');
    deleteKey.classList.add('key-active');
    return;
  }
  if (event.code === 'MetaLeft') {
    windowsKey.classList.remove('key-inactive');
    windowsKey.classList.add('key-active');
    return;
  }
  if (event.code === 'ShiftLeft') {
    shiftLeft.classList.remove('key-inactive');
    shiftLeft.classList.add('key-active');
    return;
  }
  if (event.code === 'ShiftRight') {
    shiftRight.classList.remove('key-inactive');
    shiftRight.classList.add('key-active');
    return;
  }
  if (event.code === 'ControlLeft') {
    ctrlLeft.classList.remove('key-inactive');
    ctrlLeft.classList.add('key-active');
    return;
  }
  if (event.code === 'ControlRight') {
    ctrlRight.classList.remove('key-inactive');
    ctrlRight.classList.add('key-active');
    return;
  }
  if (event.code === 'AltLeft') {
    altLeft.classList.remove('key-inactive');
    altLeft.classList.add('key-active');
    return;
  }
  if (event.code === 'AltRight') {
    altRight.classList.remove('key-inactive');
    altRight.classList.add('key-active');
    return;
  }
  if (event.code === 'ArrowUp') {
    arrowUp.classList.remove('key-inactive');
    arrowUp.classList.add('key-active');
    return;
  }
  if (event.code === 'ArrowDown') {
    arrowDown.classList.remove('key-inactive');
    arrowDown.classList.add('key-active');
    return;
  }
  if (event.code === 'ArrowLeft') {
    arrowLeft.classList.remove('key-inactive');
    arrowLeft.classList.add('key-active');
    return;
  }
  if (event.code === 'ArrowRight') {
    arrowRight.classList.remove('key-inactive');
    arrowRight.classList.add('key-active');
    return;
  }

  // eslint-disable-next-line prefer-const
  let keyPressDown = document.getElementById(event.key);
  keyPressDown.classList.remove('key-inactive');
  keyPressDown.classList.add('key-active');
});


window.addEventListener('keyup', (event) => {
  txtInput.focus();
  if (event.code === 'Space') {
    space.classList.remove('key-active');
    space.classList.add('key-inactive');
    return setTimeout(() => {
      space.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'CapsLock') {
    capsLock.classList.remove('key-active');
    capsLock.classList.add('key-inactive');
    return setTimeout(() => {
      capsLock.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'Tab') {
    tab.classList.remove('key-active');
    tab.classList.add('key-inactive');
    return setTimeout(() => {
      tab.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'Delete') {
    deleteKey.classList.remove('key-active');
    deleteKey.classList.add('key-inactive');
    return setTimeout(() => {
      deleteKey.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'MetaLeft') {
    windowsKey.classList.remove('key-active');
    windowsKey.classList.add('key-inactive');
    return setTimeout(() => {
      windowsKey.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'ShiftLeft') {
    shiftLeft.classList.remove('key-active');
    shiftLeft.classList.add('key-inactive');
    return setTimeout(() => {
      shiftLeft.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'ShiftRight') {
    shiftRight.classList.remove('key-active');
    shiftRight.classList.add('key-inactive');
    return setTimeout(() => {
      shiftRight.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'ControlLeft') {
    ctrlLeft.classList.remove('key-active');
    ctrlLeft.classList.add('key-inactive');
    return setTimeout(() => {
      ctrlLeft.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'ControlRight') {
    ctrlRight.classList.remove('key-active');
    ctrlRight.classList.add('key-inactive');
    return setTimeout(() => {
      ctrlRight.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'AltLeft') {
    altLeft.classList.remove('key-active');
    altLeft.classList.add('key-inactive');
    return setTimeout(() => {
      altLeft.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'AltRight') {
    altRight.classList.remove('key-active');
    altRight.classList.add('key-inactive');
    return setTimeout(() => {
      altRight.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'ArrowUp') {
    arrowUp.classList.remove('key-active');
    arrowUp.classList.add('key-inactive');
    return setTimeout(() => {
      arrowUp.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'ArrowDown') {
    arrowDown.classList.remove('key-active');
    arrowDown.classList.add('key-inactive');
    return setTimeout(() => {
      arrowDown.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'ArrowLeft') {
    arrowLeft.classList.remove('key-active');
    arrowLeft.classList.add('key-inactive');
    return setTimeout(() => {
      arrowLeft.classList.remove('key-inactive');
    }, 300);
  }
  if (event.code === 'ArrowRight') {
    arrowRight.classList.remove('key-active');
    arrowRight.classList.add('key-inactive');
    return setTimeout(() => {
      arrowRight.classList.remove('key-inactive');
    }, 300);
  }


  // eslint-disable-next-line prefer-const
  let keyPressUp = document.getElementById(event.key);

  keyPressUp.classList.remove('key-active');
  keyPressUp.classList.add('key-inactive');
  setTimeout(() => {
    keyPressUp.classList.remove('key-inactive');
  }, 300);
});

 */










/* window.addEventListener('keydown', (event) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (event.key === keys[i].getAttribute('id') || event.key === keys[i].getAttribute('uppercase')) {
      keys[i].classList.remove('key-inactive')
      keys[i].classList.add('key-active');
    }
  }
});

window.addEventListener('keyup', (event) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (event.key === keys[i].getAttribute('id') || event.key === keys[i].getAttribute('uppercase')) {
      keys[i].classList.remove('key-active');
      keys[i].classList.add('key-inactive');
    }
  }
}); */