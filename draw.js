function drawArc(ctx, circ, start, stop) {
    ctx.beginPath();
    ctx.arc(circ.origin.x, circ.origin.y, circ.radius, start, stop);
    ctx.stroke();
}


function drawCircle(ctx, circ) {
    drawArc(ctx, circ, 0, 2 * Math.PI);
}


function drawPoint(ctx, point) {
    ctx.fillRect(point.x - 1, point.y - 1, 2, 2);
}
