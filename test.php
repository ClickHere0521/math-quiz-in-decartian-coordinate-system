<?php
session_start();
require 'connection.php';
$user_id = $_SESSION['id'];

$sql = "SELECT score FROM score WHERE `user_id` =". $user_id;
$result = $con->query($sql);
while($row = $result->fetch_assoc())
{
    $score = $row['score'];
}
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
        *{ padding: 0px; margin: 0px; border:0px; }

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

        #viewScore {            
            position: absolute;
            bottom: 50%;
            width: 100%;
            display: none;
        }
        #problem {
            font-size: 20px;
        }
        </style>
    </head>
    <body>
        <div id = 'main'>
            <br>
            <p><a href="test.php" class="btn btn-info"> Click to retest </a></p>
            <p> Graph this line using the slope and y-intercept</p>
            <div id="problem"> </div>
            <p>
                <span class="linear"><button class="btn btn-primary">Linear Function</button></span>
                    <span>Click to select points on the graph.</span>
                <span class="quadratic"><button class="btn btn-primary">Quadratic Function</button></span>
            </p>
            <p><button class="new btn btn-primary">New Draw</button></p>
            <canvas id='cart' height='600' width='600'></canvas>
            <div class="row">
                <button type="button" class="btn btn-success" id="send">Submit</button>
                <a style="position: absolute; padding: 10px 210px;" href="logout.php">Logout ></a>
            </div>  
        </div>
        <div class="container">
            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                    
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Success</h4>                            
                        </div>
                        
                        <!-- Modal body -->
                        <div class="modal-body">
                            <div class="alert alert-success" style="margin-bottom:0">
                                <strong>Success!</strong> You are right.
                            </div>
                        </div>
                        
                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Continue</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>   
        <div class="container" id="viewScore">      
            <center>      
                <h1 style="font-size:50px">Your Score</h1>
                <p style="font-size:50px"><?php echo $score ?></p>
                <div style="margin-top: 50px">
                    <a href="test.php" class="btn btn-primary">Retest</a>
                    <a href="logout.php" class="btn btn-primary">Logout</a>
                </div>                
            </center>            
        </div>     
    <script type="text/javascript" charset="utf-8" src='js/cartesian.js'></script>
    </body>
</html>