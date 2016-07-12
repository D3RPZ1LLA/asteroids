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

  Asteroid.COLOR_VALUES = {
    '#e4ca14': 'yellow',
    '#f32b04': 'red',
    '#4bf0d4': 'teal',
    '#3a2cff': 'blue',
    '#FFFFFF': 'white'
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

  Asteroid.randomColorAsteroid = function( pos, vel, radius, bannedColors ) {
    if ( typeof bannedColors == 'undefined') {
      bannedColors = { };
    }
    var num = Math.floor( Math.random() * 13 );
    var color;
    do {
      num += 1
      switch ( num % 4 ) {
        case 0:
          color = 'yellow';
          break;
        case 1:
          color = 'red';
          break;
        case 2:
          color = 'teal';
          break;
        case 3:
          color = 'blue';
          break;
        default:
          color = 'white';
          break;
      }
    } while ( !!bannedColors[color] );

    return new Asteroid(pos, vel, radius, Asteroid.COLORS[color] );
  }

  Asteroid.prototype.split = function () {
    var pos = [this.xCoord, this.yCoord];
    var velA = [Math.random() - 0.5, Math.random() - 0.5];
    var velB = [Math.random() - 0.5, Math.random() - 0.5];
    var radius = this.radius / 2;

    var bannedColors = {
      'yellow': false,
      'red': false,
      'teal': false,
      'blue': false
    };

    bannedColors[ Asteroid.COLOR_VALUES[ this.color ] ] = true;
    asteroidA = Asteroid.randomColorAsteroid( pos, velA, radius, bannedColors );
    bannedColors[ Asteroid.COLOR_VALUES[ asteroidA.color ] ] = true;
    asteroidB = Asteroid.randomColorAsteroid( pos, velB, radius, bannedColors );

    return [asteroidA, asteroidB];
  }

})(this);
