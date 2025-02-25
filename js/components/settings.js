import { setLocal } from './localStorage.js';
import refs from './refs.js';
import { markup } from './markup.js';
import { makeBoard } from './leaderBoard.js';

export const set = {
  lang: 'en',
  menu: '',
  mode: 'auto',
  multiplicand: 'round',
  multiplier: 'round',
  subMultiplicand: 'one',
  subMultiplier: 'one',
  switch: 'on',
  timerSet: 'off',
  timer: null,
  challengeTimer: ['00', '30'],
};
export const board = {
  user: null,
  right: [],
  wrong: [],
  time: null,
  markup: [],
};

export function resetSettings() {
  set.lang = 'en';
  set.menu = '';
  set.multiplicand = 'round';
  set.subMultiplicand = 'one';
  set.multiplier = 'round';
  set.subMultiplier = 'one';
  set.switch = 'on';
  set.timerSet = 'off';
  set.timer = null;
  set.challengeTimer = ['00', '30'];
  setLocal(refs.BOARD_KEY, board.markup);
  markup();
}

export function resetBoard() {
  resetSettings();
  board.user = null;
  board.right = [];
  board.wrong = [];
  board.time = null;
  board.markup = [];
  setLocal(refs.BOARD_KEY, board.markup);
  makeBoard();
  markup();
}
