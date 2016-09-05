'use strict';

const poincare = require('../math.js');
const Point = poincare.Point;
const Line = poincare.Line;
const Circle = poincare.Circle;

const assert = require('chai').assert;


describe('points', function () {
    describe('Point', function () {
        it('return a point object', function () {
            const p = new Point(1, 2);
            assert.equal(p.x, 1);
            assert.equal(p.y, 2);
        });
    });

    describe('distance', function () {
        it('should calculate a distance along the x axis', function () {
            const p = new Point(0, 0);
            const q = new Point(10, 0);
            const dist = poincare.distance(p, q);
            assert.equal(dist, 10);
        });

        it('should calculate a distance diagonally', function () {
            const p = new Point(1, 1);
            const q = new Point(2, 3);
            const expect = Math.sqrt(5);
            const dist = poincare.distance(p, q);
            assert.equal(dist, expect);
        });

        it('should be symmetric', function () {
            const p = new Point(2, 4);
            const q = new Point(5, -23);
            const forward = poincare.distance(p, q);
            const backward = poincare.distance(q, p);
            assert(forward > 0);
            assert(backward > 0);
            assert.equal(forward, backward);
        });

        it('should return zero for same point', function () {
            const p = new Point(1, 1);
            const q = new Point(1, 1);
            const pdist = poincare.distance(p, p);
            const qdist = poincare.distance(p, q);
            assert.equal(pdist, 0);
            assert.equal(qdist, 0);
        });
    });

    describe('midpoint', function () {
        it('should return a new Point', function () {
            const p = new Point(1, 2);
            const q = new Point(5, 2);
            const m = poincare.midpoint(p, q);
            assert(m instanceof Point);
        });

        it('should calculate a midpoint horizontally', function () {
            const p = new Point(1, 2);
            const q = new Point(5, 2);
            const m = poincare.midpoint(p, q);
            assert.equal(m.x, 3);
            assert.equal(m.y, 2);
        });

        it('should calculate a midpoint vertically', function () {
            const p = new Point(2, 1);
            const q = new Point(2, 8);
            const m = poincare.midpoint(p, q);
            assert.equal(m.x, 2);
            assert.equal(m.y, 4.5);
        });

        it('should calculate a midpoint diagonally', function () {
            const p = new Point(1, 2);
            const q = new Point(2, 4);
            const m = poincare.midpoint(p, q);
            assert.equal(m.x, 1.5);
            assert.equal(m.y, 3);
        });

        it('should be symmetric', function () {
            const p = new Point(3, -10);
            const q = new Point(-5, 12);
            const forward = poincare.midpoint(p, q);
            const backward = poincare.midpoint(q, p);
            assert.equal(forward.x, backward.x);
            assert.equal(forward.y, backward.y);
        });
    });

    describe('slope', function () {
        it('should return a number', function () {
            const p = new Point(1, 4);
            const q = new Point(3, 9);
            const m = poincare.slope(p, q);
            assert(typeof m === 'number');
        });

        it('should calculate zero slope', function () {
            const p = new Point(0, 1);
            const q = new Point(5, 1);
            const m = poincare.slope(p, q);
            assert.equal(m, 0);
        });

        it('should calculate infinite slope', function () {
            const p = new Point(1, 0);
            const q = new Point(1, 18);
            const m = poincare.slope(p, q);
            assert.equal(m, Infinity);
        });

        it('should calculate non-zero slope', function () {
            const p = new Point(0, 1);
            const q = new Point(1, 0);
            const m = poincare.slope(p, q);
            assert.equal(m, -1);
        });

        it('should be symmetric', function () {
            const p = new Point(0.5, 3.3);
            const q = new Point(-2.8, 1.1);
            const forward = poincare.slope(p, q);
            const backward = poincare.slope(q, p);
            assert.equal(forward, backward);
        });
    });

    describe('perpendicular', function () {
        it('should return a number', function () {
            const m = poincare.perpendicular(0.5);
            assert(typeof m === 'number');
        });

        it('should return the negative reciprocal', function () {
            const m = poincare.perpendicular(-1 / 3);
            assert.equal(m, 3);
        });
    });
});

describe('lines', function () {
    describe('Line');

    describe('fromPoints');

    describe('fromPointSlope');

    describe('at');

    describe('intersect');

    describe('bisector');
});

describe('circles', function () {
    describe('Circle');

    describe('fromPoints');
});
