import name from './module-1';
import './css/common.scss';
import './css/button.scss';

console.log(name);
console.log('Це index.js');

// Створює новий запис у сховищі у вигляді рядка
localStorage.setItem('my-data', JSON.stringify({name: 'Mango', age: 2}));

// повертає значення зі сховища
const saveData = localStorage.getItem('my-data');
const parsedData = JSON.parse(saveData);
console.log(parsedData); 


// Шаблонізація_____________________


'<div>{{ name }}<div>'

const template = SuperTEmplatingEngine.compile('<div>{{ name }}<div>');

template({name: 'Mango'});  // '<div>Mango<div>'