/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	var contentsArray = [];
	var fader = document.querySelector('.fader');

	var showFader = function showFader() {
		fader.classList.remove('hidden');
		history.pushState({ name: "show" }, "work", "#work");
	};

	var hideFader = function hideFader() {
		fader.classList.add('hidden');
		history.pushState({ name: "hide" }, "index", "/");
	};

	var removeContents = function removeContents(isFirstTime) {
		var contents = document.querySelectorAll('.works--item--content');
		for (var i = 0; i < contents.length; i++) {
			var el = contents[i];
			if (isFirstTime) contentsArray.push(el);
			el.parentNode.removeChild(el);
		}
	};
	removeContents(true);

	window.addEventListener('popstate', function (e) {
		hideFader();
		removeContents();
	});

	var covers = document.querySelectorAll('.works--item--cover');
	for (var a = 0; a < covers.length; a++) {

		var handler = function (target, num) {
			removeContents();
			target.parentNode.appendChild(contentsArray[num]);
			showFader();
			var closeBtn = document.querySelector('.works--item--content--close');
			closeBtn.addEventListener('click', function (event) {
				hideFader();
				removeContents();
			});
		}.bind(undefined, covers[a], a);

		covers[a].addEventListener('click', handler);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);