module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/converter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/converter.js":
/*!****************************!*\
  !*** ./pages/converter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/abdel/ShaypTest/pages/converter.js\";\n\n\n\n\nconst converter = () => {\n  const {\n    0: choiceIn,\n    1: setChoiceIn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n  const {\n    0: choiceOut,\n    1: setChoiceOut\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n  const {\n    0: inputIn,\n    1: setInputIn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n  const {\n    0: result,\n    1: setResult\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null);\n  const {\n    isLoading,\n    error,\n    data\n  } = Object(react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])('listCoins', () => fetch('https://api.coinpaprika.com/v1/coins').then(res => res.json()).then(list => list.slice(0, 20)));\n  if (isLoading) return 'Loading...';\n  if (error) return 'An error has occurred: ' + error.message;\n\n  const handleSelectIn = e => {\n    setChoiceIn(e);\n  };\n\n  const resetAll = () => {\n    setChoiceIn(null);\n    setChoiceOut(null);\n    setInputIn(null);\n    setResult(null);\n  };\n\n  const computeValue = async () => {\n    const request = await fetch(`https://api.coinpaprika.com/v1/price-converter?base_currency_id=${choiceIn}&quote_currency_id=${choiceOut}&amount=${inputIn}`);\n    const response = await request.json();\n    setResult(response.price);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        onClick: resetAll,\n        variant: \"danger\",\n        children: \"Reset\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"], {\n        onSelect: handleSelectIn,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Toggle, {\n          variant: \"success\",\n          id: \"dropdown-basic\",\n          children: choiceIn ? choiceIn : 'Choix in'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 15\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Menu, {\n          children: data.map(e => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Item, {\n            eventKey: e.id,\n            children: e.id\n          }, e.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 34\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 15\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"InputGroup\"], {\n        className: \"mb-3\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"InputGroup\"].Prepend, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n          type: \"number\",\n          onChange: e => setInputIn(e.target.value),\n          value: inputIn,\n          \"aria-label\": \"Default\",\n          \"aria-describedby\": \"inputGroup-sizing-default\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"], {\n        onSelect: e => setChoiceOut(e),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Toggle, {\n          variant: \"success\",\n          id: \"dropdown-basic\",\n          children: choiceOut ? choiceOut : 'Choix out'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 15\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Menu, {\n          children: data.map(e => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"].Item, {\n            eventKey: e.id,\n            children: e.id\n          }, e.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 32\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 15\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }, undefined), result && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: result\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 25\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: choiceIn && choiceOut && inputIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        onClick: computeValue,\n        variant: \"danger\",\n        children: \"Change\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 50\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (converter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb252ZXJ0ZXIuanM/ZDczYyJdLCJuYW1lcyI6WyJjb252ZXJ0ZXIiLCJjaG9pY2VJbiIsInNldENob2ljZUluIiwidXNlU3RhdGUiLCJjaG9pY2VPdXQiLCJzZXRDaG9pY2VPdXQiLCJpbnB1dEluIiwic2V0SW5wdXRJbiIsInJlc3VsdCIsInNldFJlc3VsdCIsImlzTG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImxpc3QiLCJzbGljZSIsIm1lc3NhZ2UiLCJoYW5kbGVTZWxlY3RJbiIsImUiLCJyZXNldEFsbCIsImNvbXB1dGVWYWx1ZSIsInJlcXVlc3QiLCJyZXNwb25zZSIsInByaWNlIiwibWFwIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJGLHNEQUFRLENBQUMsSUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF5Qkosc0RBQVEsQ0FBQyxJQUFELENBQXZDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxDQUFDLElBQUQsQ0FBcEM7QUFHQSxRQUFNO0FBQUVPLGFBQUY7QUFBYUMsU0FBYjtBQUFvQkM7QUFBcEIsTUFBNkJDLDREQUFRLENBQUMsV0FBRCxFQUFjLE1BQ3ZEQyxLQUFLLENBQUMsc0NBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1FDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBRGYsRUFFR0YsSUFGSCxD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QVNOLENBQUMsaUJBQUkscUVBQUMsd0RBQUQsQ0FBVSxJQUFWO0FBQWUsb0JBQVEsRUFBRUEsQ0FBQyxDQUFDTyxFQUEzQjtBQUFBLHNCQUEyQ1AsQ0FBQyxDQUFDTztBQUE3QyxhQUFvQ1AsQ0FBQyxDQUFDTyxFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFTTXJCLE1BQU0saUJBQUk7QUFBQSxrQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJKLGVBbUNJO0FBQUEsZ0JBQ0lQLFFBQVEsSUFBSUcsU0FBWixJQUF5QkUsT0FBekIsaUJBQXFDLHFFQUFDLHNEQUFEO0FBQVEsZUFBTyxFQUFFa0IsWUFBakI7QUFBK0IsZUFBTyxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNENELENBN0VEOztBQStFZXhCLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udmVydGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcm9wZG93biwgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSdcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuY29uc3QgY29udmVydGVyID0gKCkgPT4ge1xuICBjb25zdCBbY2hvaWNlSW4sIHNldENob2ljZUluXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2hvaWNlT3V0LCBzZXRDaG9pY2VPdXRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbnB1dEluLCBzZXRJbnB1dEluIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cbiAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeSgnbGlzdENvaW5zJywgKCkgPT4gXG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5wYXByaWthLmNvbS92MS9jb2lucycpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGxpc3QgPT4gbGlzdC5zbGljZSgwLDIwKSlcbiAgKVxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gJ0xvYWRpbmcuLi4nXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gJ0FuIGVycm9yIGhhcyBvY2N1cnJlZDogJyArIGVycm9yLm1lc3NhZ2VcblxuICBjb25zdCBoYW5kbGVTZWxlY3RJbiA9IChlKSA9PiB7XG4gICAgc2V0Q2hvaWNlSW4oZSk7XG4gIH1cblxuICBjb25zdCByZXNldEFsbCA9ICgpID0+IHtcbiAgICBzZXRDaG9pY2VJbihudWxsKTtcbiAgICBzZXRDaG9pY2VPdXQobnVsbCk7XG4gICAgc2V0SW5wdXRJbihudWxsKTtcbiAgICBzZXRSZXN1bHQobnVsbCk7XG4gIH1cblxuICAgY29uc3QgY29tcHV0ZVZhbHVlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5jb2lucGFwcmlrYS5jb20vdjEvcHJpY2UtY29udmVydGVyP2Jhc2VfY3VycmVuY3lfaWQ9JHtjaG9pY2VJbn0mcXVvdGVfY3VycmVuY3lfaWQ9JHtjaG9pY2VPdXR9JmFtb3VudD0ke2lucHV0SW59YClcbiAgICAgIGNvbnN0IHJlc3BvbnNlID1hd2FpdCByZXF1ZXN0Lmpzb24oKVxuICAgICAgXG4gICAgICBzZXRSZXN1bHQocmVzcG9uc2UucHJpY2UpO1xuICAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Jlc2V0QWxsfSB2YXJpYW50PVwiZGFuZ2VyXCI+UmVzZXQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93biBvblNlbGVjdD17aGFuZGxlU2VsZWN0SW59PlxuICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJzdWNjZXNzXCIgaWQ9XCJkcm9wZG93bi1iYXNpY1wiPlxuICAgICAgICAgICAgICAgIHtjaG9pY2VJbiA/IGNob2ljZUluIDogJ0Nob2l4IGluJ31cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51ID5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChlID0+IDxEcm9wZG93bi5JdGVtIGV2ZW50S2V5PXtlLmlkfSBrZXk9e2UuaWR9PntlLmlkfTwvRHJvcGRvd24uSXRlbT4pfVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuUHJlcGVuZD5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0SW4oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0SW59XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiaW5wdXRHcm91cC1zaXppbmctZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxEcm9wZG93biAgb25TZWxlY3Q9eyhlKSA9PiBzZXRDaG9pY2VPdXQoZSl9PlxuICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJzdWNjZXNzXCIgaWQ9XCJkcm9wZG93bi1iYXNpY1wiPlxuICAgICAgICAgICAgICAgIHtjaG9pY2VPdXQgPyBjaG9pY2VPdXQgOiAnQ2hvaXggb3V0J31cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcChlID0+IDxEcm9wZG93bi5JdGVtIGV2ZW50S2V5PXtlLmlkfSBrZXk9e2UuaWR9PntlLmlkfTwvRHJvcGRvd24uSXRlbT4pfVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgeyByZXN1bHQgJiYgPGg0PnsgcmVzdWx0IH08L2g0PiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsgY2hvaWNlSW4gJiYgY2hvaWNlT3V0ICYmIGlucHV0SW4gJiYgIDxCdXR0b24gb25DbGljaz17Y29tcHV0ZVZhbHVlfSB2YXJpYW50PVwiZGFuZ2VyXCI+Q2hhbmdlPC9CdXR0b24+fVxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/converter.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-query\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiPzMwNmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-query\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });