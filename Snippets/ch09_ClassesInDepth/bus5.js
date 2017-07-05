var Bus5 = (function () {
    function Bus5(routeNumber, costPerMile, totalPassengers, routeDistance) {
        this._myRouteNumber = routeNumber;
        this._myCostPerMile = costPerMile;
        this._myTotalPassengers = totalPassengers;
        this._myTotalRouteDistance = routeDistance;
    }
    Object.defineProperty(Bus5.prototype, "myRouteNumber", {
        get: function () { return this.myRouteNumber; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bus5.prototype, "SeatingCapacity", {
        set: function (val) { this._mySeatingCapacity = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bus5.prototype, "CostPerRider", {
        get: function () {
            var totalRouteCost = this._myTotalRouteDistance * this._myCostPerMile;
            var costPerRider = totalRouteCost / this._myTotalPassengers;
            return costPerRider;
        },
        enumerable: true,
        configurable: true
    });
    return Bus5;
}());
var myBus5 = new Bus5(148, 12.50, 72, 80);
myBus5.SeatingCapacity = 80;
console.log("My total cost per rider:", myBus5.CostPerRider);
console.log("Cost per rider with 80 riders: ", new Bus5(148, 12.50, 80, 50).CostPerRider);
