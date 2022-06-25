video="";
STATUS="";
function preload() {
video=createVideo("video.mp4");
video.hide();
}

function setup() {
    canvas = createCanvas(350, 350)
    canvas.center();
}
function draw() {
    image(video, 0, 0, 350, 350);
}
function start() {
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status: Object detecting";
}
function modelLoaded() {
    console.log("Model Loaded!");
  STATUS=true; 
  video.loop();
  video.speed(1);
  video.volume(0); 
}