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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_indexViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/indexViews */ \"./src/views/indexViews.js\");\n\n\nconst app = (() => {\n\t_views_indexViews__WEBPACK_IMPORTED_MODULE_0__.indexViews.checkLogin();\n\treturn {};\n})();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/authControllers.js":
/*!********************************************!*\
  !*** ./src/controllers/authControllers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authControllers\": () => (/* binding */ authControllers)\n/* harmony export */ });\n/* harmony import */ var _storageControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageControllers */ \"./src/controllers/storageControllers.js\");\n/* harmony import */ var _views_indexViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/indexViews */ \"./src/views/indexViews.js\");\n/* harmony import */ var _usersControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usersControllers */ \"./src/controllers/usersControllers.js\");\n\n\n\n\nconst authControllers = (() => {\n\tlet storageObject = _storageControllers__WEBPACK_IMPORTED_MODULE_0__.storageControllers.load();\n\tconst alphanumerics =\n\t\t' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}|,<.>/?`~';\n\n\tconst encrypt = (password) => {\n\t\tlet salt = '';\n\t\tlet saltedEncryption = '';\n\t\tlet saltLettersIndexes = [];\n\t\tlet shiftLettersIndexes = [];\n\t\tlet encryptedPassword = '';\n\n\t\tlet saltLength = Math.floor(Math.random() * 12) + 9;\n\t\tfor (let i = 0; i < saltLength; i++) {\n\t\t\tsaltLettersIndexes.push(\n\t\t\t\tMath.floor(Math.random() * alphanumerics.length) + 1\n\t\t\t);\n\t\t}\n\n\t\tfor (let i = 0; i < saltLettersIndexes.length; i++) {\n\t\t\tfor (let j = 0; j < alphanumerics.length; j++) {\n\t\t\t\tif (saltLettersIndexes[i] === j) {\n\t\t\t\t\tsalt += alphanumerics[j];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tlet passwordLettersIndexes = [];\n\t\tfor (let i = 0; i < password.length; i++) {\n\t\t\tfor (let j = 0; j < alphanumerics.length; j++) {\n\t\t\t\tif (password[i] == alphanumerics[j]) {\n\t\t\t\t\tpasswordLettersIndexes.push(j);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tlet i = 0;\n\t\tlet j = 0;\n\t\twhile (i < password.length) {\n\t\t\tlet shiftedIndex = passwordLettersIndexes[i] + saltLettersIndexes[j];\n\t\t\tif (shiftedIndex > alphanumerics.length) {\n\t\t\t\tshiftedIndex -= alphanumerics.length;\n\t\t\t}\n\n\t\t\tshiftLettersIndexes.push(shiftedIndex);\n\n\t\t\tif (i < password.length - 1) {\n\t\t\t\ti++;\n\t\t\t} else {\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tif (j < salt.length - 1) {\n\t\t\t\tj++;\n\t\t\t} else {\n\t\t\t\tj = 0;\n\t\t\t}\n\t\t}\n\n\t\tfor (let i = 0; i < password.length; i++) {\n\t\t\tfor (let j = 0; j < alphanumerics.length; j++) {\n\t\t\t\tif (shiftLettersIndexes[i] === j) {\n\t\t\t\t\tencryptedPassword += alphanumerics[j];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tsaltedEncryption = encryptedPassword + salt;\n\t\treturn saltedEncryption;\n\t};\n\n\tconst decrypt = (encryptedString, password) => {\n\t\tlet encryptedPasswordLettersIndexes = [];\n\t\tlet saltLettersIndexes = [];\n\t\tlet shiftLettersIndexes = [];\n\t\tlet salt = '';\n\t\tlet encryptedPassword = '';\n\t\tlet decryptedPassword = '';\n\n\t\tfor (let i = 0; i < password.length; i++) {\n\t\t\tencryptedPassword += encryptedString[i];\n\t\t}\n\n\t\tfor (let i = password.length; i < encryptedString.length; i++) {\n\t\t\tsalt += encryptedString[i];\n\t\t}\n\n\t\tfor (let i = 0; i < encryptedPassword.length; i++) {\n\t\t\tfor (let j = 0; j < alphanumerics.length; j++) {\n\t\t\t\tif (encryptedPassword[i] === alphanumerics[j]) {\n\t\t\t\t\tencryptedPasswordLettersIndexes.push(j);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tfor (let i = 0; i < salt.length; i++) {\n\t\t\tfor (let j = 0; j < alphanumerics.length; j++) {\n\t\t\t\tif (salt[i] === alphanumerics[j]) {\n\t\t\t\t\tsaltLettersIndexes.push(j);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tlet i = 0;\n\t\tlet j = 0;\n\n\t\twhile (i < password.length) {\n\t\t\tlet shiftedIndex =\n\t\t\t\tencryptedPasswordLettersIndexes[i] - saltLettersIndexes[j];\n\n\t\t\tif (shiftedIndex < 0) {\n\t\t\t\tshiftedIndex += alphanumerics.length;\n\t\t\t} else {\n\t\t\t}\n\n\t\t\tshiftLettersIndexes.push(shiftedIndex);\n\n\t\t\tif (i < password.length - 1) {\n\t\t\t\ti++;\n\t\t\t} else {\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tif (j < salt.length - 1) {\n\t\t\t\tj++;\n\t\t\t} else {\n\t\t\t\tj = 0;\n\t\t\t}\n\t\t}\n\n\t\tfor (let i = 0; i < shiftLettersIndexes.length; i++) {\n\t\t\tfor (let j = 0; j < alphanumerics.length; j++) {\n\t\t\t\tif (shiftLettersIndexes[i] === j) {\n\t\t\t\t\tdecryptedPassword += alphanumerics[j];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn decryptedPassword;\n\t};\n\n\tconst login = (email, password) => {\n\t\tlet user = _usersControllers__WEBPACK_IMPORTED_MODULE_2__.usersControllers.find(email);\n\t\tlet encryptedString = user.password;\n\t\tlet decryptedPassword = decrypt(encryptedString, password);\n\t\tif (password === decryptedPassword) {\n\t\t\tstorageObject.users.loggedInUser = user;\n\t\t\t_storageControllers__WEBPACK_IMPORTED_MODULE_0__.storageControllers.save();\n\t\t\treturn _views_indexViews__WEBPACK_IMPORTED_MODULE_1__.indexViews.renderUserIndex();\n\t\t}\n\t\treturn alert(`Failed to log ${user.name} in.`);\n\t};\n\n\tconst logout = () => {\n\t\tstorageObject.users.loggedInUser = null;\n\t\t_storageControllers__WEBPACK_IMPORTED_MODULE_0__.storageControllers.save();\n\t\twindow.location.reload();\n\t};\n\n\treturn {\n\t\tencrypt,\n\t\t// decrypt,\n\t\tlogin,\n\t\tlogout,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/controllers/authControllers.js?");

