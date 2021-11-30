let Request = function (amount) {
  this.amount = amount;
  this.counter = [];
}

Request.prototype = {
  get: function (bill) {
    var count = Math.floor((+this.amount + 0.01) / bill);
    this.amount -= count * bill;
    this.counter = [
      ...this.counter,
      { count, bill }
    ]
    return this;
  }
}


export default Request;