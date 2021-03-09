<?php
    require 'connection.php';   

    $id = isset($_POST['id']) ? $_POST['id'] : null;

    if($id)
    {
        $sql = "SELECT a FROM quadratic WHERE id =". $id;
        // var_dump($sql);die();
        $result = $con->query($sql);
        
        while($row = $result->fetch_assoc())
        {
            $resultArray = array(
                "a" => $row['a']
            );            
            echo json_encode($resultArray);
        }
    }
?>