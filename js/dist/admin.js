module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([,,function(t,e){t.exports=flarum.core.compat["components/ExtensionPage"]},function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.r(e);var r=n(2),a="miniflar-sidenav-download-button.admin.",i=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,o(e,n);var i=r.prototype;return i.content=function(){return[m("div",{className:"sideNavButtonPage container"},m("fieldset",{className:"sideNavButtonPage fieldset"},m("div",{className:"sideNavButtonPage-input"},m("legend",null,app.translator.trans(a+"settings.button_order_heading")),m("div",{className:"helpText"},app.translator.trans(a+"settings.button_order_text")),this.buildSettingComponent({type:"number",setting:"miniflar-sidenav-download-button.button_order",placeholder:"https://example.com"}),m("legend",null,app.translator.trans(a+"settings.button_link_heading")),m("div",{className:"helpText"},app.translator.trans(a+"settings.button_link_text")),this.buildSettingComponent({type:"url",setting:"miniflar-sidenav-download-button.link",placeholder:"https://example.com"})),this.submitButton()))]},i.saveSettings=function(e){e.preventDefault();/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(this.settings["miniflar-sidenav-download-button.link"]())?t.prototype.saveSettings.call(this,e):alert(app.translator.trans(a+"settings.enter_link_message"))},r}(n.n(r).a);app.initializers.add("miniflar/sidenav-download-button",(function(){app.extensionData.for("miniflar-sidenav-download-button").registerPage(i).registerPermission({icon:"fas fa-eye",label:app.translator.trans("miniflar-sidenav-download-button.admin.permissions.view_download_button_label"),permission:"miniflar-sidenav-download-button.viewDownloadButton",allowGuest:!0},"view")}))}]);
//# sourceMappingURL=admin.js.map