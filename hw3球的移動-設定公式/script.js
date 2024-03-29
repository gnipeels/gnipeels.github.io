// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 5, dy = 5, r = 30, color = "#0095DD";
let a = canvas.width, b = 0, da = -5, db = 5, c = 30, color2 = "red";
let o = canvas.width, p = canvas.height, dO = -5, dp = 5, q = 30, color3 = "#2F4F4F";
// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    y = y + dy;
    a = a + da;
    b = b + db;
    o = o + dO;
    p = p + dp;
    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
    if(x < 0 || x > canvas.width){
        dx = -dx;
        color = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    }
    if(y < 0 || y > canvas.height){
        dy = -dy;
        color = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    }
    if(a < 0 || a > canvas.width){
      da = -da;
    }
    if(b < 0 || b > canvas.height){
      db = -db;
    }
    if(o < 0 || o > canvas.width){
      dO = -dO;
    }
    if(p < 0 || p > canvas.height){
      dp = -dp;
    }
    if((x - a)*(x - a) + (y - b)*(y - b) < (r+c)*(r+c)){
      [dx, dy, da, db] = [da, db, dx, dy];
      color = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    }
    if((x - o)*(x - o) + (y - p)*(y - p) < (r+q)*(r+q)){
      [dx, dy, dO, dp] = [dO, dp, dx, dy];
      color = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    }
    if((a - o)*(a - o) + (b - p)*(b - p) < (c+q)*(c+q)){
      [da, db, dO, dp] = [dO, dp, da, db];
    }
    drawBall(x, y, r, color);
    drawBall(a, b, c, color2);
    drawBall(o, p, q, color3);
    requestAnimationFrame(draw);
}
draw();