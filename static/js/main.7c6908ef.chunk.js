(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_React_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_React_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_React_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),C_React_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),C_React_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),AppContainer=function(_React$Component){function AppContainer(props){var _this;return Object(C_React_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,AppContainer),_this=Object(C_React_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_React_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(AppContainer).call(this,props)),_this.onNumButtonClick=function(t){_this.setState({fullOutput:_this.state.fullOutput+t.currentTarget.value,numOutput:_this.state.numOutput+t.currentTarget.value})},_this.onOpButtonClick=function(t){_this.setState({fullOutput:_this.state.fullOutput+t.currentTarget.value,numOutput:""})},_this.count=function(){var result=eval(_this.state.fullOutput).toString();"Infinity"===result||"-Infinity"===result||"NaN"===result?_this.setState({fullOutput:"",numOutput:"Error"}):_this.setState({fullOutput:result,numOutput:result})},_this.clear=function(){_this.setState({fullOutput:_this.state.fullOutput.slice(0,-1),numOutput:_this.state.numOutput.slice(0,-1)})},_this.clearEvery=function(){_this.setState({fullOutput:"",numOutput:""})},_this.state={fullOutput:"",numOutput:""},_this}return Object(C_React_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(AppContainer,_React$Component),Object(C_React_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(AppContainer,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_6__.a,{onNumButtonClick:this.onNumButtonClick,onOpButtonClick:this.onOpButtonClick,count:this.count,clear:this.clear,clearEvery:this.clearEvery,fullOutput:this.state.fullOutput,numOutput:this.state.numOutput})}}]),AppContainer}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=AppContainer},,,,function(t,e,_){"use strict";var a=_(0),u=_.n(a);_(16);e.a=function(t){var e=t.onNumButtonClick,_=t.onOpButtonClick,a=t.count,n=t.clear,l=t.clearEvery,c=t.fullOutput,o=t.numOutput;return u.a.createElement("div",{className:"App"},u.a.createElement("div",{className:"calculator"},u.a.createElement("div",null,u.a.createElement("div",{className:"outputBlock"},u.a.createElement("div",{className:"fullOutput"},c),u.a.createElement("div",{className:"numOutput"},o)),u.a.createElement("div",{className:"deleteBlock"},u.a.createElement("button",{className:"button",onClick:l},"CE"),u.a.createElement("button",{className:"button",onClick:n},"C"))),u.a.createElement("div",{className:"inputBlock"},u.a.createElement("button",{value:1,className:"button",onClick:e},"1"),u.a.createElement("button",{value:2,className:"button",onClick:e},"2"),u.a.createElement("button",{value:3,className:"button",onClick:e},"3"),u.a.createElement("button",{value:"+",className:"button",onClick:_},"+"),u.a.createElement("button",{value:4,className:"button",onClick:e},"4"),u.a.createElement("button",{value:5,className:"button",onClick:e},"5"),u.a.createElement("button",{value:6,className:"button",onClick:e},"6"),u.a.createElement("button",{value:"-",className:"button",onClick:_},"-"),u.a.createElement("button",{value:7,className:"button",onClick:e},"7"),u.a.createElement("button",{value:8,className:"button",onClick:e},"8"),u.a.createElement("button",{value:9,className:"button",onClick:e},"9"),u.a.createElement("button",{value:"*",className:"button",onClick:_},"*"),u.a.createElement("button",{value:0,className:"button",onClick:e},"0"),u.a.createElement("button",{value:".",className:"button",onClick:e},"."),u.a.createElement("button",{value:"=",className:"button",onClick:a},"="),u.a.createElement("button",{value:"/",className:"button",onClick:_},"/"))))}},,,function(t,e,_){t.exports=_(17)},,,,,function(t,e,_){},function(t,e,_){},function(t,e,_){"use strict";_.r(e);var a=_(0),u=_.n(a),n=_(2),l=_.n(n),c=(_(15),_(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(u.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7c6908ef.chunk.js.map