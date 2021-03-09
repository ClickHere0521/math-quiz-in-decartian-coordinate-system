  var pointA = {
    x : null,
    y : null
  };
  var pointB = {
    x : null,
    y : null
  };  //for line
  var pointC = {
    x : null,
    y : null
  };  //for quadratic 
  var drawPen = true; //means linear

var Plane = (function(canvas){

  var cart = document.getElementById(canvas);
  var plane2d = cart.getContext('2d'); 
  var planeHeight = cart.height;
  var planeWidth  = cart.width;
  var planeCenter = planeWidth / 2;
  var planeXFontPadding = (planeCenter + 5)
  var planeXYFontPadding = (planeCenter + 8)
  var xPlaneFontPadding  = 9;
  var xPlaneNumberStart = 1;
  var xPlaneNumberInterval = 1;
  var yPlaneNumberStart = 10;
  var yPlaneNumberInterval = 1;
	var xPlaneFont = 'bold 12px Helvectica';
	var xPlaneFontColor = '#000';
	var xPlaneFontWidth = 10;

  var newCanvas = function(){
    pointA = {
      x : null,
      y : null
    };
    pointB = {
      x : null,
      y : null
    };
    pointC = {
      x : null,
      y : null
    };
    plane2d.clearRect(0,0, cart.width, cart.height);
    this.drawXY(20, 20, '#ccc', true);
    this.drawYAxis(2, '#aaa');
    this.drawXAxis(2, '#aaa0');
    this.drawCircle(300, 300, 2, 0, 2*Math.PI, '#000');
  }

  var drawXY = function(xLines, yLines, xyColor, again){
  
    if(again == true)
    {
      xPlaneNumberStart = 1;
      yPlaneNumberStart = 10;
    }
    var i, j = i = 0;
    var yLineInterval = parseInt(planeWidth / yLines); 
    var xLineInterval = parseInt(planeHeight / xLines);
    
    plane2d.beginPath();
    
    for( i; i <= planeWidth; i += xLineInterval){ 
      
      plane2d.moveTo(i, 0);
      plane2d.lineTo(i, planeHeight);
       
      if( i > planeCenter ){ 
         
         this.drawText(i - xPlaneFontPadding, planeXYFontPadding+10, xPlaneNumberStart, xPlaneFont, xPlaneFontColor, xPlaneFontWidth);
         xPlaneNumberStart += xPlaneNumberInterval;
      } 
    }

    for( j; j <= planeHeight; j += yLineInterval){

      plane2d.moveTo(0, j);
      plane2d.lineTo(planeWidth, j);

      if( j < planeCenter ){ 
         
         this.drawText(planeXYFontPadding, j - xPlaneFontPadding+20, yPlaneNumberStart, xPlaneFont, xPlaneFontColor, xPlaneFontWidth);
         yPlaneNumberStart -= yPlaneNumberInterval;
      } 
    }
      
      plane2d.strokeStyle = '#aaa'; 
      plane2d.stroke(); 
      plane2d.closePath(); 
  }
    
  var drawYAxis = function(yAxisWidth, color){

      plane2d.beginPath(); 
      plane2d.moveTo(planeWidth / 2, 0);
      plane2d.lineTo(planeWidth / 2, planeHeight);
      plane2d.lineWidth = parseInt(yAxisWidth);
      plane2d.strokeStyle = color;
      plane2d.stroke();

  }

  var drawXAxis = function(xAxisWidth, color){

      plane2d.beginPath(); 
      plane2d.moveTo(0, planeHeight / 2);
      plane2d.lineTo(planeWidth, planeHeight / 2);
      plane2d.lineWidth = parseInt(xAxisWidth); 
      plane2d.strokeStyle = color;
      plane2d.stroke();
  }

  var drawRect = function(x, y, w, h){

      plane2d.fillRect(x, y, w, h);

  }

  var drawCircle = function(x, y, radius, start, end, color){

      plane2d.beginPath();
      plane2d.arc(x, y, radius, start, end);
      plane2d.fillStyle = color
      plane2d.fill();
  }

  var drawText = function(x, y, text, font, color, width){
     
      plane2d.font = font; 
      plane2d.fillStyle = color;
      plane2d.fillText(text, x-2, y+2, width); 

  }

  var getWidth = function(){
      
      return planeWidth;
  } 

  var getHeight = function(){
    
      return planeHeight;
  }

  var drawXAxisLabel = function(){
    plane2d.font = 'bold 20px Helvectica'; 
    plane2d.fillStyle = xPlaneFontColor;
    plane2d.fillText('X',600,310);
  }

  var drawYAxisLabel = function(){
    plane2d.font = 'bold 20px Helvectica'; 
    plane2d.fillStyle = xPlaneFontColor;
    plane2d.fillText('Y',300,0);
  }

  var drawLine = function(isdraw){
    color = isdraw == true ? '#0aa' : '#fff';
    lineWidth = isdraw == true ? 2 : 4;
    if(pointA.x != null && pointB.x != null)
    {
      plane2d.beginPath();
      startPoint = {
        x : 0,
        y : (pointA.x * pointB.y - pointA.y * pointB.x) / (pointA.x - pointB.x)
      }
      endPoint = {
        x : (pointB.x * pointA.y - pointA.x * pointB.y) / (pointA.y - pointB.y),
        y : 0
      }
      if(startPoint.y < 0)
      {
        startPoint.x = 600;
        startPoint.y = startPoint.y + (pointA.y - pointB.y)/(pointA.x - pointB.x) * 600;
      }
      if(endPoint.x < 0)
      {
        endPoint.x = 600;
        endPoint.y = startPoint.y + (pointA.y - pointB.y)/(pointA.x - pointB.x) * 600;
      }
      plane2d.moveTo(startPoint.x, startPoint.y);
      plane2d.lineTo(endPoint.x, endPoint.y);
      plane2d.strokeStyle = color; 
             
      if(pointA.x == pointB.x)
      {
        plane2d.moveTo(endPoint.x, planeHeight);
        plane2d.lineTo(endPoint.x, endPoint.y);
        plane2d.strokeStyle = color;                 
      } 
      if(pointA.y == pointB.y)
      {
        plane2d.moveTo(startPoint.x, startPoint.y);
        plane2d.lineTo(planeWidth, startPoint.y);
        plane2d.strokeStyle = color;                 
      }       
      plane2d.lineWidth = lineWidth;
      plane2d.stroke();
      plane2d.closePath();
    }    
  }

  var drawQuadratic = function(isdraw){
    color = isdraw == true ? '#0aa' : '#fff';
    plotSize = isdraw == true ? 2 : 4;
    if(pointC.x != null && pointC.y != null)
    {      
      a = (9000-30*pointC.y)/(Math.pow((pointC.x-300),2));
      var divX = 0;
      var divY;
      for (divX = 0; divX<=600; divX+=1)
      {
        divY = (-1)*(a/30)*(Math.pow((divX-300),2))+300;
        drawCircle(divX, divY, plotSize, 0, 2*Math.PI, color);
      }
    }    
  }

  cart.addEventListener("mousedown", function (e) {

    if(drawPen == true)
    {
      drawing = true;
      mousePos = getMousePos(cart, e);
      
      mousePos.x = Math.round(mousePos.x);
      mousePos.y = Math.round(mousePos.y);
      // console.log(mousePos);
      nwPOS = {
        x : mousePos.x - mousePos.x % 30,
        y : mousePos.y - mousePos.y % 30
      };
      nePOS = {
        x : nwPOS.x + 30,
        y : nwPOS.y 
      };
      swPOS = {
        x : nwPOS.x,
        y : nwPOS.y + 30 
      };
      sePOS = {
        x : nwPOS.x + 30,
        y : nwPOS.y + 30
      };
      disNWPOS = Math.pow((mousePos.x - nwPOS.x),2) + Math.pow((mousePos.y - nwPOS.y),2);
      disNEPOS = Math.pow((nePOS.x - mousePos.x),2) + Math.pow((mousePos.y - nePOS.y),2);
      disSWPOS = Math.pow((mousePos.x - swPOS.x),2) + Math.pow((swPOS.y - mousePos.y),2);
      disSEPOS = Math.pow((sePOS.x - mousePos.x),2) + Math.pow((sePOS.y - mousePos.y),2);
      
      if(disNWPOS < 100)
      {   
        // aleady pointed dot       
        if(pointA.x == nwPOS.x && pointA.y == nwPOS.y)
        {
          drawCircle(nwPOS.x, nwPOS.y, 5, 0, 2*Math.PI, '#fff');
          drawLine(false);
          xPlaneNumberStart = 1;
          for( i=planeCenter + 30; i <= planeWidth; i += 30){        
            drawText(i - xPlaneFontPadding, planeXYFontPadding+10, xPlaneNumberStart, xPlaneFont, xPlaneFontColor, xPlaneFontWidth);
            xPlaneNumberStart += xPlaneNumberInterval;         
          }
          yPlaneNumberStart = 10;
          for( j=0; j < planeCenter; j += 30){          
            drawText(planeXYFontPadding, j - xPlaneFontPadding+20, yPlaneNumberStart, xPlaneFont, xPlaneFontColor, xPlaneFontWidth);
            yPlaneNumberStart -= yPlaneNumberInterval;
          }
          pointA.x = pointB.x;
          pointA.y = pointB.y;
          pointB.x = null;
          pointB.y = null;
        }
        else if(pointB.x == nwPOS.x && pointA.y == nwPOS.y)
        {
          drawCircle(nwPOS.x, nwPOS.y, 5, 0, 2*Math.PI, '#fff');
          drawLine(false);
  
          xPlaneNumberStart = 1;
          for( i=planeCenter + 30; i <= planeWidth; i += 30){        
            drawText(i - xPlaneFontPadding, planeXYFontPadding+10, xPlaneNumberStart, xPlaneFont, xPlaneFontColor, xPlaneFontWidth);
            xPlaneNumberStart += xPlaneNumberInterval;         
          }
          yPlaneNumberStart = 10;
          for( j=0; j < planeCenter; j += 30){          
            drawText(planeXYFontPadding, j - xPlaneFontPadding+20, yPlaneNumberStart, xPlaneFont, xPlaneFontColor, xPlaneFontWidth);
            yPlaneNumberStart -= yPlaneNumberInterval;
          }
          pointB.x = null;
          pointB.y = null;
        }
        else
        {
          //newly pointed dot
          if(pointA.x == null)
          {
            drawCircle(nwPOS.x, nwPOS.y, 5, 0, 2*Math.PI, '#000');
            pointA.x = nwPOS.x;
            pointA.y = nwPOS.y;
          }
          else if (pointB.x == null)
          {
            drawCircle(nwPOS.x, nwPOS.y, 5, 0, 2*Math.PI, '#000');
            pointB.x = nwPOS.x;
            pointB.y = nwPOS.y;
          }  
          else
          {
            // 3 points can not be added.
          }
        }            
      }          
      drawLine(true);
    }
    else
    {
      drawing = true;
      mousePos = getMousePos(cart, e);
      
      mousePos.x = Math.round(mousePos.x);
      mousePos.y = Math.round(mousePos.y);
      // console.log(mousePos);
      nwPOS = {
        x : mousePos.x - mousePos.x % 30,
        y : mousePos.y - mousePos.y % 30
      };
      nePOS = {
        x : nwPOS.x + 30,
        y : nwPOS.y 
      };
      swPOS = {
        x : nwPOS.x,
        y : nwPOS.y + 30 
      };
      sePOS = {
        x : nwPOS.x + 30,
        y : nwPOS.y + 30
      };
      disNWPOS = Math.pow((mousePos.x - nwPOS.x),2) + Math.pow((mousePos.y - nwPOS.y),2);
      disNEPOS = Math.pow((nePOS.x - mousePos.x),2) + Math.pow((mousePos.y - nePOS.y),2);
      disSWPOS = Math.pow((mousePos.x - swPOS.x),2) + Math.pow((swPOS.y - mousePos.y),2);
      disSEPOS = Math.pow((sePOS.x - mousePos.x),2) + Math.pow((sePOS.y - mousePos.y),2);
      
      if(disNWPOS < 100)
      {   
        // aleady pointed dot       
        if(pointC.x == nwPOS.x && pointC.y == nwPOS.y)
        {
          drawCircle(nwPOS.x, nwPOS.y, 5, 0, 2*Math.PI, '#fff');
          drawQuadratic(false);
          xPlaneNumberStart = 1;
          for( i=planeCenter + 30; i <= planeWidth; i += 30){        
            drawText(i - xPlaneFontPadding, planeXYFontPadding+10, xPlaneNumberStart, xPlaneFont, xPlaneFontColor, xPlaneFontWidth);
            xPlaneNumberStart += xPlaneNumberInterval;         
          }
          yPlaneNumberStart = 10;
          for( j=0; j < planeCenter; j += 30){          
            drawText(planeXYFontPadding, j - xPlaneFontPadding+20, yPlaneNumberStart, xPlaneFont, xPlaneFontColor, xPlaneFontWidth);
            yPlaneNumberStart -= yPlaneNumberInterval;
          }
          pointC.x = null;
          pointC.y = null;
        }
        else
        {
          //newly pointed dot
          if(pointC.x == null)
          {
            drawCircle(nwPOS.x, nwPOS.y, 5, 0, 2*Math.PI, '#000');
            pointC.x = nwPOS.x;
            pointC.y = nwPOS.y;
          }
          else
          {
            // 2 points can not be added.
          }
        }            
      }          
      drawQuadratic(true);
    }
  }, false);

  cart.addEventListener("mousemove", function (e) {
    e.timeStamp = 1
    // console.log(e.timeStamp);
    mousePos = getMousePos(cart, e);
    mousePos.x = Math.round(mousePos.x);
    mousePos.y = Math.round(mousePos.y);
    // console.log(mousePos);
    nwPOS = {
      x : mousePos.x - mousePos.x % 30,
      y : mousePos.y - mousePos.y % 30
    };
    nePOS = {
      x : nwPOS.x + 30,
      y : nwPOS.y 
    };
    swPOS = {
      x : nwPOS.x,
      y : nwPOS.y + 30 
    };
    sePOS = {
      x : nwPOS.x + 30,
      y : nwPOS.y + 30
    };
    disNWPOS = Math.pow((mousePos.x - nwPOS.x),2) + Math.pow((mousePos.y - nwPOS.y),2);
    disNEPOS = Math.pow((nePOS.x - mousePos.x),2) + Math.pow((mousePos.y - nePOS.y),2);
    disSWPOS = Math.pow((mousePos.x - swPOS.x),2) + Math.pow((swPOS.y - mousePos.y),2);
    disSEPOS = Math.pow((sePOS.x - mousePos.x),2) + Math.pow((sePOS.y - mousePos.y),2);
    
    if(disNWPOS < 60)
    {      
      drawCircle(nwPOS.x, nwPOS.y, 5, 0, 2*Math.PI, '#000');
    }
    else
    {     
      if((nwPOS.x == pointA.x && nwPOS.y == pointA.y) || (nwPOS.x == pointB.x && nwPOS.y == pointB.y) || (nwPOS.x == pointC.x && nwPOS.y == pointC.y))
      {

      }
      else
      {
        drawCircle(nwPOS.x, nwPOS.y, 6, 0, 2*Math.PI, '#fff');
        drawCircle(nePOS.x, nePOS.y, 6, 0, 2*Math.PI, '#fff');
        drawCircle(swPOS.x, swPOS.y, 6, 0, 2*Math.PI, '#fff');
        drawCircle(sePOS.x, sePOS.y, 6, 0, 2*Math.PI, '#fff');
        plane2d.beginPath();

        if(nwPOS.x == planeWidth / 2)
        {
          plane2d.moveTo(nwPOS.x, 0);
          plane2d.lineTo(nwPOS.x, planeHeight);
          plane2d.strokeStyle = '#aaa';
          plane2d.stroke();  
          plane2d.closePath();
          
          plane2d.beginPath();
          plane2d.moveTo(0, nwPOS.y);
          plane2d.lineTo(planeWidth, nwPOS.y);

          plane2d.moveTo(nePOS.x, 0);
          plane2d.lineTo(nePOS.x, planeHeight);
          plane2d.moveTo(0, swPOS.y);
          plane2d.lineTo(planeWidth, swPOS.y); 

          plane2d.strokeStyle = '#ccc';
          plane2d.stroke();
        }
        else if(nwPOS.y == planeHeight / 2)
        {
          plane2d.moveTo(0, nwPOS.y);
          plane2d.lineTo(planeWidth, nwPOS.y);
          plane2d.strokeStyle = '#aaa';
          plane2d.stroke();
          plane2d.closePath();
          
          plane2d.beginPath();
          plane2d.moveTo(nwPOS.x, 0);
          plane2d.lineTo(nwPOS.x, planeHeight);

          plane2d.moveTo(nePOS.x, 0);
          plane2d.lineTo(nePOS.x, planeHeight);
          plane2d.moveTo(0, swPOS.y);
          plane2d.lineTo(planeWidth, swPOS.y); 

          plane2d.strokeStyle = '#ccc';
          plane2d.stroke();

        }
        else
        {
          plane2d.moveTo(nwPOS.x, 0);
          plane2d.lineTo(nwPOS.x, planeHeight);
          plane2d.moveTo(0, nwPOS.y);
          plane2d.lineTo(planeWidth, nwPOS.y); 

          plane2d.moveTo(nePOS.x, 0);
          plane2d.lineTo(nePOS.x, planeHeight);
          plane2d.moveTo(0, swPOS.y);
          plane2d.lineTo(planeWidth, swPOS.y); 

          plane2d.strokeStyle = '#ccc';
          plane2d.stroke();       
        }      
        plane2d.closePath(); 
      }      
    }
    drawYAxis(2, '#000');
    drawXAxis(2, '#000');
    if(pointA.x != null)
    {
      drawCircle(pointA.x, pointA.y, 5, 0, 2*Math.PI, '#000');
    }
    if(pointB.x != null)
    {
      drawCircle(pointB.x, pointB.y, 5, 0, 2*Math.PI, '#000');
    }
    drawLine(true);
    drawQuadratic(true);
  }, false);

  // Get the position of the mouse relative to the canvas
  function getMousePos(canvasDom, mouseEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: mouseEvent.clientX - rect.left,
      y: mouseEvent.clientY - rect.top
    };
  }

  return {
   drawXY         : drawXY,
   drawYAxis      : drawYAxis,
   drawXAxis      : drawXAxis,
   drawRect       : drawRect,
   drawCircle     : drawCircle,
   drawText       : drawText,
   getWidth       : getWidth,
   getHeight      : getHeight,
   drawXAxisLabel : drawXAxisLabel,
   drawYAxisLabel : drawYAxisLabel,
   newCanvas      : newCanvas,
   drawQuadratic  : drawQuadratic
  };

})('cart');

