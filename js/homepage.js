//totop
{
	let totop=document.querySelector(".totop");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){  
			st-=200;      //固定速度
			if(st<0){
				st=0;
				clearInterval(t); //把当前时间函数停止
			}
			document.documentElement.scrollTop=st;
		},25);
	}
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>280){
			totop.style.display="block";
		}else{
			totop.style.display="none";
		}
	}
}