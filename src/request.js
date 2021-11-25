const Request = function (amount) {
  this.amount = amount;
}

Request.prototype = {
  get: function (bill) {
    var count = Math.floor((+this.amount + 0.01) / bill);
    this.amount -= count * bill;
    return { bill, count };
  }
}

export default Request;