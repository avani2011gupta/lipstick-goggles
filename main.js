noseX=0;
noseY=0;

leftEyeX=0;
leftEyeY=0;

function preload()
{
    lipstick = loadImage('lipstick.png');
    goggles = loadImage('goggles.png');
}

function setup()
{
    canvas = createCanvas(600, 530);
    video = createCapture(VIDEO); 
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) 
{
    if(results.length > 0) 
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 25;
        noseY = results[0].pose.nose.y + 50;
    }

    if(results.length > 0) 
    {
        console.log(results);
        leftEyeX = results[0].pose.leftEye.x - 110;
        leftEyeY = results[0].pose.leftEye.y;
    }
}

function draw()
{
    image(video, 0, 0, 640, 530);
    image(lipstick, noseX, noseY, 60, 30);
    image(goggles, leftEyeX, leftEyeY, 150, 65)
}

function snapshot(){ 
    save('lipstick_filter.png'); 
} 

