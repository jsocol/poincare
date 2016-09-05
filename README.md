# Poincar&eacute;

In around 300BCE, Euclid wrote *Elements*, which is perhaps the most
important work ever on the subject of Geometry—and frankly one of the
most important texts in Mathematics. (Yes, he build on earlier work by
people like Pythagoras and Eudoxus, but *Elements* is the surviving
major work.)

In *Elements*, Euclid lays out an "axiomatic" approach to Geometry:
given a few undefined primitive terms, and some "axioms" we accept as
true, you make a claim (a "proposition") and prove that proposition
using logical statements from the axioms (also called "postulates"),
definitions, and already-proven propositions.

*Elements* hardly stands up to the rigors of modern mathematics. Much of
the 19th and early 20th century was spent going through long-accepted
math—everything from Euclid to Newton to Euler—and putting it on a
rigorous, logical, and axiomatic footing. 4 of the 5 axioms Euclid
started with were re-built into Hilbert's axioms (there are 19, not
including the parallel axiom).

But the 5th one...

Ever since *Elements* was published, mathematicians believed Euclid's
5th postulate, the so-called "parallel" postulate, was unnecessary. They
believed that given the first 4 (or eventually the first 19) it *must*
be possible to prove the parallel postulate as a proposition.

The parallel postulate states, in one form: "given a line L and a point
P not on L, there is exactly one line through P parallel to L."

It turns out to have many equivalent statements (to a modern
mathematician, two statements are "equivalent" if you can assume one and
prove the other, and vice versa). For example:

- The sum of the interior angles of a triangle is 180°.
- The sum of the interior angles of a convex quadrilateral is 360°.
- Two lines have a common perpendicular if and only if they are
  parallel.
- If two lines L and M are cut by a third line N, and the sum of the
  angles on one side of N is greater than 180°, L and M are not
  parallel.

And so on.

For 2100 years, and probably longer than that, before Euclid wrote down
*Elements*, mathematicians around the world tried to prove the parallel
postulate. And every time they failed. They tried to introduce weaker
claims, which always ended up being equivalent.

In the 1860s, a few mathematicians (mainly Bolyai and Gauss) started
coming around to a new idea: what if it wasn't possible?

Without the parallel postulate, quite a bit of Geometry is still
possible. You can prove a huge number of quite useful theorems. You can
even prove that the sum of the interior angles of a triangle is *at
most* 180°, and that if two lines have a common perpendicular, they are
parallel (but not the converse!).

What if, Bolyai and Gauss wondered, you assumed something else? What if
you assumed the sum of interior angles was *always* less than 180°? What
if you assumed that there were multiple parallel lines through a point?

And two millenia of assumptions, gut feelings, and failed attempts came
crashing down.

They had discovered what we now call Hyperbolic Geometry. (In deference
to Euclid being right, we call his version Euclidean Geometry; if you
assume neither the Euclidean nor Hyperbolic parallel postulates, it's
called Neutral; if you assume there are *no* parallels, you're in
Spherical Geometry and many other things are weird.)

In Geometry, one way to prove a system of axioms is consistent is to
develop a "model" of that system. Models are also critical in helping
understand and think about a system. So mathematicians set out to
develop models of Hyperbolic Geometry. Four of these models are still in
wide use, and to me, the most beautiful is the Poincar&eacute; disk
model.

In a Euclidean plane, draw a circle. The interior of this circle (but
not the circle itself) represents the hyperbolic plane. (So there is no
edge, you can go "forever" closer and closer to the circle but never
reach it.)

Points in the interior of the circle are "points" in the hyperbolic
plane.

"Lines" in the hyperbolic plane are either Euclidean diameters of the
circle (lines that pass through the center) minus their endpoints, or
Euclidean circles which cross primary circle at right angles.

In this model, angles are preserved, so if you measure an angle with a
Euclidean protractor, it's the same as a hyperbolic one. Length,
however, is not: as you get closer to the edge, the Euclidean distance
gets smaller and smaller compared to the hyperbolic distance. (You can
go "forever.")

Because angles are preserved, it's easy to see things like two parallel
lines with no common perpendicular (consider a diameter and a circle
that is tangent to the diameter at the edge of the main circle). And,
what you see here: a triangle where the interior angles add up to less
than 180°.

The JavaScript here is badly written: I don't care. The math is a mix of
constructive Geometry (you can work all of this out with a compass and
straight-edge, I have used some of those methods over perhaps more
efficient methods) and arithmetical Geometry. Some decisions there mean
some things don't work (putting two points on horizontal or vertical
Euclidean lines). That's all fine. All I wanted to do was draw some
triangles.

There is a [much cooler, more
full-featured](http://cs.unm.edu/~joel/NonEuclid/NonEuclid.html) tool
for this you can play with. It's neat.
