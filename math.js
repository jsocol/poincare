function Point(x, y) {
    this.x = x;
    this.y = y;
}


function distance(p, q) {
    return Math.sqrt(Math.pow(p.x - q.x, 2) + Math.pow(p.y - q.y, 2));
}


function midpoint(p1, p2) {
    return new Point(
        ((p2.x - p1.x) / 2) + p1.x,
        ((p2.y - p1.y) / 2) + p1.y
    );
}


function slope(p1, p2) {
    return (p2.y - p1.y) / (p2.x - p1.x);
}


function perpendicular(m) {
    return -1 / m;
}


function Line(m, b) {
    this.m = m;
    this.b = b;
}


Line.fromPoints = function (p, q) {
    var m = slope(p, q);
    var b = -m * p.x + p.y;
    return new Line(m, b);
};


Line.fromPointSlope = function (p, m) {
    var b = -m * p.x + p.y;
    return new Line(m, b);
};


Line.prototype.at = function (x) {
    return this.m * x + this.b;
};


Line.prototype.intersect = function (other) {
    var x = (other.b - this.b) / (this.m - other.m);
    var y = this.at(x);
    return new Point(x, y);
};


function bisector(p, q) {
    var s = perpendicular(slope(p, q));
    var mid = midpoint(p, q);
    return Line.fromPointSlope(mid, s);
}


function Circle(origin, radius) {
    this.origin = origin;
    this.radius = radius;
}


Circle.fromPoints = function (p, q, r) {
    var A = bisector(p, q);
    var B = bisector(q, r);
    var origin = A.intersect(B);
    var radius = distance(p, origin);
    return new Circle(origin, radius);
};


function inversion (circle, p) {
    var o = circle.origin;
    var r = circle.radius;
    var denom = Math.pow(p.x - o.x, 2) + Math.pow(p.y - o.y, 2);
    var rsq = r * r;

    return new Point(
        o.x + (rsq * (p.x - o.x)) / denom,
        o.y + (rsq * (p.y - o.y)) / denom
    );
}


module = module || {};
module.exports = {
    Point: Point,
    Line: Line,
    Circle: Circle,
    distance: distance,
    midpoint: midpoint,
    slope: slope,
    perpendicular: perpendicular,
    bisector: bisector
};
