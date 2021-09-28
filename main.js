var next_sketch = Math.random() * 5;
var timer = 0;

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup() {
    canvas=createCanvas(400, 400);
    canvas.position(300, 250);
    background("white");

    canvas.mouseReleased(classifycanvas);
    synth = window.speechSynthesis;
}

function draw() {
    strokeWeight(12);
    stroke("indigo");
    timercheck();
  if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function clearCanvas() {
    background("floralwhite")
}

function timercheck() {
    if ( timer <= 1000) {
        timer++
        document.getElementById("timer").innerhtml = timer;
    } else if ((timer > 1000)||(sketch_check = complete)) {
        timer = 0;
    }
}