var video = document.getElementById('video');
var visible = true;

function playVideo() {
    video.play();
    var block = document.getElementById('textAndVideo').style.display = 'none';
    video.controls = true;
}