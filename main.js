var next_sketch = Math.random() * 10;
var timer = 0;
var objective = "";

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
    timercheck();
    strokeWeight(12);
    stroke("indigo");
  if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    sketch = classifier.classify(canvas, gotResult);
}

function clearCanvas() {
    background("floralwhite")
}

function timercheck() {
    if ( timer <= 1000) {
        timer++
        document.getElementById("timer").innerhtml = timer;
    } else if ((timer > 1000)||(sketch_check = "complete")) {
        timer = 0;
        sketch_check = "";
        newObjective()
    }
}

function newObjective() {
    next_sketch = Math.random() * 10;

    if (Math.floor(next_sketch) = 1) {
        objective = "streetlight";

    } else if (Math.floor(next_sketch) = 2) {
        objective = "teacup";
    
    } else if (Math.floor(next_sketch) = 3) {
        objective = "flying saucer";
    
    } else if (Math.floor(next_sketch) = 4) {
        objective = "fish skeleton";
    
    } else if (Math.floor(next_sketch) = 5) {
        objective = "camouflage";
    
    } else if (Math.floor(next_sketch) = 6) {
        objective = "dog";
    
    } else if (Math.floor(next_sketch) = 7) {
        objective = "ladder";
    
    } else if (Math.floor(next_sketch) = 8) {
        objective = "rabit";
    
    } else if (Math.floor(next_sketch) = 9) {
        objective = "saturn";
    
    } else {
        objective = "rhino";
    } 

    document.getElementById("objective").innerHTML = objective;
    check_sketch();
}

function check_sketch() {
    if (objective == sketch) {
        sketch_check = "complete"
    }
    timercheck();
}
