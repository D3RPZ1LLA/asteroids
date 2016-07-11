(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(pos, shipDirection) {
    var spd = [ Bullet.BULLET_SPEED * Math.cos(shipDirection),
                Bullet.BULLET_SPEED * Math.sin(shipDirection) ];

    this.xCoord = pos[0];
    this.yCoord = pos[1];
    this.xSpd = spd[0];
    this.ySpd = spd[1];
    this.radius = 1;
    this.color = "#FFFFFF";
    this.distance = 0;
  }

  Bullet.BULLET_SPEED = 1.5;

  Bullet.initialize = function(pos, shipDirection) {
    return new Bullet(pos, shipDirection);
  }

  Bullet.inherits(Asteroids.MovingObject);

})(this);
