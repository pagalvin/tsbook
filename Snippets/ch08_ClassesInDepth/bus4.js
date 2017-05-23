var Bus4 = (function () {
    function Bus4() {
    }
    Object.defineProperty(Bus4.prototype, "SeatingCapacity", {
        get: function () { return this._mySeatingCapacity; },
        set: function (val) { this._mySeatingCapacity = val; },
        enumerable: true,
        configurable: true
    });
    return Bus4;
}());
var theBus = new Bus4();
theBus.SeatingCapacity = 80;
console.log("Seating capacity:", theBus.SeatingCapacity);
