const header = document.createElement('div');
const keyBoardWrapper = document.createElement('div');
const textArea = document.createElement('textarea');
const instruction = document.createElement('div');
const firstRow = document.createElement('div');
const secondRow = document.createElement('div');
const thirdRow = document.createElement('div');
const fourRow = document.createElement('div');
const fiveRow = document.createElement('div');
let currentLaunguage = 0;

if (localStorage.getItem('record')) {
  const launguage = localStorage.getItem('record');
  currentLaunguage = launguage;
}

const keyMap = new Map([
  ['ё', ['ё', '`']],
  ['1', ['1', '1', '!']],
  ['2', ['2', '2', '@']],
  ['3', ['3', '3', '#']],
  ['4', ['4', '4', '$']],
  ['5', ['5', '5', '%']],
  ['6', ['6', '6', '^']],
  ['7', ['7', '7', '&']],
  ['8', ['8', '8', '*']],
  ['9', ['9', '9', '(']],
  ['0', ['0', '0', ')']],
  ['-', ['-', '-', '_']],
  ['=', ['=', '=', '+']],
  ['Backspace', ['Backspace', 'Backspace']],
  ['Tab', ['Tab', 'Tab']],
  ['й', ['й', 'q']],
  ['ц', ['ц', 'w']],
  ['у', ['у', 'e']],
  ['к', ['к', 'r']],
  ['е', ['е', 't']],
  ['н', ['н', 'y']],
  ['г', ['г', 'u']],
  ['ш', ['ш', 'i']],
  ['щ', ['щ', 'o']],
  ['з', ['з', 'p']],
  ['х', ['х', '[']],
  ['ъ', ['ъ', ']']],
  ['\\', ['\\', '\\']],
  ['Del', ['Del', 'Del', 'Delete']],
  ['CapsLock', ['CapsLock', 'CapsLock']],
  ['ф', ['ф', 'a']],
  ['ы', ['ы', 's']],
  ['в', ['в', 'd']],
  ['а', ['а', 'f']],
  ['п', ['п', 'g']],
  ['р', ['р', 'h']],
  ['о', ['о', 'j']],
  ['л', ['л', 'k']],
  ['д', ['д', 'l']],
  ['ж', ['ж', ';']],
  ['э', ['э', "'"]],
  ['Enter', ['Enter', 'Enter']],
  ['Shift', ['▲Shift', '▲Shift', 'ShiftLeft']],
  ['я', ['я', 'z']],
  ['ч', ['ч', 'x']],
  ['с', ['с', 'c']],
  ['м', ['м', 'v']],
  ['и', ['и', 'b']],
  ['т', ['т', 'n']],
  ['ь', ['ь', 'm']],
  ['б', ['б', ',']],
  ['ю', ['ю', '.']],
  ['.', ['.', '/']],
  ['▲', ['▲', '▲', 'ArrowUp']],
  [' Shift', [' Shift', ' Shift', 'ShiftRight']],
  ['я', ['я', 'z']],
  ['Ctrl', ['Ctrl', 'Ctrl', 'ControlLeft']],
  ['Win', ['Win', 'Win', 'Meta']],
  ['Alt', ['▲Alt', '▲Alt', 'AltLeft']],
  [' ', [' ', ' ']],
  [' Alt', [' Alt', ' Alt', 'AltRight']],
  ['◄', ['◄', '◄', 'ArrowLeft']],
  ['▼', ['▼', '▼', 'ArrowDown']],
  ['►', ['►', '►', 'ArrowRight']],
  [' Ctrl', [' Ctrl', ' Ctrl', 'ControlRight']],
]);

const keyMapValues = Array.from(keyMap);

function addBtn() {
    header.className = 'title';
  
    keyBoardWrapper.className = 'wrap';
    firstRow.className = 'wrap-row-1';
    secondRow.className = 'wrap-row-2';
    thirdRow.className = 'wrap-row-3';
    fourRow.className = 'wrap-row-4';
    fiveRow.className = 'wrap-row-5';
    textArea.className = 'textarea';
    instruction.className = 'instruction';
    header.innerHTML = 'Виртуальная клавиатура';
    instruction.innerHTML = 'Для переключения языка используется комбинация: левый Ctrl + space';
  
    document.body.append(header);
    document.body.append(textArea);
    document.body.append(keyBoardWrapper);
    document.body.append(instruction);
    document.querySelector('.wrap').append(firstRow);
    document.querySelector('.wrap').append(secondRow);
    document.querySelector('.wrap').append(thirdRow);
    document.querySelector('.wrap').append(fourRow);
    document.querySelector('.wrap').append(fiveRow);
  
    for (let i = 0; i < 14; i += 1) {
      const keyboardBtn = document.createElement('div');
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.innerHTML = keyMapValues[i][1][currentLaunguage];
      document.querySelector('.wrap-row-1').append(keyboardBtn);
      if (i === 13) {
        keyboardBtn.className = 'keyboard-button';
        keyboardBtn.style.width = '62px';
      }
      if (i === 0) {
        keyboardBtn.className = 'upperCase keyboard-button';
      }
      if (i > 0 && i < 13) {
        keyboardBtn.className = 'addSymb keyboard-button';
      }
    }
  

    for (let i = 14; i < 29; i += 1) {
      const keyboardBtn = document.createElement('div');
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.innerHTML += keyMapValues[i][1][currentLaunguage];

      document.querySelector('.wrap-row-2').append(keyboardBtn);
      if (i === 28 || i === 14) {
        keyboardBtn.className = 'keyboard-button';
        keyboardBtn.style.width = '15px';
        keyboardBtn.style.paddingLeft = '8px';
      }
      if (i > 14 && i < 28) {
        keyboardBtn.className = 'keyboard-button upperCase';
      }
    }
  

    for (let i = 29; i < 42; i += 1) {
      const keyboardBtn = document.createElement('div');
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.innerHTML = keyMapValues[i][1][currentLaunguage];
      document.querySelector('.wrap-row-3').append(keyboardBtn);

      if (i === 41) {
        keyboardBtn.className = 'keyboard-button';
        keyboardBtn.style.width = '44px';
      }
      if (i === 29) {
        keyboardBtn.className = 'keyboard-button';
        keyboardBtn.style.width = '54px';
      }
  
      if (i > 29 && i < 41) {
        keyboardBtn.className = 'keyboard-button upperCase';
      }
    }
  

    for (let i = 42; i < 55; i += 1) {
      const keyboardBtn = document.createElement('div');
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.innerHTML = keyMapValues[i][1][currentLaunguage];
      document.querySelector('.wrap-row-4').append(keyboardBtn);

      if (i === 42) {
        keyboardBtn.className = 'keyboard-button';
        keyboardBtn.style.width = '42px';
      } else if (i === 54) {
        keyboardBtn.className = 'keyboard-button';
        keyboardBtn.style.width = '104px';
      }
  
      if (i > 42 && i < 53) {
        keyboardBtn.className = 'keyboard-button upperCase';
      }
    }
  

    for (let i = 55; i < 64; i += 1) {
      const keyboardBtn = document.createElement('div');
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.innerHTML = keyMapValues[i][1][currentLaunguage];
      document.querySelector('.wrap-row-5').append(keyboardBtn);
      
      if (i === 58) {
        keyboardBtn.className = 'keyboard-button';
        keyboardBtn.style.width = '192px';
      }
    }
  }
  

  addBtn();
  