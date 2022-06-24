import * as Events from "../modules/Events"
import * as Fetchs from "../modules/Fetchs"

window.onload=function(){
    //그림 이미지 추가 버튼
    let imageUploadTag=document.createElement("label"); //껍대기인가 뭔가하는 뭐시기 태그
    imageUploadTag.setAttribute("class","imageUploadButton e1h77j9v6");
    imageUploadTag.setAttribute("id","imageUploadButton");
    let imageUploadInputTag=document.createElement("input"); //파일을 읽을 태그
    imageUploadInputTag.setAttribute("type","file");
    imageUploadInputTag.setAttribute("class","blind");
    imageUploadInputTag.setAttribute("accept",".png, .jpg, .jpeg, .bmp, .svg");
    imageUploadInputTag.setAttribute("onchange","uploadImage(this.files[0]);");
    imageUploadTag.appendChild(imageUploadInputTag); //뭐시기에 방금 태그 추가
    document.getElementsByClassName("e1h77j9v7")[0].appendChild(imageUploadTag); //글 입력하는 뭐시기에 방금 뭐시기 추가
}
