define(["jquery","cookie"],function($,cookie){
	function Header(){

	}
	Header.prototype.init = function(){
		//console.log($("#select-list"));
		$("#select-list").hover(function(){
			$(".select").show();
		})
		$("#select-list").mouseleave(function(){
			$(".select").hide();
		})
		$(".select").mouseenter(function(){
			$(this).show();
			
			$(".select li").click(function(){
				//console.log(this.html());
				$("#select-list a").html($(".select li").html());
			})
		})
		$(".select").mouseleave(function(){
			$(this).hide();

		})

	}

	Header.prototype.click = function(){
		//console.log($(".nav li"));
		$(".nav li").click(function(){
			//console.log($(this).children());
			$(this).children().addClass("ac");
			$(this).siblings().children().removeClass("ac");
		})
	}

	Header.prototype.welcome = function(){
		var username = $.cookie("username");
		if(username){
			$(".login-register").hide();
			$(".welcome").show().html("欢迎您！"+ username);
			$(".logout").css({"display":"block"});

			
			$(".logout").click(function(){
				$.cookie("username", "", 
					{expires: -1}
					) 
				$(".login-register").show();
				$(".welcome").hide();
				$(".logout").hide();
			})
		}
	}
	return new Header();
})