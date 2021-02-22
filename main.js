function draw() {
    image(video, 0, 0, 640, 480);
}



function setup() {
    canvas = createCanvas(1000, 700);
    canvas.position(110, 350);
    video = createCapture(VIDEO);
    video.hide()
  }

function take_snapshot() {
    save("Digitalized Photo Frame.png")
}

function draw(){
    image(video, 125, 125, 640, 480);
    
    stroke(255, 73, 66)
    fill(255, 73, 66)
    circle(130, 130, 100)

    stroke(255, 73, 66)
    fill(255, 73, 66)
    circle(770, 130, 100)

    stroke(255, 73, 66)
    fill(255, 73, 66)
    circle(770, 610, 100)

    stroke(255, 73, 66)
    fill(255, 73, 66)
    circle(130, 610, 100)

    line(130, 130, 770, 130)
    strokeWeight(10)
    stroke(38, 255, 0)

    line(770, 130, 770, 610)
    strokeWeight(10)
    stroke(38, 255, 0)
    
    line(130, 610, 770, 610)
    strokeWeight(10)
    stroke(38, 255, 0)

    line(130, 610, 130, 130)
    strokeWeight(10)
    stroke(38, 255, 0)
  }