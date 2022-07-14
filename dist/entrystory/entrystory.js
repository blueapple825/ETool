"use strict";
class user {
    id;
    username;
    nickname;
    profileImage;
    backgroundImage;
    description;
    constructor(id, username, nickname, profileImage, backgroundImage, description) {
        this.id = id;
        this.username = username;
        this.nickname = nickname;
        this.profileImage = profileImage;
        this.backgroundImage = backgroundImage;
        this.description = description;
    }
}
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
        (async function () {
            await fetch("https://playentry.org/graphql", {
                "headers": { "content-type": "application/json" },
                "referrer": "https://playentry.org/community/entrystory/list?sort=created&term=all",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": '{"query":"mutation CREATE_ENTRYSTORY($content:String$text:String$image:String$sticker:String$cursor:String){createEntryStory(content:$content text:$text image:$image sticker:$sticker cursor:$cursor){warning}}","variables":{"content":"' + content + '","image":' + imageID + ',"sticker":' + stickerID + '}}',
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });
            location.reload();
        })();
    }
    else {
        alert("글을 입력해주세요");
    }
}
const stopEvent = function (e) { e.preventDefault(); e.stopPropagation(); return false; }; //이벤트 삭제에 사용할 함수
let imageID = "null";
let userData = [];
async function getUserData(index) {
    userData.push(new user("", "", "", "/img/EmptyImage.svg", "/img/EmptyImage.svg", ""));
    let ids = document.getElementsByClassName("enx4swp0")[index + 1].getAttribute("href")?.substr(9);
    if (ids == undefined) {
        console.error(index + "번째 글의 ID를 가져오는데에 실패하였 습니다(태그에서 추출 실패)");
    }
    const postResponse = await fetch("https://playentry.org/graphql", {
        "headers": { "content-type": "application/json" },
        "body": '{"query":"query FIND_USERSTATUS_BY_USERNAME($id:String){userstatus(id:$id){id nickname username description profileImage{filename}coverImage{filename}}}","variables":{"id":"' + ids + '"}}',
        "method": "POST"
    });
    const data = await postResponse.json();
    var id = data.data.userstatus.id;
    var username = data.data.userstatus.username;
    var nickname = data.data.userstatus.nickname;
    var profileImgage;
    try {
        profileImgage = "/uploads/" + data.data.userstatus.profileImage.filename[0]
            + data.data.userstatus.profileImage.filename[1] + "/" +
            data.data.userstatus.profileImage.filename[2] + data.data.userstatus.profileImage.filename[3] +
            "/" + data.data.userstatus.profileImage.filename + ".png";
    }
    catch (e) {
        profileImgage = "/img/DefaultCardUserThmb.svg";
    }
    var backgroundImage;
    try {
        backgroundImage = "/uploads/" + data.data.userstatus.coverImage.filename[0]
            + data.data.userstatus.coverImage.filename[1] + "/" +
            data.data.userstatus.coverImage.filename[2] + data.data.userstatus.coverImage.filename[3] +
            "/" + data.data.userstatus.coverImage.filename + ".png";
    }
    catch (e) {
        backgroundImage = "/img/EmptyImage.svg";
    }
    var description = data.data.userstatus.description;
    var u = new user(id, username, nickname, profileImgage, backgroundImage, description);
    userData[index] = u;
}
function hideUserData() {
    document.getElementById("userDataWindow").style.display = "none";
    document.getElementById("__next").style.filter = "brightness(100%)";
    document.getElementById("__next").style.pointerEvents = "auto";
    document.body.style.overflow = "visible";
}
function showUserData(index) {
    document.getElementById("userDataWindow").style.display = "inline";
    document.getElementById("__next").style.filter = "brightness(50%)";
    document.getElementById("__next").style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
    var userDataBGImg = Array.from(document.getElementsByClassName("userDataBGImg"))[0];
    userDataBGImg.style.backgroundImage = "url(\"" + userData[index].backgroundImage + "\")";
    var userDataPFImg = Array.from(document.getElementsByClassName("userDataPFImg"))[0];
    userDataPFImg.style.backgroundImage = "url(\"" + userData[index].profileImage + "\")";
    var userDataID = Array.from(document.getElementsByClassName("userDataID"))[0];
    userDataID.innerText = userData[index].id;
    var userDataName = Array.from(document.getElementsByClassName("userDataName"))[0];
    userDataName.innerText = userData[index].nickname + "(" + userData[index].username + ")";
    var userDataD = Array.from(document.getElementsByClassName("userDataD"))[0];
    userDataD.innerText = userData[index].description;
}
function getUsersData(index, size) {
    try {
        document.getElementsByClassName("enx4swp0")[index + size - 1];
        for (var i = 0; i < size; i++) {
            getUserData(index + i);
            var button = document.createElement("button");
            button.setAttribute("class", "showUserData");
            button.setAttribute("onclick", "showUserData(" + index + i + ")");
            button.innerText = "?";
            document.getElementsByClassName("ee2n3ac2")[index + i].insertBefore(button, document.getElementsByClassName("ee2n3ac2")[index + i].querySelector("a"));
        }
    }
    catch (e) {
        setTimeout(function () { getUsersData(index, size); }, 500);
    }
}
function windowOnload() {
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
        setTimeout(function () { windowOnload(); }, 500);
    }
    //업로드 버튼
    document.getElementsByClassName("e13821ld2")[0].addEventListener("click", stopEvent); //업로드 버튼 비활성화
    document.getElementsByClassName("e13821ld2")[0].addEventListener("click", uploadPost); //업로드 버튼 새 이벤트
    //유저 정보창 생성
    let userDataWindow = document.createElement("div");
    userDataWindow.setAttribute("class", "userDataWindow");
    userDataWindow.setAttribute("id", "userDataWindow");
    userDataWindow.setAttribute("style", "display: none;");
    userDataWindow.innerHTML = `<div class="userDataTopBar">
    <div class="userDataClose" onclick="hideUserData()"></div>
</div>
<div class="userDataBGImg"></div>
<div class="userDataPFImg"></div>
<p class="userDataID"></h2>
<h2 class="userDataName"></h2>
<p class="userDataD"></p>
</div>`;
    document.getElementsByTagName("body")[0].appendChild(userDataWindow);
    //글에서 유저 정보 얻기
    getUsersData(0, 10);
}
window.onload = windowOnload;
//# sourceMappingURL=entrystory.js.map