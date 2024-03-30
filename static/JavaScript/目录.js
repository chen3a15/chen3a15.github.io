
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
    let 参考大小 = 0.019 * window.innerHeight + 0.004 * window.innerWidth
    
    let 菜单 = document.createElement("div");
    document.body.appendChild(菜单);
    菜单.style.position = "absolute"; //脱离文档流
    菜单.style.cursor = "move"; //改变光标
    菜单.style.background = "#90BEDE";
    菜单.style.width = 参考大小 * 3 + "px";
    菜单.style.height = 菜单.style.width;
    菜单.style.borderStyle = "dashed";
    菜单.style.borderWidth = 参考大小 * 0.2 + "px";
    
    菜单.innerHTML = "<span>菜单</span>";
    
    
    菜单.draggable = "true";
    菜单.ondragstart = "console.log('fu76')";
    
            var drag = 菜单;
            // //点击某物体时，用drag对象即可，move和up是全局区域，
            // 也就是整个文档通用，应该使用document对象而不是drag对象(否则，采用drag对象时物体只能往右方或下方移动)  
            drag.onmousedown = function(event){
               var event = event || window.event;  //兼容IE浏览器
            //    鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
               var diffX = event.clientX - drag.offsetLeft;
               var diffY = event.clientY - drag.offsetTop;
               if(typeof drag.setCapture !== 'undefined'){
                      drag.setCapture(); 
               }
            document.onmousemove = function(event){
                var event = event || window.event;
                var moveX = event.clientX - diffX;
                var moveY = event.clientY - diffY;
                if(moveX < 0){
                    moveX = 0
                }else if(moveX > window.innerWidth - drag.offsetWidth){
                    moveX = window.innerWidth - drag.offsetWidth
                }
                if(moveY < 0){
                    moveY = 0
                }else if(moveY > window.innerHeight - drag.offsetHeight){
                    moveY =  window.innerHeight - drag.offsetHeight
                }
                drag.style.left = moveX + 'px';
                drag.style.top = moveY + 'px'
            }
            document.onmouseup = function(event){
                this.onmousemove = null;
                this.onmouseup = null;
                 //修复低版本ie bug  
                if(typeof drag.releaseCapture!='undefined'){  
                   drag.releaseCapture();  
                }  
            }
        }
    
    
    
    
    console.log(菜单)
    
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