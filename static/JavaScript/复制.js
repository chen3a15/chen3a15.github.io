
async function 等待(时长){
  return new Promise((参数) => setTimeout(参数, 时长));
}

async function 复制(文本){
    if (document.body === null){
        alert("页面尚未加载完成");
        return false;
    }
    
    let 弹窗 = document.createElement("dialog");
    document.body.appendChild(弹窗);
    弹窗.showModal();
    let 标题 = document.createElement("p");
    标题.innerHTML = "即将复制：";
    弹窗.appendChild(标题);
    let 内容 = document.createElement("textarea");
    内容.id = "复制_弹窗_内容";
    内容.innerHTML = 文本;
    内容.style.resize = "none";
    内容.setAttribute("readonly", "");
    弹窗.appendChild(内容);
    let 提示 = document.createElement("p");
    提示.style.color = "red";
    弹窗.appendChild(提示);
    let 关闭按钮 = document.createElement("button");
    关闭按钮.innerHTML = "关闭";
    关闭按钮.setAttribute("onclick", "this.parentNode.remove();");
    弹窗.appendChild(关闭按钮);
    
    内容.select();
    
    
    try {
        await navigator.clipboard.writeText(文本);
        let 粘贴板内容 = await navigator.clipboard.readText();
        if (文本 === 粘贴板内容){
            提示.innerHTML = "复制成功！";
        }
        else {
            提示.innerHTML = "复制失败！";
            return false;
        }
    }
    catch {
        document.execCommand("copy");
        提示.innerHTML = "复制成功了（大概）";
    }
    
    for (let 时长 = 3000; 时长 > 0; 时长 = 时长 - 1000){
        关闭按钮.innerHTML  = "关闭（" + 时长/1000 + "）";
        await 等待(1000);
    }
    
    弹窗.close();
    弹窗.remove();
    
    return true;
    
}