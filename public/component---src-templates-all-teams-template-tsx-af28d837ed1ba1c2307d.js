(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(e,t,r){"use strict";r.r(t);r(278);var n=r(1),a=r(0),o=r.n(a),i=r(204);t.default=function(e){var t=e.pageContext.teams;return Object(n.c)("div",null,Object(n.c)("h1",null,"Teams"),Object(n.c)("h2",null," SVR"),t.svr.map(function(e){return Object(n.c)(o.a.Fragment,{key:e.team_number},Object(n.c)(i.a,{to:"teams/"+e.team_number.toString()},e.team_number),Object(n.c)("br",null))}),Object(n.c)("h2",null,"SFR"),t.sfr.map(function(e){return Object(n.c)(o.a.Fragment,{key:e.team_number},Object(n.c)(i.a,{to:"teams/"+e.team_number.toString()},e.team_number),Object(n.c)("br",null))}))}},176:function(e,t,r){"use strict";var n=r(0),a=r(182),o=r(31),i=r.n(o),s=r(1),l=r(20),c=r(16),u=a.a,d=function(e){return"theme"!==e&&"innerRef"!==e},p=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?u:d};t.a=function e(t,r){var a,o,u;void 0!==r&&(a=r.label,u=r.target,o=t.__emotion_forwardProp&&r.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var d=t.__emotion_real===t,m=d&&t.__emotion_base||t;"function"!=typeof o&&d&&(o=t.__emotion_forwardProp);var f=o||p(m),g=!f("as");return function(){var h=arguments,y=d&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&y.push("label:"+a+";"),null==h[0]||void 0===h[0].raw)y.push.apply(y,h);else{y.push(h[0][0]);for(var v=h.length,b=1;b<v;b++)y.push(h[b],h[0][b])}var k=Object(s.d)(function(e,t,r){return Object(n.createElement)(s.a.Consumer,null,function(a){var i=g&&e.as||m,s="",d=[],h=e;if(null==e.theme){for(var v in h={},e)h[v]=e[v];h.theme=a}"string"==typeof e.className&&(s+=Object(l.a)(t.registered,d,e.className));var b=Object(c.a)(y.concat(d),t.registered,h);Object(l.b)(t,b,"string"==typeof i),s+=t.key+"-"+b.name,void 0!==u&&(s+=" "+u);var k=g&&void 0===o?p(i):f,x={};for(var _ in e)g&&"as"===_||k(_)&&(x[_]=e[_]);return x.className=s,x.ref=r||e.innerRef,Object(n.createElement)(i,x)})});return k.displayName=void 0!==a?a:"Styled("+("string"==typeof m?m:m.displayName||m.name||"Component")+")",k.defaultProps=t.defaultProps,k.__emotion_real=k,k.__emotion_base=m,k.__emotion_styles=y,k.__emotion_forwardProp=o,Object.defineProperty(k,"toString",{value:function(){return"."+u}}),k.withComponent=function(t,n){return e(t,void 0!==n?i()({},r||{},n):r).apply(void 0,y)},k}}},182:function(e,t,r){"use strict";var n=r(67),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=Object(n.a)(function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91});t.a=o},204:function(e,t,r){"use strict";var n=r(176),a=r(23);t.a=Object(n.a)(a.Link,{target:"e1ux9yx30"})("color:",function(e){return e.theme.shadow.light},";&:active{color:",function(e){return e.theme.shadow.dark},";}")},278:function(e,t,r){"use strict";r(279);var n=r(6),a=r(93),o=r(22),i=/./.toString,s=function(e){r(25)(RegExp.prototype,"toString",e,!0)};r(34)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?s(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?a.call(e):void 0)}):"toString"!=i.name&&s(function(){return i.call(this)})},279:function(e,t,r){r(22)&&"g"!=/./g.flags&&r(33).f(RegExp.prototype,"flags",{configurable:!0,get:r(93)})}}]);
//# sourceMappingURL=component---src-templates-all-teams-template-tsx-af28d837ed1ba1c2307d.js.map