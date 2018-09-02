function Ki(side) {
  /*
  1 - 6 White player
  -1 - -6 Black player
  */

  this.side = side;

  this.play = function (board) {
    var ownPlayers    = this.getOwnPlayers(board, side);
    var player        = this.ownPlayers[Math.floor(Math.random() * ownPlayers.length)];
    var movingOptions = this.getMovingOptions(player, board);
    var step          = movingOptions[Math.floor(Math.random() * ownPlayers.length)];
    var resultBoard   = this.makeStep(player, step, board);

    return resultBoard;
  };

  this.getOwnPlayers = function (board) {

  };

  this.getMovingOptions = function (player, board) {

  };

  this.makeStep = function (player, step, board) {

  };
}