console.time('Canvas paint time');
Plane.drawXY(20, 20, '#ccc', false);
Plane.drawYAxis(2, '#aaa');
Plane.drawXAxis(2, '#aaa');
// Plane.drawXAxisLabel();
// Plane.drawYAxisLabel();
Plane.drawCircle(300, 300, 2, 0, 2*Math.PI, '#000');
console.timeEnd('Canvas paint time');

var problem;
$(document).ready(function(){

  $('.linear').on('click',function(){
    drawPen = true;
    $('.linear').html('<button class="btn btn-danger">Linear Function</button>');
    $('.quadratic').html(`<button class="btn btn-primary disabled">Quadratic Function</button>`);
    $('.quadratic').off('click');
  });

  $('.quadratic').on('click',function(){
    drawPen = false;
    $('.quadratic').html('<button class="btn btn-danger">Quadratic Function</button>');
    $('.linear').html(`<button class="btn btn-primary disabled">Linear Function</button>`);
    $('.linear').off('click');
    $.post("quadratic.php",
    {
      id     :   id
    },
    function(data, status){
      problem = JSON.parse(data); 
      if(problem.a == "1")
      {
        $('#problem').html(`          
          <span>y=x</span>
          <span style="position: absolute;font-size: 13px;">2</span>
        `);
      }
      if(problem.a == '-1')
      {
        $('#problem').html(`
          <span>y=-x</span>
          <span style="position: absolute;font-size: 13px;">2</span>
        `);
      }
      else
      {
        $('#problem').html(`          
          <span>y=${problem.a}x</span>
          <span style="position: absolute;font-size: 13px;">2</span>
        `);  
      }
    });
  });

  if(drawPen == true)
  {
    $.post("problem.php",
    {
      id     :   1
    },
    function(data, status){
      problem = JSON.parse(data); 
      if(parseInt(problem.y) < 0)
      {
        if(parseInt(problem.x)==1)
        {
          $('#problem').html(`
            y= x ${problem.y}
          `);
        }
        else if(parseInt(problem.x)==-1)
        {
          $('#problem').html(`
            y= -x ${problem.y}
          `);
        }
        else
        {
          $('#problem').html(`
            y= ${problem.x}x ${problem.y}
          `);
        }
      }   
      else
      {
        if(parseInt(problem.x)==1)
        {
          $('#problem').html(`
            y= x +${problem.y}
          `);
        }
        else if(parseInt(problem.x)==-1)
        {
          $('#problem').html(`
            y= -x +${problem.y}
          `);
        }
        else
        {
          $('#problem').html(`
            y= ${problem.x}x +${problem.y}
          `);
        }
      }
    });
  }
  else
  {
    $.post("quadratic.php",
    {
      id     :   1
    },
    function(data, status){
      problem = JSON.parse(data); 
      if(parseFloat(problem.a) == 1)
      {
        $('#problem').html(`          
          <span>y=x</span>
          <span style="position: absolute;font-size: 13px;">2</span>
        `);
      }
      if(problem.a == '-1')
      {
        $('#problem').html(`
          <span>y=-x</span>
          <span style="position: absolute;font-size: 13px;">2</span>
        `);
      }
      else
      {
        $('#problem').html(`          
          <span>y=${problem.a}x</span>
          <span style="position: absolute;font-size: 13px;">2</span>
        `);  
      }
    });
  }
});

