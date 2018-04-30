Asteroids
=========
<a href="http://blasteroids.sterlingforest.me/">
blasteroids.sterlingforest.me
</a>



An implementation of the classic asteroids game. Written in JavaScript, drawn with CSS canvas.

  - Floating objects wrap around the canvas. This was implemented by taking a floating object's coordinates displaced by the overflow amount modulo the canvas dimension plus the overflow amount and then finally re-displaced by the overflow.

  - The ship's drag was implemented by adding a percentage decay (0.997) to each of the cartesian velocities. This number was found through trial and error.

Logic to wrap Objects around the Canvas
------------

- Note: Key binding is from the key master library: 
  https://github.com/madrobby/keymaster
