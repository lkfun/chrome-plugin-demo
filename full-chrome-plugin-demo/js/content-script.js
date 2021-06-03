console.log(`这是content script!正在访问${location.host}`);


var array = [
	`bilibili.com`, `acfun.cn`, `zhihu.com`, `lol.gamepedia.com`, `op.gg`, `101.qq.com`, `pixiv.net`, `hupu.com`, `tieba.baidu.com`, `taobao.com`, `tmall.com`, `jd.com`, `baijiahao.baidu.com`, `mbd.baidu.com`, `nga.178.com`,`bbs.nga.cn`,`hkss.huijiwiki.com`,`playok.com`,`kaiheila.cn`,`steampowered.com`,`steamcommunity.com`,`douyu.com`,`huya.com`,`moegirl.org`,`weibo.com`,`sohu.com`,`new.qq.com`,`lol.qq.com`,`k.sina.com.cn`,`sports.eastday.com`,`haokan.baidu.com`,`sports.163.com`,`www.dongqiudi.com`,`cache.baiducontent.com`,`qidian.com`,`news.baidu.com`,`hao123.com`,`news.china.com`,`b23.tv`,`youtube.com`,`login.sina.com`,`biliplus.com`]
var motto=`海纳百川，有容乃大；壁立千仞，无欲则刚。
少壮不努力，老大徒伤悲。
世事多因忙里错，好人多半苦中来。
三更灯火五更鸡，正是男儿读书时。黑发不知勤学早，白首方悔读书迟。
不飞则已，一飞冲天；不鸣则已，一鸣惊人。
青，取之于蓝而青于蓝；冰，水为之而寒于水。
志当存高远。
发愤忘食，乐以忘忧，不知老之将至云尔。
我劝天公重抖擞，不拘一格降人才。
盛年不重来，一日难再晨。及时当勉励，岁月不待人。
吾生也有涯，而知也无涯。
穷则变，变则通，通则久。
古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。
天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为。
绳锯木断，水滴石穿。
将相本无种，男儿当自强。
尺有所短；寸有所长。物有所不足；智有所不明。
天生我材必有用，千金散尽还复来。
寄蜉蝣于天地，渺沧海之一粟。
欲穷千里目，更上一层楼。
沉舟侧畔千帆过,病树前头万木春。
忧劳可以兴国，逸豫可以亡身。
一寸光阴一寸金，寸金难买寸光阴。
山河破碎风飘絮，身世浮沉雨打萍。
鸟欲高飞先振翅，人求上进先读书。
花经雨后香微淡，松到秋深色尚苍。
天下事以难而废者十之一，以惰而废者十之九。
俗子胸襟谁识我？英雄末路当磨折。
工欲善其事，必先利其器。
不是一番寒彻骨，怎得梅花扑鼻香！
一日不书，百事荒芜。
穷且益坚，不坠青云之志。
千磨万击还坚劲，任尔东西南北风。
精诚所加，金石为开。
三人行，必有我师焉。择其善者而从之，其不善者而改之。
路漫漫其修道远，吾将上下而求索。
山高月小，水落石出。
盛名之下，其实难副。
江山代有才人出，各领风骚数百年。
锲而不舍，金石可镂。
与善人居，如入兰芷之室，久而不闻其香；与恶人居。如入鲍鱼之肆，久而不闻其香
仁者见之谓之仁，智者见之谓之智。
谁言寸草心，报得三春晖。
我自横刀向天笑，去留肝胆两昆仑。
老骥伏枥，志在千里。烈士暮年，壮心不已。
青，取之于蓝而青于蓝。
士不可不弘毅，任重而道远。
老当益壮，宁知白首之心；穷且益坚，不坠青云之志。
莫愁前路无知己，天下谁人不识君。
位卑未敢忘忧国。
以铜为镜，可以正衣冠；以古为镜，可以知兴替；以人为镜，可以明得失。
靡不有初，鲜克有终。
梨花院落溶溶月，柳絮池塘淡淡风。
己所不欲，勿施于人。
千里之行，始于足下。
业精于勤，荒于嬉，行成于思，毁于随。
见义不为，非勇也。
近水楼台先得月，向阳花木易为春。
落红不是无情物，化作春泥更护花。
天下兴亡，匹夫有责。
心事浩茫连广宇，于无声处听惊雷。
路漫漫其修远今，吾将上下而求索。
皮之不存，毛将焉附？
祸兮，福之所倚；福兮，锅之所伏。
莫等闲，白了少年头，空悲切！
它山之石，可以攻玉。
盛年不重来，一日难再晨，及时当勉励，岁月不待人。
山河破碎风飘絮，身世浮沉雨打萍。
前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。
山不在高，有仙则名；水不在深，有龙则灵。
信言不美，美言不信。善者不辩，辩者不善。
欲穷千里目，更上一层楼。
新沐者必弹冠，新浴者必振衣。
一日暴之，十日寒之，未有能生者也。
物以类聚，人以群分。
流水不腐，户枢不蠹。
身无彩凤双飞翼，心有灵犀一点通。
木秀于林，风必摧之。
星星之火，可以燎原。
不耻下问。
人固有一死，或重于泰山，或轻于鸿毛，用之所趋异也。
疏影横斜水清浅，暗香浮动月黄昏。
试玉要烧三日满，辨材须待七年期。
士为知己者死。
梅须逊雪三分白，雪却输梅一段香。
生当作人杰，死亦为鬼雄。
兼听则明，偏信则暗。
海上生明月，天涯共此时。
山不厌高，水不厌深。
其曲弥高，其和弥寡。
天时不如地利，地利不如人和。
玩物丧志。
闻道有先后，术业有专攻。
天下事有难易乎，为之，则难者亦易矣；不为，则易者亦难矣。
失之东隅，收之桑榆。
绳锯木断，水滴石穿。
清水出芙蓉，天然去雕饰。
九州生气恃风雷，万马齐喑究可哀。我劝天公重抖擞，不拘一格降人才。
莫等闭，白了少年头，空悲切。
其身正，不令而行；其身不正，虽令不从。
为人性僻耽佳句，语不惊人死不休。
学而不思则罔，思而不学则殆。
问渠那得清如许，为有源头活水来。
海阔凭鱼跃，天高任鸟飞。
穷则独善其身，达则兼善天下。
夕阳无限好，只是近黄昏。
勿以恶小而为之，勿以善小而不为。
蚍蜉撼大树，可笑不自量。
天行有常，不为尧存，不为桀亡。
君子之交淡若水，小人之交甘若醴。
`.replaceAll('。','<br/>').replaceAll('，','<br/>').replaceAll('；','<br/>').split(`\n`)

