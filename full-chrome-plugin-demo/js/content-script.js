console.log(`这是content script!正在访问${location.host}`);


var array = [`bilibili.com`, `acfun.cn`, `zhihu.com`, `lol.gamepedia.com`, `op.gg`, `101.qq.com`, `pixiv.net`, `hupu.com`, `tieba.baidu.com`, `taobao.com`, `tmall.com`, `jd.com`, `baijiahao.baidu.com`, `mbd.baidu.com`, `nga.178.com`,`bbs.nga.cn`,`hkss.huijiwiki.com`,`playok.com`,`kaiheila.cn`,`steampowered.com`,`steamcommunity.com`,`douyu.com`,`huya.com`,`moegirl.org`,`weibo.com`]

array.forEach((url) => {
	if (location.host.lastIndexOf(url) >= 0) {

		var a = new Date()
		var b = a.getHours() * 60 + a.getMinutes()
		if (((b > 480 && b < 720) || (b > 870 && b < 1080)) && (a.getDay() > 0 && a.getDay() < 6)) {
			window.stop();
			$("html").html(`<head/><body/>`)
			/*
			injectCustomJs('js/jquery-1.8.3.js')
			injectCustomJs('js/newtab.js')
			return;*/
			$("body").html(`<div class="center" id="center"/>`);
			$("center").html(`<div class="center" id="center"/>`);
			$("#center").append(`<div><h1>你在看你🐴呢？快去工作</h1><small id="time"/></div>`)
			$("html,body").css({ height: "100%" })
			$("body").css({ "font-family": 'Microsoft Yahei', margin: 0, padding: 0 })
			$("#center").append(`
			<div class="wrapper">
				<a href="https://www.baidu.com">百度</a>
				<a href="https://github.com">github</a>
				<a href="https://lkfun.cc">lkfun</a>
				<a href="https://pvpa.lkfun.cc">pvpa</a>
			</div>
			`)
			$(".center").css({
				display: "flex",
				"align-items": "center",
				"justify-content": "center",
				height: "100%",
				"font-size": "48px",
				color: "#7c9 cef"
			})
			$(".wrapper").css({
				position: 'absolute',
				top: '10%',
				left: '10%',
				padding: '60px',
				'font-size': '32px',
				'font-family':'Arial, Helvetica, sans-serif',
				color: "#7c9cef"
			})
			$(".center>div").first().css({
				"text-align": "center",
				opacity:0.25
			})

			$(`a`).css({
				'text-decoration': 'none',
				color: "rgb(71, 77, 255)",
				"padding-left":"10px"
			})

			self.setInterval(clock,1);
		}
		function clock(){
			var time = new Date();
			timeStr=PrefixZero(time.getYear()+1900,4)+"年"+PrefixZero((time.getMonth()+1),2)+"月"+PrefixZero(time.getDate(),2)+"日"+PrefixZero(time.getHours(),2)+"时"+PrefixZero(time.getMinutes(),2)+"分"+PrefixZero(time.getSeconds(),2)+"秒"+PrefixZero(time.getMilliseconds(),3)
			$("#time").html(timeStr)
		}
		/**
		* 自定义函数名：PrefixZero
		* @param num： 被操作数
		* @param n： 固定的总位数
		*/
		function PrefixZero(num, n) {
			return (Array(n).join(0) + num).slice(-n);
		}
	}
})


// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function () {
	// 注入自定义JS
	injectCustomJs();
	// 给谷歌搜索结果的超链接增加 _target="blank"
	if (location.host == 'www.google.com.tw') {
		var objs = document.querySelectorAll('h3.r a');
		for (var i = 0; i < objs.length; i++) {
			objs[i].setAttribute('_target', 'blank');
		}
		console.log('已处理谷歌超链接！');
	} else if (location.host == 'www.baidu.com') {
		function fuckBaiduAD() {
			/*if(document.getElementById('my_custom_css')&&document.getElementById('page')) return;*/
			var temp = document.createElement('style');
			temp.id = 'my_custom_css';
			(document.head || document.body).appendChild(temp);
			var css = `
			/* 移除百度右侧广告 */
			#content_right{display:none;}
			
			/* 覆盖整个屏幕的相关推荐 */
			.rrecom-btn-parent{display:none;}'
			/* 难看的按钮 */
			.result-op.xpath-log{display:none !important;}`;
			temp.innerHTML = css;
			console.log('已注入自定义CSS！');
			// 屏蔽百度推广信息
			removeAdByJs();
			// 这种必须用JS移除的广告一般会有延迟，干脆每隔一段时间清除一次
			interval = setInterval(removeAdByJs, 200);

			// 重新搜索时页面不会刷新，但是被注入的style会被移除，所以需要重新执行
			temp.addEventListener('DOMNodeRemoved', function (e) {
				console.log('自定义CSS被移除，重新注入！');
				if (interval) clearInterval(interval);
				fuckBaiduAD();
			});
		}
		let interval = 0;
		function removeAdByJs() {
			$('[data-tuiguang]').parents('[data-click]').remove();
			$('.ec_tuiguang_pplink').parents(".c-container").css("background", "red").remove();
			$('#s_mp').remove();
			$('#s_lm_wrap').remove();
			$('#s_content_2').remove();
			$('.nor-src-wrap').parents(".c-container").css("background", "red").remove();
		}
		fuckBaiduAD();
		initCustomPanel();
		initCustomEventListen();
	}
});

