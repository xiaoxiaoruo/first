// 当前的  划出来
var iNow = 0;
// 划出去
var last = -1;
// 加相同的class 样式发生覆盖
$(document).swipeUp(function () {
    if (iNow < $('.page').length - 1) {
        last = iNow;
        iNow++;
        // $('.page').eq(last).attr('class', 'page page-' + (last + 1) + ' moveToTop');
        add(last, "moveToTop");
        // $('.page').eq(iNow).attr('class', 'page page-' + (iNow + 1) + ' moveFromBottom');
        add(iNow, "moveFromBottom");
        // 延迟600ms执行的动画
        setTimeout(function () {
            // 等iNow 当前页 600ms划出来后  再让图片出来开始执行动画
            // $('.page').eq(iNow).find('img').removeClass('hide');
            fin1(iNow);
            // $('.page').eq(last).find('img').addClass('hide');
            fin2(last);
        }, 600);
    } else {
        return 0;
    }
})
$(document).swipeDown(function () {
    if (iNow >= 1) {
        last = iNow;
        iNow--;
        // $('.page').eq(last).attr('class', 'page page-' + (last + 1) + ' moveToBottom');
        add(last, "moveToBottom");
        // $('.page').eq(iNow).attr('class', 'page page-' + (iNow + 1) + ' moveFromTop');
        add(iNow, "moveFromTop");
        setTimeout(function () {
            // 等iNow 当前页 600ms划出来后  再让图片出来开始执行动画
            // $('.page').eq(iNow).find('img').removeClass('hide');
            fin1(iNow);
            // $('.page').eq(last).find('img').addClass('hide');
            fin2(last);
        }, 600);
    } else {
        return 0;
    }
})
function add(index, str) {
    $(".page").eq(index).attr("class", "page page-" + (index + 1) + " " + str);
}
function fin1(index) {
    $('.page').eq(index).find('img').removeClass('hide');
}
function fin2(index) {
    $('.page').eq(index).find('img').addClass('hide');
}