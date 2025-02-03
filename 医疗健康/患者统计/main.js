// 20250104
window.患者查询结果 = {};

function 加载资源 (缓存=true){
    const 成功回调 = function (结果){
        window.泰安_2025 = 结果;
        localStorage.setItem("泰安_2025", JSON.stringify(泰安_2025));
        span.innerHTML = "<span style='color: green;'>加载成功：</span>泰安市按病种分值付费（DIP）病种分值表（2025 版）";
        span.style.opacity = 0;
        setTimeout(function (){
            span.remove();
        }, 3000);
    }
    
    const span = document.createElement("span");
    span.className += " 加载提示";
    span.innerHTML = "正在加载：泰安市按病种分值付费（DIP）病种分值表（2025 版）";
    document.body.appendChild(span);
    
    if (缓存 === true && localStorage.getItem("泰安_2025") !== null){
        成功回调(JSON.parse(localStorage.getItem("泰安_2025")));
    }
    else {
        加载数据({
            url: "./数据/泰安市按病种分值付费（DIP）病种分值表（2025 版）.json",
            失败回调: true,
            成功回调: 成功回调
        });
    }
}

function 打印(){
    const span = document.createElement("span");
    span.className += " 加载提示";
    span.innerHTML = "正在渲染：患者列表";
    document.body.appendChild(span);
    
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    const style = document.createElement("style");
    iframe.contentWindow.document.head.appendChild(style);
    style.innerHTML = `
        table {
            border-collapse: collapse;
        }
        
        th, td {
            border: 1px solid;
            text-align: center;
            padding: 0.2em;
        }
    `;
    const table = document.createElement("table");
    iframe.contentWindow.document.body.appendChild(table);
    const 表头 = document.createElement("tr");
    table.appendChild(表头);
    表头.innerHTML = `
        <th>序号</th>
        <th>ID</th>
        <th>姓名</th>
        <th>人员类别</th>
        <th>结算时间</th>
        <th>医疗总费用</th>
        <th>中医适宜技术费用占比</th>
        <th>病种</th>
        <th>主要手术操作</th>
        <th>相关手术操作</th>
        <th>病种组编码</th>
        <th>病种组分值</th>
        <th>病种组费用</th>
        <th>病历大夫</th>
    `;
    for (let i in 患者查询结果){
        const tr = document.createElement("tr");
        table.appendChild(tr);
        tr.innerHTML = `
            <td>${parseInt(i) + 1}</td>
            <td>${患者查询结果[i]["ID"]}</td>
            <td>${患者查询结果[i]["姓名"]}</td>
            <td>${患者查询结果[i]["人员类别"]}</td>
            <td>${患者查询结果[i]["结算时间"]}</td>
            <td>${患者查询结果[i]["医疗总费用"]}</td>
            <td>${患者查询结果[i]["中医适宜技术费用占比"]}</td>
            <td>${患者查询结果[i]["病种"]}</td>
            <td>${患者查询结果[i]["主要手术操作"]}</td>
            <td>${患者查询结果[i]["相关手术操作"]}</td>
            <td>${患者查询结果[i]["病种组编码"]}</td>
            <td>${患者查询结果[i]["病种组分值"]}</td>
            <td>${患者查询结果[i]["病种组费用"]}</td>
            <td>${患者查询结果[i]["病历大夫"]}</td>
        `.replaceAll("<td>null</td>", "<td></td>");
    }
    
    iframe.contentWindow.print();
    iframe.remove();
    span.innerHTML = "<span style='color: green;'>渲染成功：</span>已尝试调起打印页面，如果失败，请尝试使用PC端Google浏览器";
    setTimeout(function (){
        span.style.opacity = 0;
        setTimeout(function (){
            span.remove();
        }, 3000);
    }, 3000);
}

function 调整时间(指令, 时间a, 时间b){
    const 格式化时间 = function (a=Date.now()){
        a = new Date(a);
        b = a.getFullYear();
        b = b + "-" + (a.getMonth() + 1).toString().padStart(2, "0");
        b = b + "-" + a.getDate().toString().padStart(2, "0");
        b = b + "T" + a.getHours().toString().padStart(2, "0");
        b = b + ":" + a.getMinutes().toString().padStart(2, "0");
        return b;
    }
    
    const 本月初 = new Date(new Date().getFullYear(), new Date().getMonth());
    const 上月末 = new Date(Date.parse(本月初) - 1);
    const 上月初 = new Date(上月末.getFullYear(), 上月末.getMonth());
    const 上上月末 = new Date(Date.parse(上月初) - 1);
    const 上上月初 = new Date(上上月末.getFullYear(), 上上月末.getMonth());
    const 上上上月末 = new Date(Date.parse(上上月初) - 1);
    const 上上上月初 = new Date(上上上月末.getFullYear(), 上上上月末.getMonth());
    
    switch (指令){
        case "清除":
            时间a.value = "";
            时间b.value = "";
            return true;
        case "本月":
            时间a.value = 格式化时间(本月初);
            时间b.value = 格式化时间();
            return true;
        case "上个月":
            时间a.value = 格式化时间(上月初);
            时间b.value = 格式化时间(上月末);
            return true;
        case "上上个月":
            时间a.value = 格式化时间(上上月初);
            时间b.value = 格式化时间(上上月末);
            return true;
        case "上上上个月":
            时间a.value = 格式化时间(上上上月初);
            时间b.value = 格式化时间(上上上月末);
            return true;
        default:
            console.error(指令 + " 是什么意思？");
    }
}

function 缓存数据(){
    localStorage.setItem("医院系数", document.getElementById("医院系数").value);
    localStorage.setItem("分值点值", document.getElementById("分值点值").value);
}

