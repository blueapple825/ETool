"use strict";
function inject(src) {
    try {
        let tag = document.createElement("script");
        tag.setAttribute("src", src);
        document.body.appendChild(tag);
    }
    catch (e) {
    }
}
inject(chrome.runtime.getURL("entrystory/entrystory.js"));
//# sourceMappingURL=inject.js.map