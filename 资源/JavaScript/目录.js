
let 数据 = {
    "时间": "2024年3月29日14:26:28",
    "子节点": {
        "工具": {
            "子节点": {
                "QQ": {
                    "子节点": {
                        "特殊昵称": {
                            "链接": "./工具/QQ/特殊昵称/Default.html"
                        }
                    }
                },
                "网盘": {
                    "链接": "http://42.192.199.171:1145"
                },
                "收藏夹": {
                    "链接": "./工具/收藏夹/index.html"
                },
                "音乐解析": {
                    "链接": "./工具/music/index.html"
                },
                "调色板": {
                    "链接": "./工具/调色板/Default.html"
                }
            }
        },
        "游戏": {
            "子节点": {
                "1A2B": {
                    "链接": "./游戏/1A2B/index.html"
                },
                "原神": {
                    "子节点": {
                        "网页活动素材": {
                            "链接": "./游戏/原神/网页活动素材/Default.html"
                        },
                        "元素精通": {
                            "链接": "./游戏/原神/元素精通/Default.html"
                        },
                        "炫酷字体": {
                            "链接": "./游戏/原神/炫酷字体/Default.html"
                        },
                        "原神，启动！": {
                            "链接": "./游戏/原神/原神，启动！/index.html"
                        }
                    }
                },
                "鸣潮": {
                    "子节点": {
                        "三测充值返利计算": {
                            "链接": "./游戏/鸣潮/三测充值返利计算/Default.html"
                        }
                    }
                },
                "崩坏：星穹铁道": {
                    "子节点": {
                        "锄地计算器": {
                            "链接": "./游戏/崩坏：星穹铁道/Default.html"
                        },
                        "伤害计算器": {
                            "链接": "./游戏/崩坏：星穹铁道/Damage Calc.html"
                        }
                    }
                }
            }
        }
    }
}

function 启动(){
    let 参考大小 = 0.019 * window.innerHeight + 0.004 * window.innerWidth;
    
    let 菜单 = document.createElement("div");
    document.body.appendChild(菜单);
    菜单.style.position = "absolute";
    菜单.style.width = 参考大小 * 3 + "px";
    菜单.style.height = 菜单.style.width;
    菜单.style.borderStyle = "dashed";
    菜单.style.borderRadius = 参考大小 * 0.5 + "px";
    菜单.style.borderWidth = 参考大小 * 0.08 + "px";
    菜单.style.touchAction = "none";
    菜单.onpointerdown = function(光标){
        let 菜单副本 = 菜单.cloneNode(true);
        document.body.appendChild(菜单副本);
        菜单副本.style.opacity = "0.3";
        菜单.setPointerCapture(光标.pointerId);
        let 光标位置 = [光标.clientX - 菜单.offsetLeft, 光标.clientY - 菜单.offsetTop];
        
        菜单.onpointermove = function(光标){
            菜单.style.left = 光标.clientX - 光标位置[0] + "px";
            菜单.style.top = 光标.clientY - 光标位置[1] + "px";
            
        }
        
        菜单.onpointerup = function(光标2){
            菜单副本.releasePointerCapture(光标.pointerId);
            菜单副本.remove();
            菜单.onpointermove = null;
            
        }
        
    }
    
    let 菜单图标 = document.createElement("img");
    菜单.appendChild(菜单图标);
    菜单图标.src = "/资源/图标/LOGO.svg";
    菜单图标.alt = "菜单";
    菜单图标.style.width = "100%";
    菜单图标.style.height = 菜单图标.style.width;
    菜单图标.style.pointerEvents = "none";
    
}


window.onload = 启动;



/*

        <script>
            
            
            
            let 深度 = 0;
            let 广度 = 0;
            function 取深度(对象, 当前深度) {
                if (当前深度 > 深度){
                    深度 = 当前深度;
                }
                if (Object.keys(对象).length === 1 && 对象["链接"] != undefined || 对象 === {}){
                    广度++;
                    return;
                }
                for (let 键 in 对象){
                    if (typeof 对象[键] === "object" ){
                        取深度(对象[键], 当前深度 + 1);
                    }
                }
            }
            
            
            
            取深度(索引, 0);
            
        </script>
        <style>
            
            :root {
                --font_size: calc(1.9vh + 0.4vw);
            }
            
            body {
                font-size: var(--font_size);
            }
            
            table {
                color: #90BEDE;
                margin: auto;
            }
            
            td {
                border: 1px dashed #D0E0E0;
            }
            
            a {
                color: #68EDC6;
                text-decoration: none;
                /*不要下划线
            }
            
        </style>
    <table id="表格">
        <tr>
            <th colspan="1">LIST</th>
        </tr>
    </table>
    <script>
        
        let 表格 = document.getElementById("表格");
        
        for (let 行 = 0; 行 < 广度; 行 ++){
            let tr = document.createElement("tr");
            tr.id = "表格_" + 行;
            表格.appendChild(tr);
            for (let 列 = 0; 列 < 深度; 列 ++){
                let td = document.createElement("td");
                td.id = "表格_" + 行 + "_" + 列;
                tr.appendChild(td);
            }
        }
        
        function 递归填充(对象, 行, 列){
            
            for (let 键 in 对象){
                
            }
        }
        递归填充(索引, 0, 0);
        
        
    </script>
    <table>
        <tr>
            <th colspan="3">LIST</th>
        </tr>
        <tr>
            <td colspan="3" rowspan="6">工具</td>
            <tr>
                <td colspan="2" rowspan="1">QQ</td>
                    <td><a href="./工具/QQ/特殊昵称/Default.html">特殊昵称</a></td>
            </tr>
        </tr>
        <tr>
            <td><a href="./工具/Web IDE/Default.html">Web IDE</a></td>
        </tr>
        <tr>
            <td><a href="http://42.192.199.171:1145">网盘</a></td>
        </tr>
        <tr>
            <td><a href="./工具/调色板/Default.html">调色板</a></td>
        </tr>
        <tr>
            <td><a href="./工具/收藏夹/index.html">收藏夹</a></td>
        </tr>
        <tr>
            <td><a href="./工具/music/index.html">音乐解析</a></td>
        </tr>
        <tr>
            <td rowspan="7">游戏</td>
            <td colspan="2"><a href="./游戏/1A2B/index.html">1A2B</a></td>
        </tr>
        <tr>
            <td rowspan="2">崩坏：星穹铁道</td>
            <td><a href="./游戏/崩坏：星穹铁道/Default.html">锄地计算器</a></td>
        </tr>
        <tr>
            <td><a href="./游戏/崩坏：星穹铁道/Damage Calc.html">伤害计算器</a></td>
        </tr>
        <tr>
            <td rowspan="4">原神</td>
            <td><a href="./游戏/原神/网页活动素材/Default.html">网页活动素材</a></td>
        </tr>
        <tr>
            <td><a href="./游戏/原神/元素精通/Default.html">元素精通</a></td>
        </tr>
        <tr>
            <td><a href="./游戏/原神/炫酷字体/Default.html">炫酷字体</a></td>
        </tr>
        <tr>
            <td><a href="./游戏/原神/原神，启动！/index.html">原神，启动！</a></td>
        </tr>
        <tr>
            <td rowspan="1">鸣潮</td>
            <td><a href="./游戏/鸣潮/三测充值返利计算/Default.html">三测充值返利计算</a></td>
        </tr>
        </table>


*/