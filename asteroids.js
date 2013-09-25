(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(pos, vel, radius, color) {
    this.xCoord = pos[0];
    this.yCoord = pos[1];
    this.xSpd = vel[0];
    this.ySpd = vel[1];
    this.radius = radius;
    this.color = color;
  }

  Asteroid.MAX_RADIUS = 10;
  Asteroid.COLOR = "#FFFFFF";

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function(maxX, maxY) {
    var pos = [Math.random() * maxX, Math.random() * maxY];
    var vel = [Math.random() - 0.5, Math.random() - 0.5];
    var radius = (Math.random() + 1) * Asteroid.MAX_RADIUS;

    return new Asteroid(pos, vel, radius, Asteroid.COLOR);
  }

  Asteroid.prototype.split = function () {
    var pos = [this.xCoord, this.yCoord];
    var velA = [Math.random() - 0.5, Math.random() - 0.5];
    var velB = [Math.random() - 0.5, Math.random() - 0.5];
    var radius = this.radius / 2;
    asteroidA = new Asteroid(pos, velA, radius, Asteroid.COLOR);
    asteroidB = new Asteroid(pos, velB, radius, Asteroid.COLOR);

    return [asteroidA, asteroidB];
  }

})(this);
