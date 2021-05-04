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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_authViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/authViews */ \"./src/views/authViews.js\");\n\n\nconst app = (() => {\n\t_views_authViews__WEBPACK_IMPORTED_MODULE_0__.authViews.renderLoginForm();\n})();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/authControllers.js":
/*!********************************************!*\
  !*** ./src/controllers/authControllers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authControllers\": () => (/* binding */ authControllers)\n/* harmony export */ });\n/* harmony import */ var _usersControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usersControllers */ \"./src/controllers/usersControllers.js\");\n/* harmony import */ var _storageControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageControllers */ \"./src/controllers/storageControllers.js\");\n\n\n\nconst authControllers = (() => {\n\tconst login = (email, password) => {\n\t\tlet user = _usersControllers__WEBPACK_IMPORTED_MODULE_0__.usersControllers.find(email);\n\t\tconst authenticatePassword = (() => {\n\t\t\tif (password === user.password) {\n\t\t\t\treturn console.log(`${user.name} successfully logged in!`);\n\t\t\t}\n\t\t\treturn console.log(`Failed to login ${user.name}, please try again.`);\n\t\t})();\n\t};\n\n\treturn {\n\t\tlogin,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/controllers/authControllers.js?");

/***/ }),

/***/ "./src/controllers/storageControllers.js":
/*!***********************************************!*\
  !*** ./src/controllers/storageControllers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storageControllers\": () => (/* binding */ storageControllers)\n/* harmony export */ });\nconst storageControllers = (() => {\n\tlet storageObject;\n\tconst initStorage = (() => {\n\t\tif (!localStorage.todo) {\n\t\t\tlet storageString = JSON.stringify({\n\t\t\t\tusers: { count: 0, loggedInUser: null, usersList: [] },\n\t\t\t});\n\t\t\tlocalStorage.setItem('todo', storageString);\n\t\t}\n\t\tstorageObject = JSON.parse(localStorage.todo);\n\t})();\n\n\tconst load = () => {\n\t\treturn storageObject;\n\t};\n\n\tconst save = () => {\n\t\tlet storageString = JSON.stringify(storageObject);\n\t\tlocalStorage.setItem('todo', storageString);\n\t};\n\n\treturn {\n\t\tload,\n\t\tsave,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/controllers/storageControllers.js?");

/***/ }),

/***/ "./src/controllers/usersControllers.js":
/*!*********************************************!*\
  !*** ./src/controllers/usersControllers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersControllers\": () => (/* binding */ usersControllers)\n/* harmony export */ });\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userModel */ \"./src/models/userModel.js\");\n/* harmony import */ var _storageControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageControllers */ \"./src/controllers/storageControllers.js\");\n\n\n\nconst usersControllers = (() => {\n\tlet storageObject = _storageControllers__WEBPACK_IMPORTED_MODULE_1__.storageControllers.load();\n\n\tconst create = (name, email, password, confirmPassword) => {\n\t\tif (name == '' || email == '' || password == '' || confirmPassword == '') {\n\t\t\treturn alert('Please fill out all form fields.');\n\t\t}\n\t\tfor (let i = 0; i < storageObject.users.usersList.length; i++) {\n\t\t\tif (email === storageObject.users.usersList[i].email) {\n\t\t\t\tdocument.querySelector('#user-create-email-input').value = '';\n\t\t\t\treturn alert(`A user with that email already exists.`);\n\t\t\t}\n\t\t}\n\t\tif (password !== confirmPassword) {\n\t\t\tdocument.querySelector('#user-create-password-input').value = '';\n\t\t\tdocument.querySelector('#user-create-confirm-password-input').value = '';\n\t\t\treturn alert('Passwords do not match.');\n\t\t}\n\n\t\tlet newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_0__.User(storageObject.users.count, name, email, password);\n\t\tstorageObject.users.count++;\n\t\talert(`${newUser.name} has been added to the database!`);\n\t\tstorageObject.users.usersList.push(newUser);\n\t\t_storageControllers__WEBPACK_IMPORTED_MODULE_1__.storageControllers.save();\n\t\tdocument.querySelector('#user-create-name-input').value = '';\n\t\tdocument.querySelector('#user-create-email-input').value = '';\n\t\tdocument.querySelector('#user-create-password-input').value = '';\n\t\tdocument.querySelector('#user-create-confirm-password-input').value = '';\n\t};\n\n\tconst find = (email) => {\n\t\tlet usersList = storageObject.users.usersList;\n\t\tfor (let i = 0; i < usersList.length; i++) {\n\t\t\tif (email === usersList[i].email) {\n\t\t\t\treturn usersList[i];\n\t\t\t}\n\t\t}\n\t\treturn console.log('No match found.');\n\t};\n\n\treturn {\n\t\tcreate,\n\t\tfind,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/controllers/usersControllers.js?");

/***/ }),

/***/ "./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n\tconstructor(id, name, email, password) {\n\t\tthis.id = id;\n\t\tthis.name = name;\n\t\tthis.email = email;\n\t\tthis.password = password;\n\t\tthis.posts = [];\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///./src/models/userModel.js?");

/***/ }),

