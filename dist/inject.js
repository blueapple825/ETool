"use strict";
function injectScript(src) {
    try {
        let tag = document.createElement("script");
        tag.setAttribute("src", src);
        document.getElementsByTagName("body")[0].appendChild(tag);
    }
    catch (e) {
    }
}
function injectCSS(src) {
    try {
        let tag = document.createElement("link");
        tag.setAttribute("rel", "stylesheet");
        tag.setAttribute("src", src);
        document.getElementsByTagName("body")[0].appendChild(tag);
    }
    catch (e) {
    }
}
injectScript(chrome.runtime.getURL("entrystory/entrystory.js"));
injectCSS(chrome.runtime.getURL("entrystory/entrystory.css"));
//# sourceMappingURL=inject.js.map