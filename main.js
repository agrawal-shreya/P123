noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function preload() {
    
}
function setup() {
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas= createCanvas(500,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
function draw() {
   // image(video,0,0,500,500);

   document.getElementById("square_size").innerHTML= "Width and height of a Square will be ="+difference+"px";
    background("blue");
    fill("pink");
    stroke("green");
    text("Font",noseX,noseY);
    textSize(difference);
}
function modelLoaded() {
    console.log("Model is Loaded");
}
function gotPose(result) {
    if (result.length>0) {
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        leftwristX=result[0].pose.leftWrist.x;
        rightwristX=result[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
    }
}
