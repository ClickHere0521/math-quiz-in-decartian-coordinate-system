<?php
    require 'connection.php';

    $pointA = isset($_POST['pointA']) ? $_POST['pointA'] : null;
    $pointB = isset($_POST['pointB']) ? $_POST['pointB'] : null;

    if($pointA != null && $pointB != null)
    {
        $sql = "SELECT id, x, y FROM problem";
        $result = $con->query($sql);
        $i=0;
        while($row = $result->fetch_assoc())
        {
            $resultArray[$i] = array(
                "id"   =>   $row['id'],
                "x"    =>   $row['x'],            
                "y"    =>   $row['y'],                
            );
            $i++;        
        }
        echo json_encode($resultArray);
    }
    else
    {
        alert('Please click 2 points');
        header('location : test.php');
    }
?>