var a = new Date()
var b = a.getHours() * 60 + a.getMinutes()
array.forEach((url) => {
	if (location.host.lastIndexOf(url) >= 0) {
		if (((b > 480 && b < 720) || (b > 870 && b < 1080)) && (a.getDay() > 0 && a.getDay() < 6)) {
			window.stop();
			$("html").html(`<head/><body/>`)
			/*
			injectCustomJs('js/jquery-1.8.3.js')
			injectCustomJs('js/newtab.js')
			return;*/
			$("body").html(`<div class="center" id="center"/>`);
			$("center").html(`<div class="center" id="center"/>`);
			$("#center").append(`<div><h1>`+motto[Math.floor(motto.length*Math.random())] +`</h1><small id="time"/></div>`)
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
				color: "#7c9cef"
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
				opacity:0.25,
				"max-width":"90%",
				"user-select": "none"
			})

			$(".center>div>h1").first().css({
				"font-family": "方正黄草简体,钟齐毛笔简体",
				"max-height":"55%",
				"writing-mode": "vertical-rl",
				"text-align": "left",
				"margin": "0 auto"
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
			document.title = timeStr;


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
	if (location.host.lastIndexOf(`google.com`) >= 0) {
		if (((b > 480 && b < 720) || (b > 870 && b < 1080)) && (a.getDay() > 0 && a.getDay() < 6)) {
			$
		}
	}
})


// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function () {
	// 注入自定义JS
	injectCustomJs();
	// 给谷歌搜索结果的超链接增加 _target="blank"
	if (location.host == 'www.google.com') {
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
			.result-op.xpath-log{display:none !important;}
			/**/
			#s_wrap{display:none;}
			#s_mp{display:none;}
			`;
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
			$('#s_mp').remove();
			$('[data-tuiguang]').parents('[data-click]').remove();
			$('.ec_tuiguang_pplink').parents(".c-container").css("background", "red").remove();
			$('.nor-src-wrap').parents(".c-container").css("background", "red").remove();
		}
		fuckBaiduAD();
		initCustomPanel();
		initCustomEventListen();
	}
});
document.addEventListener("beforeload", function(event) {
    console.log("resource", event.url);
}, true);

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
