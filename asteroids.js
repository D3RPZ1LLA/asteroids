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
	
	Asteroid.randomCoord = function(max) {
		return (Math.random() * (max - 250)) - 125;
	}
	
	Asteroid.randomVelocity = function() {
		var positive = (Math.random() - 0.5) >= 0 ? 1 : -1;
		return (Math.random() / 6) * positive;
	}

  Asteroid.randomAsteroid = function(maxX, maxY) {
    var pos = [Asteroid.randomCoord(maxX), Asteroid.randomCoord(maxY)];
    var vel = [Asteroid.randomVelocity(), Asteroid.randomVelocity()];
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
