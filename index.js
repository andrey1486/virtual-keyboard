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