/***/ }),

/***/ "./src/controllers/listsControllers.js":
/*!*********************************************!*\
  !*** ./src/controllers/listsControllers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listsControllers\": () => (/* binding */ listsControllers)\n/* harmony export */ });\n/* harmony import */ var _models_listModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/listModel */ \"./src/models/listModel.js\");\n/* harmony import */ var _storageControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageControllers */ \"./src/controllers/storageControllers.js\");\n/* harmony import */ var _usersControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usersControllers */ \"./src/controllers/usersControllers.js\");\n\n\n\n\nconst listsControllers = (() => {\n\tlet storageObject = _storageControllers__WEBPACK_IMPORTED_MODULE_1__.storageControllers.load();\n\n\tconst create = (name) => {\n\t\tlet user = _usersControllers__WEBPACK_IMPORTED_MODULE_2__.usersControllers.find(storageObject.users.loggedInUser.email);\n\n\t\tif (name === '') {\n\t\t\treturn alert('Please enter a name for the list.');\n\t\t}\n\n\t\tlet newList = new _models_listModel__WEBPACK_IMPORTED_MODULE_0__.List(storageObject.uniqueId, name);\n\t\tuser.lists.push(newList);\n\t\tstorageObject.users.loggedInUser = user;\n\t\tstorageObject.uniqueId++;\n\t\treturn _storageControllers__WEBPACK_IMPORTED_MODULE_1__.storageControllers.save();\n\t};\n\n\treturn {\n\t\tcreate,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/controllers/listsControllers.js?");

