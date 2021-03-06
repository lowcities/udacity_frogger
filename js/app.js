
// Enemies our player must avoid
var Enemy = function (x, y, speed){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 80;
    this.height = 60;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  if(this.x < 510) {
    var rate = this.speed * dt;
    this.x += rate;
  } else {
    this.x = -30;
  }

  this.checkCollisions();


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollisions = function() {
//  console.log("TEST");
  if (this.x < player.x + player.width &&
   this.x + this.width > player.x &&
   this.y < player.y + player.height &&
   this.height + this.y > player.y) {
    console.log("HIT");
    player.reset();
}

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 50;
};

Player.prototype.reset = function() {
  this.x = 202;
  this.y = 375;
}

Player.prototype.handleInput = function(input) {

  if(input === 'left') {
    this.x -= 101;
  } else if(input === 'right') {
    this.x += 101;
  } else if(input === 'up') {
    this.y -= 83;
  } else {
    this.y += 83;
  }

};

Player.prototype.update = function(y) {


};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var bugOne = new Enemy(11, 56, 200);
var bugTwo = new Enemy(307, 137, 156);
var bugThree = new Enemy(205, 215, 366);
var allEnemies = [bugOne, bugTwo, bugThree];
var player = new Player(202, 375);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});










