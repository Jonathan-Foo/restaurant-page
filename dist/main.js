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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n\n\n\n\n(0,_sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n// pageLoad();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ content)\n/* harmony export */ });\nfunction content() {\n    const sideBar = document.createElement('div');\n    const content = document.createElement('div');\n\n    sideBar.innerHTML = \"test\"\n    content.innerHTML = \"test\"\n\n    sideBar.classList.add('sidebar')\n    content.classList.add('content') \n\n    console.log(sideBar, content)\n\n\n    return document.body.appendChild(sideBar);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sidebar() {\n    const sidebarDiv = document.createElement('div')\n    const sideBarLogo = document.createElement('p')\n    const sideBarLogoLine = document.createElement('span')\n    \n    sidebarDiv.classList.add('side-navbar')\n    \n    \n    sideBarLogo.textContent = \"kyoto sushi\"\n    sideBarLogo.classList.add('sidebar-logo')\n    sideBarLogoLine.classList.add('sidebar-logo-line')\n\n    sidebarDiv.appendChild(sideBarLogo)\n    sidebarDiv.appendChild(sideBarLogoLine)\n    sidebarDiv.appendChild(navListCreator())\n    sidebarDiv.appendChild(copyrightCreator())\n\n    return document.body.appendChild(sidebarDiv)\n}\n\n\nfunction navListCreator() {\n    const list = document.createElement('ul')\n    list.classList.add('nav-list')\n\n    list.appendChild(createlistItems('home'))\n    list.appendChild(createlistItems('menu'))\n    list.appendChild(createlistItems('contact'))\n\n    return list \n}\n\nfunction createlistItems(name) {\n    const div = document.createElement('div')\n    const item = document.createElement('li')\n    const span = document.createElement('span')\n    \n    div.classList.add('tab')\n    div.classList.add(`${name}-tab`)\n    \n    item.dataset.targetSlide = `#${name}`\n    item.textContent = `${name}`\n\n    div.appendChild(item)\n    div.appendChild(span)\n    return div\n}\n\nfunction copyrightCreator() {\n    const copyRightContainer = document.createElement('div')\n    const copyRightText = document.createElement('p')\n    const link = document.createElement('a')\n    const icon = document.createElement('i')\n\n    copyRightText.textContent = 'copyright © 2022 jonathan-foo'\n    link.href = 'https://github.com/Jonathan-Foo'\n    icon.classList.add('fab')\n    icon.classList.add('fa-github')\n    link.appendChild(icon)\n\n\n    copyRightContainer.classList.add('copyright')\n    copyRightContainer.appendChild(copyRightText)\n    copyRightContainer.appendChild(link)\n\n    return copyRightContainer\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);\n\n//# sourceURL=webpack://restaurant-page/./src/sidebar.js?");

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