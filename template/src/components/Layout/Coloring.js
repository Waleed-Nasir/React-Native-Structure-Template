export const Coloring = ({ IMAGE, width, isTablet }) => `
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
</head>
<style>
  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #canvasHolder {
    width: 100%;
    float: left;
    clear: both;
    margin-bottom: 0px;
    height: calc(100% - 200px);
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  #canvasHolder canvas {
    width: 100%;
    position: relative;
    // border: 10px solid #000;
    cursor: crosshair;
    height: 100%;
    // image-rendering: -moz-crisp-edges;
    // image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    // image-rendering: crisp-edges;
    // image-rendering: high-quality;
    image-rendering: smooth;
  }

  #imageSelector {
    margin-top: 20px;
    height: 120px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: flex;
    position: absolute;
  }

  #imageSelector img {
    float: left;
    height: 150px;
    flex: 1;
  }

  #imageSelector img:hover {
    background: #f2f2f5;
    cursor: pointer;
  }

  .controls {
    background-color: #fff;
    clear: both;
    padding: 20px;
    display: flex;
    flex: 1;
    bottom: 0;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .controls div {
    margin: 0px 10px 0px 10px;
    float: left;
    font-size: 10px;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-content: center;
    display: flex;
    text-align: center;
    align-items: center;
  }

  .controls div i {
    color: #000;
    float: left;
    position: relative;
    font-size: 20pt;
  }

  .controls div i:hover {
    opacity: 0.7;
    cursor: pointer;
  }


 input[type=color] {
    -webkit-appearance: none;
    border: 0px;
    padding: 0px;
    padding: 0px;
    outline: 0px;
    background: rgba(0, 0, 0, 0);
    margin: 0px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    left: 0;
  }

  input[type=range] {
    -webkit-appearance: none;
    border: 10px solid 0;
    border-radius: 20px;
    margin-top: 10px;
    height: 10px;
    background: #333;
    transition: all 0.3s ease;
    cursor: pointer;
    width:100%;
  }

  input[type=range]::-webkit-slider-runnable-track {
    height: 0px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #555;
    margin-top: -10px;
  }

  input[type=range]:focus {
    outline: none;
  }
  #RANGE{
    width:100%;
    padding:0px 20px
  }
</style>

<body>
  <!-- <div id="imageSelector">
   <img src="https://openclipart.org/image/800px/svg_to_png/237835/NEW-Questions-Asked-Clipart-2016011843.png">
   <img src="https://openclipart.org/image/2400px/svg_to_png/5516/FunDraw-dot-com-Coloring-Book-Mammoth.png">
  <img src="https://openclipart.org/image/2400px/svg_to_png/5544/FunDraw-dot-com-Coloring-Book-Bald-Eagle.png">
  <img src="https://img.clipartfest.com/09aafaec60c5c95667bf54e5a39d82b2_butterfly-line-drawing-flowmaster-mufflers-clipart-black-and-white-line-art_2555-1429.png">
</div> -->

  <div id="canvasHolder">
  <canvas id="letsPaint" width="1000px" height="1000px"></canvas>
  </div>
  <div id="RANGE">

  <div class="controls">
    <div id="save"><a id="download"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div>
    <div id="clear"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
    <div id="eraser"><i class="fa fa-eraser" aria-hidden="true"></i></div>
    <div><i class="fa fa-paint-brush brushIcon" aria-hidden="true"><input type="color" name="favcolor" value="#ff0000"
          id="colourPicker"></i></div>
    <div id="undo"><i class="fa fa-undo" aria-hidden="true"></i></div>
    <div id="do"><i class="fa  fa-repeat " aria-hidden="true"></i></div>

    
    </div>
      <input id="thickness" type="range" value="1" min="1" max="100">
    </div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>

  <script>
    context = document.getElementById("letsPaint").getContext("2d");

    var curColor = "#ff00cc";
    var clickColor = new Array();

    var brushThickness = 1;
    var clickThickness = new Array();
    var imageUrl =  ${IMAGE};
    var outlineImage = new Image();

    $(".brushIcon").css("color", curColor);

    $("#colourPicker").change(function () {
      curColor = $(this).val();
      $(".brushIcon").css("color", curColor);
    });
    $("#eraser").click(function () {
      curColor = "#ffffff";
    });
    $("#thickness").change(function () {
      brushThickness = $(this).val();
    });
    var clickX = new Array();
    var clickY = new Array();
    var RecordX = new Array();
    var RecordY = new Array();
    var RecordDrag = new Array();
    var RecordColor = new Array();
    var RecordThickness = new Array();
    var StoreData = { X: [], Y: [], D: [], C: [], T: [] }
    var clickDrag = new Array();
    var paint;
    var doCount = 1
    outlineImage.src = imageUrl;
    redraw();

    outlineImage.src = imageUrl;
    redraw();

    $("#undo").click(function () {

      clickX = [...StoreData.X].splice(0, StoreData.X.length - doCount).flat(1)
      clickY = [...StoreData.Y].splice(0, StoreData.Y.length - doCount).flat(1)
      clickDrag = [...StoreData.D].splice(0, StoreData.D.length - doCount).flat(1)
      clickColor = [...StoreData.C].splice(0, StoreData.C.length - doCount).flat(1)
      clickThickness = [...StoreData.T].splice(0, StoreData.T.length - doCount).flat(1)

      doCount++

      redraw();
    });

    $("#do").click(function () {

      clickX = [...StoreData.X].splice(0, StoreData.X.length - (doCount)).flat(1)
      clickY = [...StoreData.Y].splice(0, StoreData.Y.length - (doCount)).flat(1)
      clickDrag = [...StoreData.D].splice(0, StoreData.D.length - (doCount)).flat(1)
      clickColor = [...StoreData.C].splice(0, StoreData.C.length - (doCount)).flat(1)
      clickThickness = [...StoreData.T].splice(0, StoreData.T.length - (doCount)).flat(1)
      doCount--

      redraw();
    });


    // $("#imageSelector img").click(function () {
    //   imageUrl = $(this).attr("src");
    //   outlineImage.src = imageUrl;
    //   redraw();
    // });

    setTimeout(()=>{
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
          context.drawImage(
            outlineImage,
            0,
            0,
            context.canvas.width,
            context.canvas.height
          );
    },100)


    $("#clear").click(function () {
      if (confirm("Are you sure you want to delete your drawing?") == true) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        clickX = [];
        clickY = [];
        clickDrag = [];
        clickColor = [];
        clickThickness = [];
        RecordX = [],
          RecordY = [],
          RecordDrag = [],
          RecordColor = [],
          RecordThickness = [],
          StoreData = { X: [], Y: [], D: [], C: [], T: [] },
          context.drawImage(
            outlineImage,
            0,
            0,
            context.canvas.width,
            context.canvas.height
          );
      } else {
        return false;
      }
    });

    $("#download").click(function () {
      // var link = document.getElementById("downlaod");
      // link.download = "test.png";
      // link.href = document.getElementById("letsPaint").toDataURL();
      const canvas = document.getElementById('letsPaint');

      // var link = document.getElementById("RANGE")
      // link.style.display = 'none'
      setTimeout(()=>{
        window.ReactNativeWebView.postMessage(JSON.stringify({clickX,clickY, StoreData,clickDrag,paint,doCount}));
      },500)
      // setTimeout(()=>{
      //   link.style.display = 'block'
      // },1000)

    });

    function addClick(x, y, dragging) {
      let wW = window.innerWidth / 1000
      let wH = window.innerHeight / ${isTablet ? 1300 : 1400}
      outlineImage.src = imageUrl;
      clickX.push(x / wW);
      clickY.push(y / wH);
      clickDrag.push(dragging);
      clickColor.push(curColor);
      clickThickness.push(brushThickness);
      RecordX.push(x / wW);
      RecordY.push(y / wH);
      RecordDrag.push(dragging);
      RecordColor.push(curColor);
      RecordThickness.push(brushThickness);
    }

    $("#letsPaint").bind("touchstart", function (e) {
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw();
    });

    // For Touch
    var canvas = document.getElementById("letsPaint");

    // Set up touch events for mobile, etc
    canvas.addEventListener(
      "touchstart",
      function (e) {
        mousePos = getTouchPos(canvas, e);
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
          clientX: touch.clientX,
          clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
      },
      false
    );
    canvas.addEventListener(
      "touchend",
      function (e) {
        var mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
      },
      false
    );
    canvas.addEventListener(
      "touchmove",
      function (e) {
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
          clientX: touch.clientX,
          clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
      },
      false
    );

    // Get the position of a touch relative to the canvas
    function getTouchPos(canvasDom, touchEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
      };
    }

    $("#letsPaint").mousedown(function (e) {
      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      paint = true;
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw();
    });

    $("#letsPaint").mousemove(function (e) {
      if (paint) {
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
      }
    });

    $("#letsPaint").mouseup(function (e) {
      // RecordX[RecordX.length]
      // RecordY[RecordY.length] 
      paint = false;
      StoreData.X.push(RecordX)
      StoreData.Y.push(RecordY)
      StoreData.D.push(RecordDrag);
      StoreData.C.push(RecordColor);
      StoreData.T.push(RecordThickness);
      console.log(RecordX, clickX, RecordY, clickY, '=====-=====')
      RecordX = [],
        RecordY = [],
        RecordDrag = [],
        RecordColor = [],
        RecordThickness = [],
        console.log(StoreData, 'clickDrag')
    });

    $('#letsPaint').mouseleave(function (e) {
      paint = false;
    });

    function redraw() {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

      // context.strokeStyle = paintColour;
      context.lineJoin = "round";
      // context.lineWidth = brushThickness;

      for (var i = 0; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) {
          context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
          context.moveTo(clickX[i] - 1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = clickThickness[i];
        context.stroke();
      }
      context.drawImage(
        outlineImage,
        0,
        0,
        context.canvas.width,
        context.canvas.height
      );
    }
  </script>

</body>

</html>
  `;
