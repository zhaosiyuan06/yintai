
window.onload=function(){
	var bannerBox=getClass("banner_bb",document)[0];
	var img=bannerBox.getElementsByTagName("img");
	var au=document.getElementsByClassName("index")[0]; 
	var alo=au.getElementsByTagName("li");
	var cebtn=getClass("cebtn",document)[0];
	var you=getClass("you",cebtn)[0];
	var zuo=getClass("zuo",cebtn)[0];

	var index=0; //index为图片下标；	
	img[0].style.zIndex=10;//设置第一张图片为默认图片，就把第一张图片的层级设置为最高；	
	alo[0].style.background="red";		
	var t=setInterval(move,2000)
		function move(){
			index++;//每2秒加1；
			if(index==img.length){index=0}
			for(var i=0;i<img.length;i++){
				img[i].style.display="none";
				alo[i].style.background="";	
			}
			 img[index].style.display="block";
			 alo[index].style.background="red";
		}
		bannerBox.onmouseover=function(){
			clearInterval(t)
		}
		bannerBox.onmouseout=function(){
			 t=setInterval(move,2000)
		}
		for(var i=0;i<alo.length;i++){
			alo[i].index=i;
			alo[i].onclick=function(){
				for(var j=0;j<alo.length;j++){
					img[j].style.display="none";
					alo[j].style.background="";
				}
					img[this.index].style.display="block";
					alo[this.index].style.background="red";
			}
		}

		you.onclick=function(){
					move();
		}

		zuo.onclick=function(){
			index--;//每2秒加1；
			if(index==-1){index=img.length-1;}
			for(var i=0;i<img.length;i++){
				img[i].style.display="none";
				alo[i].style.background="";
			
			}
			 img[index].style.display="block";
			 alo[index].style.background="red";
		}	



		var yinBox=document.getElementsByClassName('yin_box')[2];
		var uls=yinBox.getElementsByTagName('ul')[0]	
			hover(yinBox,function(){
				uls.style.display='block';
			},function(){
				uls.style.display='none';
			})



		
		var zuoyi=document.getElementsByClassName('zuoyi')[1]
		var zBox=zuoyi.getElementsByClassName('z_box')[0]
			hover(zuoyi,function(){
				zBox.style.display='block';
			},function(){
				zBox.style.display='none';
			})
		

		var zuoyii=document.getElementsByClassName('zuoyi')[2]
		var zBox1=zuoyii.getElementsByClassName('z1_box')[0]
			hover(zuoyii,function(){
				zBox1.style.display='block';
			},function(){
				zBox1.style.display='none';
			})
		



		// zhengwen
		var sko=getClass("sko",document)[0];
		var tu=sko.getElementsByTagName("li");
		// console.log(tu);
		var xiak=getClass("xiak",document);
		// console.log(xiak);
		var skt=getClass("skt",document)[0];
		var three=skt.getElementsByTagName("li");
		var im=skt.getElementsByTagName('img')

		for(var i=0;i<tu.length;i++){
			tu[i].index=i;
			tu[i].onmouseover=function(){
			for(var j=0;j<tu.length;j++){
				xiak[j].style.display="none";
				three[j].style.background="black";
				tu[j].style.fontWeight="normal";
				im[j].style.display="none";
			}
				xiak[this.index].style.display="block";
				im[this.index].style.display="block";
				three[this.index].style.background="#e5004f";
				this.style.fontWeight="bold";
		}

		}

		var zhuan=getClass("you_wen1",document);
		// console.log(zhuan)
		var yiyi=getClass("yiyi",document);
		// console.log(yiyi)	
		var re=document.getElementsByClassName('yeye');
		for(var i=0;i<zhuan.length;i++){
			zhuan[i].index=i;
			zhuan[i].onmouseover=function(){
			for(var j=0;j<zhuan.length;j++){
				yiyi[j].style.display="none";
				zhuan[j].style.fontWeight="normal";
				re[j].style.display='none';
			}
				yiyi[this.index].style.display="block";	
				this.style.fontWeight="bold";
				re[this.index].style.display='block';
			}
		}	


//banner 下边的线条动画
	var rr=$(".rr");
	for(var i=0;i<rr.length;i++){
		rr[i].onmouseover=function(){
			var bt=$(".bt",this)[0]
			var bl=$(".bl",this)[0]
			var br=$(".br",this)[0]
			var bb=$(".bb",this)[0]
			animate(bt,{width:190},500)
			animate(bl,{height:245},500)
			animate(bb,{width:190},500)
			animate(br,{height:245},500)
		}

		rr[i].onmouseout=function(){
			var bt=$(".bt",this)[0]
			var bl=$(".bl",this)[0]
			var br=$(".br",this)[0]
			var bb=$(".bb",this)[0]
			animate(bt,{width:0},500)
			animate(bl,{height:0},500)
			animate(bb,{width:0},500)
			animate(br,{height:0},500)
		}
	}








//系导航
var daoBox=document.getElementsByClassName('dao_box')
for(var i=0;i<daoBox.length;i++){
	dao(daoBox[i])
}
function dao(daoBox){
	var xidao=daoBox.getElementsByClassName('xidao1')[0];
	hover(daoBox,function(){
		xidao.style.display='block';
	},function(){
		xidao.style.display='none';
	})
	
}



/*1自动轮播*/
	var box=$(".shi2_box");
	for(var i=0;i<box.length;i++){
		wheel(box[i])
	}
	function wheel(box){
	var imgBox=$(".img_box1",box)[0];
	var imgs=$("img",imgBox);

	var dian=$(".bodian",box)[0];
	var lis=$("li",dian);
	var btn=$(".fxbtn",box)[0];
	var zuo=$(".zbtn",btn)[0];
	var you=$(".ybtn",btn)[0];
	var iw=parseInt(getStyle(imgs[0],"width"));
	imgBox.style.width=iw*imgs.length+'px';

	//lunbo
	
	// var t0=setInterval(move0,2000)
	var indexa=0;
	function move0(){
		
		indexa++;
		if(indexa==imgs.length){indexa=0;}
		for(var j=0;j<lis.length;j++){
			lis[j].style.background="#ccc";
		}
		animate(imgBox,{left:-iw*indexa},1000)
		lis[indexa].style.background="red";

	}

	//lunbodian
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
			lis[j].style.background="#ccc";
			}
			animate(imgBox,{left:-iw*this.index},500)
			this.style.background="red";

		}
	}
	//anniu
	you.onclick=function(){
			move0();
	}
	zuo.onclick=function(){
		indexa--;
		if(indexa==-1){indexa=lis.length-1;}
		for(var j=0;j<lis.length;j++){
			lis[j].style.background="";
		}
		// index=this.index;
		animate(imgBox,{left:-iw*indexa},1000)
		lis[indexa].style.background="red";

	}
	}


