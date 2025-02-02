
<?php
    $查询库名 = mysqli_query($全局["数据库连接"], "show databases");
    $查询库名结果 = array_column(mysqli_fetch_all($查询库名, MYSQLI_ASSOC), "Database");
    if (in_array($全局["配置"]["数据库"]["库名"], $查询库名结果) === false){
        $查询账户权限 = mysqli_query($全局["数据库连接"], "SHOW GRANTS FOR " . $全局["配置"]["数据库"]["账户"] . "@'localhost'");
        while ($row = mysqli_fetch_row($查询账户权限)){
            if (preg_match("/CREATE[\s\S]*ON \*\.\*/i", $row[0])){
                $创建数据库 = mysqli_query($全局["数据库连接"], "create database " . $全局["配置"]["数据库"]["库名"]);
                if ($创建数据库 !== true){
                    $全局["结果"]["建议"] = "创建数据库失败：未知错误";
                    exit();
                }
                break;
            }
            else {
                $全局["结果"]["建议"] = "创建数据库失败：没有*.*的create权限";
                exit();
            }
        }
    }
    
    mysqli_select_db($全局["数据库连接"], $全局["配置"]["数据库"]["库名"]);
    
    $查询表名 = mysqli_query($全局["数据库连接"], "show tables");
    $查询表名结果 = array_column(mysqli_fetch_all($查询表名), 0);
    print_r($查询表名结果);
    foreach(array("user", "patient") as $i){
        if (in_array($i, $查询表名结果) === false){
            echo $i;
            $创建数据表 = mysqli_query($全局["数据库连接"], "create table " . $i;
            print_r($创建数据表);
            if ($创建数据表 !== true)
                $全局["结果"]["建议"] = "创建数据表" . $i . "失败";
                exit();
            }
        }
    }
?>