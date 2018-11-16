require(["config"],function(){
	require(["jquery","header","footer","cookie","template"],function($,header,footer,cookie,template){
		new Promise(function(resolve,reject){
			$("header").load("/html/component/header.html",function(){
				resolve();
			})
		}).then(function(){
			header.init();
			header.click();
			header.welcome();
		}).then(function(){
			var cart = $("#my_cart");
			var str = $.cookie("product");
			console.log(str);
			var priceBtn = $(".priceBtn");
			var products = $(".car_products");
			//var tbody = $(products.parentNode);
			console.log(str);
			var res = JSON.parse(str);
			//console.log(res);
			var html = template("html-product",{products:res});
			//console.log(html);
			$(".tbody").html(html);
			//给删除按钮绑定事件
			$(".tbody").on("click",".delBtn",function(){
				var product = $.cookie("product");
				product = JSON.parse(product);
				//找到这一行商品
				var tr = $(this).parent().parent();
				//找到当前商品的id
				var id = tr.next(".pro-id").text();
				var pro = product.filter(function(now){
					return !(id == now.id)
				})
				pro = JSON.stringify(pro);
				$.cookie("product",pro,{
					path:"/",
					expires:"5"
				});
				tr.remove();

			})
			//点击增加或者减少的数量按钮
			var sumInput = $(".sumInput").val();
			/*var price = $(this).parent().prev().text().slice(1);
			console.log(price);*/
			var sub = $(".btn");

			for(var i = 0; i < sub.length; i++){
				$(sub[i]).click(function(){
					console.log(sub[i]);
					var product = $.cookie("product");
					product = JSON.parse(product);

					sumInput = --sumInput;
					if(sumInput < 1){
						alert("该宝贝不能再减少了哦！");
						return;
					}else{
						$(".sumInput").val(sumInput);
					}
					$(this).parent().next().text("￥" + sumInput*res[0].price);
					//console.log(sumInput*price);
				})
			}
			var add = $(".btn1");
			for(var i = 0; i < add.length; i++){
				$(add[i]).click(function(){
				$(".sumInput").val(++sumInput);
				$(this).parent().next().text("￥" + sumInput*res[0].price);
			})
			}
			

			//全选按钮
			//console.log($(".all-check"));
			$(".all-check").click(function(e){
				all.call(this);

			}).trigger("click");

			//部分选中
			$(".single-check").click(function(e){
				var count = $(".single-check");
				var sum = 0;
				//遍历选中按钮的长度，如果选中就数量++
				for(var i = 0; i < count.length; i++){
					if($(count[i]).prop("checked")){
						sum++;
					}
				}
				if(sum === count.length){
					$(".all-check").prop("checked",true);
				}else{
					$(".all-check").prop("checked",false);

					//调用总金额的函数
				}
			})

			//全选按钮函数
			function all(){
				var status = $(this).prop("checked");
				//将单选按钮与全选按钮的checked状态设为一致
				$(".single-check").prop("checked",status);
			}			
			//计算总金额的函数
			/*function total(){
				var count = $(".single-check");
				var allPrice = 0;
				for(var i = 0; i < count.length; i++){
					if($(count[i]).prop("checked")){
						//找到所有的小计相加得到总金额
						allPrice+= parseInt($(count[i]).parent().siblings(".td-price").text().slice(1));
					}
				}
				$(".Price").text("商品金额：￥"+allPrice);
			}*/
	})
		new Promise(function(resolve,reject){
				$("footer").load("/html/component/footer.html",function(){
					resolve();
			})
		})
	})
})