(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),o=n.n(r),i=(n(91),n(65),n(207),n(208)),a=n.n(i),u=n(277),l=n(194),s=(n(44),n(291),function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){var n,c,r,o;if("object"==typeof t)switch(t.type){case"Number":return Object.assign({},e,((n={})[t["field-name"]]=0,n));case"Radio":return Object.assign({},e,((c={})[t["field-name"]]=t.options?t.options[0]:"none-selected",c));case"Switch":return Object.assign({},e,((r={})[t["field-name"]]=!1,r));default:return Object.assign({},e)}return Object.assign({},e,((o={})[t]="",o))},{})}),d=(n(32),n(271),{name:"1pcy67z",styles:"display:flex;flex-direction:row;justify-content:space-around;width:50%;max-width:160px;"}),f={name:"17f0uop",styles:"display:flex;flex-direction:column;border-width:5px;padding-bottom:5%;justify-content:center;align-items:center;"},m={name:"qam1fx",styles:"text-align:center;align-self:center;"},b=function(e){var t=e.name,n=e.value,r=e.onChange;return Object(c.c)("div",{css:f},Object(c.c)("label",null,t),Object(c.c)("br",null),Object(c.c)("div",{css:d},Object(c.c)(l.a,{type:"button",onClick:function(){return parseInt(n)?r(parseInt(n)-1):""}},"-"),Object(c.c)("label",{css:m},n),Object(c.c)(l.a,{type:"button",onClick:function(){return parseInt(n)>=0?r(parseInt(n)+1):""}},"+")))},p={name:"38zrbw",styles:"padding:12px;"},j={name:"154oesw",styles:"display:inline-flex;vertical-align:middle;align-items:center;"},y={name:"1n2cue9",styles:"display:flex;margin:8px 0;flex-direction:column;"},O={name:"13brihr",styles:"text-align:left;"},g={name:"tj379f",styles:"display:inline-flex;position:relative;flex-direction:column;align-items:flex-start;width:100%;border:0;max-width:300px;align-self:center;"},h=function(e){return Object(c.c)("fieldset",{css:g},Object(c.c)("legend",{css:O},e.field.name),Object(c.c)("div",{css:y},e.options.map(function(t){return Object(c.c)("label",{css:j,key:t},Object(c.c)("span",{css:p},Object(c.c)("input",{onChange:e.field.onChange,name:e.field.name,value:t,type:"radio",checked:e.field.value===t})),t," ",Object(c.c)("br",null))})))},v={name:"jh3a5k",styles:"padding-bottom:15px;"},x=function(e){var t=e.fields,n=e.setFieldValue,r=e.values;return Object(c.c)(o.a.Fragment,null,t.filter(function(e){return"string"==typeof e}).map(function(e){return Object(c.c)("div",{css:v,key:e},Object(c.c)(u.a,{name:e,placeholder:e}),Object(c.c)("br",null))}),t.filter(function(e){return"object"==typeof e&&"Number"===e.type}).map(function(e){return"object"==typeof e?Object(c.c)(b,{value:r[e["field-name"]],onChange:function(t){return n(e["field-name"],t)},name:e["field-name"],key:e["field-name"]}):""}),t.filter(function(e){return"object"==typeof e&&"Radio"===e.type}).map(function(e){return"object"==typeof e?Object(c.c)(u.a,{component:h,name:e["field-name"],options:e.options,key:e["field-name"]}):""}))},w=n(17),k=n(176),N=Object(k.a)("div",{target:"e7h13rv0"})({name:"10creum",styles:"align-items:center;justify-content:center;background-color:rgba(0,0,0,0.65);display:flex;padding:1em;position:fixed;top:0;left:0;height:100%;width:100%;"}),S=Object(k.a)("div",{target:"e7h13rv1"})({name:"fsz7r7",styles:"background-color:white;border-radius:3px;padding:2rem 3rem;text-align:center;overflow:visible;max-height:100vh;overflow-y:auto;"});var C=function(e){var t=e.onClose,n=e.children,o=Object(r.useRef)(null);return function(e,t){Object(r.useEffect)(function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[])}(o,function(){return t()}),Object(r.useLayoutEffect)(function(){return document.body.style.overflow="hidden",function(){return document.body.style.overflow="visible"}},[]),Object(c.c)(N,null,Object(c.c)(S,{ref:o},n))},R={name:"1ummufm",styles:"margin:1rem 0;overflow:scroll;font-size:.65rem;flex-direction:column;"},E=function(e){var t=e.values;return Object(c.c)("table",{css:R},Object(c.c)("tbody",null,Object(c.c)("thead",null,Object(c.c)("tr",null,Object(c.c)("th",{scope:"col"},"Property"),Object(c.c)("th",{scope:"col"},"Value"))),Object.keys(t).map(function(e){return Object(c.c)("tr",{key:e},Object(c.c)("td",null,e),Object(c.c)("td",null,t[e]))})))},F=n(419),P=n.n(F);function z(){var e=a()(["\n                    margin-top: ",";\n                  "]);return z=function(){return e},e}function L(){var e=a()(["\n                  display: flex;\n                  flex-direction: column;\n                  justify-content: center;\n                  width: 100%;\n                "]);return L=function(){return e},e}function H(){var e=a()(["\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n              text-align: center;\n            "]);return H=function(){return e},e}var I=function(e){var t=e.fields,n=Object(r.useState)(!1),o=n[0],i=n[1];return Object(c.c)("div",null,Object(c.c)(u.b,{initialValues:s(t),onSubmit:function(e,t){P.a.post("https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbw6coSc3fptX7wLepvJ6idwzkEx9uZwxsKMhcfFuWCit-9WZJIO/exec",JSON.stringify(e)).then(function(e){return console.log("Request Success",e)}).catch(function(){return console.log("request failure")}).then(function(){t.setSubmitting(!1),t.resetForm(),i(!1)})}},function(e){return Object(c.c)("form",{onSubmit:e.handleSubmit,css:Object(c.b)(H())},Object.keys(t).map(function(n){return Object(c.c)("div",{css:Object(c.b)(L()),key:n},Object(c.c)("h2",{css:Object(c.b)(z(),Object(w.a)(1))},n),Object(c.c)(x,{fields:t[n],setFieldValue:e.setFieldValue,values:e.values}))}),Object(c.c)(l.a,{type:"button",onClick:function(){return i(!0)}},"Confirm"),o&&Object(c.c)(C,{onClose:function(){return i(!1)}},Object(c.c)("h1",null," Confirm "),Object(c.c)(E,{values:e.values}),e.isSubmitting?Object(c.c)("p",null," loading... "):Object(c.c)(l.a,{disabled:e.isSubmitting,type:"submit"},"Submit")))}))},J={"Pre-game":["Your Name",{"field-name":"Event Code",type:"Radio",options:["sfr","???"]},"Match Number",{"field-name":"Robot Starting Platform",type:"Radio",options:["level","non-level"]}],Sandstorm:[{"field-name":"Cross during Sandstorm",type:"Switch"},{"field-name":"Number of Hatch Panels(Sandstorm)",type:"Number"},{"field-name":"Number of Cargo(Sandstorm)",type:"Number"},{"field-name":"Number of Hatch Panels dropped(Sandstorm)",type:"Number"},{"field-name":"Number of Cargo dropped(Sandstorm)",type:"Number"}],Teleop:[{"field-name":"Number of Hatch Panels(Teleop)",type:"Number"},{"field-name":"Number of Cargo(Teleop)",type:"Number"},{"field-name":"Number of Hatch Panels dropped(Teleop)",type:"Number"},{"field-name":"Number of Cargo dropped(Teleop)",type:"Number"}],"End game":["Habitat Return","Rocket Completion","Robot Deadtime","Comments"]},T={name:"xi606m",styles:"text-align:center;"};t.default=function(){return Object(c.c)(o.a.Fragment,null,Object(c.c)("h1",{css:T},"Scouting Form"),Object(c.c)(I,{fields:J}))}},194:function(e,t,n){"use strict";var c=n(176),r=Object(c.a)("button",{target:"e4typar0"})("min-width:2rem;padding:6px 16px;box-shadow:0 8px 16px 0 rgba(0,0,0,0.1),0 6px 20px 0 rgba(0,0,0,0.09);border:2px solid ",function(e){return e.theme.primary.red},";border-radius:4px;outline:none;font-size:14px;text-decoration:none;background:none;color:#c41e3a;&:active{background-color:",function(e){return e.theme.primary.red},";color:white;}");t.a=r}}]);
//# sourceMappingURL=component---src-pages-scouting-form-tsx-aa51220d47fe13b7b0a1.js.map