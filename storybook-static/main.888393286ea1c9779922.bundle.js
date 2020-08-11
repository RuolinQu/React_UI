(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return MenuContext}));var G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(44),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(51),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),MenuContext=Object(react__WEBPACK_IMPORTED_MODULE_1__.createContext)({index:"0"}),Menu=function Menu(props){var className=props.className,mode=props.mode,style=props.style,children=props.children,defaultIndex=props.defaultIndex,onSelect=props.onSelect,defaultOpenSubMenus=props.defaultOpenSubMenus,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultIndex),_useState2=Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),currentActive=_useState2[0],setActive=_useState2[1],classes=classnames__WEBPACK_IMPORTED_MODULE_2___default()("bomber-menu",className,{"menu-vertical":"vertical"===mode,"menu-horizontal":"vertical"!==mode}),passedContext={index:currentActive||"0",onSelect:function handleClick(index){setActive(index),onSelect&&onSelect(index)},mode:mode,defaultOpenSubMenus:defaultOpenSubMenus};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:classes,style:style},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuContext.Provider,{value:passedContext},function renderChildren(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children,(function(child,index){var childElement=child,displayName=childElement.type.displayName;if("MenuItem"===displayName||"SubMenu"===displayName)return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(childElement,{index:index.toString()});console.error("Warning: Menu has a child which is not a MenuItem component")}))}()))};Menu.defaultProps={defaultIndex:"0",mode:"horizontal",defaultOpenSubMenus:[]},__webpack_exports__.b=Menu},1249:function(module,exports,__webpack_require__){},1250:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Welcome page",module).add("welcome",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Welcome to Bomber UI"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Bomber is UI framework contains a set of components for building rich, interactive user interfaces"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://github.com/RuolinQu/favicon/blob/master/joker.png?raw=true"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Try install"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"npm install bonusbomber --save"))}),{info:{disable:!0}})}.call(this,__webpack_require__(97)(module))},1251:function(module,exports,__webpack_require__){var map={"./AutoComplete/autoComplete.stories.tsx":1252,"./Button/button.stories.tsx":1265,"./Input/input.stories.tsx":1266,"./Menu/menu.stories.tsx":1267,"./Upload/upload.stories.tsx":1268};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1251},1252:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(141),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(77),_autoComplete__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(432);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("AutoComplete Component",module).add("AutoComplete",(function SimpleComplete(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_autoComplete__WEBPACK_IMPORTED_MODULE_4__.a,{fetchSuggestions:function handleFetch(query){return fetch("https://api.github.com/search/users?q=".concat(query)).then((function(res){return res.json()})).then((function(_ref){var items=_ref.items;return console.log(items),items.slice(0,10).map((function(item){return Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({value:item.login},item)}))}))},onSelect:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("selected"),renderOption:function renderOption(item){var itemWithGithub=item;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"Name: ",itemWithGithub.value),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"url: ",itemWithGithub.url))}})}))}.call(this,__webpack_require__(97)(module))},1265:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(77),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button Component",module).add("default Button",(function defaultButton(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"default button")})).add("different sizes",(function buttonWithSize(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{size:"lg"},"Large button"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{size:"sm"},"Small button"))})).add("different types",(function buttonWithType(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{btnType:"primary"},"Primary Button"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{btnType:"danger"},"Danger Button"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{btnType:"link",href:"http://google.com"},"Link button"))}))}.call(this,__webpack_require__(97)(module))},1266:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(44),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(77),_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(59),ControlledInput=function ControlledInput(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(),_useState2=Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),value=_useState2[0],setValue=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.a,{value:value,defaultValue:value,onChange:function onChange(e){setValue(e.target.value)}})};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Input component",module).add("Input",(function defaultInput(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.a,{style:{width:"300px"},placeholder:"placeholder",onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("changed")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ControlledInput,null))})).add("被禁用的 Input",(function disabledInput(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.a,{style:{width:"300px"},placeholder:"disabled input",disabled:!0})})).add("带图标的 Input",(function iconInput(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.a,{style:{width:"300px"},placeholder:"input with icon",icon:"search"})})).add("大小不同的 Input",(function sizeInput(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.a,{style:{width:"300px"},defaultValue:"large size",size:"lg"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.a,{style:{width:"300px"},placeholder:"small size",size:"sm"}))})).add("带前后缀的 Input",(function pandInput(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.a,{style:{width:"300px"},defaultValue:"prepend text",prepend:"https://"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_4__.a,{style:{width:"300px"},defaultValue:"google",append:".com"}))}))}.call(this,__webpack_require__(97)(module))},1267:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35),_menuItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25),_menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(118);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Menu Component",module).add("default Menu",(function defaultMenu(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_3__.b,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Mon"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Tues"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Wed"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Thur"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Fri"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Sat"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Sun")))})).add("verticle Menu",(function verticleMenu(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_3__.b,{mode:"vertical"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Mon"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Tues"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Wed"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Thur"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Fri"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Sat"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Sun")))})).add("disabled Item",(function disableMenu(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_3__.b,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Mon"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Tues"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Wed"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Thur"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,null,"Fri"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,{disabled:!0},"Sat"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menuItem__WEBPACK_IMPORTED_MODULE_2__.a,{disabled:!0},"Sun")))}))}.call(this,__webpack_require__(97)(module))},1268:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(77),_upload__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(434),defaultFileList=[{uid:"123",size:1234,name:"hello.md",status:"uploading",percent:30},{uid:"122",size:1234,name:"xyz.md",status:"success",percent:30},{uid:"121",size:1234,name:"eyiha.md",status:"error",percent:30}];Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Upload component",module).add("Upload",(function SimpleUpload(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_upload__WEBPACK_IMPORTED_MODULE_3__.a,{action:"https://jsonplaceholder.typicode.com/posts/",onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("change"),defaultFileList:defaultFileList,onRemove:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("removed")})}))}.call(this,__webpack_require__(97)(module))},25:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(51),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(118),MenuItem=function MenuItem(props){var index=props.index,disabled=props.disabled,className=props.className,style=props.style,children=props.children,context=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_menu__WEBPACK_IMPORTED_MODULE_2__.a),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("menu-item",className,{"is-disabled":disabled,"is-active":context.index===index});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:classes,style:style,onClick:function handleClick(){context.onSelect&&!disabled&&"string"==typeof index&&context.onSelect(index)}},children)};MenuItem.displayName="MenuItem",__webpack_exports__.a=MenuItem},432:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return autoComplete_AutoComplete}));var slicedToArray=__webpack_require__(44),objectWithoutProperties=__webpack_require__(65),react=__webpack_require__(0),react_default=__webpack_require__.n(react),classnames=__webpack_require__(51),classnames_default=__webpack_require__.n(classnames),input=__webpack_require__(59),icon=__webpack_require__(67),CSSTransition=__webpack_require__(1291),transition_Transition=function Transition(props){var children=props.children,classNames=props.classNames,animation=props.animation,wrapper=props.wrapper,restProps=Object(objectWithoutProperties.a)(props,["children","classNames","animation","wrapper"]);return react_default.a.createElement(CSSTransition.a,Object.assign({classNames:classNames||animation},restProps),wrapper?react_default.a.createElement("div",null,children):children)};transition_Transition.defaultProps={unmountOnExit:!0,appear:!0};var transition=transition_Transition;var hooks_useDebounce=function useDebounce(value){var delay=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,_useState=Object(react.useState)(value),_useState2=Object(slicedToArray.a)(_useState,2),debouncedValue=_useState2[0],setDebouncedValue=_useState2[1];return Object(react.useEffect)((function(){var handler=window.setTimeout((function(){setDebouncedValue(value)}),delay);return function(){clearTimeout(handler)}}),[value,delay]),debouncedValue};var hooks_useClickOutside=function useClickOutside(ref,handler){Object(react.useEffect)((function(){var listener=function listener(event){ref.current&&!ref.current.contains(event.target)&&handler(event)};return document.addEventListener("click",listener),function(){document.removeEventListener("click",listener)}}),[ref,handler])},autoComplete_AutoComplete=function AutoComplete(props){var fetchSuggestions=props.fetchSuggestions,onSelect=props.onSelect,value=props.value,renderOption=props.renderOption,restProps=Object(objectWithoutProperties.a)(props,["fetchSuggestions","onSelect","value","renderOption"]),_useState=Object(react.useState)(value),_useState2=Object(slicedToArray.a)(_useState,2),inputValue=_useState2[0],setInputValue=_useState2[1],_useState3=Object(react.useState)([]),_useState4=Object(slicedToArray.a)(_useState3,2),suggestions=_useState4[0],setSugestions=_useState4[1],_useState5=Object(react.useState)(!1),_useState6=Object(slicedToArray.a)(_useState5,2),loading=_useState6[0],setLoading=_useState6[1],_useState7=Object(react.useState)(!1),_useState8=Object(slicedToArray.a)(_useState7,2),showDropdown=_useState8[0],setShowDropdown=_useState8[1],_useState9=Object(react.useState)(-1),_useState10=Object(slicedToArray.a)(_useState9,2),highlightIndex=_useState10[0],setHighlightIndex=_useState10[1],triggerSearch=Object(react.useRef)(!1),componentRef=Object(react.useRef)(null),debouncedValue=hooks_useDebounce(inputValue,300);hooks_useClickOutside(componentRef,(function(){setSugestions([])})),Object(react.useEffect)((function(){if(debouncedValue&&triggerSearch.current){setSugestions([]);var results=fetchSuggestions(debouncedValue);results instanceof Promise?(setLoading(!0),results.then((function(data){setLoading(!1),setSugestions(data),data.length>0&&setShowDropdown(!0)}))):(setSugestions(results),setShowDropdown(!0),results.length>0&&setShowDropdown(!0))}else setShowDropdown(!1);setHighlightIndex(-1)}),[debouncedValue,fetchSuggestions]);var highlight=function highlight(index){index<0&&(index=0),index>=suggestions.length&&(index=suggestions.length-1),setHighlightIndex(index)},handleSelect=function handleSelect(item){setInputValue(item.value),setShowDropdown(!1),onSelect&&onSelect(item),triggerSearch.current=!1};return react_default.a.createElement("div",{className:"bomber-auto-complete",ref:componentRef},react_default.a.createElement(input.b,Object.assign({value:inputValue,onChange:function handleChange(e){var value=e.target.value.trim();setInputValue(value),triggerSearch.current=!0},onKeyDown:function handleKeyDown(e){switch(e.keyCode){case 13:suggestions[highlightIndex]&&handleSelect(suggestions[highlightIndex]);break;case 38:highlight(highlightIndex-1);break;case 40:highlight(highlightIndex+1);break;case 27:setShowDropdown(!1)}}},restProps)),function generateDropdown(){return react_default.a.createElement(transition,{in:showDropdown||loading,animation:"zoom-in-top",timeout:300,onExited:function onExited(){setSugestions([])}},react_default.a.createElement("ul",{className:"bomber-suggestion-list"},loading&&react_default.a.createElement("div",{className:"suggstions-loading-icon"},react_default.a.createElement(icon.a,{icon:"spinner",spin:!0})),suggestions.map((function(item,index){var cnames=classnames_default()("suggestion-item",{"is-active":index===highlightIndex});return react_default.a.createElement("li",{key:index,className:cnames,onClick:function onClick(){return handleSelect(item)}},function renderTemplate(item){return renderOption?renderOption(item):item.value}(item))}))))}())}},434:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return upload_Upload}));var toConsumableArray=__webpack_require__(433),objectSpread2=__webpack_require__(141),slicedToArray=__webpack_require__(44),react=__webpack_require__(0),react_default=__webpack_require__.n(react),axios=__webpack_require__(431),axios_default=__webpack_require__.n(axios),icon=__webpack_require__(67),uploadList=function UploadList(props){var fileList=props.fileList,onRemove=props.onRemove;return react_default.a.createElement("ul",{className:"viking-upload-list"},fileList.map((function(item){return react_default.a.createElement("li",{className:"bomber-upload-list-item",key:item.uid},react_default.a.createElement("span",{className:"file-name file-name-".concat(item.status)},react_default.a.createElement(icon.a,{icon:"file-alt",theme:"secondary"}),item.name),react_default.a.createElement("span",{className:"file-status"},("uploading"===item.status||"ready"===item.status)&&react_default.a.createElement(icon.a,{icon:"spinner",spin:!0,theme:"primary"}),"success"===item.status&&react_default.a.createElement(icon.a,{icon:"check-circle",theme:"success"}),"error"===item.status&&react_default.a.createElement(icon.a,{icon:"times-circle",theme:"danger"})),react_default.a.createElement("span",{className:"file-actions"},react_default.a.createElement(icon.a,{icon:"times",onClick:function onClick(){onRemove(item)}})),"uploading"===item.status)})))},Button_button=__webpack_require__(80),upload_Upload=function Upload(props){var action=props.action,defaultFileList=props.defaultFileList,beforeUpload=props.beforeUpload,onProgress=props.onProgress,onSuccess=props.onSuccess,onError=props.onError,onChange=props.onChange,onRemove=props.onRemove,_useState=Object(react.useState)(defaultFileList||[]),_useState2=Object(slicedToArray.a)(_useState,2),fileList=_useState2[0],setFileList=_useState2[1],fileInput=Object(react.useRef)(null),updateFileList=function updateFileList(updateFile,updateObj){setFileList((function(prevList){return prevList.map((function(file){return file.uid===updateFile.uid?Object(objectSpread2.a)(Object(objectSpread2.a)({},file),updateObj):file}))}))},uploadFiles=function uploadFiles(files){Array.from(files).forEach((function(file){if(beforeUpload){var result=beforeUpload(file);result&&result instanceof Promise?result.then((function(processdFile){post(processdFile)})):!1!==result&&post(file)}else post(file)}))},post=function post(file){var _file={uid:Date.now()+"upload-file",status:"ready",name:file.name,size:file.size,percent:0,raw:file};setFileList([_file].concat(Object(toConsumableArray.a)(fileList)));var formData=new FormData;formData.append(file.name,file),axios_default.a.post(action,formData,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function onUploadProgress(e){var percentage=Math.round(100*e.loaded/e.total)||0;percentage<100&&(updateFileList(_file,{percent:percentage,status:"uploading"}),onProgress&&onProgress(percentage,file))}}).then((function(resp){updateFileList(_file,{status:"success",response:resp.data}),onSuccess&&onSuccess(resp.data,file),onChange&&onChange(file)})).catch((function(err){updateFileList(_file,{status:"error",error:err}),onError&&onError(err,file),onChange&&onChange(file)}))};return console.log(fileList),react_default.a.createElement("div",{className:"bomber-upload-component"},react_default.a.createElement(Button_button.a,{btnType:"primary",onClick:function handleClick(){fileInput.current&&fileInput.current.click()}},"Upload File"),react_default.a.createElement("input",{className:"bomber-file-input",style:{display:"none"},ref:fileInput,onChange:function handleFileChange(e){var files=e.target.files;files&&(uploadFiles(files),fileInput.current&&(fileInput.current.value=""))},type:"file"}),react_default.a.createElement(uploadList,{fileList:fileList,onRemove:function handleRemove(file){setFileList((function(prevList){return prevList.filter((function(item){return item.uid!==file.uid}))})),onRemove&&onRemove(file)}}))}},436:function(module,exports,__webpack_require__){__webpack_require__(437),__webpack_require__(584),module.exports=__webpack_require__(585)},501:function(module,exports){},585:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(415),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(140),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(429);__webpack_require__(1249);_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__.b.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.a);var wrapperStyle={padding:"20px 40px"};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)((function storyWrapper(stroyFn){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:wrapperStyle},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3",null,"Component Intro"),stroyFn())})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__.withInfo),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({info:{inline:!0,header:!1}});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loaderFn(){var allExports=[__webpack_require__(1250)],req=__webpack_require__(1251);return req.keys().forEach((function(fname){return allExports.push(req(fname))})),allExports}),module)}.call(this,__webpack_require__(97)(module))},59:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Input}));var G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45),G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(51),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),_Icon_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(67),Input=function Input(props){var _classNames,disabled=props.disabled,size=props.size,icon=props.icon,prepend=props.prepend,style=props.style,append=props.append,restProps=Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(props,["disabled","size","icon","prepend","style","append"]),clName=classnames__WEBPACK_IMPORTED_MODULE_3___default()("bomber-input-wrapper",(_classNames={},Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"input-size-".concat(size),size),Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"is-disabled",disabled),Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"input-group",prepend||append),Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"input-group-append",!!append),Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"input-group-prepend",!!prepend),_classNames));return"value"in props&&(delete restProps.defaultValue,restProps.value=function fixControlledValue(value){return null==value?"":value}(props.value)),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:clName,style:style},prepend&&react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"bomber-input-group-prepend"},prepend),icon&&react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"icon-wrapper"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Icon_icon__WEBPACK_IMPORTED_MODULE_4__.a,{icon:icon,title:"title-".concat(icon)})),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",Object.assign({className:"bomber-input-inner",disabled:disabled},restProps)),append&&react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"bomber-input-group-append"},append))};__webpack_exports__.b=Input},67:function(module,__webpack_exports__,__webpack_require__){"use strict";var G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45),G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(51),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(430);__webpack_exports__.a=function Icon(props){var className=props.className,theme=props.theme,restProps=Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(props,["className","theme"]),classes=classnames__WEBPACK_IMPORTED_MODULE_3___default()("bomber-icon",className,Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)({},"icon-".concat(theme),theme));return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({className:classes},restProps))}},767:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":369,"./nestedObjectAssign.js":369};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=767},80:function(module,__webpack_exports__,__webpack_require__){"use strict";var G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45),G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(51),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),Button=function Button(props){var _classNames,btnType=props.btnType,className=props.className,disabled=props.disabled,size=props.size,children=props.children,href=props.href,restProps=Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(props,["btnType","className","disabled","size","children","href"]),classes=classnames__WEBPACK_IMPORTED_MODULE_3___default()("btn",className,(_classNames={},Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"btn-".concat(btnType),btnType),Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"btn-".concat(size),size),Object(G_vscode_bonusbomber_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"disabled","link"===btnType&&disabled),_classNames));return"link"===btnType&&href?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a",Object.assign({className:classes,href:href},restProps),children):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",Object.assign({},restProps,{className:classes,disabled:disabled}),children)};Button.defaultProps={disabled:!1,btnType:"default"},__webpack_exports__.a=Button}},[[436,1,2]]]);
//# sourceMappingURL=main.888393286ea1c9779922.bundle.js.map