var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

var img = document.getElementById("Torterra");

var x = 1;
var y = 1;

function myCanvas() {
    ctx.drawImage(img,0,0,150,200);
}

function up(){
    y = y - 15;
    drawImage()
}

function down(){
    y = y + 15;
    drawImage()
}
    
function right(){
    x = x - 15;
    drawImage()
}
    
function left(){
    x = x + 15;
    drawImage()
}

function getKeyPress(event){
    var x = event.keyCode;
    alert("a key has been pressed");
    switch(x){
        case 38:
            up();
            break;
        case 40:
            down();
            break;
        case 37:
            right();
            break;
        case 39:
            left();
            break;
    }
    
    
}

function drawImage(){
    ctx.clearRect(0,0,400,400);
    ctx.drawImage(img,x,y,150,200);
}