/***/ }),

/***/ "./src/controllers/storageControllers.js":
/*!***********************************************!*\
  !*** ./src/controllers/storageControllers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storageControllers\": () => (/* binding */ storageControllers)\n/* harmony export */ });\nconst storageControllers = (() => {\n\tlet storageObject;\n\tconst initStorage = (() => {\n\t\tif (!localStorage.todo) {\n\t\t\tlet storageString = JSON.stringify({\n\t\t\t\tuniqueId: 0,\n\t\t\t\tusers: { loggedInUser: null, usersList: [] },\n\t\t\t});\n\t\t\tlocalStorage.setItem('todo', storageString);\n\t\t}\n\t\tstorageObject = JSON.parse(localStorage.todo);\n\t})();\n\n\tconst load = () => {\n\t\treturn storageObject;\n\t};\n\n\tconst save = () => {\n\t\tlet storageString = JSON.stringify(storageObject);\n\t\tlocalStorage.setItem('todo', storageString);\n\t};\n\n\treturn {\n\t\tload,\n\t\tsave,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/controllers/storageControllers.js?");

/***/ }),

/***/ "./src/controllers/tasksControllers.js":
/*!*********************************************!*\
  !*** ./src/controllers/tasksControllers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasksControllers\": () => (/* binding */ tasksControllers)\n/* harmony export */ });\n/* harmony import */ var _storageControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageControllers */ \"./src/controllers/storageControllers.js\");\n/* harmony import */ var _usersControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersControllers */ \"./src/controllers/usersControllers.js\");\n/* harmony import */ var _models_taskModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/taskModel */ \"./src/models/taskModel.js\");\n\n\n\n\nconst tasksControllers = (() => {\n\tlet storageObject = _storageControllers__WEBPACK_IMPORTED_MODULE_0__.storageControllers.load();\n\n\tconst destroy = () => {\n\t\tconsole.log('Hi Caitlyn!');\n\t};\n\n\tconst create = (data, inputValue) => {\n\t\tif (inputValue === '') {\n\t\t\treturn alert('Please enter a task.');\n\t\t}\n\t\tlet user = _usersControllers__WEBPACK_IMPORTED_MODULE_1__.usersControllers.find(storageObject.users.loggedInUser.email);\n\t\tlet listId = Number(data.id);\n\n\t\tfor (let i = 0; i < user.lists.length; i++) {\n\t\t\tif (listId === user.lists[i].id) {\n\t\t\t\tlet newTask = new _models_taskModel__WEBPACK_IMPORTED_MODULE_2__.Task(storageObject.uniqueId, inputValue);\n\t\t\t\tstorageObject.uniqueId++;\n\t\t\t\tuser.lists[i].tasks.push(newTask);\n\t\t\t\tstorageObject.users.loggedInUser = user;\n\t\t\t\treturn _storageControllers__WEBPACK_IMPORTED_MODULE_0__.storageControllers.save();\n\t\t\t}\n\t\t}\n\t};\n\treturn {\n\t\tcreate,\n\t\tdestroy,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/controllers/tasksControllers.js?");

/***/ }),

