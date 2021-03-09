<?php
    require 'connection.php';   

    $id = isset($_POST['id']) ? $_POST['id'] : null;
    
    if($id)
    {
        $sql = "SELECT x, y FROM problem WHERE id =". $id;
        // var_dump($sql);die();
        $result = $con->query($sql);
        
        while($row = $result->fetch_assoc())
        {
            $resultArray = array(
                "x" => $row['x'],
                "y" => $row['y']
            );            
            echo json_encode($resultArray);
        }
    }
?>