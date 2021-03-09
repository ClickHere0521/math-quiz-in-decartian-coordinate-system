<?php
    session_start();
    require 'connection.php';   

    $score = isset($_POST['score']) ? $_POST['score'] : null;
    $user_id = $_SESSION['id'];
    if($score)
    {
        $sql = "UPDATE score SET score =" .$score." WHERE user_id =". $user_id;
        // var_dump($sql);die();
        $result = $con->query($sql);                
    }
?>