/***/ "./src/controllers/usersControllers.js":
/*!*********************************************!*\
  !*** ./src/controllers/usersControllers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersControllers\": () => (/* binding */ usersControllers)\n/* harmony export */ });\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userModel */ \"./src/models/userModel.js\");\n/* harmony import */ var _storageControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageControllers */ \"./src/controllers/storageControllers.js\");\n/* harmony import */ var _authControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authControllers */ \"./src/controllers/authControllers.js\");\n/* harmony import */ var _views_indexViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/indexViews */ \"./src/views/indexViews.js\");\n\n\n\n\n\nconst usersControllers = (() => {\n\tlet storageObject = _storageControllers__WEBPACK_IMPORTED_MODULE_1__.storageControllers.load();\n\n\tconst create = (name, email, password, confirmPassword) => {\n\t\tif (name == '' || email == '' || password == '' || confirmPassword == '') {\n\t\t\treturn alert('Please fill out all form fields.');\n\t\t}\n\t\tfor (let i = 0; i < storageObject.users.usersList.length; i++) {\n\t\t\tif (email === storageObject.users.usersList[i].email) {\n\t\t\t\tdocument.querySelector('#user-create-email-input').value = '';\n\t\t\t\treturn alert(`A user with that email already exists.`);\n\t\t\t}\n\t\t}\n\t\tif (password !== confirmPassword) {\n\t\t\tdocument.querySelector('#user-create-password-input').value = '';\n\t\t\tdocument.querySelector('#user-create-confirm-password-input').value = '';\n\t\t\treturn alert('Passwords do not match.');\n\t\t}\n\n\t\tlet encryptedString = _authControllers__WEBPACK_IMPORTED_MODULE_2__.authControllers.encrypt(password);\n\n\t\tlet newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_0__.User(\n\t\t\tstorageObject.uniqueId,\n\t\t\tname,\n\t\t\temail,\n\t\t\tencryptedString\n\t\t);\n\n\t\tstorageObject.uniqueId++;\n\t\tstorageObject.users.usersList.push(newUser);\n\t\tstorageObject.users.loggedInUser = newUser;\n\t\t_storageControllers__WEBPACK_IMPORTED_MODULE_1__.storageControllers.save();\n\t\treturn _views_indexViews__WEBPACK_IMPORTED_MODULE_3__.indexViews.renderUserIndex();\n\t};\n\n\tconst find = (email) => {\n\t\tlet usersList = storageObject.users.usersList;\n\t\tfor (let i = 0; i < usersList.length; i++) {\n\t\t\tif (email === usersList[i].email) {\n\t\t\t\treturn usersList[i];\n\t\t\t}\n\t\t}\n\t\treturn console.log('No match found.');\n\t};\n\n\treturn {\n\t\tcreate,\n\t\tfind,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/controllers/usersControllers.js?");

/***/ }),

/***/ "./src/models/listModel.js":
/*!*********************************!*\
  !*** ./src/models/listModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List)\n/* harmony export */ });\nclass List {\n\tconstructor(id, name) {\n\t\tthis.id = id;\n\t\tthis.name = name;\n\t\tthis.tasks = [];\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///./src/models/listModel.js?");

/***/ }),

/***/ "./src/models/taskModel.js":
/*!*********************************!*\
  !*** ./src/models/taskModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n\tconstructor(id, description) {\n\t\tthis.id = id;\n\t\tthis.completed = false;\n\t\tthis.description = description;\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///./src/models/taskModel.js?");

/***/ }),

/***/ "./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n\tconstructor(id, name, email, password) {\n\t\tthis.id = id;\n\t\tthis.name = name;\n\t\tthis.email = email;\n\t\tthis.password = password;\n\t\tthis.lists = [];\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///./src/models/userModel.js?");

/***/ }),

/***/ "./src/views/authViews.js":
/*!********************************!*\
  !*** ./src/views/authViews.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authViews\": () => (/* binding */ authViews)\n/* harmony export */ });\n/* harmony import */ var _controllers_authControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/authControllers */ \"./src/controllers/authControllers.js\");\n/* harmony import */ var _views_usersViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/usersViews */ \"./src/views/usersViews.js\");\n\n\n\nconst authViews = (() => {\n\tconst main = document.querySelector('main');\n\n\tconst renderLoginForm = () => {\n\t\tmain.innerHTML = '';\n\t\tlet form = document.createElement('form');\n\t\tform.className = 'container';\n\t\tlet h2 = document.createElement('h2');\n\t\th2.innerText = 'Login';\n\t\tform.appendChild(h2);\n\t\tmain.appendChild(form);\n\n\t\tconst renderEmailInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'text';\n\t\t\tinput.id = 'login-email-input';\n\t\t\tinput.placeholder = 'Email';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tform.appendChild(input);\n\t\t\tform.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderPasswordInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'password';\n\t\t\tinput.id = 'login-password-input';\n\t\t\tinput.placeholder = 'Password';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tform.appendChild(input);\n\t\t\tform.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderLoginButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.innerText = 'Login';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_controllers_authControllers__WEBPACK_IMPORTED_MODULE_0__.authControllers.login(\n\t\t\t\t\tdocument.querySelector('#login-email-input').value.trim(),\n\t\t\t\t\tdocument.querySelector('#login-password-input').value.trim()\n\t\t\t\t);\n\t\t\t});\n\t\t\tform.appendChild(button);\n\t\t})();\n\t};\n\n\treturn {\n\t\trenderLoginForm,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/views/authViews.js?");

