const body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', `
<div class="container">
<textarea name="" id="" cols="60" rows="5" class="text" autofocus></textarea>
<div class="keyboard">
  <div class="kb-row">
    <div class="key"><span>\`</span></div>
    <div class="key"><span>1</span></div>
    <div class="key"><span>2</span></div>
    <div class="key"><span>3</span></div>
    <div class="key"><span>4</span></div>
    <div class="key"><span>5</span></div>
    <div class="key"><span>6</span></div>
    <div class="key"><span>7</span></div>
    <div class="key"><span>8</span></div>
    <div class="key"><span>9</span></div>
    <div class="key"><span>0</span></div>
    <div class="key"><span>-</span></div>
    <div class="key"><span>=</span></div>
    <div class="key backspace key-moded"><span>Backspace</span></div>
  </div>
  <div class="kb-row">
    <div class="key tab key-moded"><span>Tab</span></div>
    <div class="key"><span>q</span></div>
    <div class="key"><span>w</span></div>
    <div class="key"><span>e</span></div>
    <div class="key"><span>r</span></div>
    <div class="key"><span>t</span></div>
    <div class="key"><span>y</span></div>
    <div class="key"><span>u</span></div>
    <div class="key"><span>i</span></div>
    <div class="key"><span>o</span></div>
    <div class="key"><span>p</span></div>
    <div class="key"><span>[</span></div>
    <div class="key"><span>]</span></div>
    <div class="key"><span>\\</span></div>
    <div class="key delete key-moded"><span>Del</span></div>
  </div>
  <div class="kb-row">
    <div class="key capslock key-moded"><span>Caps Lock</span></div>
    <div class="key"><span>a</span></div>
    <div class="key"><span>s</span></div>
    <div class="key"><span>d</span></div>
    <div class="key"><span>f</span></div>
    <div class="key"><span>g</span></div>
    <div class="key"><span>h</span></div>
    <div class="key"><span>j</span></div>
    <div class="key"><span>k</span></div>
    <div class="key"><span>l</span></div>
    <div class="key"><span>;</span></div>
    <div class="key"><span>'</span></div>
    <div class="key enter key-moded"><span>Enter</span></div>
  </div>
  <div class="kb-row">
    <div class="key shift-left key-moded"><span>Shift</span></div>
    <div class="key"><span>z</span></div>
    <div class="key"><span>x</span></div>
    <div class="key"><span>c</span></div>
    <div class="key"><span>v</span></div>
    <div class="key"><span>b</span></div>
    <div class="key"><span>n</span></div>
    <div class="key"><span>m</span></div>
    <div class="key"><span>,</span></div>
    <div class="key"><span>.</span></div>
    <div class="key"><span>/</span></div>
    <div class="key arrowUp key-moded"><span>▲</span></div>
    <div class="key shift-right key-moded"><span>Shift</span></div>
  </div>
  <div class="kb-row">
    <div class="key ctrl-left key-moded"><span>Ctrl</span></div>
    <div class="key windowsKey key-moded"><span>Win</span></div>
    <div class="key alt-left key-moded"><span>Alt</span></div>
    <div class="key space"><span></span></div>
    <div class="key alt-right key-moded"><span>Alt</span></div>
    <div class="key arrowLeft key-moded"><span>◄</span></div>
    <div class="key arrowDown key-moded"><span>▼</span></div>
    <div class="key arrowRight key-moded"><span>►</span></div>
    <div class="key ctrl-right key-moded"><span>Ctrl</span></div>
  </div>
  </div>
  </div>`);

const txtInput = document.querySelector('.text');
const keys = document.querySelectorAll('.key');
const shiftLeft = document.querySelector('.shift-left');
const shiftRight = document.querySelector('.shift-right');
const ctrlLeft = document.querySelector('.ctrl-left');
const ctrlRight = document.querySelector('.ctrl-right');
const altLeft = document.querySelector('.alt-left');
const altRight = document.querySelector('.alt-right');
const space = document.querySelector('.space');
const tab = document.querySelector('.tab');
const capsLock = document.querySelector('.capslock');
const deleteKey = document.querySelector('.delete');
const windowsKey = document.querySelector('.windowsKey');
const arrowUp = document.querySelector('.arrowUp');
const arrowDown = document.querySelector('.arrowDown');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');
const keyboard = document.querySelector('.keyboard');

