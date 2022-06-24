"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
function uploadImage(file) {
    var data = new FormData(); //뭔진 모르지만 하라니까 선언
    data.append("file", file); //파일 데이터 추가
    data.append("type", "notcompress"); //뭔진 모르지만 둣1교에서 이미지 할때 넣어야 하는거 1
    data.append("generateThumb", "true"); //뭔진 모르지만 둣1교에서 이미지 할때 넣어야 하는거 2
    fetch("https://playentry.org/rest/picture", {
        "headers": {},
        "body": data,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
}
exports.uploadImage = uploadImage;
//# sourceMappingURL=Fetchs.js.map