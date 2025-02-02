// 哈哈

(function (){
    return false;
    const origin = "https://hmmm.cyou";
    const pathname = "/index.html";
    const 顶层URL = window.top.location;
    if (顶层URL.origin !== origin || 顶层URL.pathname !== pathname){
        顶层URL.replace(origin + pathname + "?" + encodeURIComponent(顶层URL.href));
    }
})();


(function (){
    window.加载数据 = function ({
        url,
        成功回调=function (){},
        失败回调=function (){},
        数据类型=null,
        请求方法="GET"
    }={}){
        if (url === void 0){
            console.error("必须传入url");
            return false;
        }
        
        if (失败回调 === true){
            失败回调 = function (){
                加载数据(arguments[0]);
            }
        }
        
        if (数据类型 === null){
            数据类型 = url.split(".").at(-1);
        }
        
        if (数据类型 === "js"){
            const script = document.createElement("script");
            script.src = "/JavaScript/" + 模块名 + ".js";
            document.head.appendChild(script);
            script.addEventListener("load", 成功回调);
        }
        else if (数据类型 === "json"){
            const xhr = new XMLHttpRequest();
            xhr.open(method=请求方法, url=url);
            xhr.send(null);
            xhr.onload = function (e){
                if (xhr.status === 200){
                    成功回调(JSON.parse(xhr.responseText));
                }
                else {
                    失败回调();
                }
            }
        }
        else if (数据类型 === "txt"){
            const xhr = new XMLHttpRequest();
            xhr.open(method=请求方法, url=url);
            xhr.send(null);
            xhr.onload = function (e){
                if (xhr.status === 200){
                    成功回调(xhr.responseText);
                }
                else {
                    失败回调();
                }
            }
        }
        else {
            console.error("没有 " + 数据类型 + " 类型");
            return false;
        }
    }
    
    加载数据({
        url: "https://hmmm.cyou/php/config.php",
        请求方法: "POST",
        数据类型: "json",
        失败回调: true,
        成功回调: function (结果){
            window.网站API = 结果["设置"];
        }
    });
    
    const 初始化菜单 = function (){
        const 动画时长 = 200;
        const 菜单 = document.createElement("dialog");
        document.body.appendChild(菜单);
        菜单.style.margin = "0";
        菜单.style.position = "fixed";
        菜单.style.touchAction = "none";
        菜单.style.borderWidth = "0";
        菜单.style.padding = "0";
        菜单.style.maxHeight = "99vh";
        菜单.style.top = "0.5vh";
        菜单.style.maxWidth = "88vw";
        菜单.style.transition = `left ${动画时长}ms ease`;
        菜单.style.borderRadius = "calc(var(--一个大小) * 0.5)";
        菜单.style.boxShadow = "0 0 10px 5px rgba(0, 0, 255, 0.2)";

        const 打开菜单 = function (){
            菜单.showModal();
            菜单.style.left = "0.5vw";
            菜单.style.setProperty("--透明度", "1");
        }
        const 关闭菜单 = function (){
            菜单.style.left = "calc(var(--宽度) * -1)";
            菜单.style.setProperty("--透明度", "0");
            setTimeout(function (){
                菜单.close();
            }, 动画时长);
        }
        const 注册登录 = function (){
            关闭菜单();
            const 登录页链接 = "/注册登录/index.html";
            if (decodeURI(window.location.pathname) === 登录页链接
            || decodeURI(window.location.pathname) === 登录页链接.slice(0, -10)){
                return true;
            }
            const dialog = document.createElement("dialog");
            document.body.appendChild(dialog);
            dialog.style.padding = "0";
            dialog.style.width = "75vw";
            dialog.style.height = "75vh";
            dialog.showModal();
            const iframe = document.createElement("iframe");
            dialog.appendChild(iframe);
            iframe.src = 登录页链接;
            iframe.style.border = "0";
            iframe.style.width = "99%";
            iframe.style.height = "99%";
            const 点击空白关闭 = function (光标){
                if (光标.clientX < dialog.offsetLeft ||
                    光标.clientX > dialog.offsetLeft + dialog.offsetWidth ||
                    光标.clientY < dialog.offsetTop ||
                    光标.clientY > dialog.offsetTop + dialog.offsetHeight){
                        dialog.remove();
                }
            }
            dialog.addEventListener("pointerup", 点击空白关闭);
        }
        
        const 登录按钮 = document.createElement("button");
        菜单.appendChild(登录按钮);
        登录按钮.innerHTML = "注册/登录";
        登录按钮.addEventListener("click", 注册登录);
        
        菜单.show();
        菜单.style.setProperty("--宽度", 菜单.offsetWidth + "px");
        关闭菜单();
        
        
        菜单.onpointerup = function(光标){
            if (光标.clientX < 菜单.offsetLeft ||
                光标.clientX > 菜单.offsetLeft + 菜单.offsetWidth ||
                光标.clientY < 菜单.offsetTop ||
                光标.clientY > 菜单.offsetTop + 菜单.offsetHeight){
                    关闭菜单();
            }
        }
        
        const 菜单按钮 = document.createElement("button");
        document.body.appendChild(菜单按钮);
        菜单按钮.style.position = "fixed";
        菜单按钮.style.top = "0";
        菜单按钮.style.left = "0";
        菜单按钮.style.borderWidth = "0";
        菜单按钮.style.padding = 0;
        菜单按钮.style.backgroundColor = "unset";
        菜单按钮.style.fontSize = "calc(var(--一个大小) * 2)";
        菜单按钮.style.lineHeight = 菜单按钮.style.fontSize;
        菜单按钮.innerHTML = "≡";
        菜单按钮.style.touchAction = "none"; 
        // 必须设置，否则移动端只会触发3次移动事件
        
        菜单按钮.onpointerdown = function(光标){
            let 是否移动 = false;
            const 菜单按钮副本 = 菜单按钮.cloneNode(true);
            document.body.appendChild(菜单按钮副本);
            菜单按钮副本.style.opacity = "0.3";
            菜单按钮.setPointerCapture(光标.pointerId);
            const 光标相对按钮位置 = [
                光标.clientX - 菜单按钮.offsetLeft,
                光标.clientY - 菜单按钮.offsetTop
            ];
            
            菜单按钮.onpointermove = function(光标){
                let 坐标X = 光标.clientX - 光标相对按钮位置[0];
                let 坐标Y = 光标.clientY - 光标相对按钮位置[1];
                const 最右位置 = document.documentElement.clientWidth - 菜单按钮.offsetWidth;
                const 最下位置 = document.documentElement.clientHeight - 菜单按钮.offsetHeight;
                if (坐标X < 0) 坐标X = 0;
                if (坐标Y < 0) 坐标Y = 0;
                if (坐标X > 最右位置) 坐标X = 最右位置;
                if (坐标Y > 最下位置) 坐标Y = 最下位置;
                菜单按钮.style.left = 坐标X + "px";
                菜单按钮.style.top = 坐标Y + "px";
                是否移动 = true;
            }
            
            菜单按钮.onpointerup = function(光标2){
                菜单按钮.onpointermove = null;
                菜单按钮副本.remove();
                菜单按钮.releasePointerCapture(光标.pointerId);
                if (是否移动 === false){
                    打开菜单();
                }
            }
        }
        
        
        
        
    }
    
    if (document.body){
        初始化菜单();
    }
    else {
        window.addEventListener("load", 初始化菜单);
    }
})();
