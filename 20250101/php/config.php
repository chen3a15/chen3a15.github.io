
<?php
    $设置 = '{
        "根网址": "https://hmmm.cyou/php/",
        "session": {
            "保存路径": "C:/Users/Administrator/WebSite/session",
            "保质期": 31536000000
        },
        "数据库": {
            "链接": "localhost:3306",
            "账户": "root",
            "密码": "147258",
            "库名": "hmmm"
        },
        "账户": {
            "最大登录有效期": 31536000
        }
    }';
    
    $设置 = str_replace(array("\n", "\r"), "", $设置);
    $设置 = json_decode($设置, true);
    if (!isset($全局)){
        require_once "./跨域.php";
        header("Location: " . $设置["根网址"] . "main.php");
        exit();
    }
    
    $全局["设置"] = $设置;
    $全局["结果"]["设置"] = array(
        "根网址" => $设置["根网址"],
        "账户" => $设置["账户"]
    );
?>