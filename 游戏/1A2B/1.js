

function 启动答题模式(){
    console.log("启动答题模式");
}

function 启动解题模式(){
    console.log("启动解题模式");
}

function loading(){
    var 按钮_答题模式 = document.createElement("button");
    按钮_答题模式.innerHTML = "答题模式"
    按钮_答题模式.id = "按钮_答题模式"
    按钮_答题模式.setAttribute("onclick", "启动答题模式()");
    document.body.appendChild(按钮_答题模式);
    var 按钮_解题模式 = document.createElement("button");
    按钮_解题模式.innerHTML = "解题模式"
    按钮_解题模式.id = "按钮_解题模式"
    按钮_解题模式.setAttribute("onclick", "启动解题模式()");
    document.body.appendChild(按钮_解题模式);
    启动答题模式()
    var 文本_加载中 = document.getElementById("文本_加载中")
    //document.body.removeChild(文本_加载中);
}