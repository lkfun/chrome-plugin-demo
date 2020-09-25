$("html").html(`<head/><body/>`)
$("body").html(`<div class="center" id="center"/>`);
$("center").html(`<div class="center" id="center"/>`);
$("#center").append(`<div><h1>😄</h1><small id="time"/></div>`)
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
    opacity:0.25
})

$(`a`).css({
    'text-decoration': 'none',
    color: "rgb(71, 77, 255)",
    "padding-left":"10px"
})

self.setInterval(clock,1);
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