/***/ "./src/views/authViews.js":
/*!********************************!*\
  !*** ./src/views/authViews.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authViews\": () => (/* binding */ authViews)\n/* harmony export */ });\n/* harmony import */ var _userViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userViews */ \"./src/views/userViews.js\");\n/* harmony import */ var _controllers_authControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/authControllers */ \"./src/controllers/authControllers.js\");\n/* harmony import */ var _controllers_usersControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/usersControllers */ \"./src/controllers/usersControllers.js\");\n\n\n\n\nconst authViews = (() => {\n\tconst content = document.querySelector('#content');\n\n\tconst renderLoginForm = () => {\n\t\tcontent.innerHTML = '';\n\t\tlet form = document.createElement('form');\n\t\tlet fieldset = document.createElement('fieldset');\n\t\tlet legend = document.createElement('legend');\n\t\tlegend.innerText = 'Login';\n\t\tfieldset.appendChild(legend);\n\t\tform.appendChild(fieldset);\n\t\tcontent.appendChild(form);\n\n\t\tconst renderEmailInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'text';\n\t\t\tinput.id = 'login-email-input';\n\t\t\tinput.placeholder = 'Email';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tfieldset.appendChild(input);\n\t\t\tfieldset.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderPasswordInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'password';\n\t\t\tinput.id = 'login-password-input';\n\t\t\tinput.placeholder = 'Password';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tfieldset.appendChild(input);\n\t\t\tfieldset.appendChild(document.createElement('br'));\n\t\t\tfieldset.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderLoginButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.innerText = 'Login';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_controllers_authControllers__WEBPACK_IMPORTED_MODULE_1__.authControllers.login(\n\t\t\t\t\tdocument.querySelector('#login-email-input').value,\n\t\t\t\t\tdocument.querySelector('#login-password-input').value\n\t\t\t\t);\n\t\t\t});\n\t\t\tfieldset.appendChild(button);\n\t\t})();\n\n\t\tconst renderCreateUserFormLink = (() => {\n\t\t\tlet div = document.createElement('div');\n\t\t\tdiv.innerText = `Need an account? `;\n\t\t\tlet link = document.createElement('a');\n\t\t\tlink.innerText = 'Create one here!';\n\t\t\tlink.addEventListener('click', (e) => {\n\t\t\t\t_userViews__WEBPACK_IMPORTED_MODULE_0__.userViews.renderCreateUserForm();\n\t\t\t});\n\t\t\tcontent.appendChild(div);\n\t\t\tdiv.appendChild(link);\n\t\t})();\n\t};\n\n\treturn {\n\t\trenderLoginForm,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/views/authViews.js?");

/***/ }),

/***/ "./src/views/userViews.js":
/*!********************************!*\
  !*** ./src/views/userViews.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userViews\": () => (/* binding */ userViews)\n/* harmony export */ });\n/* harmony import */ var _controllers_usersControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/usersControllers */ \"./src/controllers/usersControllers.js\");\n/* harmony import */ var _authViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authViews */ \"./src/views/authViews.js\");\n\n\n\nconst userViews = (() => {\n\tconst content = document.querySelector('#content');\n\n\tconst renderCreateUserForm = () => {\n\t\tcontent.innerHTML = '';\n\t\tlet form = document.createElement('form');\n\t\tlet fieldset = document.createElement('fieldset');\n\t\tlet legend = document.createElement('legend');\n\t\tlegend.innerText = 'Create User';\n\t\tfieldset.appendChild(legend);\n\t\tform.appendChild(fieldset);\n\t\tcontent.appendChild(form);\n\n\t\tconst renderNameInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'text';\n\t\t\tinput.id = 'user-create-name-input';\n\t\t\tinput.placeholder = 'Name';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tfieldset.appendChild(input);\n\t\t\tfieldset.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderEmailInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'text';\n\t\t\tinput.id = 'user-create-email-input';\n\t\t\tinput.placeholder = 'Email';\n\t\t\tinput.auotcomplete = 'off';\n\t\t\tfieldset.appendChild(input);\n\t\t\tfieldset.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderPasswordInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'password';\n\t\t\tinput.id = 'user-create-password-input';\n\t\t\tinput.placeholder = 'Password';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tfieldset.appendChild(input);\n\t\t\tfieldset.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderConfirmPasswordInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'password';\n\t\t\tinput.id = 'user-create-confirm-password-input';\n\t\t\tinput.placeholder = 'Confirm password';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tfieldset.appendChild(input);\n\t\t\tfieldset.appendChild(document.createElement('br'));\n\t\t\tfieldset.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderSubmitButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.id = 'create-new-user-button';\n\t\t\tbutton.innerText = 'Submit';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_controllers_usersControllers__WEBPACK_IMPORTED_MODULE_0__.usersControllers.create(\n\t\t\t\t\tdocument.querySelector('#user-create-name-input').value.trim(),\n\t\t\t\t\tdocument.querySelector('#user-create-email-input').value.trim(),\n\t\t\t\t\tdocument.querySelector('#user-create-password-input').value.trim(),\n\t\t\t\t\tdocument\n\t\t\t\t\t\t.querySelector('#user-create-confirm-password-input')\n\t\t\t\t\t\t.value.trim()\n\t\t\t\t);\n\t\t\t});\n\t\t\tfieldset.appendChild(button);\n\t\t})();\n\n\t\tconst renderLoginLink = (() => {\n\t\t\tlet div = document.createElement('div');\n\t\t\tdiv.innerText = 'Already have an account? ';\n\t\t\tlet link = document.createElement('a');\n\t\t\tlink.innerText = 'Login here!';\n\t\t\tlink.addEventListener('click', (e) => {\n\t\t\t\t_authViews__WEBPACK_IMPORTED_MODULE_1__.authViews.renderLoginForm();\n\t\t\t});\n\t\t\tdiv.appendChild(link);\n\t\t\tcontent.appendChild(div);\n\t\t})();\n\t};\n\n\treturn {\n\t\trenderCreateUserForm,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/views/userViews.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;