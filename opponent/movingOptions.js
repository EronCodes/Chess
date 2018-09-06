function MovingOptions() {
  this.pawn = function (x, y, board) {

  };

  this.rook = function (x, y, board) {

  };

  this.knight = function (x, y, board) {

  };

  this.bishop = function (x, y, board) {

  };

  this.gardez = function (x, y, board) {

  };

  this.king = function (x, y, board) {

  };

  this.posValid = function (x, y, board) {
    if (x < 0 || x > 7 || y < 0 || y > 7) {
      return false;
    }
    return true;
  };
}
