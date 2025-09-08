const ESCAPE_KEY = 'Escape';
const TIMEOUT_DELAY = 500;

const getRandomArrElem = (array) => array[Math.floor(Math.random() * array.length)];

const isEscapeKey = (key) => key === ESCAPE_KEY;

const debounce = (callback, timeoutDelay = TIMEOUT_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomArrElem, isEscapeKey, debounce };
