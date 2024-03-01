function setCookie(name,value){ 
	var Days = 365; 
	var exp = new Date(); 
	exp.setTime(exp.getTime() + Days*24*60*60*1000); 
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
}

function getCookie(name){ 
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
	if(arr=document.cookie.match(reg)) return unescape(arr[2]); 
	else return null; 
}

function delCookie(name){ 
	var exp = new Date(); 
	exp.setTime(exp.getTime() - 1); 
	var cval=getCookie(name); 
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
//如果有两个参数，则第一个为索引，第二个该集合里的元素;
// var arr =["b", 2, "a", 4];
// $.each(arr, function(index,item){
    // alert(item+"->"+index);
// });
//b->0;2->1;a->2;4->3
/**
* Created by 愚人码头 .
* User: 愚人码头
* Date: 11-5-19
* Time: 上午10:24
*/
//在光标位置插入内容
(function($) {
	$.fn.extend({
		insertContent: function(myValue, t) {
			var $t = $(this)[0];
			if (document.selection) { //ie
				this.focus();
				var sel = document.selection.createRange();
				sel.text = myValue;
				this.focus();
				sel.moveStart("character", -l);
				var wee = sel.text.length;
				if (arguments.length == 2) {
					var l = $t.value.length;
					sel.moveEnd("character", wee + t);
					t <= 0 ? sel.moveStart("character", wee - 2 * t - myValue.length) : sel.moveStart("character", wee - t - myValue.length);

					sel.select();
				}
			} else if ($t.selectionStart || $t.selectionStart == '0') {
				var startPos = $t.selectionStart;
				var endPos = $t.selectionEnd;
				var scrollTop = $t.scrollTop;
				$t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
				this.focus();
				$t.selectionStart = startPos + myValue.length;
				$t.selectionEnd = startPos + myValue.length;
				$t.scrollTop = scrollTop;
				if (arguments.length == 2) {
					$t.setSelectionRange(startPos - t, $t.selectionEnd + t);
					this.focus();
				}
			} else {
				this.value += myValue;
				this.focus();
			}
		}
	})
})(jQuery);

function strtr(str, from, to) {
  // 来自: http://phpjs.org/functions/strtr/
  // 这个网站有不少很好用的函数，从 php 转来的，路过的程序猿/媛可以去看看~
  var fr = '',
    i = 0,
    j = 0,
    lenStr = 0,
    lenFrom = 0,
    tmpStrictForIn = false,
    fromTypeStr = '',
    toTypeStr = '',
    istr = '';
  var tmpFrom = [];
  var tmpTo = [];
  var ret = '';
  var match = false;

  // Received replace_pairs?
  // Convert to normal from->to chars
  if (typeof from === 'object') {
    /* tmpStrictForIn = this.ini_set('phpjs.strictForIn', false); // Not thread-safe; temporarily set to true
    from = this.krsort(from);
    this.ini_set('phpjs.strictForIn', tmpStrictForIn); */

    for (fr in from) {
      if (from.hasOwnProperty(fr)) {
        tmpFrom.push(fr);
        tmpTo.push(from[fr]);
      }
    }

    from = tmpFrom;
    to = tmpTo;
  }

  // Walk through subject and replace chars when needed
  lenStr = str.length;
  lenFrom = from.length;
  fromTypeStr = typeof from === 'string';
  toTypeStr = typeof to === 'string';

  for (i = 0; i < lenStr; i++) {
    match = false;
    if (fromTypeStr) {
      istr = str.charAt(i);
      for (j = 0; j < lenFrom; j++) {
        if (istr == from.charAt(j)) {
          match = true;
          break;
        }
      }
    } else {
      for (j = 0; j < lenFrom; j++) {
        if (str.substr(i, from[j].length) == from[j]) {
          match = true;
          // Fast forward
          i = (i + from[j].length) - 1;
          break;
        }
      }
    }
    if (match) {
      ret += toTypeStr ? to.charAt(j) : to[j];
    } else {
      ret += str.charAt(i);
    }
  }

  return ret;
}

function pad(target, n) {
    var len = target.toString().length;
    while (len < n) {
        target = '0' + target;
        len++;
    }
    return target;
}
//生成日期
function getDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth()+1);
    let date = now.getDate();
    return year+'年'+month+'月'+date+'日';
}
//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}

//若要显示:当前日期加时间(如:2009-06-12 12:00:00)
function getCurentTime(formatstr=['-','-','',':',':',''])
{
    let now = new Date();
    let year = now.getFullYear();       //年
    let month = now.getMonth() + 1;     //月
    let day = now.getDate();            //日
    let hh = now.getHours();            //时
    let mm = now.getMinutes();          //分
    let ss = now.getSeconds();          //秒
    let clock='';
    let len=formatstr.length;
    if (len>=1){
        clock = year + formatstr[0];
    }
    if (len>=2){
        if(month < 10) clock += "0";
        clock += month + formatstr[1];
    }
    if (len>=3){
        if(day < 10) clock += "0";
        clock += day + formatstr[2];
    }
    if (len>=4){
        if(hh < 10)  clock += "0";
        clock += " "+hh + formatstr[3];
    }
    if (len>=5){
        if (mm < 10) clock += '0';
        clock += mm+ formatstr[4];
    }
    if (len>=6){
        if (ss < 10) clock += '0';
        clock += ss+ formatstr[5];
    }
    return(clock);
}
//生成随机时间
function getFileName() {
    
}