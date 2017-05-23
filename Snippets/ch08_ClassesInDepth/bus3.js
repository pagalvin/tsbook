var Bus3 = (function () {
    function Bus3(routeNumber) {
        this.myRouteNumber = routeNumber;
        this.myRunCost = this.calculateRunCost(30, 1.95); // Allowed - objects may invoke their own private functions
    }
    Bus3.prototype.SayRoute = function () {
        console.log("My route is " + this.myRouteNumber);
    };
    Bus3.prototype.calculateRunCost = function (forDistance, fuelCostPerMile) {
        // Logic goes here to calculate cost for this bus to run this route.
        // This function is invisible to client objects.
        return 0; // Method signature requires us to return some numeric value to avoid syntax error.
    };
    return Bus3;
}());
var myBus3 = new Bus3(999);
myBus3.SeatingCapacity = 80;
myBus3.SayRoute();
myBus3["myRunCost"] = 999;
