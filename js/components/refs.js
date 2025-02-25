const choose = (selector) => document.querySelector(selector);
const chooseAll = (selector) => document.querySelectorAll(selector);

export default {
  LOCAL_KEY: 'settingForExercise',
  BOARD_KEY: 'usersRecords',
  elem: {
    header: choose('header'),
    main: choose('main'),
    footer: choose('footer'),
  },
  box: {
    menu: choose('[data-box="menu"]'),
    lang: choose('[data-box="lang"]'),
    app: choose('[data-box="app"]'),
    main: choose('[data-box="main"]'),
    mode: choose('[data-box="mode"]'),
    exercise: choose('[data-box=exercise]'),
    timer: choose('[data-box="timer"]'),
    board: choose('[data-box="board"]'),
  },
  lang: {
    en: choose('[data-lang="en"]'),
    ua: choose('[data-lang="ua"]'),
  },
  menu: {
    main: choose('[data-menu="main"]'),
    board: choose('[data-menu="board"]'),
  },
  main: {
    title: choose('[data-mainTitle]'),
    paragraph: choose('[data-mainParagraph]'),
    start: choose('[data-start="yes"]'),
  },
  mode: {
    auto: choose('[data-mode="auto"]'),
    manual: choose('[data-mode="manual"]'),
    challenge: choose('[data-mode="challenge"]'),
  },
  settings: {
    paragraphOne: choose('[data-paragraph="multiplicand"]'),
    paragraphTwo: choose('[data-paragraph="multiplier"]'),
    multiplicand: {
      round: choose('[data-mode-multiplicand="round"]'),
      random: choose('[data-mode-multiplicand="random"]'),
    },
    multiplicandRandomSub: {
      one: choose('[data-mode-submultiplicand="one"]'),
      two: choose('[data-mode-submultiplicand="two"]'),
    },
    multiplier: {
      round: choose('[data-mode-multiplier="round"]'),
      random: choose('[data-mode-multiplier="random"]'),
    },
    multiplierRandomSub: {
      one: choose('[data-mode-submultiplier="one"]'),
      two: choose('[data-mode-submultiplier="two"]'),
    },
  },
  timer: {
    input: choose('[data-timer="input"]'),
    set: choose('[data-timer="set"]'),
    switch: choose('[data-timer="switch"]'),
    min: choose('[data-timer="mm"]'),
    sec: choose('[data-timer="ss"]'),
  },
  exercise: {
    factorOne: choose('[data-factor="one"]'),
    factorTwo: choose('[data-factor="two"]'),
    product: choose('[data-factor="product"]'),
    next: choose('[data-button="next"]'),
    answer: choose('[data-exercise="answer"]'),
    imgCheck: choose('[data-exercise="check"]'),
    imgCross: choose('[data-exercise="cross"]'),
    imgQuestion: choose('[data-exercise="question"]'),
  },
  board: {
    list: choose('[data-board="list"]'),
    name: choose('[data-board="name"]'),
    score: choose('[data-board="score"]'),
    right: choose('[data-board="right"]'),
    wrong: choose('[data-board="wrong"]'),
    time: choose('[data-board="time"]'),
    reset: choose('[data-board="reset"]'),
  },
  modal: {
    window: choose('[data-modal="modal"]'),
    markup: choose('[data-modal="markUp"]'),
    title: choose('[data-modal="title"]'),
    time: choose('[data-modal="time"]'),
    score: choose('[data-modal="score"]'),
    right: choose('[data-modal="right"]'),
    wrong: choose('[data-modal="wrong"]'),
    button: choose('[data-modal="button"]'),
  },
  label: {
    multiplicandRound: choose('[data-label-multiplicand="round"]'),
    multiplicandRandom: choose('[data-label-multiplicand="random"]'),
    multiplicandRandomSubOne: choose('[data-label-submultiplicand="one"]'),
    multiplicandRandomSubTwo: choose('[data-label-submultiplicand="two"]'),
    multiplierRound: choose('[data-label-multiplier="round"]'),
    multiplierRandom: choose('[data-label-multiplier="random"]'),
    multiplierRandomSubOne: choose('[data-label-submultiplier="one"]'),
    multiplierRandomSubTwo: choose('[data-label-submultiplier="two"]'),
    timer: choose('[data-label-timer]'),
  },
};
