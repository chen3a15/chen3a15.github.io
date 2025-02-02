(async function (){
    const js = document.scripts;
    js[js.length-1].remove();
    console.time();
    window.ICD_10 = {};
    let 章, 章名, 节, 节名, 类目, 类目名, ICDMainframe, classicont, 亚目, 亚目名, 条目;
    const dataInfo = document.getElementById("dataInfo").contentWindow.document;
    const treeDemo1 = dataInfo.getElementById("treeDemo1");
    
    const 延时 = async function (t){
        return new Promise(resolve => setTimeout(resolve, t));
    }
    
    const 加载 = function (){
        if (dataInfo.getElementById("ICDMainframe") !== null){
            ICDMainframe = dataInfo.getElementById("ICDMainframe").contentWindow.document;
        }
        
        if (ICDMainframe.getElementById("main-frame-error") !== null){
            类目.children[1].click();
        }
        else if (ICDMainframe.getElementById("err_code") !== null){
            类目.children[1].click();
        }
    }
    
    const 处理映射 = async function (){
        条目.children[0].children[2].click();
        while (ICDMainframe.getElementById("loadingDiv") !== null){
            await 延时(100);
        }
        
        if (条目.children.length !== 2){
            await 处理映射();
            return false;
        }
        
        for (let i of 条目.children[1].children){
            条目名 = i.children[0].innerHTML + " " + i.children[1].innerHTML;
            ICD_10[章名][节名][类目名][亚目名].push(条目名);
        }
    }
    
    
    const 处理条目 = async function (){
        条目 = 亚目;
        if (条目.children.length === 0){
            console.error("条目为空：", 条目)
            await 处理类目();
            return false;
        }
        
        let 条目名;
        条目名 = 条目.children[0].children[0].name + " " + 条目.children[0].children[1].innerHTML;
        // console.log("条目名：", 条目名);
        
        if (ICD_10[章名][节名][类目名][亚目名] === void 0){
            亚目名 = 类目名.split(".")[0];
            if (ICD_10[章名][节名][类目名][亚目名] === void 0){
                ICD_10[章名][节名][类目名][亚目名] = [];
            }
        }
        
        ICD_10[章名][节名][类目名][亚目名].push(条目名);
        if (条目.children[0].children.length !== 2){
            await 处理映射();
        }
    }
    
    const 处理亚目 = async function (){
        亚目.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        if (亚目.className === "els-doc-h1"){
            // console.log("未知条目:", 亚目);
        }
        else if (亚目.id === 类目名.split(" ")[0]){
            // console.log("类目:", 亚目);
        }
        else if (亚目.className === "els-doc-h4" && 亚目.children[0].innerHTML === 类目名.split(" ")[0]){
            // console.log("类目2:", 亚目);
        }
        else if (亚目.className === "els-doc-h4" && 亚目.children[0].innerHTML.split(".")[0] === 类目名.split(" ")[0].split("+")[0].split("*")[0]){
            // console.log("亚目:", 亚目);
            亚目名 = 亚目.children[0].innerHTML + " " + 亚目.children[1].innerHTML;
            // console.log("亚目名：", 亚目名);
            if (ICD_10[章名][节名][类目名][亚目名] === void 0){
                ICD_10[章名][节名][类目名][亚目名] = [];
            }
        }
        else if (亚目.className === "els-doc-con"){
            // console.log("条目:", 亚目);
            await 处理条目();
            if (亚目.children[0].children[0].title === "请点击查看映射"){
                亚目.children[0].children[0].click();
            }
        }
        else if (亚目.nodeName === "HR"){
            // console.log("分割线:", 亚目);
        }
        else{
            console.error("未知条目：", 亚目);
            return false;
        }
    }
    
    const 处理类目 = async function (){
        类目.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        类目.children[1].click();
        while (dataInfo.getElementById("loadingDiv") !== null){
            加载();
            await 延时(100);
        }
        
        类目名 = 类目.children[1].children[1].innerHTML;
        // console.log("类目名：", 类目名);
        if (ICD_10[章名][节名][类目名] === void 0){
            ICD_10[章名][节名][类目名] = {};
        }
        
        ICDMainframe = dataInfo.getElementById("ICDMainframe").contentWindow.document;
        classicont = ICDMainframe.getElementById("classicont").children;
        for (亚目 of classicont){
            await 处理亚目();
        }
    }
    
    const 处理节 = async function (){
        节.children[1].click();
        while (dataInfo.getElementById("loadingDiv") !== null){
            加载();
            await 延时(100);
        }
        
        节名 = 节.children[1].children[1].innerHTML;
        // console.log("节名：", 节名);
        if (ICD_10[章名][节名] === void 0){
            ICD_10[章名][节名] = {};
        }
        
        if (节.children[2].children.length === 0){
            类目 = 节;
            await 处理类目();
        }
        else {
            for (类目 of 节.children[2].children){
                await 处理类目();
            }
        }
    }
    
    const 处理章 = async function (){
        章.children[1].click();
        while (dataInfo.getElementById("loadingDiv") !== null){
            加载();
            await 延时(100);
        }
        
        章名 = 章.children[1].children[1].innerHTML;
        // console.log("章名：", 章名);
        if (ICD_10[章名] === void 0){
            ICD_10[章名] = {};
        }
        
        for (节 of 章.children[2].children){
            await 处理节();
        }
    }
    
    for (章 of treeDemo1.children){
        await 处理章();
    }
    
    console.log(JSON.stringify(ICD_10, null, 4));
    const js = document.scripts;
    const 根网址 = js[js.length-1].src.substring(0,js[js.length-1].src.lastIndexOf("/")).replace("收藏夹注入", "");
    console.log(根网址 + "医疗健康/患者统计/数据/index.html");
    if (confirm("已完成，是否打印？")){
        document.body.innerHTML += "<textarea>" + JSON.stringify(ICD_10, null, 4) + "</textarea>";
    }
    console.timeEnd();
})();