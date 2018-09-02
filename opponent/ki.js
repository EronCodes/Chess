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
    var ownPlayers = [];

    for (var i = 0; i < board.length; i++) {
      for (var k = 0; k < board[0].length; k++) {
        if (this.side == 1) {
          if (board[i][k] > 0) {
            ownPlayers[ownPlayers.length] = {posX: i,
                                             posY: k,
                                             kind: board[i][k]
                                            };
          }
        } else {
          if (board[i][k] < 0) {
            ownPlayers[ownPlayers.length] = {posX: i,
                                             posY: k,
                                             kind: board[i][k]
                                            };
          }
        }
      }
    }

    return ownPlayers;
  };

  this.getMovingOptions = function (player, board) {

  };

  this.makeStep = function (player, step, board) {

  };
}
