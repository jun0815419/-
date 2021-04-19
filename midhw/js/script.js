function closeimg() {
    $("#bigimg").css("display","none");
}

function imgbig1() {
    var imgsrc1 = $('#imgsrc1').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc1+" />");
}

function imgbig2() {
    var imgsrc2 = $('#imgsrc2').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc2+" />");
}

function imgbig3() {
    var imgsrc3 = $('#imgsrc3').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc3+" />");
}

function imgbigmu() {
    var imgsrcmu = $('#imgsrcmu').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrcmu+" />");
}

function imgbiglin() {
    var imgsrclin = $('#imgsrclin').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrclin+" />");
}

function imgbigsen() {
    var imgsrcsen = $('#imgsrcsen').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrcsen+" />");
}



function imgbigfood1() {
    var imgsrcfood1 = $('#imgsrcfood1').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrcfood1+" />");
}

function imgbigfood2() {
    var imgsrcfood2 = $('#imgsrcfood2').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrcfood2+" />");
}

function imgbigfood3() {
    var imgsrcfood3 = $('#imgsrcfood3').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrcfood3+" />");
}


function imgbig002() {
    var imgsrc002 = $('#imgsrc002').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc002+" />");
}

function imgbig003() {
    var imgsrc003 = $('#imgsrc003').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc003+" />");
}

function imgbig004() {
    var imgsrc004 = $('#imgsrc004').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc004+" />");
}

function imgbig005() {
    var imgsrc005 = $('#imgsrc005').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc005+" />");
}

function imgbig006() {
    var imgsrc006 = $('#imgsrc006').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc006+" />");
}

function imgbig007() {
    var imgsrc007 = $('#imgsrc007').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc007+" />");
}

function imgbig008() {
    var imgsrc008 = $('#imgsrc008').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc008+" />");
}

function imgbig009() {
    var imgsrc009 = $('#imgsrc009').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc009+" />");
}

function imgbig010() {
    var imgsrc010 = $('#imgsrc010').attr('src');
    $("#bigimg").css("display","block");
    $("#bigimg").html("<img src="+imgsrc010+" />");
}



//宣告預設表單內容為空 （你想要的話也可以加東西）
    var initSubject='',initBody='';
 
    //按下傳送按鈕後執行
    function submitHandler(){
        var to = "jun0815419.cts08@nctu.edu.tw";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
        var name = nameText.value;//讀取ID為 nameTextuser 物件中的值
        var email = emailText.value;
        var tel = telText.value;
        var subject = subText.value;
//把user填的資料都塞到 mail body 中
        var body = ""+bodyText.value+'%0A%0A%0A';//%0A是換行 換了三行
            body += "From："+nameText.value+'%0A';
            body += "Email："+emailText.value+'%0A';
//傳送的主要程式碼
        mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
        mailTo.click();
    }
//在body onload
    function init(){
        subText.value=initSubject;
        toText.value=initTo;
        bodyText.value=initBody;
    }