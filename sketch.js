var myimgobj = document.images["jsbutton"];
var value = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10);

    
    lines = "Dresden\n\nThe Fourteenth of February, 1945\n\nIn the ending of World War II, Allied bombers from the Britain and U.S.A. conducted a major bombing raids on the  German city of Dresden.\nOn the night of February 13 1945, more than 1,200 heavy bombers dropped nearly 4,000 tons of high-explosive and incendiary bombs on the city.\nAround 25,000 people were killed in the bombings and the firestorm that raged afterward and all the city was destroyed. \nSignificant questions about the legitimacy of the targets destroyed have led to years of debate about whether the attack should be labeled a war crime.\n\nBut can we image the quantity of those bombs and victims in JUST one night?\n\nTry yourself, you JUST have two minutes to destroy an entire city.\n\nPress the start button to experience.";
    textSize(28);
    textFont("Courier")
    textLeading(40);
    fill(255);
//    textAlign(CENTER);
    text(lines, 40, 30, window.innerWidth-80, window.innerHeight-60);

}

function draw() {}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