/***/ }),

/***/ "./src/views/indexViews.js":
/*!*********************************!*\
  !*** ./src/views/indexViews.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indexViews\": () => (/* binding */ indexViews)\n/* harmony export */ });\n/* harmony import */ var _controllers_storageControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/storageControllers */ \"./src/controllers/storageControllers.js\");\n/* harmony import */ var _views_authViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/authViews */ \"./src/views/authViews.js\");\n/* harmony import */ var _views_navViews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/navViews */ \"./src/views/navViews.js\");\n/* harmony import */ var _views_listsViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/listsViews */ \"./src/views/listsViews.js\");\n\n\n\n\n\nconst indexViews = (() => {\n\tlet storageObject = _controllers_storageControllers__WEBPACK_IMPORTED_MODULE_0__.storageControllers.load();\n\tlet main = document.querySelector('main');\n\n\tconst renderUserIndex = () => {\n\t\t_views_navViews__WEBPACK_IMPORTED_MODULE_2__.navViews.renderLogoutButton();\n\t\tmain.innerHTML = '';\n\t\tmain.className = 'list-view';\n\t\t_views_navViews__WEBPACK_IMPORTED_MODULE_2__.navViews.renderUserName();\n\t\t_views_listsViews__WEBPACK_IMPORTED_MODULE_3__.listsViews.renderLists();\n\t};\n\n\tconst renderNoUserIndex = () => {\n\t\t_views_navViews__WEBPACK_IMPORTED_MODULE_2__.navViews.renderLoginButtons();\n\t\tmain.innerHTML = '';\n\t\tconst renderAboutContainer = (() => {\n\t\t\tlet aboutContainer = document.createElement('div');\n\t\t\taboutContainer.classList.remove('list-create-container');\n\t\t\taboutContainer.className = 'container';\n\t\t\tlet indexHeader = document.createElement('h1');\n\t\t\tindexHeader.innerText = `Welcome to #todo!`;\n\t\t\tlet aboutHeader = document.createElement('h2');\n\t\t\taboutHeader.innerText = `What is #todo?`;\n\t\t\tlet aboutText = document.createElement('p');\n\t\t\taboutText.innerText = `#todo is a place to keep all your lists of things, whatver they may be. Simply create an account, login and start making your day to day more productive!`;\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'type';\n\t\t\tbutton.id = 'get-started-button';\n\t\t\tbutton.innerText = 'Get started';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_views_authViews__WEBPACK_IMPORTED_MODULE_1__.authViews.renderLoginForm();\n\t\t\t});\n\t\t\taboutContainer.appendChild(indexHeader);\n\t\t\taboutContainer.appendChild(aboutHeader);\n\t\t\taboutContainer.appendChild(aboutText);\n\t\t\t// aboutContainer.appendChild(button);\n\t\t\tmain.appendChild(aboutContainer);\n\t\t})();\n\t};\n\n\tconst checkLogin = () => {\n\t\tif (storageObject.users.loggedInUser !== null) {\n\t\t\treturn renderUserIndex();\n\t\t}\n\t\treturn renderNoUserIndex();\n\t};\n\n\treturn {\n\t\trenderUserIndex,\n\t\trenderNoUserIndex,\n\t\tcheckLogin,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/views/indexViews.js?");

/***/ }),

