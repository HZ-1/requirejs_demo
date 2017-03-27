/**
 * Created by Administrator on 2017/3/26.
 */
define(['jquery'],function($){
    function ScrollTo(opts) {
        this.opts = $.extend({},ScrollTo.DEFAULTS,opts);
        this.$el = $('html,body');

    }
    ScrollTo.prototype.move = function () {
        var opts = this.opts,
            dest = opts.dest;

        //如果不加这两条判断，会出现，当慢速到达顶部时，多次点击顶部按钮，当滚动条处于顶部，需再次滚到到下面时，会出现滚不下去的现象
        //因为，你点击几次回顶部按钮，回顶部函数就会执行几次；
        if($(window).scrollTop() != dest){//滚动条是否达到目的地，也就是滚动条是否达到顶部
            if(!this.$el.is(':animated')){//滚动条是否处于运动的
                this.$el.animate({
                    scrollTop:dest
                },opts.speed)
            }
        }

    }
    ScrollTo.prototype.go = function () {
        var dest = this.opts.dest;

        if($(window).scrollTop() != dest){
            this.$el.scrollTop(dest);
        }
    }
    ScrollTo.DEFAULTS = {
        dest:0,
        speed:800
    };
    return {
        ScrollTo: ScrollTo
    }
})