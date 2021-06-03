// 通过postMessage调用content-script
function invokeContentScript(code)
{
	window.postMessage({cmd: 'invoke', code: code}, '*');
}
// 发送普通消息到content-script
function sendMessageToContentScriptByPostMessage(data)
{
	window.postMessage({cmd: 'message', data: data}, '*');
}

// 通过DOM事件发送消息给content-script
(function() {
	var customEvent = document.createEvent('Event');
	customEvent.initEvent('myCustomEvent', true, true);
	// 通过事件发送消息给content-script
	function sendMessageToContentScriptByEvent(data) {
		data = data || '你好，我是injected-script!';
		var hiddenDiv = document.getElementById('myCustomEventDiv');
		hiddenDiv.innerText = data
		hiddenDiv.dispatchEvent(customEvent);
	}
	window.sendMessageToContentScriptByEvent = sendMessageToContentScriptByEvent;
})();


/******监听 xhr请求  开始 */

;(function () {
	if ( typeof window.CustomEvent === "function" ) return false;
   
	function CustomEvent ( event, params ) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent( 'CustomEvent' );
		evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
		return evt;
	}   
	CustomEvent.prototype = window.Event.prototype;   
	window.CustomEvent = CustomEvent;
})();
;(function () {
	function ajaxEventTrigger(event) {
		var ajaxEvent = new CustomEvent(event, { detail: this });
		window.dispatchEvent(ajaxEvent);
	}
    
	var oldXHR = window.XMLHttpRequest;
   
	function newXHR() {
		var realXHR = new oldXHR();

		realXHR.addEventListener('abort', function () { ajaxEventTrigger.call(this, 'ajaxAbort'); }, false);
		realXHR.addEventListener('error', function () { ajaxEventTrigger.call(this, 'ajaxError'); }, false);
		realXHR.addEventListener('load', function () { ajaxEventTrigger.call(this, 'ajaxLoad'); }, false);
		realXHR.addEventListener('loadstart', function () { ajaxEventTrigger.call(this, 'ajaxLoadStart'); }, false);
		realXHR.addEventListener('progress', function () { ajaxEventTrigger.call(this, 'ajaxProgress'); }, false);
		realXHR.addEventListener('timeout', function () { ajaxEventTrigger.call(this, 'ajaxTimeout'); }, false);
		realXHR.addEventListener('loadend', function () { ajaxEventTrigger.call(this, 'ajaxLoadEnd'); }, false);
		realXHR.addEventListener('readystatechange', function() { ajaxEventTrigger.call(this, 'ajaxReadyStateChange'); }, false);

		let send = realXHR.send;
		realXHR.send = function(...arg){
			send.apply(realXHR,arg);
			realXHR.body = arg[0];
			ajaxEventTrigger.call(realXHR, 'ajaxSend');
		}

		let open = realXHR.open;
		realXHR.open = function(...arg){
			open.apply(realXHR,arg)
			realXHR.method = arg[0];
			realXHR.orignUrl = arg[1];
			realXHR.async = arg[2];
			ajaxEventTrigger.call(realXHR, 'ajaxOpen');
		}

		let setRequestHeader = realXHR.setRequestHeader;
		realXHR.requestHeader = {};
		realXHR.setRequestHeader = function(name, value){
		    realXHR.requestHeader[name] = value;
		    setRequestHeader.call(realXHR,name,value)
		}
		return realXHR;
	}
   
 	//window.XMLHttpRequest = newXHR;//直接替换旧的会影响B站的一些功能
})();
var Gpins_data = {};
// 监听页面的ajax
window.addEventListener("ajaxReadyStateChange",function(e){
	let xhr = e.detail;
	if(xhr.readyState == 4 && xhr.status == 200){
		// xhr.getAllResponseHeaders()  响应头信息
		// xhr.requestHeader            请求头信息
		// xhr.responseURL              请求的地址
		// xhr.responseText             响应内容
		// xhr.orignUrl                 请求的原始参数地址
		// xhr.body                     post参数，（get参数在url上面）
		
		console.log(xhr);
		if(!(xhr.orignUrl.indexOf ("/v3/geocode/regeo")<0)){
			//console.log(JSON.parse(xhr.responseText));	
			url=xhr.orignUrl;
			var theRequest = new Object();
 
			if (url.indexOf("?") != -1) {
		  
			   var str = url.substr(1);
		  
			   strs = str.split("&");
		  
			   for(var i = 0; i < strs.length; i ++) {
		  
				  theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		  
			   }
		  
			}
			console.log (theRequest);
		}
	}
});

/****监听 xhr请求 结束 */