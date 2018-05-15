/**
 * Created by laiyp on 2018/5/15.
 */

function animate(ele,json,fn) {

//            清空定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {

//                开闭原则
        var bool = true;

//                获取步长
        for(var k in json){
            var leader = parseInt(getStyle(ele,k))||0;
            var step = (json[k] - leader)/10;
            step = step>0 ? Math.ceil(step):Math.floor(step);
            leader = leader + step;

//                    赋值
            ele.style[k] = leader + "px";
            if (json[k] !== leader){
                bool = false;
            }
        }

        if (bool){
            clearInterval(ele.timer);
            if (fn){
                fn();
            }

        }

    },25);


}

function getStyle(ele,attr) {
    if (window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}

function show(ele){
    ele.style.display = "block";
}

function hidden(ele) {
    ele.style.display = "none";
}


//获取屏幕可视区域的宽高
function client(){
    if(window.innerHeight !== undefined){
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    }else{
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
        }
    }
}