/***/ "./src/views/listsViews.js":
/*!*********************************!*\
  !*** ./src/views/listsViews.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listsViews\": () => (/* binding */ listsViews)\n/* harmony export */ });\n/* harmony import */ var _controllers_storageControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/storageControllers */ \"./src/controllers/storageControllers.js\");\n/* harmony import */ var _controllers_listsControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/listsControllers */ \"./src/controllers/listsControllers.js\");\n/* harmony import */ var _controllers_usersControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/usersControllers */ \"./src/controllers/usersControllers.js\");\n/* harmony import */ var _tasksViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasksViews */ \"./src/views/tasksViews.js\");\n\n\n\n\n\nconst listsViews = (() => {\n\tlet storageObject = _controllers_storageControllers__WEBPACK_IMPORTED_MODULE_0__.storageControllers.load();\n\tconst main = document.querySelector('main');\n\n\tconst renderLists = () => {\n\t\tmain.innerHTML = '';\n\t\tlet user = _controllers_usersControllers__WEBPACK_IMPORTED_MODULE_2__.usersControllers.find(storageObject.users.loggedInUser.email);\n\t\tfor (let i = 0; i < user.lists.length; i++) {\n\t\t\tlet div = document.createElement('div');\n\t\t\tdiv.className = 'container';\n\t\t\tdiv.id = `list-${user.lists[i].id}`;\n\t\t\tdiv.dataset.id = user.lists[i].id;\n\t\t\tdiv.innerText = `${user.lists[i].name}`;\n\t\t\tmain.appendChild(div);\n\t\t}\n\t\trenderCreateListContainer();\n\t\t_tasksViews__WEBPACK_IMPORTED_MODULE_3__.tasksViews.renderTasks();\n\t\t_tasksViews__WEBPACK_IMPORTED_MODULE_3__.tasksViews.renderCreateTaskForms();\n\t};\n\n\tconst renderCreateListContainer = () => {\n\t\tlet div = document.createElement('div');\n\t\tdiv.className = 'container list-create-container';\n\t\tmain.appendChild(div);\n\n\t\tconst renderNewListButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.innerText = 'Add new list';\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\trenderCreateListForm();\n\t\t\t});\n\t\t\tdiv.appendChild(button);\n\t\t})();\n\t};\n\n\tconst renderCreateListForm = () => {\n\t\tlet listCreateContainer = document.querySelector('.list-create-container');\n\t\tlistCreateContainer.innerHTML = '';\n\t\tlet form = document.createElement('form');\n\n\t\tconst renderCreateListNameInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.id = 'list-name-input';\n\t\t\tinput.placeholder = 'Enter list name';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tform.appendChild(input);\n\t\t})();\n\n\t\tconst renderCreateListButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.id = 'create-list-button';\n\t\t\tbutton.innerText = 'Create list';\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_controllers_listsControllers__WEBPACK_IMPORTED_MODULE_1__.listsControllers.create(\n\t\t\t\t\tdocument.querySelector('#list-name-input').value.trim()\n\t\t\t\t),\n\t\t\t\t\trenderLists();\n\t\t\t});\n\t\t\tform.appendChild(button);\n\t\t})();\n\n\t\tlistCreateContainer.appendChild(form);\n\t};\n\n\treturn {\n\t\trenderCreateListContainer,\n\t\trenderLists,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/views/listsViews.js?");

/***/ }),

