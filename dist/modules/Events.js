"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopEvent = void 0;
const stopEvent = function (e) { e.preventDefault(); e.stopPropagation(); return false; }; //이벤트 삭제에 사용할 함수\
exports.stopEvent = stopEvent;
//# sourceMappingURL=Events.js.map