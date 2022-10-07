/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/allTasks.js":
/*!*************************!*\
  !*** ./src/allTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allTasks\": () => (/* binding */ allTasks)\n/* harmony export */ });\nlet allTasks = () => {\r\n    console.log(\"zeba\");\r\n    const placementDiv = document.querySelector(\".placementDiv\");\r\n    while(placementDiv.firstChild){\r\n        placementDiv.firstChild.remove();\r\n    }\r\n    placementDiv.classList.remove(placementDiv.classList[1]);\r\n    placementDiv.classList.add(\"allTasks\");\r\n    const h2 = document.createElement(\"h2\");\r\n    h2.innerHTML = \"All Tasks\";\r\n    placementDiv.appendChild(h2);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/allTasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomePage */ \"./src/welcomePage.js\");\n/* harmony import */ var _projectInputFieldControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectInputFieldControls */ \"./src/projectInputFieldControls.js\");\n\r\n\r\n\r\n\r\n(0,_welcomePage__WEBPACK_IMPORTED_MODULE_0__.createMainPage)();\r\n(0,_projectInputFieldControls__WEBPACK_IMPORTED_MODULE_1__.inputProject)();\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projectInputFieldControls.js":
/*!******************************************!*\
  !*** ./src/projectInputFieldControls.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputProject\": () => (/* binding */ inputProject)\n/* harmony export */ });\nlet inputProject = () => {\r\nconst projectInputDiv = document.querySelector(\".addProject\");\r\nconst projectSubmitButton = document.querySelector(\".submitProject\");\r\nconst projectNameInputField = document.querySelector(\".projectName\");\r\nconst background = document.querySelector(\".background\");\r\n\r\nprojectSubmitButton.addEventListener(\"click\", () => {\r\n    projectInputDiv.classList.remove(\"active\");\r\n    background.classList.remove(\"active\");\r\n    projectNameInputField.value = \"\";    \r\n})\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/projectInputFieldControls.js?");

/***/ }),

/***/ "./src/welcomePage.js":
/*!****************************!*\
  !*** ./src/welcomePage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMainPage\": () => (/* binding */ createMainPage)\n/* harmony export */ });\n/* harmony import */ var _allTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allTasks */ \"./src/allTasks.js\");\n\r\n\r\nlet createMainPage = () => {\r\n    const addProjectbutton = document.querySelector(\".addProjectButton\");\r\n    const allTasksButton = document.querySelector(\"#allTasks\");\r\n    const todayButton = document.querySelector(\"#today\");\r\n    const thisWeekButton = document.querySelector(\"#thisWeek\");\r\n    const homeButton = document.querySelector(\".websiteName\");\r\n\r\n    const projectInputDiv = document.querySelector(\".addProject\");\r\n    const background = document.querySelector(\".background\");\r\n\r\n    const placementDiv = document.querySelector(\".placementDiv\");\r\n    const mainDiv = document.createElement(\"div\");\r\n    const h1 = document.createElement(\"h1\");\r\n    const p = document.createElement(\"p\");\r\n\r\n    placementDiv.classList.add(\"welcome\");\r\n    h1.innerHTML = \"Welcome to the ToDo List\";\r\n    p.innerHTML = \"This is the place where all tasks come together\";\r\n    mainDiv.appendChild(h1);\r\n    mainDiv.appendChild(p);\r\n    placementDiv.appendChild(mainDiv);\r\n\r\n    addProjectbutton.addEventListener(\"click\", () => {\r\n        background.classList.add(\"active\");\r\n        projectInputDiv.classList.add(\"active\");\r\n\r\n    })\r\n\r\n    allTasksButton.addEventListener(\"click\", () => {\r\n        ;(0,_allTasks__WEBPACK_IMPORTED_MODULE_0__.allTasks)();\r\n    })\r\n    todayButton.addEventListener(\"click\", () => {\r\n        today();\r\n    })\r\n    thisWeekButton.addEventListener(\"click\", () => {\r\n        thisWeek();\r\n    })\r\n    homeButton.addEventListener(\"click\", () => {\r\n        if(placementDiv.classList[1] != \"welcome\")\r\n        {\r\n            while(placementDiv.firstChild){\r\n                placementDiv.firstChild.remove();\r\n            }\r\n            placementDiv.classList.remove(placementDiv.classList[1]);\r\n            placementDiv.classList.add(\"welcome\");\r\n        const mainDiv = document.createElement(\"div\");\r\n        const h1 = document.createElement(\"h1\");\r\n        const p = document.createElement(\"p\");\r\n        h1.innerHTML = \"Welcome to the ToDo List\";\r\n        p.innerHTML = \"This is the place where all tasks come together\";\r\n        mainDiv.appendChild(h1);\r\n        mainDiv.appendChild(p);\r\n        placementDiv.appendChild(mainDiv);\r\n        }\r\n        else console.log(\"be reikalo\");\r\n    })\r\n\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/welcomePage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;