export const Croper = ({ IMAGE }) => `<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <style>
        .crop-image,
        .overlay>img {
            width: 500px;
            height: 700px;
            display: block;
            object-fit: contain;
            object-position: center;
        }

        .center {
            display: flex;
            justify-content: center;
            align-items: center;
            /* min-height: 100vh;
            width: 100%;
            height: 100%;
            background: #EAEAEA; */
        }
    </style>

    <script>
        window.console = window.console || function (t) { };
    </script>



    <script>
        if (document.location.search.match(/type=embed/gi)) {
            window.parent.postMessage("resize", "*");
        }
    </script>


</head>

<body translate="no">
    <div class="center">

        <div class="crop-component">
            <img crossorigin="Anonymous"
                src={${IMAGE}}
                class="crop-image crop-blur" alt="" data-is-crop="true" draggable="false">
        </div>
    </div>
    <script src='https://cdn.jsdelivr.net/npm/vanillajs@1.0.1/dest/cjs/index.min.js'></script>
    <script
        src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>
    <script id="rendered-js">
        /*global document:false, window:false*/
        // используйте картинку из своего домена. иначе получите ошибку No 'Access-Control-Allow-Origin' header is present on the requested resource.
        !function (window) {
            function resizeableImage(image_target) {
                'user strict';

                var cropComponent,
                    container,
                    crop_img,
                    event_state = {},
                    ratio = 1.2,
                    CROPWIDTH = 600,
                    CROPHEIGHT = 600,
                    cropLeft = 0,
                    cropTop = 0,
                    cropWidth = 0,
                    cropHeight = 0,
                    resize_canvas = null;

                if (image_target.complete) {
                    init();
                } else {
                    image_target.onload = function () {
                        init();
                    };
                }



                function addHandlers() {

                    openCropCanvasImg()
                }

                function init() {
                    var wraper, left, top;
                    image_target.dataset.isCrop = 'true';
                    image_target.classList.add('crop-blur');
                    image_target.draggable = false;

                    crop_img = new Image();
                    crop_img.crossOrigin = image_target.crossOrigin;
                    crop_img.src = image_target.src;
                    crop_img.draggable = false;

                    resize_canvas = document.createElement('canvas');

                    cropComponent = document.createElement('div');
                    cropComponent.classList.add('crop-component');

                    container = document.createElement('div');
                    container.classList.add('overlay');

                    cropComponent.appendChild(container);
                    wraper = image_target.parentNode;
                    wraper.appendChild(cropComponent);
                    cropComponent.appendChild(crop_img);
                    cropComponent.appendChild(image_target);
                    container.appendChild(crop_img);

                    // left = image_target.offsetWidth / 2 - CROPWIDTH / 2;
                    // top = image_target.offsetHeight / 2 - CROPHEIGHT / 2;

                    // updateCropImage(left, top);
                    addHandlers();
                }

                function crop() {
                    cropWidth = crop_img.width * ratio;
                    cropHeight = crop_img.height * ratio;

                    resize_canvas.width = CROPWIDTH;
                    resize_canvas.height = CROPHEIGHT;

                    var ctx = resize_canvas.getContext('2d');
                    ctx.drawImage(crop_img,
                        0, 0,
                        crop_img.width + 100, crop_img.height);
                }

                function openCropCanvasImg() {
                    crop();

                    try {
                        var base64Img = resize_canvas.toDataURL('image/png', 1.0);
                        window.ReactNativeWebView.postMessage(JSON.stringify(base64Img));
                        alert(base64Img)
                    } catch (e) {
                        alert(e);
                    } 

                }
            }

            resizeableImage(document.querySelector('.crop-image'));
        }(window);
  //# sourceURL=pen.js
    </script>




</body>

</html>`;
