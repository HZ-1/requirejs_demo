/**
 * Created by Administrator on 2017/3/26.
 */
requirejs.config({
    paths:{
        jquery:'../lib/jquery-1.8.0.min'
    }
})
requirejs(['jquery','../js/backtop'],function ($,backtop) {
    $('#backTop').BackTop({
        mode:'move',
        speed:300
    })
})

