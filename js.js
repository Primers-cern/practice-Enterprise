
window.onload=function(){

	//banner滚动
	setTimeout("change(1)",4000);

	//滚动新闻
	setInterval(function(){
		$(".roll-box li:first").animate({marginTop:"-40px"},1000,function(){
			$(".roll-box li:first").remove().appendTo($(".roll-box")).css("margin-top","0");
		});
	},4000);
}

function change(num){

	var $showit = $(".imgbox img").eq(num);
	var $showli = $(".banner li").eq(num);
		//低栏改变颜色
		$(".banner li").not($showli).css("background-color","#3e3e3e");
		$showli.css("background-color","#0e0e0e");

		//动画
		$(".imgbox img").not($showit).animate({width:0},300);
		$showit.animate({width:"1000px"},300);
		num += 1;
		if(num === 3){
			num = 0;
		};
		setTimeout("change("+num+")",4000);
	}

	function lichange(num){
		var $showit = $(".imgbox img").eq(num);
		var $showli = $(".banner li").eq(num);

		$(".banner img").not($showit).not($showit).animate({width:0},300);
		$showit.animate({width:"1000px"},300);

		$(".banner li").not($showli).css("background-color","#3e3e3e");
		$showli.css("background-color","#0e0e0e");
	}