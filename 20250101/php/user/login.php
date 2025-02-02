<?php
    require_once "../main.php";
    
    function 登录($ID, $密码){
        global $全局;
        
        $查询用户指令 = "select * from users where ID='" . $ID . "'";
        $查询用户 = mysqli_query($全局["数据库连接"], $查询用户指令);
        if (mysqli_num_rows($查询用户) === 0){
            $全局["结果"]["建议"] = "账号不存在";
            exit();
        }
        elseif (mysqli_num_rows($查询用户) === 1){
            $查询用户结果 = mysqli_fetch_all($查询用户, MYSQLI_ASSOC)[0];
            if ($查询用户结果["password"] !== $密码){
                $全局["结果"]["建议"] = "账密错误";
                exit();
            }
            elseif ($查询用户结果["is_active"] === 0){
                $全局["结果"]["建议"] = "账号尚未激活或已被冻结";
                exit();
            }
            else {
                $_SESSION["UID"] = (int)$查询用户结果["UID"];
                $_SESSION["登录过期时间"] = time() + $全局["设置"]["账户"]["最大登录有效期"];
                require_once "./info.php";
                $更新登录时间指令 = "update users set last_login='" . date("Y-m-d H:i:s") . "' where UID=" . $_SESSION["UID"];
                $更新登录时间 = mysqli_query($全局["数据库连接"], $更新登录时间指令);
                if (!$更新登录时间){
                    $全局["结果"]["建议"] = "登录时间记录失败，任务中断";
                    exit();
                }
            }
        }
        else {
            $全局["结果"]["建议"] = "账号登录时出现未知错误，请联系管理员：账号数量 " . mysqli_num_rows($查询用户) . "，UID " . $UID . "，ID " . $ID;
            exit();
        }
    }
    
    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        if (!isset($_POST["ID"])){
            $全局["结果"]["建议"] = "账号？";
            exit();
        }
        if (!isset($_POST["密码"])){
            $全局["结果"]["建议"] = "密码？";
            exit();
        }
        
        登录((string)$_POST["ID"], (string)$_POST["密码"]);
    }
    else {
        $全局["结果"]["建议"] = "只接受POST请求";
    }
?>