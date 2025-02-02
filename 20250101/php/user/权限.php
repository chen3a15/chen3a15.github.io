<?php
    function 查询权限($资源名="all", $权限名="all"){
        // return true;
        
        if (!isset($_SESSION["UID"])){
            return false;
        }
        
        if ($_SESSION["UID"] === 1){
            return true;
        }
        
        if ($_SESSION["UID"] === 2 AND $资源名="患者统计"){
            return true;
        }
        
        return false;
    }
    
    if (!isset($全局)){
        require_once "../main.php";
        
        if ($_SERVER["REQUEST_METHOD"] === "POST"){
            if (!isset($_POST["资源名"])){
                $全局["结果"]["建议"] = "资源名？";
                exit();
            }
            if (!isset($_POST["权限名"])){
                $全局["结果"]["建议"] = "权限名？";
                exit();
            }
            
            查询权限((string)$_POST["资源名"], (string)$_POST["权限名"]);
        }
        else {
            $全局["结果"]["建议"] = "只接受POST请求";
        }
    }
?>