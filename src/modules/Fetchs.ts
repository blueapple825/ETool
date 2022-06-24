export function uploadImage(file:File):void{ //이미지 업로드 함수
    var data=new FormData(); //뭔진 모르지만 하라니까 선언
    data.append("file",file); //파일 데이터 추가
    data.append("type","notcompress"); //뭔진 모르지만 둣1교에서 이미지 할때 넣어야 하는거 1
    data.append("generateThumb","true"); //뭔진 모르지만 둣1교에서 이미지 할때 넣어야 하는거 2
    fetch("https://playentry.org/rest/picture", { //둣1교에 이미지 업로드
        "headers": {},
        "body": data,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
}
