"use strict";
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
    }).then(response => response.json()).then(data => {
        imageID = '"' + data._id + '"';
    });
}
function getSticker(src) {
    switch (src) {
        case "/uploads/ii/lv/iilvwkehkm4fphya003hf51f2b2ccgzx.svg":
            return "\"6049ab66b9d3cd007d0dedf5\"";
        case "/uploads/8f/28/8f28kmyikm4fphxd003hf51f2b1sihu7.svg":
            return "\"6049ab66b9d3cd007d0dedf3\"";
        case "/uploads/bs/4w/bs4wklnfkm4fphxk003hf51f2b1wjhg3.svg":
            return "\"6049ab66b9d3cd007d0dede2\"";
        case "/uploads/7p/0e/7p0e2sk5km4fphxl003hf51f2b1xd3oo.svg":
            return "\"6049ab66b9d3cd007d0dedf4\"";
        case "/uploads/yq/e6/yqe6uhiskm4fphxl003hf51f2b1wx0tf.svg":
            return "\"6049ab66b9d3cd007d0dede3\"";
        case "/uploads/6d/l5/6dl5a7iekm4fphxm003hf51f2b1xnnk5.svg":
            return "\"6049ab66b9d3cd007d0dedf2\"";
        case "/uploads/xy/s0/xys0hcg8km4fphxr003hf51f2b20iz47.svg":
            return "\"6049ab66b9d3cd007d0dede6\"";
        case "/uploads/s6/dr/s6drkta9km4fphxw003hf51f2b23mfou.svg":
            return "\"6049ab66b9d3cd007d0dede5\"";
        case "/uploads/oa/ha/oahabukskm4fphxr003hf51f2b20v9oa.svg":
            return "\"6049ab66b9d3cd007d0dedf1\"";
        case "/uploads/xd/m6/xdm6lojekm4fphxw003hf51f2b23zqts.svg":
            return "\"6049ab66b9d3cd007d0dede9\"";
        case "/uploads/0i/9q/0i9qhbb8km4fphxx003hf51f2b24g43j.svg":
            return "\"6049ab66b9d3cd007d0dede4\"";
        case "/uploads/1c/17/1c17i8e1km4fphxx003hf51f2b248s6w.svg":
            return "\"6049ab66b9d3cd007d0dedef\"";
        case "/uploads/kq/c2/kqc2emu7km4fphya003hf51f2b2bznaj.svg":
            return "\"6049ab66b9d3cd007d0dedec\"";
        case "/uploads/fq/lc/fqlcg8phkm4fphyb003hf51f2b2cmi4x.svg":
            return "\"6049ab66b9d3cd007d0dedee\"";
        case "/uploads/6v/ow/6vowg31akm4fphxy003hf51f2b24njhz.svg":
            return "\"6049ab66b9d3cd007d0dede7\"";
        case "/uploads/sl/xd/slxdtvswkm4fphxy003hf51f2b254xiy.svg":
            return "\"6049ab66b9d3cd007d0dedf0\"";
        case "/uploads/e3/8p/e38py7q5km4fphxy003hf51f2b24wxrq.svg":
            return "\"6049ab66b9d3cd007d0dede8\"";
        case "/uploads/84/np/84npsmhykm4fphxz003hf51f2b25dibm.svg":
            return "\"6049ab66b9d3cd007d0deded\"";
        case "/uploads/wp/7t/wp7tv0nhkm4fphxz003hf51f2b25lrmk.svg":
            return "\"6049ab66b9d3cd007d0dedeb\"";
        case "/uploads/ij/k9/ijk9eusckm4fphy1003hf51f2b26mpeh.svg":
            return "\"6049ab66b9d3cd007d0dedea\"";
        case "/uploads/se/fr/sefrq9aekxidtvrx0vrea2c943gijbo5.svg":
            return "\"61c3e76ff8a657a0caef4e94\"";
        case "/uploads/y0/nv/y0nv5fbekxidtvrz0vrea2c94300jo9l.svg":
            return "\"61c3e76ff8a657a0caef4e91\"";
        case "/uploads/s6/8y/s68yq6tckxidtvs10vrea2c94301l9ai.svg":
            return "\"61c3e76ff8a657a0caef4e93\"";
        case "/uploads/f3/jj/f3jjm5mwkxidtvpa1a57292ed05y2ttn.svg":
            return "\"61c3e76f932befe99bedb3d8\"";
        case "/uploads/fy/70/fy70995dkxidtvry0vrea2c943000oa4.svg":
            return "\"61c3e76ff8a657a0caef4e92\"";
        case "/uploads/vg/dg/vgdgdxdpkxidtvos1a57292ed05nti82.svg":
            return "\"61c3e76f932befe99bedb3d7\"";
        case "/uploads/s6/34/s634k50xkxidtvsn1a57292ed07yexn5.svg":
            return "\"61c3e76f932befe99bedb3da\"";
        case "/uploads/gt/hf/gthfdiiykxidtvtc1a57292ed08djb9o.svg":
            return "\"61c3e76f932befe99bedb3d9\"";
        case "/uploads/lc/ia/lcia41oikxidtvyv0vrea2c94344aulf.svg":
            return "\"61c3e76ff8a657a0caef4e95\"";
        case "/uploads/m0/ss/m0sskefekxidtvwi1a57292ed0a90t4e.svg":
            return "\"61c3e76f932befe99bedb3db\"";
    }
    return "null";
}
function uploadPost() {
    var content = document.getElementById("Write")?.innerHTML;
    var stickerID = "null";
    try {
        var stickerHTML = document.getElementsByClassName("e1h77j9v3")[0].innerHTML;
        var stickerID = stickerID = getSticker(stickerHTML.substr(stickerHTML.indexOf("src=\"") + 5, 51));
    }
    catch (e) { }
    if (content != "") {
        fetch("https://playentry.org/graphql", {
            "headers": { "content-type": "application/json" },
            "referrer": "https://playentry.org/community/entrystory/list?sort=created&term=all",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": '{"query":"mutation CREATE_ENTRYSTORY($content:String$text:String$image:String$sticker:String$cursor:String){createEntryStory(content:$content text:$text image:$image sticker:$sticker cursor:$cursor){warning}}","variables":{"content":"' + content + '","image":' + imageID + ',"sticker":' + stickerID + '}}',
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(a => location.reload());
    }
    else {
        alert("글을 입력해주세요");
    }
}
const sticker = {
    "/uploads/ii/lv/iilvwkehkm4fphya003hf51f2b2ccgzx.svg": "6049ab66b9d3cd007d0dedf5",
    "/uploads/8f/28/8f28kmyikm4fphxd003hf51f2b1sihu7.svg": "6049ab66b9d3cd007d0dedf3",
    "/uploads/bs/4w/bs4wklnfkm4fphxk003hf51f2b1wjhg3.svg": "6049ab66b9d3cd007d0dede2",
    "/uploads/7p/0e/7p0e2sk5km4fphxl003hf51f2b1xd3oo.svg": "6049ab66b9d3cd007d0dedf4",
    "/uploads/yq/e6/yqe6uhiskm4fphxl003hf51f2b1wx0tf.svg": "6049ab66b9d3cd007d0dede3",
    "/uploads/6d/l5/6dl5a7iekm4fphxm003hf51f2b1xnnk5.svg": "6049ab66b9d3cd007d0dedf2",
    "/uploads/xy/s0/xys0hcg8km4fphxr003hf51f2b20iz47.svg": "6049ab66b9d3cd007d0dede6",
    "/uploads/s6/dr/s6drkta9km4fphxw003hf51f2b23mfou.svg": "6049ab66b9d3cd007d0dede5",
    "/uploads/oa/ha/oahabukskm4fphxr003hf51f2b20v9oa.svg": "6049ab66b9d3cd007d0dedf1",
    "/uploads/xd/m6/xdm6lojekm4fphxw003hf51f2b23zqts.svg": "6049ab66b9d3cd007d0dede9",
    "/uploads/0i/9q/0i9qhbb8km4fphxx003hf51f2b24g43j.svg": "6049ab66b9d3cd007d0dede4",
    "/uploads/1c/17/1c17i8e1km4fphxx003hf51f2b248s6w.svg": "6049ab66b9d3cd007d0dedef",
    "/uploads/kq/c2/kqc2emu7km4fphya003hf51f2b2bznaj.svg": "6049ab66b9d3cd007d0dedec",
    "/uploads/fq/lc/fqlcg8phkm4fphyb003hf51f2b2cmi4x.svg": "6049ab66b9d3cd007d0dedee",
    "/uploads/6v/ow/6vowg31akm4fphxy003hf51f2b24njhz.svg": "6049ab66b9d3cd007d0dede7",
    "/uploads/sl/xd/slxdtvswkm4fphxy003hf51f2b254xiy.svg": "6049ab66b9d3cd007d0dedf0",
    "/uploads/e3/8p/e38py7q5km4fphxy003hf51f2b24wxrq.svg": "6049ab66b9d3cd007d0dede8",
    "/uploads/84/np/84npsmhykm4fphxz003hf51f2b25dibm.svg": "6049ab66b9d3cd007d0deded",
    "/uploads/wp/7t/wp7tv0nhkm4fphxz003hf51f2b25lrmk.svg": "6049ab66b9d3cd007d0dedeb",
    "/uploads/ij/k9/ijk9eusckm4fphy1003hf51f2b26mpeh.svg": "6049ab66b9d3cd007d0dedea",
    "/uploads/se/fr/sefrq9aekxidtvrx0vrea2c943gijbo5.svg": "61c3e76ff8a657a0caef4e94",
    "/uploads/y0/nv/y0nv5fbekxidtvrz0vrea2c94300jo9l.svg": "61c3e76ff8a657a0caef4e91",
    "/uploads/s6/8y/s68yq6tckxidtvs10vrea2c94301l9ai.svg": "61c3e76ff8a657a0caef4e93",
    "/uploads/f3/jj/f3jjm5mwkxidtvpa1a57292ed05y2ttn.svg": "61c3e76f932befe99bedb3d8",
    "/uploads/fy/70/fy70995dkxidtvry0vrea2c943000oa4.svg": "61c3e76ff8a657a0caef4e92",
    "/uploads/vg/dg/vgdgdxdpkxidtvos1a57292ed05nti82.svg": "61c3e76f932befe99bedb3d7",
    "/uploads/s6/34/s634k50xkxidtvsn1a57292ed07yexn5.svg": "61c3e76f932befe99bedb3da",
    "/uploads/gt/hf/gthfdiiykxidtvtc1a57292ed08djb9o.svg": "61c3e76f932befe99bedb3d9",
    "/uploads/lc/ia/lcia41oikxidtvyv0vrea2c94344aulf.svg": "61c3e76ff8a657a0caef4e95",
    "/uploads/m0/ss/m0sskefekxidtvwi1a57292ed0a90t4e.svg": "61c3e76f932befe99bedb3db"
};
const stopEvent = function (e) { e.preventDefault(); e.stopPropagation(); return false; }; //이벤트 삭제에 사용할 함수
let imageID = "null";
function reload() {
    try {
        //그림 이미지 추가 버튼
        let imageUploadTag = document.createElement("label"); //껍대기인가 뭔가하는 뭐시기 태그
        imageUploadTag.setAttribute("class", "imageUploadButton e1h77j9v6");
        imageUploadTag.setAttribute("id", "imageUploadButton");
        let imageUploadInputTag = document.createElement("input"); //파일을 읽을 태그
        imageUploadInputTag.setAttribute("type", "file");
        imageUploadInputTag.setAttribute("class", "blind");
        imageUploadInputTag.setAttribute("accept", ".png, .jpg, .jpeg, .bmp, .svg");
        imageUploadInputTag.setAttribute("onchange", "uploadImage(this.files[0]);");
        imageUploadTag.appendChild(imageUploadInputTag); //뭐시기에 방금 태그 추가
        document.getElementsByClassName("e1h77j9v7")[0].appendChild(imageUploadTag); //글 입력하는 뭐시기에 방금 뭐시기 추가
    }
    catch (e) {
        setTimeout(function () { reload(); }, 500);
    }
    //업로드 버튼
    document.getElementsByClassName("e13821ld2")[0].addEventListener("click", stopEvent); //업로드 버튼 비활성화
    document.getElementsByClassName("e13821ld2")[0].addEventListener("click", uploadPost); //업로드 버튼 새 이벤트
}
window.onload = reload;
//# sourceMappingURL=entrystory.js.map