"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@nextui-org+use-aria-toggle-button@2.0.6_react@18.2.0";
exports.ids = ["vendor-chunks/@nextui-org+use-aria-toggle-button@2.0.6_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@nextui-org+use-aria-toggle-button@2.0.6_react@18.2.0/node_modules/@nextui-org/use-aria-toggle-button/dist/index.mjs":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nextui-org+use-aria-toggle-button@2.0.6_react@18.2.0/node_modules/@nextui-org/use-aria-toggle-button/dist/index.mjs ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAriaToggleButton: () => (/* binding */ useAriaToggleButton)\n/* harmony export */ });\n/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/utils */ \"(ssr)/./node_modules/.pnpm/@react-aria+utils@3.22.0_react@18.2.0/node_modules/@react-aria/utils/dist/import.mjs\");\n/* harmony import */ var _nextui_org_use_aria_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextui-org/use-aria-button */ \"(ssr)/./node_modules/.pnpm/@nextui-org+use-aria-button@2.0.6_react@18.2.0/node_modules/@nextui-org/use-aria-button/dist/index.mjs\");\n// src/index.ts\n\n\n\nfunction useAriaToggleButton(props, state, ref) {\n  const { isSelected } = state;\n  const { isPressed, buttonProps } = (0,_nextui_org_use_aria_button__WEBPACK_IMPORTED_MODULE_0__.useAriaButton)(\n    {\n      ...props,\n      onPress: (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.chain)(state.toggle, props.onPress)\n    },\n    ref\n  );\n  return {\n    isPressed,\n    buttonProps: (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(buttonProps, {\n      \"aria-pressed\": isSelected\n    })\n  };\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG5leHR1aS1vcmcrdXNlLWFyaWEtdG9nZ2xlLWJ1dHRvbkAyLjAuNl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BuZXh0dWktb3JnL3VzZS1hcmlhLXRvZ2dsZS1idXR0b24vZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDMEM7QUFDSztBQUNhO0FBQzVEO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCLFVBQVUseUJBQXlCLEVBQUUsMEVBQWE7QUFDbEQ7QUFDQTtBQUNBLGVBQWUsd0RBQUs7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZEQUFVO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFHRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zZXR1cC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AbmV4dHVpLW9yZyt1c2UtYXJpYS10b2dnbGUtYnV0dG9uQDIuMC42X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQG5leHR1aS1vcmcvdXNlLWFyaWEtdG9nZ2xlLWJ1dHRvbi9kaXN0L2luZGV4Lm1qcz85NTYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9pbmRleC50c1xuaW1wb3J0IHsgY2hhaW4gfSBmcm9tIFwiQHJlYWN0LWFyaWEvdXRpbHNcIjtcbmltcG9ydCB7IG1lcmdlUHJvcHMgfSBmcm9tIFwiQHJlYWN0LWFyaWEvdXRpbHNcIjtcbmltcG9ydCB7IHVzZUFyaWFCdXR0b24gfSBmcm9tIFwiQG5leHR1aS1vcmcvdXNlLWFyaWEtYnV0dG9uXCI7XG5mdW5jdGlvbiB1c2VBcmlhVG9nZ2xlQnV0dG9uKHByb3BzLCBzdGF0ZSwgcmVmKSB7XG4gIGNvbnN0IHsgaXNTZWxlY3RlZCB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgaXNQcmVzc2VkLCBidXR0b25Qcm9wcyB9ID0gdXNlQXJpYUJ1dHRvbihcbiAgICB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIG9uUHJlc3M6IGNoYWluKHN0YXRlLnRvZ2dsZSwgcHJvcHMub25QcmVzcylcbiAgICB9LFxuICAgIHJlZlxuICApO1xuICByZXR1cm4ge1xuICAgIGlzUHJlc3NlZCxcbiAgICBidXR0b25Qcm9wczogbWVyZ2VQcm9wcyhidXR0b25Qcm9wcywge1xuICAgICAgXCJhcmlhLXByZXNzZWRcIjogaXNTZWxlY3RlZFxuICAgIH0pXG4gIH07XG59XG5leHBvcnQge1xuICB1c2VBcmlhVG9nZ2xlQnV0dG9uXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@nextui-org+use-aria-toggle-button@2.0.6_react@18.2.0/node_modules/@nextui-org/use-aria-toggle-button/dist/index.mjs\n");

/***/ })

};
;