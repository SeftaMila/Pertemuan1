let j;
function setup() {
  // put setup code here
  createCanvas(400,400);
  j = 0;
}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(8)
    point(200,100);
    line(0,0,50,180);


    fill(149, 53, 83)
    rect(150,100, 20, 100);

    strokeWeight(2)
    stroke(56,50,168);
    fill(50, 149, 168);
    ellipse(150, 80, 20, 20);
    strokeWeight(0)
    strokeJoin(ROUND)
    triangle(20, 20, 20, 40, 60, 20);
    arc(70,70, 40, 40, radians(0), radians(270)

      for(var i=0; i<=400; i++){
        x = i
      y = 300 + 20*Math.sin(PI*x/20)
      point(x,y)
    }

    var y = 200 + 20*Math.sin(PI*j/2)
    var r =50+10*Math.sin(PI*j/2)
    j += 1
    fill(240, 192, 35)
    ellipse(250, 200, 50, 50)

}