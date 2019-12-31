var html = '';
var rgbColor;

function randomRGB() {
   return Math.floor(Math.random() * 256 );
}

function randomColor() {
    var color = 'rgb(';
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ')';
    return color;
}

for (var i = 1; i <= 10; i +=1) {
rgbColor = randomColor();
html += '<div style="background-color:' + rgbColor + '"></div>';
}


document.write(html);