/***/ "./src/views/navViews.js":
/*!*******************************!*\
  !*** ./src/views/navViews.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navViews\": () => (/* binding */ navViews)\n/* harmony export */ });\n/* harmony import */ var _indexViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexViews */ \"./src/views/indexViews.js\");\n/* harmony import */ var _usersViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersViews */ \"./src/views/usersViews.js\");\n/* harmony import */ var _authViews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authViews */ \"./src/views/authViews.js\");\n/* harmony import */ var _controllers_authControllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/authControllers */ \"./src/controllers/authControllers.js\");\n/* harmony import */ var _controllers_storageControllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/storageControllers */ \"./src/controllers/storageControllers.js\");\n\n\n\n\n\n\nconst navViews = (() => {\n\tlet storageObject = _controllers_storageControllers__WEBPACK_IMPORTED_MODULE_4__.storageControllers.load();\n\tlet indexButton = document.querySelector('#index-button');\n\tindexButton.addEventListener('click', (e) => {\n\t\t_indexViews__WEBPACK_IMPORTED_MODULE_0__.indexViews.checkLogin();\n\t});\n\n\tlet authButtonsContainer = document.querySelector('#auth-buttons-container');\n\n\tconst renderLoginButtons = () => {\n\t\tauthButtonsContainer.innerHTML = '';\n\n\t\tconst renderLoginButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.innerText = 'Login';\n\t\t\tbutton.id = 'login-button';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_authViews__WEBPACK_IMPORTED_MODULE_2__.authViews.renderLoginForm();\n\t\t\t});\n\t\t\treturn authButtonsContainer.appendChild(button);\n\t\t})();\n\t\tconst renderCreateUserButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'type';\n\t\t\tbutton.innerText = 'Signup';\n\t\t\tbutton.id = 'signup-button';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_usersViews__WEBPACK_IMPORTED_MODULE_1__.usersViews.renderCreateUserForm();\n\t\t\t});\n\t\t\treturn authButtonsContainer.appendChild(button);\n\t\t})();\n\t};\n\n\tconst renderLogoutButton = () => {\n\t\tauthButtonsContainer.innerHTML = '';\n\t\tlet button = document.createElement('button');\n\t\tbutton.type = 'button';\n\t\tbutton.innerText = 'Logout';\n\t\tbutton.id = 'logout-button';\n\t\tbutton.addEventListener('click', (e) => {\n\t\t\t_controllers_authControllers__WEBPACK_IMPORTED_MODULE_3__.authControllers.logout();\n\t\t});\n\t\tauthButtonsContainer.appendChild(button);\n\t};\n\n\tconst renderUserName = () => {\n\t\tlet todoHeader = document.querySelector('#todo-header');\n\t\ttodoHeader.innerText = `${storageObject.users.loggedInUser.name}'s lists`;\n\t};\n\n\treturn {\n\t\trenderLoginButtons,\n\t\trenderLogoutButton,\n\t\trenderUserName,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/views/navViews.js?");

/***/ }),

/***/ "./src/views/tasksViews.js":
/*!*********************************!*\
  !*** ./src/views/tasksViews.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasksViews\": () => (/* binding */ tasksViews)\n/* harmony export */ });\n/* harmony import */ var _controllers_storageControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/storageControllers */ \"./src/controllers/storageControllers.js\");\n/* harmony import */ var _controllers_usersControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/usersControllers */ \"./src/controllers/usersControllers.js\");\n/* harmony import */ var _controllers_tasksControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/tasksControllers */ \"./src/controllers/tasksControllers.js\");\n/* harmony import */ var _views_listsViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/listsViews */ \"./src/views/listsViews.js\");\n\n\n\n\n\nconst tasksViews = (() => {\n\tlet storageObject = _controllers_storageControllers__WEBPACK_IMPORTED_MODULE_0__.storageControllers.load();\n\n\tconst renderCreateTaskForms = () => {\n\t\tlet user = _controllers_usersControllers__WEBPACK_IMPORTED_MODULE_1__.usersControllers.find(storageObject.users.loggedInUser.email);\n\t\tfor (let i = 0; i < user.lists.length; i++) {\n\t\t\tlet list = document.querySelector(`#list-${user.lists[i].id}`);\n\t\t\tlet form = document.createElement('form');\n\t\t\tlist.appendChild(form);\n\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.placeholder = 'New task';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tform.appendChild(input);\n\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.innerText = 'Save';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_controllers_tasksControllers__WEBPACK_IMPORTED_MODULE_2__.tasksControllers.create(list.dataset, input.value.trim());\n\t\t\t\tinput.value = '';\n\t\t\t\t_views_listsViews__WEBPACK_IMPORTED_MODULE_3__.listsViews.renderLists();\n\t\t\t});\n\t\t\tform.appendChild(button);\n\t\t}\n\t};\n\n\tconst renderTasks = () => {\n\t\tlet user = _controllers_usersControllers__WEBPACK_IMPORTED_MODULE_1__.usersControllers.find(storageObject.users.loggedInUser.email);\n\t\tfor (let i = 0; i < user.lists.length; i++) {\n\t\t\tlet listContainer = document.querySelector(`#list-${user.lists[i].id}`);\n\t\t\tfor (let j = 0; j < user.lists[i].tasks.length; j++) {\n\t\t\t\tlet div = document.createElement('div');\n\t\t\t\tdiv.className = 'task-container';\n\n\t\t\t\tlet p = document.createElement('p');\n\t\t\t\tp.className = 'task-description-container';\n\t\t\t\tp.innerText = `${user.lists[i].tasks[j].description}`;\n\n\t\t\t\tlet button = document.createElement('button');\n\t\t\t\tbutton.type = 'button';\n\t\t\t\tbutton.className = 'task-destroy-button';\n\t\t\t\tbutton.innerText = 'x';\n\t\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t\t_controllers_tasksControllers__WEBPACK_IMPORTED_MODULE_2__.tasksControllers.destroy();\n\t\t\t\t});\n\t\t\t\tdiv.appendChild(p);\n\t\t\t\tdiv.appendChild(button);\n\t\t\t\tlistContainer.appendChild(div);\n\t\t\t}\n\t\t}\n\t};\n\n\treturn {\n\t\trenderCreateTaskForms,\n\t\trenderTasks,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/views/tasksViews.js?");

