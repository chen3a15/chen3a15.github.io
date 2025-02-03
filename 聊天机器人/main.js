export function 启动(加载列表){
    const 加载插件 = function (加载列表){
        for (let i of 加载列表){
            import(i["url"])
                .then(function (插件){
                    插件.初始化();
                    插件列表.push(插件);
                    console.log(i["name"] + "初始化成功");
                }, function (err){
                    console.error(err);
                    console.error("┗ " + i["name"] + " 插件加载失败");
                    return false;
                })
                .catch(function (err){
                    console.error(err);
                    console.error("┗ " + i["name"] + " 插件初始化失败");
                    return false;
                });
        }
    }
    
    const 插件列表 = [];
    加载插件(加载列表);
    
}
