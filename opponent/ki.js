function Ki(side) {
  /*
  1 - 6 White player
  -1 - -6 Black player
  */

  /* Chess Board
  [[-2, -3, -4, -5, -6, -4, -3, -2],
   [-1, -1, -1, -1, -1, -1, -1, -1],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [1, 1, 1, 1, 1, 1, 1, 1],
   [2, 3, 4, 5, 6, 4, 3, 2]]
  */

  this.invertBoard = function (board) {
    console.log("invert called");
    for (var i = 0; i < board.length; i++) {
      for (var k = 0; k < board[i].length; k++) {
        board[i][k] = board[i][k] * (-1);
      }
    }
    board = this.rotateBoard(board);
    return board;
  }

  this.rotateBoard = function (board) {
    console.log("rotate called");
    board.reverse();
    for (var i = 0; i < board.length; i++) {
      board[i].reverse();
    }
    return board;
  }

  if (side > 0/*side == white*/) {
    this.inverted = false;
  } else {
    this.inverted = true;
  }

  this.movingOptions = new MovingOptions();

  this.play = function (board) {
    if (this.inverted) {
      var board       = this.invertBoard(board);
    }
    var ownPlayers    = this.getOwnPlayers(board);
    var player        = ownPlayers[Math.floor(Math.random() * ownPlayers.length)];
    var movingOptions = this.getMovingOptions(player, board);
    var step          = movingOptions[Math.floor(Math.random() * ownPlayers.length)];
    var resultBoard   = this.makeStep(player, step, board);

    if (this.inverted) {
      board = this.invertBoard(board)
    }
    return resultBoard;
  };

  this.getOwnPlayers = function (board) {
    var ownPlayers = [];

    for (var i = 0; i < board.length; i++) {
      for (var k = 0; k < board[i].length; k++) {
        if (board[i][k] > 0) {
          ownPlayers[ownPlayers.length] = {posX: i,
                                           posY: k,
                                           kind: board[i][k]
                                          };
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
