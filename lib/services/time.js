"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==_typeof(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}Object.defineProperty(exports,"__esModule",{value:!0}),exports.numberDayInYear=exports.getWeeksInMonth=exports.dayInMonth=exports.dayForWeek=void 0;var dayClass=["calendar-body-col"],calcCurDate=function(e,t){var r=(new Date).setHours(0,0,0,0),a=new Date(r).getMonth(),n=new Date(r).getFullYear();return{isCurDate:a==e&&n==t,curDate:r}},buildHolidayCal=function(e,t){var r=_toConsumableArray(e),a=_toConsumableArray(t);return a.map((function(e){return _toConsumableArray(e.map((function(e){var t=r.filter((function(t){return t.id==e.id}));return t.length?_objectSpread(_objectSpread({},e),{},{className:[].concat(_toConsumableArray(e.className),[t[0].class?t[0].class:"holiday"]),hint:[].concat(_toConsumableArray(e.hint),_toConsumableArray(t[0].hint))}):_objectSpread({},e)})))}))},dayForWeek=function(e,t,r,a,n){var o=[[]],i=calcCurDate(t,e),u=t-1<0?11:t-1,y=t+1>11?0:t+1;n.length&&(n=(n=n.filter((function(e){return e.month==t||e.month==u||e.month==y}))).map((function(e){return _objectSpread(_objectSpread({},e),{},{class:e.class?e.class:"",hint:e.hint?e.hint:[],id:new Date(e.year,e.month,e.day).setHours(0,0,0,0)})})));for(var c=1;c<=r;c++){var s,l=new Date(e,t,c),p="";l.setHours(0,0,0,0),p=0==l.getDay()||6==l.getDay()?"output":"",l.getTime()==i.curDate&&(p+=" curDate");var b=[];if(1==c&&l.getDay()!=a&&(b=_toConsumableArray(buildPrevNextDays(e,t,l.getDay(),a,"prev"))),0!=c&&l.getDay()==a&&o.push([]),b=[].concat(_toConsumableArray(b),[{id:l.getTime(),time:l.getTime(),day:l.getDate(),className:[].concat(dayClass,[p]),hint:[]}]),c==r&&l.getDay()<=6){var f=buildPrevNextDays(e,t,l.getDay(),a,"next");b=[].concat(_toConsumableArray(b),_toConsumableArray(f))}(s=o[o.length-1]).push.apply(s,_toConsumableArray(b))}return buildHolidayCal(n,o)};exports.dayForWeek=dayForWeek;var buildPrevNextDays=function(e,t,r,a,n){var o=[],i="prev"==n?r-a:6-r+a,u=calcCurDate("prev"==n?t-1<0?11:t-1:t+1>11?0:t+1,"prev"==n?t-1<0?e-1:e:t+1>11?+e+1:e);i="prev"==n?i<0?7-a:i:i=7==i?0:i;for(var y=0;y<i;y++){var c="prev"==n?new Date(e,t,-y):new Date(e,t+1,y+1);c.setHours(0,0,0,0);var s=0==c.getDay()||6==c.getDay()?"output":"";c.getTime()==u.curDate&&(s+=" curDate");var l={id:c.getTime(),time:c.getTime(),day:c.getDate(),className:[].concat(dayClass,["prev"==n?"prev":"next",s]),hint:[]};"prev"==n?o.unshift(_objectSpread({},l)):o.push(_objectSpread({},l))}return o},dayInMonth=function(e,t){return new Date(e,t+1,0).getDate()};exports.dayInMonth=dayInMonth;var numberDayInYear=function(e,t){var r=new Date(Number(t)),a=new Date(e-1,11,31);return(r.getTime()-a.getTime())/864e5};exports.numberDayInYear=numberDayInYear;var getWeeksInMonth=function(e,t){var r=new Date(e,t+1,0);return Math.ceil((r.getDate()-(r.getDay()?r.getDay():7))/7)+1};exports.getWeeksInMonth=getWeeksInMonth;