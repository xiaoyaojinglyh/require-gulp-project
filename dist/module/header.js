define(["jquery","cookie"],function(i,e){function o(){}return o.prototype.init=function(){i("#select-list").hover(function(){i(".select").show()}),i("#select-list").mouseleave(function(){i(".select").hide()}),i(".select").mouseenter(function(){i(this).show(),i(".select li").click(function(){i("#select-list a").html(i(".select li").html())})}),i(".select").mouseleave(function(){i(this).hide()})},o.prototype.click=function(){i(".nav li").click(function(){i(this).children().addClass("ac"),i(this).siblings().children().removeClass("ac")})},o.prototype.welcome=function(){var e=i.cookie("username");e&&(i(".login-register").hide(),i(".welcome").show().html("欢迎您！"+e),i(".logout").css({display:"block"}),i(".logout").click(function(){i.cookie("username","",{expires:-1}),i(".login-register").show(),i(".welcome").hide(),i(".logout").hide()}))},new o});