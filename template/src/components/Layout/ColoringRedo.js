export const ColoringRedo = ({ IMAGE, width, height, isTablet }) => `
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
  <script src="https://www.jquery-az.com/javascript/alert/dist/sweetalert-dev.js"></script>
  <link rel="stylesheet" href="https://www.jquery-az.com/javascript/alert/dist/sweetalert.css">


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
    overflow: clip;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  #canvasHolder {
    width: 100%;
    float: left;
    clear: both;
    margin-bottom: 0px;
    height:${isTablet ? (width > 1000 ? '100VW' : width > 850 ? '90vw' : '100vw') : '100vw'};
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
  padding: 1vw;
  background: linear-gradient(to right, rgb(246, 71, 156,0.6),rgb(14, 217, 151,0.6),rgb(117, 0, 213,0.6)); 
  }
  #canvasHolder canvas {
    width: 100%;
    position: relative;
    /* // border: 10px solid #000; */
    cursor: crosshair;
    height:  '100vw';
    /* // image-rendering: -moz-crisp-edges; */
    /* // image-rendering: -webkit-crisp-edges; */
    image-rendering: pixelated;
    /* // image-rendering: crisp-edges; */
    /* // image-rendering: high-quality; */
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
    right: 20;
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
    width: 100%;
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

  #RANGE {
    width: 100%;
    padding: 5px 20px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: ${isTablet ? "row" : "column"};
    background: linear-gradient(90deg, rgba(145,37,117,1) 0%, rgba(93,86,209,1) 27%, rgba(27,169,173,1) 77%, rgba(0,212,255,1) 100%);
  }

  #IMAGE_DIV {
    width: 100%;
    height: 100%;
  }
  .Zoom-Controll-div{
    justify-content: flex-start;
    align-items: center;
    display: flex;
    flex-direction:column;
    width: 100%;
    min-height:15vw;
    box-shadow: ${isTablet
    ? "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15)"
    : ""
  }; 
    padding:${isTablet ? "10px" : "0px"};
  }

  

  .Zoom-Controll-action-btn {
    justify-content:space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 100%; 
  }
  .btn {
    margin: 0px 10px 0px 10px;
    float: left;
    font-size: 30px;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-content: center;
    display: flex;
    text-align: center;
    align-items: center;
    text-shadow:  rgb(246, 71, 156,0.6) 0px -2px 14px, rgb(14, 217, 151,0.6) 4px 8px 14px, rgb(117, 0, 213,0.6) -6px 2px 14px;
    color: #fff;
  }
  .btn1 {
    margin: 0px 10px 0px 10px;
    float: left;
    font-size: 30px;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-content: center;
    display: flex;
    text-align: center;
    align-items: center;
  }
  .Header-Controll-div{
    justify-content:space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-top: ${isTablet ? "0px" : "20px"};
  }
  .Header-Controll-SAVE{
    justify-content: center;
    display: flex;
    align-items: center;
  }
  #colourPicker2 {
    margin-left: 5px;
    margin-top: -30px;
  }
  .SpanText {
    font-size: large;
    font-weight: bold;
    text-shadow: rgba(246, 71, 156, 0.6) 7px -7px 14px, rgba(14, 217, 151, 0.6) 7px 7px 14px, rgba(117, 0, 213, 0.6) -10px 7px 14px, rgba(117, 0, 213, 0.6) -10px -3px 14px,rgb(0, 0, 0) 2px 1px 6px;
    color: white;
    width: 100%;
    margin: 10px 0px;
  }
  .SpanText2{
    font-size: large;
    font-weight: bold;
    text-shadow: rgba(246, 71, 156, 0.6) 7px -7px 14px, rgba(14, 217, 151, 0.6) 7px 7px 14px, rgba(117, 0, 213, 0.6) -10px 7px 14px, rgba(117, 0, 213, 0.6) -10px -3px 14px,rgb(0, 0, 0) 1px 1px 4px;
    color: white;
    width: 100%;
    text-align: center;
    margin: 25px 0px;

  }
  #thickness{
    box-shadow: rgba(246, 71, 156, 0.6) 7px -7px 14px, rgba(14, 217, 151, 0.6) 7px 7px 14px, rgba(117, 0, 213, 0.6) -10px 7px 14px, rgba(117, 0, 213, 0.6) -10px -3px 14px;
    margin: 10px 0px;
 }
 .circle { 
  border-radius:50%;
  position:absolute;
  // width:50%;
  // height:50%;
  background-color: #F6479C;
  top:25%;
  left:25%
}
#container {
  width:30px;
  height:30px;
  position:relative;
  border-radius:100px;
  over-flow:hidden
}
.ERS{
  color: #F6479C;
}
.slider {
  position: absolute;
  width: 100vw;
  height: 20%;
  bottom: 0;
  overflow: hidden;
  background-color: #fff;
  color: #FFF;
  transition: all 0.3s;
  left:0
}

.slider.close {
  bottom: -100%;
  height: 0;
}

.row{
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
  // height:100%;
  padding:10px
  }
  .TOOLS{
    flex:1;
      width:100%;
      height:100%;
      
      margin:10px
  }
  .ICON_TOOLS{
    width:100%;
      height:100%;
      object-fit: contain;
  }
  .selecetedPentype{
    width:50px;
    height:40px;
    object-fit: contain;
  }




  @import url(https://fonts.googleapis.com/css?family=Raleway);
  @import url(https://fonts.googleapis.com/css?family=Inconsolata);
  * {
    box-sizing: border-box; 
  } 
  #colorlist {
    display: flex;
    flex-flow: row;
    overflow-x: scroll;
    padding:10px;
    width:${isTablet ? width / 2 + 'px' : '100%'};
  }
  #colorlist div { 
    padding: 0.3rem;
    text-align: center;
    min-width: 3pc;
    height:3pc
  }
  #colorlist div span {
    display: block;
    font-family: Inconsolata;
    font-size: 1.2rem;
  }
  .CMS{
    font-size:10px;
    font-weight: bold
  }

</style>

<body>
  <div class="Header-Controll-div">
    <div > <i class="fa  fa-arrow-circle-left btn1" onclick=" window.ReactNativeWebView.postMessage(JSON.stringify({ isGoBack: true }));" style="color: #F6479C;font-size:30px" aria-hidden="true"></i></div>
    <div class="Header-Controll-SAVE">
      <div id="undo"><i class="fa fa-undo btn" aria-hidden="true" style="font-size:20px"></i></div>
      <div id="clear"><i class="fa fa-trash-o" aria-hidden="true" style="color: red;font-size:20px" ></i></div>
      <div id="do"><i class="fa  fa-repeat btn" aria-hidden="true" style="font-size:20px"></i></div>
    </div>
    <div id="save"><a id="download"><i class="fa fa-cloud-upload btn1" aria-hidden="true" style="color: #F6479C;font-size:30px"></i></a></div>
  
  </div>
  <span id="COUNT">
  </span>
  <div id="canvasHolder">
    <div id="IMAGE_DIV">
      <canvas id="letsPaint" width="1000px" height="1000px"></canvas>
    </div>
  </div>
  <div id="RANGE">



  
  


${isTablet ? '<div class="Zoom-Controll-action-btn" />' : ""}





<div class="Zoom-Controll-div">
<span class="SpanText">Paint Tools</span>


<div class="Zoom-Controll-action-btn">
  <div id="eraser"><i class="fa fa-eraser btn1 ERS" aria-hidden="true" ></i></div>


  <div>
  <div class='circle'></div>
  </div>
  
 
<div>
<img class='btn1 trigger selecetedPentype' id='setPenImage' src="https://app.bytrixtech.com/pob/public/tool_images/05.jpg" alt="Screenshot-2022-11-21-at-8-42-01-PM" border="0">
<!--<i class="fa fa-tint brushIcon btn1" aria-hidden="true"><input type="color" name="favcolor" value="#F6479C"
id="colourPicker"></i>-->
</div>



</div>

<input id="thickness" type="range" value="50" min="1" max="100">
<div class="Zoom-Controll-action-btn">
<div id="colorlist"></div>
</div>
</div>


<div class="Zoom-Controll-div">
<div class="row">
<div class='TOOLS'><img class='ICON_TOOLS' id='Marker_Big' src="https://app.bytrixtech.com/pob/public/tool_images/02.jpg" alt="Screenshot-2022-11-21-at-8-42-13-PM" border="0"></div>

<div class='TOOLS'><img class='ICON_TOOLS' id='Marker_Small' src="https://app.bytrixtech.com/pob/public/tool_images/03.jpg" alt="Screenshot-2022-11-21-at-8-42-22-PM" border="0"></div>

<!--<div class='TOOLS'><img class='ICON_TOOLS' id='Boll_Pen' src="https://app.bytrixtech.com/pob/public/tool_images/05.jpg" alt="Screenshot-2022-11-21-at-8-42-31-PM" border="0"></div>-->


<div class='TOOLS'><img class='ICON_TOOLS' id='Pen_Bursh'  src="https://app.bytrixtech.com/pob/public/tool_images/05.jpg" alt="Screenshot-2022-11-21-at-8-42-45-PM" border="0"></div>


<div class='TOOLS'>
<img class='ICON_TOOLS' id='Pencil' src="https://app.bytrixtech.com/pob/public/tool_images/04.jpg" alt="Screenshot-2022-11-21-at-8-43-07-PM" border="0"></div>
<div class='TOOLS'>
<img class='ICON_TOOLS' id='Spray' src="https://app.bytrixtech.com/pob/public/tool_images/01.jpg" alt="Screenshot-2022-11-21-at-8-42-01-PM" border="0"></div>
</div>
</div>




   
  </div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
  <script src="https://www.marvinj.org/releases/marvinj-1.0.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/wheany/js-png-encoder@master/generatepng.js"></script>

  <script>


  $('.trigger').click(function() {
    // $('.slider').toggleClass('close');
    isPenType = isPenTypeOld
    curColor = $(".circle").css("backgroundColor");
    $(".circle").css("backgroundColor", curColor);
    $(".fa-eraser").css("text-shadow", 'none');
    $(".fa-eraser").css("color", '#F6479C');
    $(".brushIcon").css("text-shadow", 'none');
    $("#container").css("box-shadow", ButtonColor);
  });



    context = document.getElementById("letsPaint").getContext("2d");
    let canvasEl = document.getElementById("letsPaint")
    let HoldDiff = document.getElementById("letsPaint")
    HoldDiff.style.boxShadow = '0px 0px 10px black'
    HoldDiff.style.background = '#fff'
    var curColor = "#F6479C";
    var clickColor = new Array();
    var ButtonColor = 'rgb(246, 71, 156,0.6) 0px -2px 14px, rgb(14, 217, 151,0.6) 4px 8px 14px, rgb(117, 0, 213,0.6) -6px 2px 14px'
    var brushThickness = 50;
    var clickThickness = new Array();
    var imageUrl = ${IMAGE}
    var outlineImage = new Image();
    var isPenType = false;
    var isPenTypeOld = 'eraser';
    var isSpray = isPenType;


    $('.ICON_TOOLS').click(function(e) {
      isPenType = e.target.id;
      isPenTypeOld= e.target.id;
       curColor = $(".circle").css("backgroundColor");
      $('#setPenImage').attr('src',e.target.src );
      // $('.slider').toggleClass('close');
      
      $(".circle").css("backgroundColor", curColor);
      $(".fa-eraser").css("text-shadow", 'none');
      $(".fa-eraser").css("color", '#F6479C');
      $(".brushIcon").css("text-shadow", 'none');
       $("#container").css("box-shadow", ButtonColor);


       

    });
  




    $(".brushIcon").css("color", curColor);
    $(".brushIcon").css("text-shadow", ButtonColor);
    $("#colourPicker").change(function () {
      curColor = $(this).val();
      isSpray = false
      $(".brushIcon").css("color", curColor);
      $(".fa-eraser").css("text-shadow", 'none');
      $(".fa-eraser").css("color", '#F6479C');
      $(".brushIcon").css("text-shadow", ButtonColor);
      $("#container").css("box-shadow", none);
    });

////
    function getRandomColor() {
  
      return curColor
  }
  
  // var maxDiam = 10;
  // var circleNum = 1;
  // var container = $("#container")
  // var containerWidth = container.width();
  // var containerHeight = container.height();
  
  // $(document).ready(function() {
  //     for (var i = 0; i < circleNum; i++) {
  //         var newCircle = $("<div />")
  //         var d = Math.floor(Math.random() * maxDiam);
  //         newCircle.addClass("circle");
  
  //         newCircle.css({
  //             width: d,
  //             height: d,
  //             left: Math.random() * Math.max(containerWidth - d, 0),
  //             top: Math.random() * Math.max(containerHeight - d, 0),
  //             backgroundColor: getRandomColor()
  //         });
  //         container.append(newCircle);
  //     }
  // });


// 

// $("#colourPicker2").click(function () {
//   curColor = $(".circle").css("backgroundColor");
//   isSpray = true;
//   $(".circle").css("backgroundColor", curColor);
//   $(".fa-eraser").css("text-shadow", 'none');
//   $(".fa-eraser").css("color", '#F6479C');
//   $(".brushIcon").css("text-shadow", 'none');
//   // $("#container").css("box-shadow", ButtonColor);
// })

$("#colourPicker2").change(function () {
  curColor = $(this).val();
  isSpray = true
  isPenType = isPenTypeOld
  $(".circle").css("backgroundColor", curColor);
  $(".fa-eraser").css("text-shadow", 'none');
  $(".fa-eraser").css("color", '#F6479C');
  $(".brushIcon").css("text-shadow", 'none');
  $("#container").css("box-shadow", ButtonColor);

});
$("#colourPicker").click(function () {
  curColor = $(".brushIcon").css("color");
  
  $(".brushIcon").css("color", curColor);
  $(".fa-eraser").css("text-shadow", 'none');
  $(".fa-eraser").css("color", '#F6479C');
  $(".brushIcon").css("text-shadow", ButtonColor);
  $("#container").css("box-shadow", 'none');
  
});

   


    $("#eraser").click(function () {
      isSpray = false
      isPenType ='eraser'
      curColor = "#ffffff";
      $(".fa-eraser").css("text-shadow", ButtonColor);
      $(".fa-eraser").css("color", 'white');
      $(".brushIcon").css("text-shadow", 'none');
      $("#container").css("box-shadow", 'none');
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
    var isSprayArray = new Array();
    // outlineImage.src = imageUrl;
    // redraw();

    try {

      var image = new MarvinImage();
      image.crossOrigin = "Anonymous";
      image.load(imageUrl, imageLoaded);
      function imageLoaded() {
        var canvas = document.createElement("canvas");
        canvas.width = image.getWidth()
        canvas.height = image.getHeight()
        var ctx = canvas.getContext("2d");
        ctx.imageSmoothingQuality = "high";
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 3;
        ctx.shadowColor = "black";
        image.setColorToAlpha(0xFFFFFFF, 0);
        // image.setColorToAlpha(0, 0);
        imageOut = image.clone()
        Marvin.scale(imageOut,image, image.getWidth(), image.getHeight());
        Marvin.scale(image, imageOut, 1000,1000,1000000);
        imageOut.draw(canvas)
   


        var imgd = ctx.getImageData(0, 0, 1000, 1000)
        var pix = imgd.data
        var newColor = { r: 0, g: 0, b: 0, a: 0 };
        for (var i = 0, n = pix.length; i < n; i += 4) {
          var r = pix[i],
            g = pix[i + 1],
            b = pix[i + 2];

          if (r == 255 && g == 255 && b == 255) {
            // Change the white to the new color.
            pix[i] = newColor.r;
            pix[i + 1] = newColor.g;
            pix[i + 2] = newColor.b;
            pix[i + 3] = newColor.a;
          }
        }
        const uint8 = pix;
        const as_str = [...uint8].map(byte => String.fromCharCode(byte)).join("");
        const png_str = generatePng(1000, 1000, as_str);
        const png_arr = new Uint8Array(png_str.length);
        for (let i = 0; i < png_str.length; i++) {
          png_arr[i] = png_str.charCodeAt(i);
        }
        const blob = new Blob([png_arr], { type: "image/png" });
        const img = new Image();
        img.src = URL.createObjectURL(blob);

        // alert(pix, 'image', blob, png_arr)
        outlineImage.src = URL.createObjectURL(blob)
        console.log(outlineImage)
        setTimeout(() => {
          context.clearRect(0, 0, context.canvas.width, context.canvas.height);
          context.translate(0.5, 0.5);
          context.imageSmoothingQuality = "high";
                       
          context.drawImage(
            outlineImage,
            0,
            0,
            context.canvas.width,
            context.canvas.height,
            0,0,1000,1000
          );
          setupListeners(canvasEl)
        }, 300)
        
      }
    } catch (e) {
      alert(e)
    }




    function setupListeners(canvasEl) {
              
      //   canvasEl.addEventListener('mousedown', (e) => handleMouseDown(e));
      //   canvasEl.addEventListener('mouseup', () => handleMouseUp());
      // canvasEl.addEventListener('mousemove', (e) => handleMouseMove(e));
      // canvasEl.addEventListener('mousewheel', (e) => alert(e));
      //   // For mobile
        canvasEl.addEventListener('touchstart', (e) => handleMouseDown(e));
        canvasEl.addEventListener('touchend', (e) => handleMouseUp(e));
        canvasEl.addEventListener('touchmove', (e) => handleMouseMove(e,canvasEl));
  }
  var xDown = null;                                                        
  var yDown = null;

  function handleMouseDown(event) {
    isMousedown= true
  xDown = event.touches[0].screenX;                                      
  yDown = event.touches[0].screenY;
  if( event.touches?.length > 1){
    paint = false
  }
  }
  var lastY;
  let _zoom = 1;
  let isMousedown;
  let startPanX = 0;
  let startPanY = 0;
  let panX = 0;
  let panY = 0;
  function handleMouseMove(event,c) {
      if (!isMousedown) {
          return;
      }
      let HoldDiff = document.getElementById("letsPaint")
     if(event.touches.length === 2){
      if( _zoom >1 && event.scale <= 1 ){
      let val =  event.scale * 5 
        if((event.scale * 10 )-_zoom  < 1 && _zoom >1){
          isZoom = false
               _zoom = 1;
              // HoldDiff.style.scale = 1;
              HoldDiff.style.marginTop = '0px'
              HoldDiff.style.marginLeft = '0px'
              HoldDiff.style.width = "100%"
              HoldDiff.style.height = "100%"
        }else if(val > 1 && val < 3){
          _zoom = 1
          isZoom = false
          // HoldDiff.style.scale =  val
          HoldDiff.style.marginTop = '0px'//(yDown/4)+val +'px'
              HoldDiff.style.marginLeft = '0px'//(xDown/4)+val+'px'
          HoldDiff.style.width = "100%"//(val* 500)+"px"
          HoldDiff.style.height = "100%"//(val* 500)+"px"
        }
      } 
    else
    if (_zoom >= 1 && _zoom < 2) {
        _zoom = event.scale;
        if (Number.isInteger(Math.round(_zoom))) {
            isMousedown = true;
            if(_zoom > 1){
              isZoom = true
              // HoldDiff.style.scale = (_zoom);
              HoldDiff.style.marginTop =   (Number(yDown) > 150?-(yDown*1.5):(yDown/5))+'px' //(yDown > ${width / 2}? -(yDown)+(_zoom*100):-(yDown/4)+(_zoom*10))+'px'
              HoldDiff.style.marginLeft =  Number(xDown) < 90? (xDown):-(xDown*1.5)+'px' //(xDown > ${width / 2} ?-(xDown+180):(-xDown+170)-(_zoom*30))+'px'
              HoldDiff.style.width = "1000px"  // "1000px"// (_zoom* 500)+"px"
              HoldDiff.style.height = "1000px" // "1000px"//(_zoom* 500)+"px"
            }
        }
    }else
    if(_zoom < 1){
      isZoom = false
      _zoom = 1
    }
  }
  }





    $("#undo").click(function () {
      if(doCount >= 0 && doCount <= StoreData.X.length){
      clickX = [...StoreData.X].splice(0, StoreData.X.length - doCount).flat(1)
      clickY = [...StoreData.Y].splice(0, StoreData.Y.length - doCount).flat(1)
      clickDrag = [...StoreData.D].splice(0, StoreData.D.length - doCount).flat(1)
      clickColor = [...StoreData.C].splice(0, StoreData.C.length - doCount).flat(1)
      clickThickness = [...StoreData.T].splice(0, StoreData.T.length - doCount).flat(1)
      doCount++
      redraw();
      // document.getElementById("COUNT").innerText =  doCount+":"+StoreData.X.length
    }
    });

    $("#do").click(function () {
      if(doCount > 0){
        clickX = [...StoreData.X].splice(0, StoreData.X.length - (doCount)).flat(1)
        clickY = [...StoreData.Y].splice(0, StoreData.Y.length - (doCount)).flat(1)
        clickDrag = [...StoreData.D].splice(0, StoreData.D.length - (doCount)).flat(1)
        clickColor = [...StoreData.C].splice(0, StoreData.C.length - (doCount)).flat(1)
        clickThickness = [...StoreData.T].splice(0, StoreData.T.length - (doCount)).flat(1)
        doCount--
        redraw();
        // document.getElementById("COUNT").innerText =     doCount+":"+StoreData.X.length
      }
    });


    // $("#imageSelector img").click(function () {
    //   imageUrl = $(this).attr("src");
    //   outlineImage.src = imageUrl;
    //   redraw();
    // });

    // setTimeout(()=>{
    //   context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //       context.drawImage(
    //         outlineImage,
    //         0,
    //         0,
    //         context.canvas.width,
    //         context.canvas.height
    //       );
    // },1000)


    function JSalert(){
      swal({   title: "Are you sure you want to delete your drawing?",   
        type: "warning",   
        showCancelButton: true,   
        confirmButtonColor: "#F6479C",   
        confirmButtonText: "Yes,i am sure!",   
        cancelButtonText: "I am not sure!",   
        closeOnConfirm: false,   
        closeOnCancel: true }, 
        function(isConfirm){   
            if (isConfirm) 
        {   
            swal("Drawing Deleted",'',"success");   
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
              context.imageSmoothingQuality = "high";
              context.drawImage(
                outlineImage,
                0,
                0,
                context.canvas.width,
                context.canvas.height
              );
              isSprayArray = new Array();
             isSpray = isPenType
            } 
            else {     
               
                } });
    }




    $("#clear").click(function () {
      JSalert()
    });

    $("#download").click(function () {
      const canvas = document.getElementById('letsPaint').toDataURL();

      setTimeout(() => {
        window.ReactNativeWebView.postMessage(JSON.stringify({ Base64: canvas }));
      }, 500)

    });
var isZoom = false;


    function addClick(x, y, dragging) {

      let wW = window.innerWidth / (isZoom?${isTablet ? width / 2 : width}:1000)
      let wH = window.innerHeight / (isZoom? ${isTablet ? height / 2 - 40 : height - 60
  }:${isTablet ? (width > 750 ? width * 1.6 + 80 : width * 2 - 60) : width * 5 + 80
  })
      // outlineImage.src = imageUrl;
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
      isSprayArray.push(isPenType)
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

      // paint = true;
      // addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
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
        if (isSprayArray[i] === 'Spray') {
          // generateSprayPoints({ clientX: clickX[i], clientY: clickY[i] })
          // context.lineTo(clickX[i],  clickY[i]);			
          // context.lineTo(clickX[i] + Math.random() * 20 - 10,  clickY[i] + Math.random() * 20 - 10);				

          context.lineWidth =  clickThickness[i]/3;
		
          context.fillStyle =  clickColor[i];
          context.rect(clickX[i],clickY[i], 1, 1);		
          let paticals = {
            0:{ c:'red',x:clickThickness[i]/6,y:clickThickness[i]/0,w:clickThickness[i]/10},
            1:{ c:'pink',x:clickThickness[i]/5,y:clickThickness[i]/5,w:clickThickness[i]/100},
            2:{ c:'black',x:clickThickness[i]/2,y:clickThickness[i]/-5,w:clickThickness[i]/90},
            3:{ c:'yellow',x:clickThickness[i]/8,y:clickThickness[i]/-10,w:clickThickness[i]/80},
            4:{ c:'blue',x:clickThickness[i]/5,y:clickThickness[i]/5,w:clickThickness[i]/10},
            5:{ c:'green',x:clickThickness[i]/8,y:clickThickness[i]/-5,w:clickThickness[i]/99},
            
            6:{ c:'orange',x:clickThickness[i]/-5,y:clickThickness[i]/2,w:clickThickness[i]/60},
            7:{ c:'purple',x:clickThickness[i]/2,y:clickThickness[i]/-2,w:clickThickness[i]/10},
            8:{ c:'red',x:clickThickness[i]/6,y:clickThickness[i]/-8,w:clickThickness[i]/30},
            9:{ c:'red',x:clickThickness[i]/6,y:clickThickness[i]/8,w:clickThickness[i]/60},
            10:{ c:'red',x:clickThickness[i]/6,y:clickThickness[i]/6,w:clickThickness[i]/20}
          }
          for (var t = 6; t--;) { 
            context.lineJoin = "round";
            context.rect(clickX[i] + paticals[t].x * 2 , 
                        clickY[i] + paticals[t].y * 2 ,paticals[t].w, paticals[t].w);
            context.fill();
          }
          context.strokeStyle = clickColor[i];
        } else if(isSprayArray[i] === 'Marker_Big') {


          context.lineTo(clickX[i], clickY[i]);
          context.stroke();
          
          context.lineTo(clickX[i] - 2, clickY[i] - 2);
          context.stroke();
          
          // context.lineTo(clickX[i] - 4, clickY[i] - 4);
          // context.stroke();
          
          // context.lineTo(clickX[i] + 4, clickY[i] + 4);
          // context.stroke();
          
          context.lineTo(clickX[i] +  6, clickY[i] +  6);
          context.stroke();


          context.strokeStyle = clickColor[i];
          context.lineWidth = clickThickness[i]/3;
          context.stroke();
        } else if(isSprayArray[i] === 'Marker_Small') {


          context.lineTo(clickX[i], clickY[i]);
          context.stroke();
          
          context.lineTo(clickX[i] - 2, clickY[i] - 2);
          context.closePath();
          
          context.lineTo(clickX[i] +  2, clickY[i] +  2);
          context.closePath();


          context.strokeStyle = clickColor[i];
          context.lineWidth = clickThickness[i]/4;
          context.closePath();
        } 
        else if(isSprayArray[i] === 'Pen') {
           
            context.lineTo(clickX[i]+2, clickY[i]+2);
            context.stroke();
          context.strokeStyle = clickColor[i];
          context.lineWidth = clickThickness[i]/3;
        } 
         else if(isSprayArray[i] === 'Pencil') {
           
          context.lineTo(clickX[i]+2, clickY[i]+2);
          context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = clickThickness[i]/10;
      } 
        else {
          context.lineTo(clickX[i], clickY[i]);
          context.closePath();
          context.lineWidth = clickThickness[i];
          context.strokeStyle = clickColor[i];
        }

        context.stroke();
      }
      context.imageSmoothingQuality = "high";
      context.drawImage(
        outlineImage,
        0,
        0,
        context.canvas.width,
        context.canvas.height
      );
    }


    function zoom(zm, RL = false, TD = false) {
      let HoldDiff = document.getElementById("letsPaint")
      // let img = document.getElementById("letsPaint")
      wid = HoldDiff.width
      ht = HoldDiff.height
      let VTOP = Number(document.getElementById("letsPaint").style.marginTop.replace('px', ''))
      let VLEFT = Number(document.getElementById("letsPaint").style.marginLeft.replace('px', ''))
      if (zm === 1) {
        HoldDiff.style.width = "100%";
        HoldDiff.style.height = "100%";
        HoldDiff.style.marginTop = "0px";
        HoldDiff.style.marginLeft = "0px";
        isZoom = false
      }
      if (zm === 2) {
        isZoom = true
        let val___ =   "${isTablet ? 2000 : 1000}px"
        HoldDiff.style.width = val___
        HoldDiff.style.height =val___
          HoldDiff.style.boxShadow = '0px 0px 10px black'
        if (TD) {
          if (VTOP >= -(${isTablet ? "wid * 1.6" : "ht / 1.2"
  }) && TD <= 0 || TD >= 0 && VTOP <= (ht / 4)) {
            HoldDiff.style.marginTop = VTOP + (TD) + "px";
          }
          return false
        }
        if (RL) {
          if (VLEFT >= -(${isTablet ? "wid * 1.6" : "wid / 1.2"
  }) && RL <= 0 || RL >= 0 && VLEFT <= (wid / 4)) {
            HoldDiff.style.marginLeft = VLEFT + (RL) + "px";
          }
          return false
        }
      }


    }


    const generateSprayPoints = (event) => {
      const amountOfPoints = context.lineWidth * 10

      for (let i = 0; i < amountOfPoints; i++) {
        const offset = getRandomOffset(context.lineWidth * 1.3)
        const x = event.clientX + offset.x
        const y = event.clientY + offset.y

        context.fillStyle = context.strokeStyle
        context.fillRect(x, y, 1, 1)
      }

      function getRandomOffset(radius, value) {
        const randomAngle = Math.random() * ((radius / 2) * Math.PI);
        const randomRadius = Math.random() * radius;

        return {
          x: Math.cos(randomAngle) * randomRadius,
          y: Math.sin(randomRadius) * randomAngle
        }
      }
    }



    var cssColors = {  
      "aliceblue": "#f0f8ff",
      "antiquewhite": "#faebd7",
      "aqua": "#00ffff",
      "aquamarine": "#7fffd4",
      "azure": "#f0ffff",
      "beige": "#f5f5dc",
      "bisque": "#ffe4c4",
      "black": "#000000",
      "blanchedalmond": "#ffebcd",
      "blue": "#0000ff",
      "blueviolet": "#8a2be2",
      "brown": "#a52a2a",
      "burlywood": "#deb887",
      "cadetblue": "#5f9ea0",
      "chartreuse": "#7fff00",
      "chocolate": "#d2691e",
      "coral": "#ff7f50",
      "cornflowerblue": "#6495ed",
      "cornsilk": "#fff8dc",
      "crimson": "#dc143c",
      "cyan": "#00ffff",
      "darkblue": "#00008b",
      "darkcyan": "#008b8b",
      "darkgoldenrod": "#b8860b",
      "darkgray": "#a9a9a9",
      "darkgreen": "#006400",
      "darkgrey": "#a9a9a9",
      "darkkhaki": "#bdb76b",
      "darkmagenta": "#8b008b",
      "darkolivegreen": "#556b2f",
      "darkorange": "#ff8c00",
      "darkorchid": "#9932cc",
      "darkred": "#8b0000",
      "darksalmon": "#e9967a",
      "darkseagreen": "#8fbc8f",
      "darkslateblue": "#483d8b",
      "darkslategray": "#2f4f4f",
      "darkslategrey": "#2f4f4f",
      "darkturquoise": "#00ced1",
      "darkviolet": "#9400d3",
      "deeppink": "#ff1493",
      "deepskyblue": "#00bfff",
      "dimgray": "#696969",
      "dimgrey": "#696969",
      "dodgerblue": "#1e90ff",
      "firebrick": "#b22222",
      "floralwhite": "#fffaf0",
      "forestgreen": "#228b22",
      "fuchsia": "#ff00ff",
      "gainsboro": "#dcdcdc",
      "ghostwhite": "#f8f8ff",
      "gold": "#ffd700",
      "goldenrod": "#daa520",
      "gray": "#808080",
      "green": "#008000",
      "greenyellow": "#adff2f",
      "grey": "#808080",
      "honeydew": "#f0fff0",
      "hotpink": "#ff69b4",
      "indianred": "#cd5c5c",
      "indigo": "#4b0082",
      "ivory": "#fffff0",
      "khaki": "#f0e68c",
      "lavender": "#e6e6fa",
      "lavenderblush": "#fff0f5",
      "lawngreen": "#7cfc00",
      "lemonchiffon": "#fffacd",
      "lightblue": "#add8e6",
      "lightcoral": "#f08080",
      "lightcyan": "#e0ffff",
      "lightgoldenrodyellow": "#fafad2",
      "lightgray": "#d3d3d3",
      "lightgreen": "#90ee90",
      "lightgrey": "#d3d3d3",
      "lightpink": "#ffb6c1",
      "lightsalmon": "#ffa07a",
      "lightseagreen": "#20b2aa",
      "lightskyblue": "#87cefa",
      "lightslategray": "#778899",
      "lightsteelblue": "#b0c4de",
      "lightyellow": "#ffffe0",
      "lime": "#00ff00",
      "limegreen": "#32cd32",
      "linen": "#faf0e6",
      "magenta": "#ff00ff",
      "maroon": "#800000",
      "mediumaquamarine": "#66cdaa",
      "mediumblue": "#0000cd",
      "mediumorchid": "#ba55d3",
      "mediumpurple": "#9370db",
      "mediumseagreen": "#3cb371",
      "mediumslateblue": "#7b68ee",
      "mediumspringgreen": "#00fa9a",
      "mediumturquoise": "#48d1cc",
      "mediumvioletred": "#c71585",
      "midnightblue": "#191970",
      "mintcream": "#f5fffa",
      "mistyrose": "#ffe4e1",
      "moccasin": "#ffe4b5",
      "navajowhite": "#ffdead",
      "navy": "#000080",
      "oldlace": "#fdf5e6",
      "olive": "#808000",
      "olivedrab": "#6b8e23",
      "orange": "#ffa500",
      "orangered": "#ff4500",
      "orchid": "#da70d6",
      "palegoldenrod": "#eee8aa",
      "palegreen": "#98fb98",
      "paleturquoise": "#afeeee",
      "palevioletred": "#db7093",
      "papayawhip": "#ffefd5",
      "peachpuff": "#ffdab9",
      "peru": "#cd853f",
      "pink": "#ffc0cb",
      "plum": "#dda0dd",
      "powderblue": "#b0e0e6",
      "purple": "#800080",
      "rebeccapurple": "#663399",
      "red": "#ff0000",
      "rosybrown": "#bc8f8f",
      "royalblue": "#4169e1",
      "saddlebrown": "#8b4513",
      "salmon": "#fa8072",
      "sandybrown": "#f4a460",
      "seagreen": "#2e8b57",
      "seashell": "#fff5ee",
      "sienna": "#a0522d",
      "silver": "#c0c0c0",
      "skyblue": "#87ceeb",
      "slateblue": "#6a5acd",
      "slategray": "#708090",
      "slategrey": "#708090",
      "snow": "#fffafa",
      "springgreen": "#00ff7f",
      "steelblue": "#4682b4",
      "tan": "#d2b48c",
      "teal": "#008080",
      "thistle": "#d8bfd8",
      "tomato": "#ff6347",
      "transparent": "#00000000",
      "turquoise": "#40e0d0",
      "violet": "#ee82ee",
      "wheat": "#f5deb3",
      "white": "#ffffff",
      "whitesmoke": "#f5f5f5",
      "yellow": "#ffff00",
      "yellowgreen": "#9acd32"
    }
    
    function convertAndContrast(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (result !== null) {
        var r = parseInt(result[1], 16),
        g = parseInt(result[2], 16),
        b = parseInt(result[3], 16);
        
        luminosity = 
          0.2126 * Math.pow((r/255),gamma) + 
          0.7152 * Math.pow((g/255),gamma) + 
          0.0722 * Math.pow((b/255), gamma);
        return luminosity;
      }
    }
    
    var colorlist = document.getElementById("colorlist");
    
    for (var key in cssColors) {
      if (cssColors.hasOwnProperty(key)) {
       var colorName = key,
       colorHex = cssColors[key],
       gamma = 2.2,
       contrastRatio = "",
       luminosity = convertAndContrast(colorHex);
       if (luminosity < 0.3) { contrastRatio = ";color:#fff"; }
       colorlist.insertAdjacentHTML("beforeend", "<div class='CMS' style=background-color:"+colorName + contrastRatio + "></div>");
      }
    }
    $('.CMS').click(function(e) {
     $('.CMS').css("box-shadow", 'none');
      curColor = $(this).css('background-color');
      // curColor = $(".circle").css("backgroundColor");
      $(".circle").css("backgroundColor", curColor);
      $(".fa-eraser").css("text-shadow", 'none');
      $(".fa-eraser").css("color", '#F6479C');
      $(".brushIcon").css("text-shadow", 'none');
      $(this).css("box-shadow", "rgb(246, 71, 156,0.6) 0px 55px 14px, rgb(14, 217, 151,0.6) 0px 53px 14px, rgb(117, 0, 213,0.6) 0px 48px 14px")
    });
    
  </script>

</body>

</html>
  `;
