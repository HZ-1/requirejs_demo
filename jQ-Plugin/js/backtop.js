/**
 * Created by Administrator on 2017/3/26.
 */
define(['jquery','../js/scrollto'],function($, scrollto){
    function BackTop(el,opts) {
        this.opts = $.extend({},BackTop.DEFAULTS,opts);
        this.$el = $(el);
        this.scroll = new scrollto.ScrollTo({
            dest:0,
            speed: this.opts.speed
        });
        this._checkPosition();
        if(this.opts.mode == 'move'){
            this.$el.on('click',$.proxy(this._move,this));
        }else {
            this.$el.on('click',$.proxy(this._go,this));
        }
        $(window).on('scroll',$.proxy(this._checkPosition,this))
    }


    BackTop.DEFAULTS = {
        mode:'move',
        pos:$(window).height(),
        speed:800
    }

    BackTop.prototype._move = function () {
        this.scroll.move();
    }
   BackTop.prototype._go = function () {
        this.scroll.go();
    }
   BackTop.prototype._checkPosition = function () {
        var $el = this.$el;
       if($(window).scrollTop() > this.opts.pos){//滚动条是否达到目的地，也就是滚动条是否达到顶部
          $el.fadeIn();
       }else {
           $el.fadeOut();
       }
    }

    //让BackTop方法插件化

    $.fn.extend({
        BackTop:function (opts) {
            return this.each(function () {
                new BackTop(this,opts);
            });
        }
    })


    return {
        BackTop: BackTop
    }
})