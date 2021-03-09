<?php
    session_start();
    session_unset();
    session_destroy();
?>
<!DOCTYPE html>
<html>
    <head>
        <link rel="shortcut icon" href="img/lifestyleStore.png" />
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- latest compiled and minified CSS -->
        <title>Math quiz</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <!-- External CSS -->
        <style type="text/css" media="all">
        </style>
    </head>
    <body>
        <div>
            <br><br><br><br><br><br><br><br><br><br>
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-md-3">
                    </div>
                    <div class="col-xs-6 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading"></div>
                            <div class="panel-body">
                                <p style="font-size:20px">You have been logged out. <a href="login.php">Login again.</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-md-3">
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
