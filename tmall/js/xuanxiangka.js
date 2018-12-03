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