var score=0;
// var wrong = false;
var id = 1;
$('#send').on('click', function(){
  id++
  if(drawPen == true)
  {
    $.post("problem.php",
    {
      id     :   id
    },
    function(data, status){  
      
      if(data)
      {
        problem = JSON.parse(data); 
        if(parseInt(problem.y) < 0)
        {
          if(parseInt(problem.x)==1)
          {
            $('#problem').html(`
              y= x ${problem.y}
            `);
          }
          else if(parseInt(problem.x)==-1)
          {
            $('#problem').html(`
              y= -x ${problem.y}
            `);
          }
          else
          {
            $('#problem').html(`
              y= ${problem.x}x ${problem.y}
            `);
          }
        }   
        else
        {
          if(parseInt(problem.x)==1)
          {
            $('#problem').html(`
              y= x +${problem.y}
            `);
          }
          else if(parseInt(problem.x)==-1)
          {
            $('#problem').html(`
              y= -x +${problem.y}
            `);
          }
          else
          {
            $('#problem').html(`
              y= ${problem.x}x +${problem.y}
            `);
          }
        }   
      }
      else
      {      
        $.post("score_submit.php",
        {
          score : score
        },
        function(data, status){
          if(status)
          {
            $('#viewScore').css('display','block');
            $('#main').css('display','none');
            $('#viewScore p').html(`${score}`);
          }
        });
      }
    });
    $.post("problem.php",
    {
      id     :   (id-1)
    },
    function(data, status){  
      
      if(data)
      {
        problem = JSON.parse(data);
        
        testX=(pointA.x / 30)-10;
        testY=10-(pointA.y / 30);
        if(parseInt(problem.x) * testX + parseInt(problem.y) == testY)
        {        
          testX=(pointB.x / 30)-10;
          testY=10-(pointB.y / 30);
          if(parseInt(problem.x) * testX + parseInt(problem.y) == testY)
          {          
            // if(!wrong) 
            // {score ++}
            // else
            // {wrong=false}
            score++
            Plane.newCanvas();            

                $('.modal-header').html('');
                $('.modal-header').html(`
                  <h4 class="modal-title">Success</h4>
                `);
                $('.modal-body').html('');
                $('.modal-body').html(`
                  <div class="alert alert-success" style="margin-bottom:0">
                      <strong>Success!</strong> Good Job.
                  </div>
                `);
                $('#myModal').modal();  

          }
          else
          {
            // wrong=true;
            $('.modal-header').html('');
            $('.modal-header').html(`
              <h4 class="modal-title">Wrong</h4>
            `);
            $('.modal-body').html('');
            $('.modal-body').html(`
              <div class="alert alert-danger" style="margin-bottom:0">
                  <strong>Wrong!</strong> Your answer is wrong.
              </div>
            `);
            $('#myModal').modal();
            Plane.newCanvas();
          }
        }
        else
        {
          // wrong=true;
          $('.modal-header').html('');
          $('.modal-header').html(`
            <h4 class="modal-title">Wrong</h4>
          `);
          $('.modal-body').html('');
          $('.modal-body').html(`
            <div class="alert alert-danger" style="margin-bottom:0">
                <strong>Wrong!</strong> Your answer is wrong.
            </div>
          `);
          $('#myModal').modal();
          Plane.newCanvas();
        }
      }
      else
      {      
        $.post("score_submit.php",
        {
          score : score
        },
        function(data, status){
          if(status)
          {
            $('#viewScore').css('display','block');
            $('#main').css('display','none');
            $('#viewScore p').html(`${score}`);
          }
        });
      }
    });
  }
  else
  {
    $.post("quadratic.php",
    {
      id     :   id
    },
    function(data, status){  
      
      if(data)
      {
        problem = JSON.parse(data); 
        if(parseInt(problem.a) == 1)
        {
          $('#problem').html(`          
            <span>y=x</span>
            <span style="position: absolute;font-size: 13px;">2</span>
          `);
        }
        if(problem.a == '-1')
        {
          $('#problem').html(`
            <span>y=-x</span>
            <span style="position: absolute;font-size: 13px;">2</span>
          `);
        }
        else
        {
          $('#problem').html(`          
            <span>y=${problem.a}x</span>
            <span style="position: absolute;font-size: 13px;">2</span>
          `);  
        }  
      }
      else
      {      
        $.post("score_submit.php",
        {
          score : score
        },
        function(data, status){
          if(status)
          {
            $('#viewScore').css('display','block');
            $('#main').css('display','none');
            $('#viewScore p').html(`${score}`);
          }
        });
      }
    });
    $.post("quadratic.php",
    {
      id     :   (id-1)
    },
    function(data, status){  
      
      if(data)
      {

        problem = JSON.parse(data);
        
        testX=(pointC.x / 30)-10;
        testY=10-(pointC.y / 30);
        if(parseFloat(problem.a)*(Math.pow(testX,2)) == testY)
        {          
          // if(!wrong) 
          // {score ++}
          // else
          // {wrong=false}
          score++
          Plane.newCanvas();
          

          $('.modal-header').html('');
          $('.modal-header').html(`
            <h4 class="modal-title">Success</h4>
          `);
          $('.modal-body').html('');
          $('.modal-body').html(`
            <div class="alert alert-success" style="margin-bottom:0">
                <strong>Success!</strong> Good Job.
            </div>
          `);
          $('#myModal').modal();           
        }
        else
        {
          // wrong=true;
          $('.modal-header').html('');
          $('.modal-header').html(`
            <h4 class="modal-title">Wrong</h4>
          `);
          $('.modal-body').html('');
          $('.modal-body').html(`
            <div class="alert alert-danger" style="margin-bottom:0">
                <strong>Wrong!</strong> Your answer is wrong.
            </div>
          `);
          $('#myModal').modal();
          Plane.newCanvas();
        }
      }
      else
      {      
        $.post("score_submit.php",
        {
          score : score
        },
        function(data, status){
          if(status)
          {
            $('#viewScore').css('display','block');
            $('#main').css('display','none');
            $('#viewScore p').html(`${score}`);
          }
        });
      }
    });
  }
  if(id == 6)
  {
    $.post("score_submit.php",
    {
      score : score
    },
    function(data, status){
      if(status)
      {
        $('#viewScore').css('display','block');
        $('#main').css('display','none');
        $('#viewScore p').html(`${score}`);
      }
    });
  }
});

$('.new').on('click', function(){
  Plane.newCanvas();
});