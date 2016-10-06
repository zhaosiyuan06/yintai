//兼容问题：IE6-8不支持通过类名方式获取元素
//classname【string】 要获取的元素类名
//range[object]


//判断当前浏览器是否支持
function getClass(classname,range){
	var range=range?range:document;
	if(document.getElementsByClassName){//判断是否可以访问className类
		return range.getElementsByClassName(classname);//如果可以，直接返回该类名；
	}else{
		var biao=range.getElementsByTagName("*");//遍历通用标签，目的是在查找到的这些标签中查找类名(形参中的所提供的类名)
		var arr=[];//查找到的标签，类，id等会以
		for(var i=0;i<biao.length;i++){
			
			if(checkClass(biao[i].className,classname)){
				arr.push(biao[i])
			}
		}
		return arr;

	}
}
// alert(getClass)



//检测当前的元素类名中是否有需要查找的类名；有：true  没有：false
//如果有几个类名<div class="aa inner sss"></div>,需要选择其中一个类名
function checkClass(tagClass,aclass){
	var newarr=tagClass.split(" ");//将class中的类名转换成数组，以空格分开每个元素；
	for(var i=0;i<newarr.length;i++){//遍历数组中的每个元素，这里的元素就是类名；
		if(newarr[i]==aclass){//挑选出我们要的类名
			return true;
		}
	}
	return false;
}
// alert(1)
// alert(getClass)


//兼容获取文本内容
//设置文本
function text(obj,val){

	if(val==undefined){
		if(obj.textContent!=undefined){
			return obj.textContent;
		}else{
			return obj.innerText;
		}
	}else{
		if(obj.textContent!=undefined){
			val= obj.textContent;
		}else{
			val= obj.innerText;
		}
	}

}

//获取通用样式
//获取通用样式

//
function getStyle(obj,atr){
	if(obj.currentStyle){
		return obj.currentStyle[atr]; 
	}else{
		return window.getComputedStyle(obj,null)[atr];
	}
}
