/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// // Створює новий запис у сховищі у вигляді рядка\n// localStorage.setItem('my-data', JSON.stringify({name: 'Mango', age: 2}));\n// // повертає значення зі сховища\n// const saveData = localStorage.getItem('my-data');\n// const parsedData = JSON.parse(saveData);\n// console.log(parsedData); \n// import { refs } from \"./scripts/refs\";\n// // функція створення лішки\n// const createLi = (text) => `<li data-id='${text}'>${text}</li>`;\n// // вставка розмітки на екран\n//   const addLiToList = (markdown) => {\n//     refs.list.insertAdjacentHTML('beforeend', markdown);\n// }\n// const handlerSubmit = (e) => {\n//     // забороняєм перезавантажувати сторінку\n//   e.preventDefault();            \n//   //   дістаємо значення інпуту\n//   const value = refs.input.value; \n//    //   value запишеться в text  і передасться в лішку \n//   const liItem = createLi(value);  \n//    //   лішка вставиться в ул  \n//   addLiToList(liItem);             \n//   //   отримали доступ до сторедж\n//   const list = localStorage.getItem('list');\n//   try { // якщо клас ліст є то парсимо ліст якщо ні то створєм новий []\n//     const listData = list ? JSON.parse(list) : [];\n//   //   пушимо значення в ул\n//     listData.push(value);\n//     // перетворюємо в JSON\n//     const updatedList = JSON.stringify(listData);\n//     // записуємо новий json в сторедж\n//     localStorage.setItem('list', updatedList);  \n//   }catch (error) {\n//     console.log('parsing error');\n//   }\n//   refs.input.value.reset;  \n// }\n// refs.form.addEventListener('submit', handlerSubmit);\n// // згенерувати дані з локал сторедж на екран при завантаженні сторінки\n// const handleMount = () => {\n//     const list = localStorage.getItem('list');\n//  try {\n//     const savedList = JSON.parse(list);\n//     const markdown = savedList.reduce((acc, text) => acc +  createLi(text), \"\"); \n//     addLiToList(markdown);\n//  } catch (error) {\n//     console.log('parsing error');\n//  }\n// }\n// // запусти фун ю для завантаження сторінки\n// addEventListener('DOMContentLoaded', handleMount);\nvar logMessage = function logMessage() {\n  console.log('log через 3 сек');\n};\n\nconsole.log('до виклику setTimeout');\nsetTimeout(function () {\n  console.log('колбек для сеттаймаут');\n}, 2000);\nconsole.log('після виклику setTimeout');\n\n//# sourceURL=webpack://test-webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;