//xiantiao
var xko=document.getElementsByClassName('xko1')
// console.log(xko)
for(var i=0;i<xko.length;i++){
	xko[i].onmouseover=function(){
		var bt=$(".bt",this)[0]
		var bl=$(".bl",this)[0]
		var br=$(".br",this)[0]
		var bb=$(".bb",this)[0]
		animate(bt,{width:220},500)
		animate(bl,{height:260},500)
		animate(bb,{width:220},500)
		animate(br,{height:260},500)
	}
	xko[i].onmouseout=function(){
		var bt=$(".bt",this)[0]
		var bl=$(".bl",this)[0]
		var br=$(".br",this)[0]
		var bb=$(".bb",this)[0]
		animate(bt,{width:0},500)
		animate(bl,{height:0},500)
		animate(bb,{width:0},500)
		animate(br,{height:0},500)
	}
}


var yiyi1=document.getElementsByClassName('yiyi')[0]

var divss=yiyi1.getElementsByClassName('ty1')
// console.log(divss)
for(var i=0;i<divss.length;i++){
	divss[i].index=i
	divss[i].onmouseover=function(){
		this.style.opacity='0.8'
	}
	divss[i].onmouseout=function(){
		this.style.opacity='1'
	}
	
}

/*线条动画*/
var boxs=$(".box");
for(var i=0;i<boxs.length;i++){
	xian(boxs[i])
}
function xian(boxs){
	var ones=$(".one",boxs);
	for(var i=0;i<ones.length;i++){
		ones[i].onmouseover=function(){
			var bt=$(".bt",this)[0]
			var bl=$(".bl",this)[0]
			var br=$(".br",this)[0]
			var bb=$(".bb",this)[0]
			animate(bt,{width:270},500)
			animate(bl,{height:180},500)
			animate(bb,{width:270},500)
			animate(br,{height:180},500)
		}

		ones[i].onmouseout=function(){
			var bt=$(".bt",this)[0]
			var bl=$(".bl",this)[0]
			var br=$(".br",this)[0]
			var bb=$(".bb",this)[0]
			animate(bt,{width:0},500)
			animate(bl,{height:0},500)
			animate(bb,{width:0},500)
			animate(br,{height:0},500)
		}
	}
}