function initCustomPanel() {
	return;
	var panel = document.createElement('div');
	panel.className = 'chrome-plugin-demo-panel';
	panel.innerHTML = `
		<h2>injected-script操作content-script演示区：</h2>
		<div class="btn-area">
			<a href="javascript:sendMessageToContentScriptByPostMessage('你好，我是普通页面！')">通过postMessage发送消息给content-script</a><br>
			<a href="javascript:sendMessageToContentScriptByEvent('你好啊！我是通过DOM事件发送的消息！')">通过DOM事件发送消息给content-script</a><br>
			<a href="javascript:invokeContentScript('sendMessageToBackground()')">发送消息到后台或者popup</a><br>
		</div>
		<div id="my_custom_log">
		</div>
	`;
	document.body.appendChild(panel);
}

// 向页面注入JS
function injectCustomJs(jsPath) {
	jsPath = jsPath || 'js/inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function () {
		// 放在页面不好看，执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.body.appendChild(temp);
}

// 接收来自后台的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log('收到来自 ' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "popup或者background") + ' 的消息：', request);
	if (request.cmd == 'update_font_size') {
		var ele = document.createElement('style');
		ele.innerHTML = `* {font-size: ${request.size}px !important;}`;
		document.head.appendChild(ele);
	}
	else {
		tip(JSON.stringify(request));
		sendResponse('我收到你的消息了：' + JSON.stringify(request));
	}
});

// 主动发送消息给后台
// 要演示此功能，请打开控制台主动执行sendMessageToBackground()
function sendMessageToBackground(message) {
	chrome.runtime.sendMessage({ greeting: message || '你好，我是content-script呀，我主动发消息给后台！' }, function (response) {
		tip('收到来自后台的回复：' + response);
	});
}

// 监听长连接
chrome.runtime.onConnect.addListener(function (port) {
	console.log(port);
	if (port.name == 'test-connect') {
		port.onMessage.addListener(function (msg) {
			console.log('收到长连接消息：', msg);
			tip('收到长连接消息：' + JSON.stringify(msg));
			if (msg.question == '你是谁啊？') port.postMessage({ answer: '我是你爸！' });
		});
	}
});

window.addEventListener("message", function (e) {
	console.log('收到消息：', e.data);
	if (e.data && e.data.cmd == 'invoke') {
		eval('(' + e.data.code + ')');
	}
	else if (e.data && e.data.cmd == 'message') {
		tip(e.data.data);
	}
}, false);


function initCustomEventListen() {
	var hiddenDiv = document.getElementById('myCustomEventDiv');
	if (!hiddenDiv) {
		hiddenDiv = document.createElement('div');
		hiddenDiv.style.display = 'none';
		hiddenDiv.id = 'myCustomEventDiv';
		document.body.appendChild(hiddenDiv);
	}
	hiddenDiv.addEventListener('myCustomEvent', function () {
		var eventData = document.getElementById('myCustomEventDiv').innerText;
		tip('收到自定义事件：' + eventData);
	});
}

var tipCount = 0;
// 简单的消息通知
function tip(info) {
	info = info || '';
	var ele = document.createElement('div');
	ele.className = 'chrome-plugin-simple-tip slideInLeft';
	ele.style.top = tipCount * 70 + 20 + 'px';
	ele.innerHTML = `<div>${info}</div>`;
	document.body.appendChild(ele);
	ele.classList.add('animated');
	tipCount++;
	setTimeout(() => {
		ele.style.top = '-100px';
		setTimeout(() => {
			ele.remove();
			tipCount--;
		}, 400);
	}, 3000);
} 