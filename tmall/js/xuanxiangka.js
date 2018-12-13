// 选项卡开始
var aHuaguo = document.getElementsByClassName("floor-tabs-li");
var aDiv = document.getElementsByClassName("floor-tab-content");
for (var i = 0; i < aHuaguo.length; i++) {
    aHuaguo[i].index = i;
    aHuaguo[i].onmouseover = function () {
        for (var j = 0; j < aHuaguo.length; j++) {
            aHuaguo[j].className = "floor-tabs-li";
            aDiv[j].className = "floor-tab-content";
        }
        this.className = "floor-tabs-li s-li";
        aDiv[this.index].className = "floor-tab-content select";
    }
}
// 选项卡结束
// 轮播图开始
var oBox = document.getElementsByClassName("slide-box")[0];
var oSlide = document.getElementsByClassName("slide-img-box")[0];
var aImg = oSlide.getElementsByTagName("img");
var oBtn = document.getElementsByClassName("slide-btn-box")[0];
var aBtn = oBtn.getElementsByTagName("li");
var iLunbo = 0;// 记录图片
var timerForLunbo;
for (var i = 0; i < aBtn.length; i++) {
    aBtn[i].index = i;
    aBtn[i].onmouseover = function () {
        clearInterval(timerForLunbo);
        changeForLunbotu(this.index);
        iLunbo = this.index;
    }
}
function changeForLunbotu(idx) {
    for (var j = 0; j < aBtn.length; j++) {
        aBtn[j].className = "";
        aImg[j].className = ""
    }
    aBtn[idx].className = "select";
    aImg[idx].className = "on";
}
function start() {
    timerForLunbo = setInterval(function () {
        changeForLunbotu(iLunbo);
        iLunbo++;
        if (iLunbo == 6) {
            iLunbo = 0;
        }
    }, 2000);
}
oBox.onmouseover = function () {
    clearInterval(timerForLunbo);
}
oBox.onmouseout = function () {
    start();
}
start();
//轮播图结束
// 左侧导航开始
var oLeft = document.getElementsByClassName("left")[0];
var oBody = document.getElementsByTagName("body")[0];
var suoForLeft = 0;
oBody.onscroll = function(){
    var isScrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    if(isScrolltop >= 200 && suoForLeft == 0){
        oLeft.style.display = "block";
        oLeft.style.height = "0px";
        var timerForLeft = setInterval(function(){
            oLeft.style.height = oLeft.offsetHeight + 10 + "px";
            if(oLeft.offsetHeight >= 370){
                clearInterval(timerForLeft);
            }
        }, 10);
        suoForLeft = 1;
    }
    if(isScrolltop < 200 && suoForLeft == 1){
        oLeft.style.display = "none";
        suoForLeft = 0;
    }
}
// 左侧导航结束
