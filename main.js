canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color1=["grey"];
color2=["blue"];
color3=["black"];
color4=["red"];
color5=["yellow"];
color6=["green"];

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=5;
ctx.rect(100,143,610,400);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth=5;
ctx.arc(200,250,80,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=5;
ctx.arc(410,250,80,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth=5;
ctx.arc(620,250,80,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color5;
ctx.lineWidth=5;
ctx.arc(300,350,80,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color6;
ctx.lineWidth=5;
ctx.arc(520,350,80,0,2*Math.PI);
ctx.stroke();
