import Button from './components/Button.js';
import fetchAll from './components/Card.js';

const buttons = document.querySelectorAll('[data-js=Button]');

buttons.forEach(Button);

fetchAll();