//banner
var daoBox=document.getElementsByClassName('dao_box1')[0];
var imgg=daoBox.getElementsByTagName('img')[0];

	imgg.onmouseover=function(){
		animate(imgg,{right:20},500)
		
	}
	imgg.onmouseout=function(){
		animate(imgg,{right:0},500)
		
	}

//banner
var neikuang=document.getElementsByClassName('neikuang2')[0];
var dao=neikuang.getElementsByClassName('dao2')
var d2=neikuang.getElementsByTagName('div')
for(var i=0;i<dao.length;i++){
	dao[i].index=i;
	dao[i].onmouseover=function(){
		for(var j=0;j<d2.length;j++){
			d2[j].style.display='none'	
		}
			d2[this.index].style.display='block'
	}
}






var floor=document.getElementsByClassName('shishang');
var checkBox=document.getElementsByClassName('six_box')[0];
var check=checkBox.getElementsByClassName('six_box1')
var wenzi=document.getElementsByClassName('wenzi')
var stop;
var arr=[];
for(var i=0;i<floor.length;i++){
			arr.push(floor[i].offsetTop);
		}

wenzi[0].onclick=function(){
				animate(document.body,{scrollTop:0},1000)
				animate(document.documentElement,{scrollTop:0},1000)
				//点击以后，document.body.scrollTop=0;滚动条的距离变为0，也就是返回顶部。
			}
		window.onscroll=function(){
			stop=document.body.scrollTop;
			for(var j=0;j<arr.length;j++){
				if(stop+100>arr[j]){
					for(var x=0;x<arr.length;x++){
						wenzi[x].style.zIndex=0;
					}
						wenzi[j].style.zIndex=21;
						
					}
				}

		var stop2=document.body.scrollTop||document.documentElement.scrollTop;
		if(stop2>document.documentElement.clientHeight){//滚动条走的距离大于屏幕高度；
			wenzi[0].style.display="block";
			}else{
					wenzi[0].style.display="none";
				}
			}

		for(var i=0;i<check.length;i++){
			check[i].index=i;
			check[i].onclick=function(){
				animate(document.body,{scrollTop:arr[this.index]},300)
			}
		}
	



/*无缝轮播*/
var bigbox=$(".bigbox");
// console.log(bigbox)
for(var i=0;i<bigbox.length;i++){
	wheel1(bigbox[i])
}
function wheel1(bigbox){
var imgBox=$(".imgbox",bigbox)[0];

var imgss=$("img",imgBox);

var btnn=$(".btn",bigbox)[0];
var lefta=$(".zuo",btnn)[0];
var righta=$(".you",btnn)[0];


var iw=parseInt(getStyle(imgss[0],"width"));
// imgBox.style.width=iw*imgs.length+'px';
var index=0;
var next=0;
imgss[0].style.left=0;

	
	righta.onclick=function(){
		next++;
		if(next==imgss.length){next=0}
		imgss[next].style.left=-iw+"px";
		animate(imgss[index],{left:iw})
		animate(imgss[next],{left:0})
		index=next;
	}
	
	lefta.onclick=function(){
		next--;
		if(next==-1){next=imgss.length-1}
		imgss[next].style.left=iw+"px";
		animate(imgss[index],{left:-iw},500)
		animate(imgss[next],{left:0},500)
		index=next;
	}
}

}

