

// // Створює новий запис у сховищі у вигляді рядка
// localStorage.setItem('my-data', JSON.stringify({name: 'Mango', age: 2}));

// // повертає значення зі сховища
// const saveData = localStorage.getItem('my-data');
// const parsedData = JSON.parse(saveData);
// console.log(parsedData); 
// import { refs } from "./scripts/refs";



// // функція створення лішки
// const createLi = (text) => `<li data-id='${text}'>${text}</li>`;
    
// // вставка розмітки на екран
//   const addLiToList = (markdown) => {
//     refs.list.insertAdjacentHTML('beforeend', markdown);
// }
  
// const handlerSubmit = (e) => {
//     // забороняєм перезавантажувати сторінку
//   e.preventDefault();            
//   //   дістаємо значення інпуту
//   const value = refs.input.value; 
//    //   value запишеться в text  і передасться в лішку 
//   const liItem = createLi(value);  
//    //   лішка вставиться в ул  
//   addLiToList(liItem);             
//   //   отримали доступ до сторедж
//   const list = localStorage.getItem('list');
//   try { // якщо клас ліст є то парсимо ліст якщо ні то створєм новий []
//     const listData = list ? JSON.parse(list) : [];
//   //   пушимо значення в ул
//     listData.push(value);
//     // перетворюємо в JSON
//     const updatedList = JSON.stringify(listData);
//     // записуємо новий json в сторедж
//     localStorage.setItem('list', updatedList);  
//   }catch (error) {
//     console.log('parsing error');
//   }
//   refs.input.value.reset;  
// }

// refs.form.addEventListener('submit', handlerSubmit);

// // згенерувати дані з локал сторедж на екран при завантаженні сторінки
// const handleMount = () => {
//     const list = localStorage.getItem('list');
//  try {
//     const savedList = JSON.parse(list);
//     const markdown = savedList.reduce((acc, text) => acc +  createLi(text), ""); 
//     addLiToList(markdown);
//  } catch (error) {
//     console.log('parsing error');
//  }
// }
// // запусти фун ю для завантаження сторінки
// addEventListener('DOMContentLoaded', handleMount);