window.onload = function onLoader() {
  // события мыши
  keyboard.addEventListener('mousedown', (event) => {
    if (event.target.closest('.key')) {
      // capslock
      if (event.target.closest('.capslock')) {
        capsLock.classList.toggle('key-active');
        if (!capsLock.classList.contains('key-active')) {
          for (let i = 0; i < keys.length; i += 1) {
            if (!keys[i].classList.contains('key-moded')) {
              keys[i].innerText = keys[i].innerText.toLowerCase();
            }
          }
        } else {
          for (let i = 0; i < keys.length; i += 1) {
            if (!keys[i].classList.contains('key-moded')) {
              keys[i].innerText = keys[i].getAttribute('uppercase');
            }
          }
        }
        return;
      }

      event.target.closest('.key').classList.remove('key-inactive');
      event.target.closest('.key').classList.add('key-active');

      if (event.target.closest('.tab')) {
        txtInput.value += '\t';
        return;
      }
      if (event.target.closest('.space')) {
        txtInput.value += ' ';
        return;
      }
      if (event.target.closest('.enter')) {
        txtInput.value += '\n';
        return;
      }
      if (event.target.closest('.shift-left, .shift-right, .windowsKey')) {
        return;
      }
      if (event.target.closest('.ctrl-left, .ctrl-right, .alt-left, .alt-right')) {
        return;
      }
      if (event.target.closest('.delete')) {
        if (txtInput.selectionStart === txtInput.selectionEnd) {
          txtInput.setRangeText('', txtInput.selectionStart, txtInput.selectionEnd + 1);
        }
        return;
      }
      if (event.target.closest('.backspace')) {
        if (txtInput.selectionStart === txtInput.selectionEnd) {
          txtInput.setRangeText('', txtInput.selectionStart - 1, txtInput.selectionEnd);
        }
        return;
      }

      txtInput.value += event.target.closest('.key').innerText;
    }
  });

  keyboard.addEventListener('mouseup', (event) => {
    if (event.target.closest('.key')) {
      txtInput.focus();
      if (event.target.closest('.capslock')) {
        return;
      }
      event.target.closest('.key').classList.remove('key-active');
      event.target.closest('.key').classList.add('key-inactive');
    }
  });

  // добавление атрибутов

  for (let i = 0; i < keys.length; i += 1) {
    keys[i].setAttribute('id', keys[i].innerText);
    keys[i].setAttribute('uppercase', keys[i].innerText.toUpperCase());
  }

  // анимация нажатия

  window.addEventListener('keydown', (event) => {
    txtInput.focus();
    if (event.code === 'Space') {
      space.classList.remove('key-inactive');
      space.classList.add('key-active');
      return;
    }
    if (event.code === 'CapsLock') {
      // capslock
      capsLock.classList.toggle('key-active');
      if (!capsLock.classList.contains('key-active')) {
        for (let i = 0; i < keys.length; i += 1) {
          if (!keys[i].classList.contains('key-moded')) {
            keys[i].innerText = keys[i].innerText.toLowerCase();
          }
        }
      } else {
        for (let i = 0; i < keys.length; i += 1) {
          if (!keys[i].classList.contains('key-moded')) {
            keys[i].innerText = keys[i].getAttribute('uppercase');
          }
        }
      }

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

    const keyPressDown = document.getElementById(event.key);
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

    const keyPressUp = document.getElementById(event.key);

    keyPressUp.classList.remove('key-active');
    keyPressUp.classList.add('key-inactive');
    return setTimeout(() => {
      keyPressUp.classList.remove('key-inactive');
    }, 300);
  });
};
