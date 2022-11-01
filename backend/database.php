<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type,Accept");

    function connect(){
        $connect=mysqli_connect('localhost','root','','mydb');
                 
        if(mysqli_connect_errno()){
            die("Failed to connect:".mysqli_connect_error());
        }
        mysqli_set_charset($connect,"utf8");
        return $connect;
    }
    $con=connect();
