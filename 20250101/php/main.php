<?php
    $全局 = array(
        "结果" => array(
            "建议" => "未见明显异常"
        )
    );
    
    require_once __DIR__ . "/跨域.php";
    require_once __DIR__ . "/config.php";
    date_default_timezone_set("Asia/Shanghai");
    
    function 善后(){
        global $全局;
        if (isset($全局["数据库连接"])){
            mysqli_close($全局["数据库连接"]);
        }
        
        print_r(json_encode($全局["结果"], JSON_UNESCAPED_UNICODE));
    }
    register_shutdown_function("善后");
    
    function 异常处理($异常){
        global $全局;
        $全局["结果"]["建议"] = "出现未知错误";
        exit();
    }
    set_exception_handler("异常处理");
    set_error_handler("异常处理");
    
    ini_set("session.cookie_samesite", "None; Secure");
    session_save_path($全局["设置"]["session"]["保存路径"]);
    if(!session_set_cookie_params($全局["设置"]["session"]["保质期"])){
        setcookie("海绵猫猫", session_id(), time() + $全局["设置"]["session"]["保质期"], "/");
    }
    if (!isset($_SERVER["HTTPS"])){
        $全局["结果"]["建议"] = "非https下可能无法设置跨域cookie";
    }
    session_start();
    
    if (isset($_SESSION["UID"])){
        if (!isset($_SESSION["登录过期时间"]) OR time() > $_SESSION["登录过期时间"]){
            unset($_SESSION["UID"]);
        }
    }
    
    try {
        $全局["数据库连接"] = mysqli_connect(
            $全局["设置"]["数据库"]["链接"],
            $全局["设置"]["数据库"]["账户"],
            $全局["设置"]["数据库"]["密码"],
            $全局["设置"]["数据库"]["库名"]
        );
        mysqli_query($全局["数据库连接"], "SET NAMES 'utf8'");
    }
    catch(Exception $e){
        $全局["结果"]["建议"] = "数据库连接失败";
        exit();
    }
    
?>