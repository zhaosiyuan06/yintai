//获取页面元素
//获取页面加载
function $(selector,range){

	if(typeof selector=="string"){
		range=range||document;
		if(selector.charAt(0)=="#"){
			return document.getElementById(selector.substr(1));
		}
		if(selector.charAt(0)=="."){
			return getClass(selector.substr(1),range);
		}
		if(/^[a-zA-Z1-6][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector);
		}
	}
	if(typeof selector=="function"){
		window.onload=selector;
	}

}