var myimgobj = document.images["jsbutton"];
var value = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10);
    lines = "Testo esempio nella schermata iniziale\nPremere start per iniziare";
    textSize(18);
    textLeading(40);
    fill(255);
    textAlign(CENTER);
    text(lines, windowWidth / 2, windowHeight / 3);
}

function draw() {}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

