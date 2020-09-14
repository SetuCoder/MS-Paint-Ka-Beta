//Sorry MS Paint, Me tera Baap Huin!
//😂

var database;

var Drawing = [];
var currentPath = [];
var isDrawing = false;
var weight;
var color;

function setup() {

    canvas = createCanvas(1515, 655);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);

    var clearButton = createButton('clear');
    clearButton.position(20,240);
    clearButton.mousePressed(clearDrawing);
    database = firebase.database();


    var input = createInput("");
    input.hide();
    var Button1  = createButton("stroke");
    var buttton2  =createButton("apply");
    buttton2.hide();
    
    input.position(20,160);
    Button1.position(20,200);
    buttton2.position(140,200);

    Button1.mousePressed(function(){
         input.show();
         colorButton.hide();
         clearButton.hide();
         buttton2.show();
     });

    buttton2.mousePressed(function(){
        input.hide();
        buttton2.hide();
        clearButton.show();
        colorButton.show();
        
        console.log("strokeWeight has been Changed")
        weight  = input.value();  
    })

    var colorButton  = createButton("color");
    colorButton.position(20,160);
    colorButton.mousePressed(function(){
        var green = createButton("Green");
        var blue = createButton("Blue");
        var red = createButton("Red");
        var yellow = createButton("Yellow");
        var purple = createButton("Purple");
        var pink = createButton("Pink");
        var brown = createButton("Brown");
        var white = createButton("White");
        var orange = createButton("Orange");

        green.position(70,160);
        blue.position(140,160);
        red.position(210,160);
        yellow.position(70,200);
        purple.position(140,200);
        pink.position(210,200);
        brown.position(70,240);
        white.position(140,240);
        orange.position(210,240);   
        

    green.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        clearButton.show();
        stroke("green");
    })

    blue.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        clearButton.show();
        stroke("blue");          
     })

    red.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        clearButton.show();
        stroke("red");     
     })

    yellow.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        clearButton.show();
        stroke("yellow");
     })

    purple.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        clearButton.show();
        stroke("purple");
     })

    pink.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        clearButton.show();
        stroke("pink");
     })

    brown.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        clearButton.show();
        stroke("brown");
    })

    white.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        clearButton.show();
        stroke("white");         
    })

    orange.mousePressed(function(){
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        Button1.show();
        clearButton.show();
        stroke("orange");
    })
    
        Button1.hide();
        buttton2.hide();
        clearButton.hide();
   })
 }

function startPath() {
    isDrawing = true;
    currentPath = [];
    Drawing.push(currentPath);
}

function endPath() {
    isDrawing = false;
}

function draw() {
  background(255);

    if (isDrawing) {
        var Path = {
            x: mouseX,
            y: mouseY
        };
        currentPath.push(Path);
    }

    strokeWeight(weight);
    noFill();

  for (var i = 0; i < Drawing.length; i++) {
    var path = Drawing[i];
    beginShape();

      for (var j = 0; j < path.length; j++) {
          vertex(path[j].x, path[j].y);
     }
        endShape();
    }
}

function clearDrawing() {
    Drawing = [];
    colorButton.hide();
    Button1.hide();
}