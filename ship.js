(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function(color) {
    this.xCoord = 250;
    this.yCoord = 250;
    this.xSpd = 0;
    this.ySpd = 0;
    this.direction = (3 * Math.PI) / 2;
    this.radius = 10;
    this.color = color;
  }

  Ship.inherits(Asteroids.MovingObject);
  Ship.MAX_SPEED = 1.3;

  Ship.initialize = function(color) {
    return new Ship(color);
  }

  Ship.prototype.draw = function(ctx) {

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    var lT = (3 * Math.PI) / 4;
    var rT = (5 * Math.PI) / 4;

    var xNose = this.xCoord + ((this.radius + 10) * Math.cos(this.direction));
    var yNose = this.yCoord + ((this.radius + 10) * Math.sin(this.direction));

    var xLeft = this.xCoord + (this.radius * Math.cos((this.direction + lT) % (2 * Math.PI)));
    var yLeft = this.yCoord + (this.radius * Math.sin((this.direction + lT) % (2 * Math.PI)));

    var xRight = this.xCoord + (this.radius * Math.cos((this.direction + rT) % (2 * Math.PI)));
    var yRight = this.yCoord + (this.radius * Math.sin((this.direction + rT) % (2 * Math.PI)));

    ctx.moveTo(xNose, yNose);
    ctx.lineTo(xLeft, yLeft);
    ctx.lineTo(xRight, yRight);
    ctx.lineTo(xNose, yNose);

    ctx.stroke();
  }

  Ship.prototype.power = function (impulse) {
    var x = Math.cos(this.direction);
    var y = Math.sin(this.direction);

    this.xSpd += (x * impulse);
    this.ySpd += (y * impulse);

    if (this.xSpd > 1) {
      this.xSpd = 1;
    } else if (this.xSpd < -1) {
      this.xSpd = -1;
    }

    if (this.ySpd > Ship.MAX_SPEED) {
      this.ySpd = Ship.MAX_SPEED;
    } else if (this.ySpd < -(Ship.MAX_SPEED)) {
      this.ySpd = -(Ship.MAX_SPEED);
    }
  }

  Ship.prototype.torque = function(pivot) {
    if (pivot === "right") {
      this.direction = (this.direction + 0.05) % (2 * Math.PI)
    } else if (pivot === "left") {
      this.direction = (this.direction - 0.05 + (2 * Math.PI)) % (2 * Math.PI);
    } else {
      alert("invalid movement");
    }
  }

  Ship.prototype.drag = function() {
    this.xSpd = (this.xSpd * 0.997);
    this.ySpd = (this.ySpd * 0.997);
  }

  Ship.prototype.shoot = function() {
    var xNose = this.xCoord + ((this.radius + 10) * Math.cos(this.direction));
    var yNose = this.yCoord + ((this.radius + 10) * Math.sin(this.direction));

    return Asteroids.Bullet.initialize([xNose, yNose], this.direction);
  }

})(this);