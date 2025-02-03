(async function (){
    const 延时 = async function (t){
        return new Promise(resolve => setTimeout(resolve, t));
    }
    
    const 处理消息 = function (){
        const 对象ID = document.getElementsByClassName("title_name ng-binding")[0].dataset["username"];
        const 对象名 = document.getElementsByClassName("title_name ng-binding")[0].innerHTML;
        const 对象为群 = document.getElementById("chatArea").className === "box chat ng-scope chatRoom" ? true : false;
        const 消息列表 = document.getElementsByClassName("box_bd chat_bd scrollbar-dynamic scroll-content")[0].children[0].children;
        console.log(对象ID, 对象名, 对象为群)
        for (let i=消息列表.length-1; i>=0; i--){
            if (消息列表[i].className === "ng-scope"){
                console.log(消息列表[i])
            }
        }
    }
    
    const js = document.scripts;
    js[js.length-1].remove();
    
    const login_box = document.getElementsByClassName("login_box");
    if (login_box.length !== 0){
        alert("请登录后重新注入");
        return false;
    }
    
    const header = document.getElementsByClassName("header")[0].children;
    const 账号ID = header[0].children[0].src.split("username=", 2)[1].split("&")[0];
    // @71a8233365a99f191c31c6f40fcd36a22a27099a6c583a07a77ccde8541cac9d
    const 账号名 = header[1].children[0].children[0].innerHTML;
    console.log("当前账号：", 账号名, "(" + 账号ID + ")");
    while (true){
        处理消息();
        await 延时(100000 / 60);
        const 会话列表 = document.getElementById("J_NavChatScrollBody").children[1].children;
        for (let i of 会话列表){
            if (i.className !== "ng-scope"){
                continue;
            }
            
            if (i.children[0].children[1].children.length !== 1){
                // 头像红点样式
                // 免打扰 icon web_wechat_reddot ng-scope
                // 数字提示 icon web_wechat_reddot_middle ng-binding ng-scope
                i.children[0].click();
                break;
            }
        }
    }
})();