/***/ }),

/***/ "./src/views/usersViews.js":
/*!*********************************!*\
  !*** ./src/views/usersViews.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersViews\": () => (/* binding */ usersViews)\n/* harmony export */ });\n/* harmony import */ var _controllers_usersControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/usersControllers */ \"./src/controllers/usersControllers.js\");\n\n\nconst usersViews = (() => {\n\tconst main = document.querySelector('main');\n\n\tconst renderCreateUserForm = () => {\n\t\tmain.innerHTML = '';\n\t\tlet form = document.createElement('form');\n\t\tform.className = 'container';\n\t\tlet h1 = document.createElement('h1');\n\t\th1.innerText = 'Signup';\n\t\tform.appendChild(h1);\n\t\tmain.appendChild(form);\n\n\t\tconst renderNameInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'text';\n\t\t\tinput.id = 'user-create-name-input';\n\t\t\tinput.placeholder = 'Name';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tform.appendChild(input);\n\t\t\tform.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderEmailInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'text';\n\t\t\tinput.id = 'user-create-email-input';\n\t\t\tinput.placeholder = 'Email';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tform.appendChild(input);\n\t\t\tform.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderPasswordInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'password';\n\t\t\tinput.id = 'user-create-password-input';\n\t\t\tinput.placeholder = 'Password';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tform.appendChild(input);\n\t\t\tform.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderConfirmPasswordInput = (() => {\n\t\t\tlet input = document.createElement('input');\n\t\t\tinput.type = 'password';\n\t\t\tinput.id = 'user-create-confirm-password-input';\n\t\t\tinput.placeholder = 'Confirm password';\n\t\t\tinput.autocomplete = 'off';\n\t\t\tform.appendChild(input);\n\t\t\tform.appendChild(document.createElement('br'));\n\t\t})();\n\n\t\tconst renderSubmitButton = (() => {\n\t\t\tlet button = document.createElement('button');\n\t\t\tbutton.type = 'button';\n\t\t\tbutton.id = 'create-new-user-button';\n\t\t\tbutton.innerText = 'Submit';\n\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t_controllers_usersControllers__WEBPACK_IMPORTED_MODULE_0__.usersControllers.create(\n\t\t\t\t\tdocument.querySelector('#user-create-name-input').value.trim(),\n\t\t\t\t\tdocument.querySelector('#user-create-email-input').value.trim(),\n\t\t\t\t\tdocument.querySelector('#user-create-password-input').value.trim(),\n\t\t\t\t\tdocument\n\t\t\t\t\t\t.querySelector('#user-create-confirm-password-input')\n\t\t\t\t\t\t.value.trim()\n\t\t\t\t);\n\t\t\t});\n\t\t\tform.appendChild(button);\n\t\t})();\n\t};\n\n\treturn {\n\t\trenderCreateUserForm,\n\t};\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/views/usersViews.js?");

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