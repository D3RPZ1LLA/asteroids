(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (ctx, width, height) {
    this.ctx = ctx;
    this.DIM_X = width;
    this.DIM_Y = height;
    this.asteroids = this.addAsteroids(20);
    this.ship = root.Asteroids.Ship.initialize("#FFFFFF");
  }

  Game.prototype.addAsteroids = function (numAsteroids) {
    var result = [];

    for (var i = 0; i < numAsteroids; i++) {
      result.push(Asteroids.Asteroid.randomAsteroid(this.DIM_X, this.DIM_Y));
    }
    return result;
  }

  Game.prototype.stop = function() {
    var that = this;
    var stop = function () {
      this.clearInterval(that.windowID);
    }

    stop();
  }

  Game.prototype.checkCollisions = function() {
    var that = this;
    this.asteroids.forEach(function(asteroid) {
      if (asteroid.isCollidedWith(that.ship)) {
        // this.alert("Ya done son~");
        // that.stop();
      }
    })
  }

  Game.prototype.draw = function() {
    var that = this;

    that.ctx.fillStyle="#000000";
    that.ctx.fillRect(0, 0, that.DIM_X, that.DIM_Y);

    that.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx);
    });
    that.ship.bullets.forEach(function(bullet) {
      bullet.draw(that.ctx);
    });
    that.ship.draw(that.ctx);
  }

  Game.prototype.move = function() {
    var that = this;

    that.asteroids.forEach(function(asteroid) {
      asteroid.move(that.DIM_X, that.DIM_Y);
    });
    that.ship.bullets.forEach(function(bullet) {
      bullet.move(that.DIM_X, that.DIM_Y);
    });
    that.ship.move(that.DIM_X, that.DIM_Y);
  }

  Game.prototype.step = function() {
    this.move();
    this.draw();
    this.checkCollisions();
  }

  Game.prototype.start = function(wind) {
    var that = this;
    key('f', function(){
      that.ship.shoot();
    });

    this.windowID = wind.setInterval(function() {
      if (key.isPressed("up")) {
        that.ship.power(0.05);
      }
      if (key.isPressed("left")) {
        that.ship.torque("left");
      }
      if (key.isPressed("right")) {
        that.ship.torque("right");
      }
      that.step();
    }, 6.25);
  }
})(this);