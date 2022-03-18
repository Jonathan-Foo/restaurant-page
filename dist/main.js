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

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nfunction createContentSection() {\n    const contentDiv = document.createElement('div')\n    contentDiv.classList.add('content')\n\n    contentDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n    contentDiv.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n    return document.body.appendChild(contentDiv)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContentSection);\n\n//# sourceURL=webpack://restaurant-page/./src/content.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHomeSection)\n/* harmony export */ });\n\nfunction createHomeSection() {\n    const homeContainer = document.createElement('div')\n    const logo = document.createElement('p')\n    const subText = document.createElement('p')\n    const credit = document.createElement('p')\n\n    homeContainer.classList.add('home')\n    // homeContainer.classList.add('active')\n    homeContainer.setAttribute('id', 'home')\n\n    logo.classList.add('logo')\n    logo.textContent = 'Kyoto Sushi'\n    \n    subText.classList.add('sub-text')\n    subText.textContent = 'the true authentic omakase experience'\n    \n    credit.classList.add('credit')\n    credit.textContent = 'photograph by Evan Sung'\n\n    homeContainer.appendChild(logo)\n    homeContainer.appendChild(subText)\n    homeContainer.appendChild(credit)\n\n    return homeContainer\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\n\n\n\n(0,_sidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenuSection() {\n    const menuContainer = document.createElement('div')  \n    menuContainer.classList.add('menu')\n    menuContainer.classList.add('active')\n    menuContainer.setAttribute('id', 'menu')\n\n    menuContainer.appendChild(omakaseSectionCreator())\n\n    return menuContainer\n}\n\nfunction omakaseSectionCreator() {\n    const omakaseContainer = document.createElement('div')\n    const omakaseTitle = document.createElement('p')\n    const photoCredit = document.createElement('p')\n    \n    photoCredit.classList.add('photo-credit')\n    photoCredit.textContent = 'credit: the omakase house'\n\n    omakaseContainer.classList.add('omakase')\n    \n    omakaseTitle.classList.add('omakase-title')\n    omakaseTitle.textContent = 'Omakase'\n\n\n    omakaseContainer.appendChild(omakaseTitle)\n    omakaseContainer.appendChild(nigiriContainer())\n    omakaseContainer.appendChild(photoCredit)\n\n    return omakaseContainer    \n}\n\n\nfunction nigiriContainer() {\n    const nigiriSet = document.createElement('div')\n\n    nigiriSet.classList.add('nigiri-set')\n\n    nigiriSet.append(nigiriCardCreator('Engiwa Nigiri', 'soft white flat fish sashimi on a bed of sushi rice'))\n    nigiriSet.append(nigiriCardCreator('Toro Cavier Nigiri', 'fatty toro topped with creamy cavier on a bed of sushi rice'))\n    nigiriSet.append(nigiriCardCreator('Kinmedai Nigiri', 'slice of fresh crimson seabream on a bed of sushi rice'))\n    nigiriSet.append(nigiriCardCreator('Chutoro Nigiri', 'slice of medium fatty tune on a bed of sushi rise'))\n    nigiriSet.append(nigiriCardCreator('Madai Nigiri', 'delicious japanese madai snapper on a bed of sushi rice'))\n    nigiriSet.append(nigiriCardCreator('Sayori Nigiri', 'succulent japanese halfbeak on a bed of sushi rice'))\n    nigiriSet.append(nigiriCardCreator('Unagi Temaki', 'grilled japanese eel hand roll'))\n    nigiriSet.append(nigiriCardCreator('Hamachi Nigiri', 'succulent yellowtail belly on a bed of sushi rice'))\n\n    return nigiriSet\n}\n\n\nfunction nigiriCardCreator(name, description) {\n    const nigiri = document.createElement('div')\n    const nigiriImg = document.createElement('img')\n    const descriptionContainer = document.createElement('div')\n    const nigiriName = document.createElement('p')\n    const nigiriDescription = document.createElement('p')\n\n    nigiri.classList.add('nigiri')\n    \n    nigiriImg.src = `img/${name}.jpg`\n    nigiriImg.alt = `${name}`\n\n    descriptionContainer.classList.add('description')\n    \n    nigiriName.classList.add('nigiri-name')\n    nigiriName.textContent = name\n\n    nigiriDescription.classList.add('nigiri-description')\n    nigiriDescription.textContent = description\n\n    descriptionContainer.appendChild(nigiriName)\n    descriptionContainer.appendChild(nigiriDescription)  \n\n    nigiri.appendChild(nigiriImg)\n    nigiri.appendChild(descriptionContainer)\n\n    return nigiri\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuSection);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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