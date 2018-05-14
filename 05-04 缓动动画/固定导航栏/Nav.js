/**
 * Created by laiyp on 2018/5/4.
 */

function scroll() {

    if (window.pageYOffset !== undefined){ // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat"){// 标准浏览器   来判断有没有声明DTD

        return{
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return{
        //未声明
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

//缓动动画封装
function animate(ele,target) {
    clearInterval(ele.timer)
    ele.timer = setInterval(function () {
    //    设置步长
        var step = (target - ele.offsetLeft)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
    //    赋值
        ele.style.left = ele.offsetLeft + step +"px";
        if (Math.abs(target - ele.offsetLeft) < Math.abs(step)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }

    },18);

}