window.app={
	// wifi
	serverUrl:'http://192.168.0.102:8080',
	// 有线
	// serverUrl:'http://192.168.0.106:8080',
	isNotNull:function(str){
		if(str!=null && str!='' && str!=undefined){
			return true;
		}
		return false;
	},
	isNull:function(str){
		return !app.isNotNull(str);
	},
	/**
	 * 显示自定义的弹窗
	 * @param {Object} msg
	 * @param {Object} icon
	 */
	showToast:function(msg,icon){
		plus.nativeUI.toast(msg,{icon:"image/"+icon+".png",verticalAlign:"center"})
	},
	/**
	 * 设置全局user对象
	 * @param {Object} user
	 */
	setGloableUserInfo:function(user){
		var userinfo = JSON.stringify(user);
		plus.storage.setItem("userInfo",userinfo);
	},
	/**
	 * 获取user
	 */
	getGloableUserInfo:function(){
		var user = plus.storage.getItem("userInfo");
		return JSON.parse(user);
	}
	
}
