function foo(){
    var imageLoader = document.getElementById('imageLoader');
    console.log('mukul ' + imageLoader);

    var text_title ="Overlay text";
    var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.crossOrigin="anonymous";

    window.addEventListener('load', DrawPlaceholder)

    function DrawPlaceholder() {
        img.onload = function() {
            DrawOverlay(img);
            DrawText();
            DynamicText(img)
        };
        img.src = 'https://unsplash.it/400/400/?random';
    
    }
    function DrawOverlay(img) {
        ctx.drawImage(img,0,0);
        ctx.fillStyle = 'rgba(30, 144, 255, 0.4)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    function DrawText() {
        ctx.fillStyle = "white";
        ctx.textBaseline = 'middle';
        ctx.font = "50px 'Montserrat'";
        ctx.fillText(text_title, 50, 50);
    }
    function DynamicText(img) {
        document.getElementById('name').addEventListener('keyup', function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            DrawOverlay(img);
            DrawText(); 
            text_title = this.value;
            ctx.fillText(text_title, 50, 50);
        });
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // DrawOverlay(img);
        // DrawText(); 
        // ctx.fillText('text_title', 50, 50);
    }
    function handleImage(e) {
        var reader = new FileReader();
        var img = "";
        var src = "";
        console.log('handleImage :: ' +e );
        reader.onload = function(event) {
            img = new Image();
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0);
            }
            console.log('result :: ' + event.target.result );
            img.src = event.target.result;
            src = event.target.result;
            canvas.classList.add("show");
            DrawOverlay(img);
            DrawText(); 
            DynamicText(img);   
        }

        reader.readAsDataURL(e.target.files[0]); 
    
    }
    function convertToImage() {
        // window.open(canvas.toDataURL('png'));

        // var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
        // window.location.href=image; // it will save locally

        var dataURL = canvas.toDataURL("image/jpeg", 1.0);

        downloadImage(dataURL, 'my-canvas.jpeg');
    }
    document.getElementById('download').onclick = function download() {
            convertToImage();
    }

    function downloadImage(data, filename = 'untitled.jpeg') {
        console.log('Data :: ' + data);
        var a = document.createElement('a');
        a.href = data;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
    }


}