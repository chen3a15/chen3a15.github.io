<?php
    require_once "../main.php";
    
    if (!isset($_SESSION["UID"])){
        $全局["结果"]["建议"] = "尚未登录";
        exit();
    }
    
    $查询用户指令 = "select * from users where UID=" . $_SESSION["UID"];
    $查询用户 = mysqli_query($全局["数据库连接"], $查询用户指令);
    if (mysqli_num_rows($查询用户) === 1){
        $查询用户结果 = mysqli_fetch_all($查询用户, MYSQLI_ASSOC)[0];
        $全局["结果"]["UID"] = $查询用户结果["UID"];
        $全局["结果"]["ID"] = $查询用户结果["ID"];
        $全局["结果"]["name"] = $查询用户结果["name"];
        $全局["结果"]["last_login"] = $查询用户结果["last_login"];
        $全局["结果"]["登录过期时间"] = date("Y-m-d H:i:s", $_SESSION["登录过期时间"]);
    }
    else {
        $全局["结果"]["建议"] = "账号查询时出现未知错误，请联系管理员：UID " . $_SESSION["UID"];
        exit();
    }
?>