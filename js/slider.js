
var images = [
    'Image/background.jpg',
    'Image/1.jpg',
    'Image/2.jpg',
    'Image/3.jpg'
];
var img_element = document.getElementById("slider_img");
var counter = 0;
img_element.src = images[counter];

function next() {
    if (counter + 1 == images.length) {
        counter = 0;
    }
    counter++;
    img_element.src = images[counter];
};

function prev() {
    if (counter - 1 == -1) {
        counter = images.length;
    }
    counter--;
    img_element.src = images[counter];
};
var timerId = setInterval(function() {
    next();
    document.getElementById('slider_img').style.transition = '500ms';
}, 4000);