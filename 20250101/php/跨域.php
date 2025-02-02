<?php
    if (isset(getallheaders()["Origin"])){
        header("Access-Control-Allow-Origin: " . getallheaders()["Origin"]);
    }
    
    if ($_SERVER["REQUEST_METHOD"] === "OPTIONS"){
        if (isset(getallheaders()["Access-Control-Request-Method"])){
            header("Access-Control-Allow-Methods: " . getallheaders()["Access-Control-Request-Method"]);
        }
        if (isset(getallheaders()["Access-Control-Request-Headers"])){
            header("Access-Control-Allow-Headers: " . getallheaders()["Access-Control-Request-Headers"]);
        }
    }
?>