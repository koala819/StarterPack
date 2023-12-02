"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-composed-ref@1.3.0_react@18.2.0";
exports.ids = ["vendor-chunks/use-composed-ref@1.3.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/use-composed-ref@1.3.0_react@18.2.0/node_modules/use-composed-ref/dist/use-composed-ref.cjs.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/use-composed-ref@1.3.0_react@18.2.0/node_modules/use-composed-ref/dist/use-composed-ref.cjs.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nvar updateRef = function updateRef(ref, value) {\n  if (typeof ref === 'function') {\n    ref(value);\n    return;\n  }\n  ref.current = value;\n};\n\nvar useComposedRef = function useComposedRef(libRef, userRef) {\n  var prevUserRef = React.useRef();\n  return React.useCallback(function (instance) {\n    libRef.current = instance;\n\n    if (prevUserRef.current) {\n      updateRef(prevUserRef.current, null);\n    }\n\n    prevUserRef.current = userRef;\n\n    if (!userRef) {\n      return;\n    }\n\n    updateRef(userRef, instance);\n  }, [userRef]);\n};\n\nexports[\"default\"] = useComposedRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdXNlLWNvbXBvc2VkLXJlZkAxLjMuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3VzZS1jb21wb3NlZC1yZWYvZGlzdC91c2UtY29tcG9zZWQtcmVmLmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELFlBQVksbUJBQU8sQ0FBQyxxS0FBTzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxrQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zZXR1cC8uL25vZGVfbW9kdWxlcy8ucG5wbS91c2UtY29tcG9zZWQtcmVmQDEuMy4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvdXNlLWNvbXBvc2VkLXJlZi9kaXN0L3VzZS1jb21wb3NlZC1yZWYuY2pzLmpzP2JjNWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgdXBkYXRlUmVmID0gZnVuY3Rpb24gdXBkYXRlUmVmKHJlZiwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWYodmFsdWUpO1xuICAgIHJldHVybjtcbiAgfVxuICByZWYuY3VycmVudCA9IHZhbHVlO1xufTtcblxudmFyIHVzZUNvbXBvc2VkUmVmID0gZnVuY3Rpb24gdXNlQ29tcG9zZWRSZWYobGliUmVmLCB1c2VyUmVmKSB7XG4gIHZhciBwcmV2VXNlclJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgbGliUmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcblxuICAgIGlmIChwcmV2VXNlclJlZi5jdXJyZW50KSB7XG4gICAgICB1cGRhdGVSZWYocHJldlVzZXJSZWYuY3VycmVudCwgbnVsbCk7XG4gICAgfVxuXG4gICAgcHJldlVzZXJSZWYuY3VycmVudCA9IHVzZXJSZWY7XG5cbiAgICBpZiAoIXVzZXJSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVSZWYodXNlclJlZiwgaW5zdGFuY2UpO1xuICB9LCBbdXNlclJlZl0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdXNlQ29tcG9zZWRSZWY7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/use-composed-ref@1.3.0_react@18.2.0/node_modules/use-composed-ref/dist/use-composed-ref.cjs.js\n");

/***/ })

};
;