(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(pos, vel, radius, color) {
    this.xCoord = pos[0];
    this.yCoord = pos[1];
    this.xSpd = vel[0];
    this.ySpd = vel[1];
    this.radius = radius;
    this.color = !!color ? color : Asteroid.COLORS.white;
  }

  Asteroid.MAX_RADIUS = 10;
  Asteroid.COLORS = {
    'yellow': '#e4ca14',
    'red': '#f32b04',
    'teal': '#4bf0d4',
    'blue': '#3a2cff',
    'white': '#FFFFFF'
  }

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

    return new Asteroid(pos, vel, radius);
  }

  Asteroid.randomColorAsteroid = function( pos, vel, radius ) {
    switch ( Math.floor( Math.random() * 13 ) % 4 ) {
      case 0:
        return new Asteroid( pos, vel, radius, Asteroid.COLORS.yellow );
      case 1:
        return new Asteroid( pos, vel, radius, Asteroid.COLORS.red );
      case 2:
        return new Asteroid( pos, vel, radius, Asteroid.COLORS.teal );
      case 3:
        return new Asteroid( pos, vel, radius, Asteroid.COLORS.blue );
      default:
        return new Asteroid( pos, vel, radius, Asteroid.COLORS.white );
    }
  }

  Asteroid.prototype.randomColor = function( ) {
    switch ( Math.floor( Math.random() * 13 ) % 4 ) {
      case 0:
        this.color = Asteroid.COLORS.yellow;
        break;
      case 1:
        this.color = Asteroid.COLORS.red;
        break;
      case 2:
        this.color = Asteroid.COLORS.teal;
        break;
      case 3:
        this.color = Asteroid.COLORS.blue;
        break;
      default:
        this.color = Asteroid.COLORS.white;
        break;
    }
  }

  Asteroid.prototype.split = function () {
    var pos = [this.xCoord, this.yCoord];
    var velA = [Math.random() - 0.5, Math.random() - 0.5];
    var velB = [Math.random() - 0.5, Math.random() - 0.5];
    var radius = this.radius / 2;

    asteroidA = Asteroid.randomColorAsteroid( pos, velA, radius );
    asteroidB = Asteroid.randomColorAsteroid( pos, velB, radius );

    do {
      asteroidB.randomColor( );
    } while ( asteroidA.color == asteroidB.color );

    return [asteroidA, asteroidB];
  }

})(this);
