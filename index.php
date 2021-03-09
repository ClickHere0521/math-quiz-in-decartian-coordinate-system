<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>        
        <title>Math quiz</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <!-- External CSS -->
        <style type="text/css" media="all">
        *{ padding: 0px; margin: 0px; height:100%; border:0px; }

        #main{
        text-align: center;
        position:relative;
        }

        #cart{
        margin-top: 1%;
        height: 600px;
        width: 600px;

        }

        p {
        height: 30px;
        font-size: 20px;
        }

        .btn-success {
        height: 40px;
        }

        a {
            height: 40px;
        }

        .jumbotron {
            height: 300px;
        }
        </style>
    </head>
    <body>
        <div id = 'main'>
            <br><br><br><br><br><br>
            <div class="jumbotron">
                <h1>Welcome to Math Quiz.</h1>
            </div>
            <a href="login.php" class = "btn btn-primary"><p>login</p></a>
        </div>
    <!-- <script type="text/javascript" charset="utf-8" src='js/cartesian.js'></script> -->
    <script>    
        // self.location.href = $(".btn-primary").attr('href'); 
    </script>
    </body>
    
</html>

