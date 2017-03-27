/**
 * Created by Administrator on 2017/3/26.
 */
requirejs.config({
    paths:{
        jquery:'../lib/jquery-1.8.0.min'
    }
})

requirejs(['jquery','../js/scrollto'],function ($,scrollto) {

    var scroll = new scrollto.ScrollTo({
        dest:0,
        speed:2000
    })


    //如果想快速滚上顶，就用go；
    //如果想设定一个速度或时间滚到顶，使用move
    $('#backTop').on('click',$.proxy(scroll.move,scroll));
    $(window).on('scroll',function () {
        checkPosition($(window).height());
    })
    checkPosition($(window).height());

    function checkPosition(pos) {
        if($(window).scrollTop() > pos){
            $('#backTop').fadeIn();
        }else{
            $('#backTop').fadeOut();
        }
    }
})