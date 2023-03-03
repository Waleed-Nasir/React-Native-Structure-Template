export const ColorFilling = ({ IMAGE }) => `<!DOCTYPE html>
<html>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<head>

  <style>
    /* @import url("https://codepen.io/MacEvelly/pen/iJGCw.css"); */

    .holder {
      width: 100%;
    }

    .held {
      position: relative;
      overflow: hidden;
    }

    .button {
      width: 150px;
      padding: 5px;
    }

    #ActivityDIV .swatchHolder {
        padding: 15px;
      /* position: absolute;
      bottom: 0px;
      margin: auto;
      left: 0px;
      right: 0px;
      list-style-type: none;
      text-align: center;
      display: inline-block;
      padding: 15px;
      width: 100%;
      border-radius: 20px 20px 0px 0px;
      color: black; */
    }

    #ActivityDIV .swatchHolder .colorHolder {
      width: 100%;
      line-height: 100%;
      content: 'Chosen Color';
      padding: 10px 0px;
      margin: 0px auto 15px auto;
      cursor: pointer;
      border-radius: 5px;
      -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    }

    #ActivityDIV .swatchHolder li:not(.colorHolder) {
      height: 25px;
      width: 25px;
      margin: 2px;
      display: inline-block;
      cursor: pointer;
      border-radius: 5px;
      -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    }

    #ActivityDIV svg {
      width: 100%;
      display: inline-block;
      min-height: 300px;
    }

    #ActivityDIV svg path {
      cursor: pointer;
       
    }

    .currentColorHolder {
      text-align: center;
      -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      height: 40px;
      max-width: 130px !important;
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
      margin-top:-20px
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
    }

    #btnRandom {
      background-color: #e0398c;
      -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
      margin: 5px;
      cursor: pointer;
      color: white
    }

    #btnClear {
      background-color: rgb(240, 240, 240);
      -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
      margin: 5px;
      cursor: pointer;
    }

    #btnSaver {
      background-color: rgb(60, 190, 183);
      -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
      margin: 5px;
      color: white;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <div class='holder'>
    <div class='held' id='ActivityDIV'></div>
    <div class='held buttons'>
      <a id="btnRandom" class="button ">Random Color</a>
      <a id="btnClear" class="button gray">Clear Color</a>
      <a id="btnSaver" onclick=" window.ReactNativeWebView.postMessage(JSON.stringify('done'));" class="button gray">Save Work</a>
      <!-- <a id="btnDownloadSVG" class="button gray">Download SVG</a>
      <a id="btnDownloadSVG2" class="button gray">Download SVG2</a> -->
    </div>
  </div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
  <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin.js?r=11'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js'></script>
  <script>
    (function ($) {
      console.clear();
      console.log("svgColor");

      var mainHolder, colorHolder;
      var btnRandom, btnClear, btnDownloadSVG, btnDownloadPNG;
      var svgObject, svgOutline, svgColor;
      var swatchUp, swatchDown;
      var fillSpeed = 0.15;
      var chosenColor = "#FFFFFF";
      var colors = [
        "#FFFFFF",
        "#8E53A1",
        "#6ABD46",
        "#71CCDC",
        "#F7ED45",
        "#F7DAAF",
        "#EC2527",
        "#F16824",
        "#CECCCC",
        "#5A499E",
        "#06753D",
        "#024259",
        "#FDD209",
        "#7D4829",
        "#931B1E",
        "#B44426",
        "#979797",
        "#C296C5",
        "#54B948",
        "#3C75BB",
        "#F7ED45",
        "#E89D5E",
        "#F26F68",
        "#F37123",
        "#676868",
        "#9060A8",
        "#169E49",
        "#3CBEB7",
        "#FFCD37",
        "#E5B07D",
        "#EF3C46",
        "#FDBE17",
        "#4E4D4E",
        "#6B449B",
        "#BACD3F",
        "#1890CA",
        "#FCD55A",
        "#D8C077",
        "#A62E32",
        "#F16A2D",
        "#343433",
        "#583E98",
        "#BA539F",
        "#9D2482",
        "#DD64A5",
        "#DB778D",
        "#EC4394",
        "#E0398C",
        "#68AF46",
        "#4455A4",
        "#FBEE34",
        "#AD732A",
        "#D91E36",
        "#F99B2A"
      ];
      var closeOffset;

      function swatchClick() {
        chosenColor = $(this).data("color");
        console.log(chosenColor);
        TweenMax.to(colorHolder, fillSpeed, { backgroundColor: chosenColor });
      }
      function swatchMove(e) {
        var moveTo = e.type == "mouseenter" ? swatchUp : swatchDown;
        TweenMax.to(".swatchHolder", 0.5, moveTo);
      }

      function colorMe() {
        TweenMax.to(this, fillSpeed, { fill: chosenColor });
      }
      function colorRollover(e) {
        var rollover = e.type == "mouseenter" ? { scale: 1.2 } : { scale: 1 };
        TweenMax.to($(this), 0.05, rollover);
      }

      function download() {
        var svgInfo = document.querySelector("svg").outerHTML;
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(svgInfo, "text/xml");
        var dl = document.createElement("a");
        document.body.appendChild(dl); // This line makes it work in Firefox.
        dl.setAttribute("href", "data:image/svg+xml;base64," + xmlDoc);
        dl.setAttribute("download", "test.svg");
        dl.click();
      }

      function svgRandom() {
        $(svgColor).each(function () {
          var randomNum = Math.floor(Math.random() * colors.length + 1);
          TweenMax.to(this, fillSpeed, { fill: colors[randomNum] });
        });
      }
      function svgClear() {
        $(svgColor).each(function () {
          TweenMax.to(this, fillSpeed, { fill: "#FFF" });
        });
      }
      function svgDownloadSVG() {
        var svgInfo = $(svgObject).clone();
        console.clear();
        console.log(svgInfo);
        $(this).attr({
          href: "data:image/svg+xml;base64," + svgInfo.toString(),
          download: "coloringBook.svg",
          target: "_blank"
        });
      }
      function svgDownloadPNG() {
        window.ReactNativeWebView.postMessage(JSON.stringify('done'));
      }

      $.fn.makeSwatches = function () {
        var swatchHolder = $("<ol/>", { class: "swatchHolder" }).appendTo(this);
        colorHolder = $("<p>", { class: "currentColorHolder", text: 'Selected Color' })
          .css("background-color", chosenColor)
          .appendTo(swatchHolder);
        $.each(colors, function () {
          var swatch = $("<li/>").appendTo(swatchHolder);
          $(swatch).css("background-color", this);
          $(swatch).data("color", this);
          $(swatch).on("click", swatchClick);
          $(swatch).on("mouseenter mouseleave", colorRollover);
        });

        var swatchPos = $(".colorHolder").position();
        var swatchHeight = $(".colorHolder").outerHeight(true) + swatchPos.top;
        closeOffset = swatchHeight - $(".swatchHolder").outerHeight();

        $(".swatchHolder").on("mouseenter mouseleave", swatchMove);
        $(".swatchHolder").css("bottom", closeOffset);
        swatchUp = { css: { bottom: 0 } };
        swatchDown = { css: { bottom: closeOffset } };
      };
      $.fn.makeSVGcolor = function (svgURL) {
        mainHolder = this;
        $(this).load(svgURL, function () {
          console.log(this, 'this=====-=-=-===-==-=')
          svgObject = $("svg", this);
          svgColor = $("g#Color", svgObject).children();
          svgOutline = $("g:nth-child(1)", svgObject).children();
          $(svgColor).on("click", colorMe);
          $(mainHolder).makeSwatches();
          $(".swatchHolder").addClass("gray");
        });
      };

      $.fn.btnRandom = function () {
        btnRandom = this;
        $(btnRandom).on("click", svgRandom);
      };
      $.fn.btnClear = function () {
        btnClear = this;
        $(btnClear).on("click", svgClear);
      };
      $.fn.btnDownload = function (type) {
        if (type == "PNG") {
          btnDownloadPNG = this;
          $(this).on("mouseenter", svgDownloadPNG);
        } else {
          btnDownloadSVG = this;
          $(this).on("mouseenter", svgDownloadSVG);
        }
      };

      $.fn.btnDownload2 = function () {
        btnClear = this;
        $(btnClear).on("click", download);
      };
    })(jQuery);

    $("#ActivityDIV").makeSVGcolor(
      // ${IMAGE}
      'https://assets.codepen.io/40041/crest.svg'
    );
    $("#btnRandom").btnRandom();
    $("#btnClear").btnClear();
    $("#btnDownloadSVG").btnDownload();
    $("#btnDownloadSVG2").btnDownload2();
    // ${IMAGE}
  </script>



</body>

</html>`;
