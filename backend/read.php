<?php
    require 'database.php';
     $sql= "SELECT id, number, amount FROM policies";
    if($result=mysqli_query($con,$sql)){
        $i=0;
        while($row=mysqli_fetch_assoc($result)){
            $policies[$i]['id']=$row['id'];
            $policies[$i]['number']=$row['number'];
            $policies[$i]['amount']=$row['amount'];
            $i++;
        }
        echo json_encode($policies);
    }
    else
        http_response_code(404);
?>