async function 患者API (操作, 表单=new FormData()){
    const res = await fetch(网站API["根网址"] + "患者统计/" + 操作 + ".php", {
        method: "POST",
        body: 表单
    });
    const 结果 = await res.json();
    // console.log(JSON.stringify(结果));
    return 结果;
}


    
    // new Date().getFullYear()
     //       <input autocomplete="off" id="结算时间_年" style="width: calc(var(--一个大小) * 2);" type="number" value="${new Date().getFullYear()}" />
     //       <label for="结算时间_年">年</label>
    


async function 患者详情(操作, {
    ID = "",
    姓名 = "",
    结算时间 = "",
    人员类别 = "",
    医疗总费用 = "",
    中医适宜技术费用占比 = "",
    病种 = "",
    主要手术操作 = "",
    相关手术操作 = "",
    病种组编码 = "",
    病种组分值 = "",
    病种组费用 = "",
    病历大夫 = ""}={}){
    
    const 更新目录 = function (){
        const 数据 = 泰安_2025;
        const 病种组_章 = document.getElementById("病种组_章");
        const 病种组_节 = document.getElementById("病种组_节");
        const 病种组_类目 = document.getElementById("病种组_类目");
        const 病种组_亚目 = document.getElementById("病种组_亚目");
        const 病种组_条目 = document.getElementById("病种组_条目");
        const 下拉列表_章 = [];
        for (let i=0;  i<病种组_章.children.length; i++){
            if (病种组_章.children[i].innerHTML === "全选"){
                // continue;
            }
            else if(数据[病种组_章.children[i].innerHTML] === void 0){
                病种组_章.children[i].remove();
                i--;
            }
            else {
                下拉列表_章.push(病种组_章.children[i].innerHTML);
            }
        }
        for (let 章 in 数据){
            if (下拉列表_章.indexOf(章) === -1){
                const option = document.createElement("option");
                option.innerHTML = 章;
                病种组_章.appendChild(option);
            }
        }
        const 章 = 病种组_章.selectedOptions[0].innerHTML;
        const 下拉列表_节 = [];
        for (let i=0;  i<病种组_节.children.length; i++){
            if (病种组_节.children[i].innerHTML === "全选"){
                // continue;
            }
            else if(数据[章] === void 0 || 数据[章][病种组_节.children[i].innerHTML] === void 0){
                病种组_节.children[i].remove();
                i--;
            }
            else {
                下拉列表_节.push(病种组_节.children[i].innerHTML);
            }
        }
        if (数据[章] !== void 0){
            for (let 节 in 数据[章]){
                if (下拉列表_节.indexOf(节) === -1){
                    const option = document.createElement("option");
                    option.innerHTML = 节;
                    病种组_节.appendChild(option);
                }
            }
        }
        const 节 = 病种组_节.selectedOptions[0].innerHTML;
        const 下拉列表_类目 = [];
        for (let i=0;  i<病种组_类目.children.length; i++){
            if (病种组_类目.children[i].innerHTML === "全选"){
                // continue;
            }
            else if(数据[章] === void 0 || 数据[章][节] === void 0 || 数据[章][节][病种组_类目.children[i].innerHTML] === void 0){
                病种组_类目.children[i].remove();
                i--;
            }
            else {
                下拉列表_类目.push(病种组_类目.children[i].innerHTML);
            }
        }
        if (数据[章] !== void 0 && 数据[章][节] !== void 0){
            for (let 类目 in 数据[章][节]){
                if (下拉列表_类目.indexOf(类目) === -1){
                    const option = document.createElement("option");
                    option.innerHTML = 类目;
                    病种组_类目.appendChild(option);
                }
            }
        }
        const 类目 = 病种组_类目.selectedOptions[0].innerHTML;
        const 下拉列表_亚目 = [];
        for (let i=0;  i<病种组_亚目.children.length; i++){
            if (病种组_亚目.children[i].innerHTML === "全选"){
                // continue;
            }
            else if(数据[章] === void 0 || 数据[章][节] === void 0 || 数据[章][节][类目] === void 0 || 数据[章][节][类目][病种组_亚目.children[i].innerHTML] === void 0){
                病种组_亚目.children[i].remove();
                i--;
            }
            else {
                下拉列表_亚目.push(病种组_亚目.children[i].innerHTML);
            }
        }
        if (数据[章] !== void 0 && 数据[章][节] !== void 0 && 数据[章][节][类目] !== void 0){
            for (let 亚目 in 数据[章][节][类目]){
                if (亚目 === "病种组"){
                    // continue;
                }
                else if (下拉列表_亚目.indexOf(亚目) === -1){
                    const option = document.createElement("option");
                    option.innerHTML = 亚目;
                    病种组_亚目.appendChild(option);
                }
            }
        }
        const 亚目 = 病种组_亚目.selectedOptions[0].innerHTML;
        const 下拉列表_条目 = [];
        const 所有条目 = [];
        if (数据[章] !== void 0 && 数据[章][节] !== void 0 && 数据[章][节][类目] !== void 0 && 数据[章][节][类目][亚目] !== void 0){
            for (let 条目 in 数据[章][节][类目][亚目]){
                if (条目 !== "病种组"){
                    所有条目.push(数据[章][节][类目][亚目][条目]);
                }
            }
        }
        for (let i=0;  i<病种组_条目.children.length; i++){
            if (病种组_条目.children[i].innerHTML === "全选"){
                // continue;
            }
            else if(数据[章] === void 0 || 数据[章][节] === void 0 || 数据[章][节][类目] === void 0 || 数据[章][节][类目][亚目] === void 0 || 所有条目.indexOf(病种组_条目.children[i].innerHTML) === -1){
                病种组_条目.children[i].remove();
                i--;
            }
            else {
                下拉列表_条目.push(病种组_条目.children[i].innerHTML);
            }
        }
        if (数据[章] !== void 0 && 数据[章][节] !== void 0 && 数据[章][节][类目] !== void 0 && 数据[章][节][类目][亚目] !== void 0){
            for (let 条目 in 数据[章][节][类目][亚目]){
                if (条目 === "病种组"){
                    // continue;
                }
                else if (下拉列表_条目.indexOf(数据[章][节][类目][亚目][条目]) === -1){
                    const option = document.createElement("option");
                    option.innerHTML = 数据[章][节][类目][亚目][条目];
                    病种组_条目.appendChild(option);
                }
            }
        }
    }
    
    const 筛选病种组 = function (延时=200){
        clearTimeout(延迟筛选病种组);
        if (延时 > 0){
            const 间隔 = 1000 / 60;
            const 回调 = function (){
                筛选病种组(延时 - 间隔);
            }
            
            延迟筛选病种组 = setTimeout(回调, 间隔);
            document.getElementById("立即筛选").innerHTML = "立即筛选（" + (延时 / 1000).toFixed(3) + "）";
            return false;
        }
        else {
            document.getElementById("立即筛选").innerHTML = "立即筛选";
        }
        
        let 数据集 = [];
        let 病种组 = [];
        const 数据 = 泰安_2025;
        const 章 = document.getElementById("病种组_章").selectedOptions[0].innerHTML;
        const 节 = document.getElementById("病种组_节").selectedOptions[0].innerHTML;
        const 类目 = document.getElementById("病种组_类目").selectedOptions[0].innerHTML;
        const 亚目 = document.getElementById("病种组_亚目").selectedOptions[0].innerHTML;
        const 条目 = document.getElementById("病种组_条目").selectedOptions[0].innerHTML;
        
        const 计算匹配度 = function (当前条目){
            let 匹配度 = 1;
            
            const 主要诊断 = document.getElementById("待提交_病种").value.toUpperCase().split(" ");
            const 当前病种名 = 当前条目[0];
            if (主要诊断 === [""]){
                // 匹配度 = 匹配度 * 1;
            }
            else {
                let i = 0;
                for (let j of 主要诊断){
                    if(j === ""){
                        i++;
                        continue;
                    }
                    if (j.slice(0, 1) === "-"){
                        if (当前病种名.indexOf(j.slice(1)) !== -1){
                            // 匹配度 = 0;
                            // return 匹配度;
                            return 0;
                        }
                        else {
                            i++;
                        }
                    }
                    else {
                        if (当前病种名.indexOf(j) !== -1){
                            当前条目[0] = 当前病种名.replaceAll(j, "<span style='color: blue;'>" + j + "</span>");
                            i++;
                        }
                    }
                }
                
                if (i === 0){
                    // 匹配度 = 0;
                    // return 匹配度;
                    return 0;
                }
                else {
                    匹配度 = 匹配度 * (i / 主要诊断.length);
                }
            }
            
            if (document.getElementById("核心病种").checked === true){
                const 手术操作 = document.getElementById("手术操作").value.toUpperCase().split(" ");
                const 当前手术操作 = 当前条目[6] + " " +  当前条目[8];
                if (手术操作 === [""]){
                    // 匹配度 = 匹配度 * 1;
                }
                else {
                    let i = 0;
                    for (let j of 手术操作){
                        if(j === ""){
                            i++;
                            continue;
                        }
                        if (j.slice(0, 1) === "-"){
                            if (当前手术操作 === " "){
                                i++;
                            }
                            else if (当前手术操作.indexOf(j.slice(1)) !== -1){
                                // 匹配度 = 0;
                                // return 匹配度;
                                return 0;
                            }
                            else {
                                i++;
                            }
                        }
                        else {
                            if (当前手术操作.indexOf(j) !== -1){
                                当前条目[6] = 当前条目[6].replaceAll(j, "<span style='color: blue;'>" + j + "</span>");
                                当前条目[8] = 当前条目[8].replaceAll(j, "<span style='color: blue;'>" + j + "</span>");
                                i++;
                            }
                        }
                    }
                    
                    if (i === 0){
                        // 匹配度 = 0;
                        // return 匹配度;
                        return 0;
                    }
                    else {
                        匹配度 = 匹配度 * (i / 手术操作.length);
                    }
                }
            }
            
            const 医院系数 = document.getElementById("医院系数").value;
            const 分值点值 = document.getElementById("分值点值").value;
            const 医疗总费用 = parseFloat(document.getElementById("待提交_医疗总费用").value);
            const 当前费用 = 当前条目[9] * 医院系数 * 分值点值;
            if (isNaN(医疗总费用)){
                // 匹配度 = 匹配度 * 1;
            }
            else if (医疗总费用 === 0){
                匹配度 = 匹配度 * (0.001 / 当前费用);
            }
            else {
                匹配度 = 匹配度 * (1 - Math.abs(医疗总费用 - 当前费用) / 当前费用);
            }
            
            当前条目.push(匹配度);
            return 匹配度;
        }
        
        const 处理条目 = function (当前条目){
            const 核心病种 = document.getElementById("核心病种").checked;
            const 综合病种 = document.getElementById("综合病种").checked;
            if (当前条目[10] === "综合病种"){
                if (综合病种 === true){
                    const 综合病种_SS = document.getElementById("综合病种_SS").checked;
                    const 综合病种_ZDXCZ = document.getElementById("综合病种_ZDXCZ").checked;
                    const 综合病种_ZLXCZ = document.getElementById("综合病种_ZLXCZ").checked;
                    const 编码 = 当前条目[2].split(":");
                    if (综合病种_SS === true && 编码.indexOf("SS") !== -1){
                        return 计算匹配度(当前条目);
                    }
                    else if (综合病种_ZDXCZ === true && 编码.indexOf("ZDXCZ") !== -1){
                        return 计算匹配度(当前条目);
                    }
                    else if (综合病种_ZLXCZ === true && 编码.indexOf("ZLXCZ") !== -1){
                        return 计算匹配度(当前条目);
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                if (核心病种 === true){
                    return 计算匹配度(当前条目);
                }
                else {
                    return false;
                }
            }
        }
        
        const 提取病种 = function (子数据集, 病种组){
            if (子数据集["病种组"] !== void 0){
                病种组 = 子数据集["病种组"];
            }
            
            for (let i in 子数据集){
                if (typeof 子数据集[i] === "string"){
                    for (let j of 病种组){
                        const 当前条目 = [子数据集[i]].concat(j);
                        const a = 处理条目(当前条目);
                        if (a === false || a === 0){
                            continue;
                        }
                        else {
                            数据集.push(当前条目);
                        }
                    }
                }
                else if (i !== "病种组"){
                    提取病种(子数据集[i], 病种组);
                }
            }
        }
        
        if (数据["病种组"] !== void 0){
            病种组 = 病种组.concat(数据["病种组"]);
        }
        
        if (数据[章] === void 0){
            提取病种(数据, 病种组);
        }
        else {
            if (数据[章]["病种组"] !== void 0){
                病种组 = 病种组.concat(数据[章]["病种组"]);
            }
            
            if (数据[章][节] === void 0){
                提取病种(数据[章], 病种组);
            }
            else {
                if (数据[章][节]["病种组"] !== void 0){
                    病种组 = 病种组.concat(数据[章][节]["病种组"]);
                }
                
                if (数据[章][节][类目] === void 0){
                    提取病种(数据[章][节], 病种组);
                }
                else {
                    if (数据[章][节][类目]["病种组"] !== void 0){
                        病种组 = 病种组.concat(数据[章][节][类目]["病种组"]);
                    }
                    
                    if (数据[章][节][类目][亚目] === void 0){
                        提取病种(数据[章][节][类目], 病种组);
                    }
                    else {
                        if (数据[章][节][类目][亚目]["病种组"] !== void 0){
                            病种组 = 病种组.concat(数据[章][节][类目][亚目]["病种组"]);
                        }
                        
                        const 所有条目 = [];
                        for (let 条目 in 数据[章][节][类目][亚目]){
                            if (条目 !== "病种组"){
                                所有条目.push(数据[章][节][类目][亚目][条目]);
                            }
                        }
                        
                        if (所有条目.indexOf(条目) === -1){
                            提取病种(数据[章][节][类目][亚目], 病种组);
                        }
                        else {
                            提取病种({0: 条目}, 病种组);
                        }
                    }
                }
            }
        }
        
        数据集.sort(function (a, b){
            return b[11] - a[11];
        });
        
        window.病种组筛选结果 = 数据集;
        
        const 渲染病种组 = function (页码=1, 步长=null){
            if (isNaN(页码) || 页码 < 1){
                页码 = 1;
            }
            
            if (isNaN(步长) || 步长 < 1){
                步长 = localStorage.getItem("页码步长");
                if (步长 === null){
                    步长 = 10;
                }
            }
            else {
                localStorage.setItem("页码步长", 步长);
            }
            
            const 末页 = Math.ceil(病种组筛选结果.length / 步长);
            if (页码 > 末页){
                页码 = 末页;
            }
            
            const 医院系数 = document.getElementById("医院系数").value;
            const 分值点值 = document.getElementById("分值点值").value;
            const 筛选结果 = document.getElementById("筛选结果");
            筛选结果.innerHTML = "";`
                <table>
                    <tr>
                        <td>序号</td>
                        <td>匹配度</td>
                    </tr>
                    <tr>
                        <td>病种组编码</td>
                        <td>病种组类型</td>
                    </tr>
                    <tr>
                        <td>疾病编码</td>
                        <td>疾病名称</td>
                    </tr>
                    <tr>
                        <td>主要手术编码</td>
                        <td>主要手术名称</td>
                    </tr>
                    <tr>
                        <td>相关手术编码</td>
                        <td>相关手术名称</td>
                    </tr>
                    <tr>
                        <td>病种组分值</td>
                        <td>病种组费用</td>
                    </tr>
                </table>
            `;
            
            for (let i=(页码-1)*步长; i>=0 && i<页码*步长 && i<病种组筛选结果.length; i++){
                const table = document.createElement("table");
                table.style.margin = "calc(var(--一个大小) * 1)";
                筛选结果.appendChild(table);
                table.onclick = function (){
                    document.getElementById("待提交_病种组编码").value = 病种组筛选结果[i][2];
                    document.getElementById("待提交_病种组分值").value = parseFloat(病种组筛选结果[i][9]);
                    document.getElementById("待提交_病种组费用").value = parseFloat(病种组筛选结果[i][9] * 医院系数 * 分值点值);
                    document.getElementById("待提交_病种").value = 病种组筛选结果[i][0].replaceAll("<span style='color: blue;'>", "").replaceAll("</span>", "");
                    document.getElementById("待提交_主要手术操作").value = 病种组筛选结果[i][6].replaceAll("<span style='color: blue;'>", "").replaceAll("</span>", "");
                    document.getElementById("待提交_相关手术操作").value = 病种组筛选结果[i][8].replaceAll("<span style='color: blue;'>", "").replaceAll("</span>", "");
                    document.getElementById("待提交_操作").scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                }
                table.innerHTML = `
                    <tr>
                        <td>${i + 1}</td>
                        <td style="color: RGB(${(1 - 病种组筛选结果[i][11]) * 255}, ${病种组筛选结果[i][11] * 255}, 0);">${(病种组筛选结果[i][11] * 100).toFixed(2) + "%"}</td>
                    </tr>
                    <tr>
                        <td>${病种组筛选结果[i][2]}</td>
                        <td>${病种组筛选结果[i][10]}</td>
                    </tr>
                    <tr>
                        <td colspan="2">${病种组筛选结果[i][0]}</td>
                    </tr>
                    <tr>
                        <td>${病种组筛选结果[i][5]}</td>
                        <td>${病种组筛选结果[i][6]}</td>
                    </tr>
                    <tr>
                        <td>${病种组筛选结果[i][7]}</td>
                        <td>${病种组筛选结果[i][8]}</td>
                    </tr>
                    <tr>
                        <td>${病种组筛选结果[i][9]}</td>
                        <td>${病种组筛选结果[i][9] * 医院系数 * 分值点值}</td>
                    </tr>
                `;
            }
            
            const div = document.getElementById("病种组页码");
            div.innerHTML = `
                <span>
                    <span>第</span>
                    <input autocomplete="off" min="1" max="${末页}" style="width: calc(var(--一个大小) * ${页码.toString().length} * 0.6);" type="number" value="${页码}" />
                    <span>页 / 共${末页}页，每页显示</span>
                    <input autocomplete="off" min="1" style="width: calc(var(--一个大小) * ${步长.toString().length} * 0.6);" type="number" value="${步长}" />
                    <span>个</span>
                </span>
                <br />
                <button id="上一页">上一页</button>
                <button id="下一页">下一页</button>
            `;
            div.children[0].addEventListener("change", function (e){
                渲染病种组(parseInt(this.children[1].value), parseInt(this.children[3].value));
            })
            
            document.getElementById("上一页").onclick = function (e){
                e.preventDefault();
                渲染病种组(页码 - 1, 步长);
            }
            
            document.getElementById("下一页").onclick = function (e){
                e.preventDefault();
                渲染病种组(页码 + 1, 步长);
            }
            
            
            筛选结果.parentNode.children[0].scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        }
        
        渲染病种组();
    }
    
    const dialog = document.createElement("dialog");
    document.body.appendChild(dialog);
    dialog.showModal();
    dialog.onpointerup = function(光标){
        if (光标.clientX < dialog.offsetLeft ||
            光标.clientX > dialog.offsetLeft + dialog.offsetWidth ||
            光标.clientY < dialog.offsetTop ||
            光标.clientY > dialog.offsetTop + dialog.offsetHeight){
            dialog.remove();
        }
    }
    
    dialog.innerHTML = `
        <form>
            <fieldset>
                <legend>待提交</legend>
                <label for="待提交_操作">操作：</label>
                <input autocomplete="off" id="待提交_操作" style="width: calc(100% - var(--一个大小) * 4);" value="${操作}" />
                <br />
                <label for="待提交_ID">ID：</label>
                <input autocomplete="off" id="待提交_ID" style="width: calc(100% - var(--一个大小) * 3);" type="number" min="0" value="${ID}" />
                <br />
                <label for="待提交_人员类别">人员类别</label>
                <input autocomplete="off" id="待提交_人员类别" style="width: calc(100% - var(--一个大小) * 5);" value="${人员类别}" />
                <br />
                <label for="待提交_姓名">姓名：</label>
                <input autocomplete="off" id="待提交_姓名" style="width: calc(100% - var(--一个大小) * 4);" value="${姓名}" />
                <br />
                <label for="待提交_结算时间">结算时间：</label>
                <input autocomplete="off" id="待提交_结算时间" style="width: calc(100% - var(--一个大小) * 6);" value="${结算时间}" />
                <br />
                <label for="待提交_医疗总费用">医疗总费用</label>
                <input autocomplete="off" id="待提交_医疗总费用" style="width: calc(100% - var(--一个大小) * 6);" type="number" min="0" step="0.01" value="${医疗总费用}" />
                <br />
                <label for="待提交_中医适宜技术费用占比">中医适宜技术费用占比</label>
                <input autocomplete="off" id="待提交_中医适宜技术费用占比" style="width: calc(100% - var(--一个大小) * 11);" type="number" min="0" step="0.0001" value="${中医适宜技术费用占比}" />
                <br />
                <label for="待提交_病历大夫">病历大夫</label>
                <input autocomplete="off" id="待提交_病历大夫" style="width: calc(100% - var(--一个大小) * 5);" value="${病历大夫}" />
                <br />
                <label for="待提交_病种">病种：</label>
                <input autocomplete="off" id="待提交_病种" style="width: calc(100% - var(--一个大小) * 4);" value="${病种}" />
                <br />
                <label for="待提交_主要手术操作">主要手术操作</label>
                <input autocomplete="off" id="待提交_主要手术操作" style="width: calc(100% - var(--一个大小) * 7);" value="${主要手术操作}" />
                <br />
                <label for="待提交_相关手术操作">相关手术操作</label>
                <input autocomplete="off" id="待提交_相关手术操作" style="width: calc(100% - var(--一个大小) * 7);" value="${相关手术操作}" />
                <br />
                <label for="待提交_病种组编码">病种组编码</label>
                <input autocomplete="off" id="待提交_病种组编码" style="width: calc(100% - var(--一个大小) * 6);" value="${病种组编码}" />
                <br />
                <label for="待提交_病种组分值">病种组分值</label>
                <input autocomplete="off" id="待提交_病种组分值" style="width: calc(100% - var(--一个大小) * 6);" type="number" min="0" step="0.000001" value="${病种组分值}" />
                <br />
                <label for="待提交_病种组费用">病种组费用</label>
                <input autocomplete="off" id="待提交_病种组费用" style="width: calc(100% - var(--一个大小) * 6);" type="number" min="0" step="0.0000000000001" value="${病种组费用}" />
            </fieldset>
            <div class="均匀排布 上下间距">
                <button id="立即筛选" type="button">立即筛选</button>
                <button id="提交" type="submit">提交</button>
                <button onclick="this.parentNode.parentNode.parentNode.remove();" type="button">关闭</button>
            </div>
            <fieldset>
                <legend>病种组</legend>
                <div id="病种目录">
                    <label for="病种组_章">章：</label>
                    <select id="病种组_章" style="width: calc(100% - var(--一个大小) * 3);">
                        <option selected>全选</option>
                    </select>
                    <br />
                    <label for="病种组_节">节：</label>
                    <select id="病种组_节" style="width: calc(100% - var(--一个大小) * 3);">
                        <option selected>全选</option>
                    </select>
                    <br />
                    <label for="病种组_类目">类目</label>
                    <select id="病种组_类目" style="width: calc(100% - var(--一个大小) * 3);">
                        <option selected>全选</option>
                    </select>
                    <br />
                    <label for="病种组_亚目">亚目</label>
                    <select id="病种组_亚目" style="width: calc(100% - var(--一个大小) * 3);">
                        <option selected>全选</option>
                    </select>
                    <br />
                    <label for="病种组_条目">条目</label>
                    <select id="病种组_条目" style="width: calc(100% - var(--一个大小) * 3);">
                        <option selected>全选</option>
                    </select>
                </div>
                <fieldset class="均匀排布">
                    <legend>
                        <input autocomplete="off" checked id="核心病种" onclick="this.parentNode.parentNode.disabled = !this.checked;" type="checkbox" />
                        <label for="核心病种">核心病种</label>
                    </legend>
                    <br />
                    <label for="手术操作">手术操作</label>
                    <input autocomplete="off" id="手术操作" style="width: calc(100% - var(--一个大小) * 5);" />
                </fieldset>
                <fieldset class="均匀排布">
                    <legend>
                        <input autocomplete="off" checked id="综合病种" onclick="this.parentNode.parentNode.disabled = !this.checked;" type="checkbox" />
                        <label for="综合病种">综合病种</label>
                    </legend>
                    <span>
                        <input autocomplete="off" id="综合病种_SS" type="checkbox" />
                        <label for="综合病种_SS">手术</label>
                    </span>
                    <span>
                        <input autocomplete="off" id="综合病种_ZDXCZ" type="checkbox" />
                        <label for="综合病种_ZDXCZ">诊断性</label>
                    </span>
                    <span>
                        <input autocomplete="off" checked id="综合病种_ZLXCZ" type="checkbox" />
                        <label for="综合病种_ZLXCZ">治疗性</label>
                    </span>
                </fieldset>
            </fieldset>
            <fieldset>
                <legend>待选病种组</legend>
                <div id="筛选结果" class="均匀排布"></div>
                <div id="病种组页码" style="text-align: center;"></div>
            </fieldset>
        </form>
    `;
    
    document.getElementById("病种目录").onchange = 更新目录;
    
    dialog.children[0].onsubmit = async function (e){
        e.preventDefault();
        
        const 表单 = new FormData();
        
        const ID = document.getElementById("待提交_ID").value;
        if (ID !== ""){
            表单.append("ID", ID);
        }
        
        const 姓名 = document.getElementById("待提交_姓名").value;
        if (姓名 !== ""){
            表单.append("姓名", 姓名);
        }
        
        const 结算时间 = document.getElementById("待提交_结算时间").value;
        if (结算时间 !== ""){
            表单.append("结算时间", 结算时间);
        }
        
        const 人员类别 = document.getElementById("待提交_人员类别").value;
        if (人员类别 !== ""){
            表单.append("人员类别", 人员类别);
        }
        
        const 医疗总费用 = parseFloat(document.getElementById("待提交_医疗总费用").value);
        if (!isNaN(医疗总费用)){
            表单.append("医疗总费用", 医疗总费用);
        }
        
        const 中医适宜技术费用占比 = parseFloat(document.getElementById("待提交_中医适宜技术费用占比").value);
        if (!isNaN(中医适宜技术费用占比)){
            表单.append("中医适宜技术费用占比", 中医适宜技术费用占比);
        }
        
        const 病历大夫 = document.getElementById("待提交_病历大夫").value;
        if (病历大夫 !== ""){
            表单.append("病历大夫", 病历大夫);
        }
        
        const 病种组编码 = document.getElementById("待提交_病种组编码").value;
        if (病种组编码 !== ""){
            表单.append("病种组编码", 病种组编码);
        }
        
        const 病种组分值 = parseFloat(document.getElementById("待提交_病种组分值").value);
        if (!isNaN(病种组分值)){
            表单.append("病种组分值", 病种组分值);
        }
        
        const 病种组费用 = parseFloat(document.getElementById("待提交_病种组费用").value);
        if (!isNaN(病种组费用)){
            表单.append("病种组费用", 病种组费用);
        }
        
        const 病种 = document.getElementById("待提交_病种").value;
        if (病种 !== ""){
            表单.append("病种", 病种);
        }
        
        const 主要手术操作 = document.getElementById("待提交_主要手术操作").value;
        if (主要手术操作 !== ""){
            表单.append("主要手术操作", 主要手术操作);
        }
        
        const 相关手术操作 = document.getElementById("待提交_相关手术操作").value;
        if (相关手术操作 !== ""){
            表单.append("相关手术操作", 相关手术操作);
        }
        
        if (confirm("确定" + 操作 + "？") !== true){
            return false;
        }
        
        const 结果 = await 患者API(操作, 表单);
        if (结果["建议"] === "未见明显异常"){
            alert(操作 + "成功！");
            dialog.remove();
            await 查询患者();
        }
        else {
            alert(操作 + "失败：" + 结果["建议"]);
        }
    }
    
    dialog.children[0].children[2].oninput = function (){
        筛选病种组(10000);
    }
    document.getElementById("立即筛选").onclick = function (){
        筛选病种组(0);
    }
    
    更新目录();
    window.延迟筛选病种组 = setTimeout(筛选病种组, 0);
}

function 渲染患者列表(页码=1, 步长=null){
    if (isNaN(步长) || 步长 < 1){
        步长 = localStorage.getItem("页码步长");
        if (步长 === null){
            步长 = 10;
        }
    }
    else {
        localStorage.setItem("页码步长", 步长);
    }
    
    const 末页 = Math.ceil(患者查询结果.length / 步长);
    if (页码 > 末页){
        页码 = 末页;
    }
    if (isNaN(页码) || 页码 < 1){
        页码 = 1;
    }
    
    const 查询结果 = document.getElementById("查询结果");
    查询结果.setAttribute("start", (页码-1)*步长);
    查询结果.innerHTML = "";`
        <table>
            <tr>
                <td>ID</td>
                <td>姓名</td>
            </tr>
            <tr>
                <td>人员类别</td>
                <td>结算时间</td>
            </tr>
            <tr>
                <td>医疗总费用</td>
                <td>病种</td>
            </tr>
            <tr>
                <td>主要手术操作</td>
                <td>相关手术操作</td>
            </tr>
            <tr>
                <td>病种组编码</td>
                <td>病种组分值</td>
            </tr>
            <tr>
                <td>病种组费用</td>
                <td>病历大夫</td>
            </tr>
            <tr>
                <td>中医适宜技术费用占比</td>
                <td></td>
            </tr>
        </table>
    `;
    
    for (let i=(页码-1)*步长; i<页码*步长 && i<患者查询结果.length; i++){
        const table = document.createElement("table");
        table.style.margin = "calc(var(--一个大小) * 1)";
        查询结果.appendChild(table);
        table.onclick = function (){
            const 当前患者 = {};
            for (let j in 患者查询结果[i]){
                if (患者查询结果[i][j] !== null){
                    当前患者[j] = 患者查询结果[i][j];
                }
            }
            患者详情("修改", 当前患者);
        }
        table.innerHTML = `
            <tr>
                <td>ID</td>
                <td>${患者查询结果[i]["ID"]}</td>
            </tr>
            <tr>
                <td>${患者查询结果[i]["姓名"]}</td>
                <td>${患者查询结果[i]["人员类别"]}</td>
            </tr>
            <tr>
                <td>${患者查询结果[i]["结算时间"]}</td>
                <td>${患者查询结果[i]["病历大夫"]}</td>
            </tr>
            <tr>
                <td>${患者查询结果[i]["病种组分值"]}</td>
                <td>${患者查询结果[i]["病种组编码"]}</td>
            </tr>
            <tr>
                <td>${患者查询结果[i]["病种组费用"]}</td>
                <td>${患者查询结果[i]["医疗总费用"]}</td>
            </tr>
            <tr>
                <td>${(parseFloat(患者查询结果[i]["中医适宜技术费用占比"]) * 100).toFixed(2)}%</td>
                <td>${患者查询结果[i]["病种"]}</td>
            </tr>
            <tr>
                <td>${患者查询结果[i]["主要手术操作"]}</td>
                <td>${患者查询结果[i]["相关手术操作"]}</td>
            </tr>
        `.replaceAll("<td>null</td>", "<td>-</td>");
    }
    
    const div = document.getElementById("患者页码");
    div.innerHTML = `
        <span onchange="渲染患者列表(parseInt(this.children[1].value), parseInt(this.children[3].value));">
            <span>第</span>
            <input autocomplete="off" min="1" max="${末页}" style="width: calc(var(--一个大小) * ${页码.toString().length} * 0.6);" type="number" value="${页码}" />
            <span>页 / 共${末页}页，每页显示</span>
            <input autocomplete="off" min="1" style="width: calc(var(--一个大小) * ${步长.toString().length} * 0.6);" type="number" value="${步长}" />
            <span>个</span>
        </span>
        <br />
        <button onclick="渲染患者列表(${页码 - 1}, ${步长})">上一页</button>
        <button onclick="渲染患者列表(${页码 + 1}, ${步长})">下一页</button>
    `;
    
    document.getElementById("查询结果总结").scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}

async function 查询患者(){
    const 表单 = new FormData();
    
    const 病历大夫 = document.getElementById("病历大夫").value;
    if (病历大夫 !== ""){
        表单.append("病历大夫", 病历大夫);
    }
    
    const 结算时间起点 = document.getElementById("结算时间起点").value.replace("T", " ") + ":00";
    const 结算时间止点 = document.getElementById("结算时间止点").value.replace("T", " ") + ":59";
    const 结算时间错误 = document.getElementById("结算时间错误");
    if (结算时间起点 !== ":00" && 结算时间止点 !== ":59" && Date.parse(结算时间起点) > Date.parse(结算时间止点)){
        结算时间错误.style.display = "inline";
        return false;
    }
    else {
        结算时间错误.style.display = "none";
    }
    if (结算时间起点 !== ":00"){
        表单.append("结算时间起点", 结算时间起点);
    }
    if (结算时间止点 !== ":59"){
        表单.append("结算时间止点", 结算时间止点);
    }
    
    const 结果 = await 患者API("查询", 表单);
    if (结果["建议"] === "未见明显异常"){
        // asdf
    }
    else {
        alert("查询失败：" + 结果["建议"]);
        return false;
    }
    
    let 宁阳县居民_人 = 0;
    let 宁阳县居民_分 = 0;
    let 宁阳县居民_小_人 = 0;
    let 宁阳县居民_小_分 = 0;
    let 宁阳县居民_大_人 = 0;
    let 宁阳县居民_大_分 = 0;
    let 职工_人 = 0;
    let 职工_分 = 0;
    let 职工_小_人 = 0;
    let 职工_小_分 = 0;
    let 职工_大_人 = 0;
    let 职工_大_分 = 0;
    let 异地_人 = 0;
    let 异地_分 = 0;
    let 异地_小_人 = 0;
    let 异地_小_分 = 0;
    let 异地_大_人 = 0;
    let 异地_大_分 = 0;
    for (let i of 结果["查询结果"]){
        if (i["人员类别"] === null){
            continue;
        }
        else if (i["人员类别"] === "宁阳县居民"){
            宁阳县居民_人++;
            
            if (i["病种组分值"] === null){
                continue;
            }
            宁阳县居民_分 += parseFloat(i["病种组分值"]);
            
            if (i["中医适宜技术费用占比"] === null){
                continue;
            }
            
            if (i["中医适宜技术费用占比"] <= 0.6){
                宁阳县居民_小_人++;
                宁阳县居民_小_分 += parseFloat(i["病种组分值"]);
            }
            else {
                宁阳县居民_大_人++;
                宁阳县居民_大_分 += parseFloat(i["病种组分值"]) * 1.1;
                宁阳县居民_分 += parseFloat(i["病种组分值"]) * 0.1;
            }
        }
        else if (i["人员类别"].indexOf("职工") > -1){
            职工_人++;
            
            if (i["病种组分值"] === null){
                continue;
            }
            职工_分 += parseFloat(i["病种组分值"]);
            
            if (i["中医适宜技术费用占比"] === null){
                continue;
            }
            
            if (i["中医适宜技术费用占比"] <= 0.6){
                职工_小_人++;
                职工_小_分 += parseFloat(i["病种组分值"]);
            }
            else {
                职工_大_人++;
                职工_大_分 += parseFloat(i["病种组分值"]) * 1.1;
                职工_分 += parseFloat(i["病种组分值"]) * 0.1;
            }
        }
        else if (i["人员类别"].indexOf("异地") > -1){
            异地_人++;
            
            if (i["病种组分值"] === null){
                continue;
            }
            异地_分 += parseFloat(i["病种组分值"]);
            
            if (i["中医适宜技术费用占比"] === null){
                continue;
            }
            
            if (i["中医适宜技术费用占比"] <= 0.6){
                异地_小_人++;
                异地_小_分 += parseFloat(i["病种组分值"]);
            }
            else {
                异地_大_人++;
                异地_大_分 += parseFloat(i["病种组分值"]) * 1.1;
                异地_分 += parseFloat(i["病种组分值"]) * 0.1;
            }
        }
        else {
            alert("人员类别：" + i["人员类别"] + "？");
        }
    }
    
    const 查询结果总结 = document.getElementById("查询结果总结");
    查询结果总结.children[0].children[0].innerHTML = "共结算<hr />" + 结果["查询结果"].length + "人<br />" + (宁阳县居民_分 + 职工_分 + 异地_分).toFixed(2) + "分";
    查询结果总结.children[0].children[1].innerHTML = "宁阳县居民<hr />" + 宁阳县居民_人 + "人<br />" + 宁阳县居民_分.toFixed(2) + "分";
    查询结果总结.children[0].children[2].innerHTML = "占比≤60%<hr />" + 宁阳县居民_小_人 + "人<br />" + 宁阳县居民_小_分.toFixed(2) + "分";
    查询结果总结.children[1].children[0].innerHTML = "占比＞60%<hr />" + 宁阳县居民_大_人 + "人<br />" + 宁阳县居民_大_分.toFixed(2) + "分";
    查询结果总结.children[2].children[0].innerHTML = "职工<hr />" + 职工_人 + "人<br />" + 职工_分.toFixed(2) + "分";
    查询结果总结.children[2].children[1].innerHTML = "占比≤60%<hr />" + 职工_小_人 + "人<br />" + 职工_小_分.toFixed(2) + "分";
    查询结果总结.children[3].children[0].innerHTML = "占比＞60%<hr />" + 职工_大_人 + "人<br />" + 职工_大_分.toFixed(2) + "分";
    查询结果总结.children[4].children[0].innerHTML = "异地<hr />" + (异地_人) + "人<br />" + 异地_分.toFixed(2) + "分";
    查询结果总结.children[4].children[1].innerHTML = "占比≤60%<hr />" + 异地_小_人 + "人<br />" + 异地_小_分.toFixed(2) + "分";
    查询结果总结.children[5].children[0].innerHTML = "占比＞60%<hr />" + 异地_大_人 + "人<br />" + 异地_大_分.toFixed(2) + "分";
    
    window.患者查询结果 = 结果["查询结果"];
    渲染患者列表();
}