var Bus = (function () {
    function Bus(routeNumber) {
        this.myRouteNumber = routeNumber;
        this.myRunCost = this.calculateRunCost(30, 1.95); // Allowed - objects may invoke their own private functions
    }
    Bus.prototype.SayRoute = function () {
        console.log("My route is " + this.myRouteNumber);
    };
    Bus.prototype.calculateRunCost = function (forDistance, fuelCostPerMile) {
        // Logic goes here to calculate cost for this bus to run this route.
        // This function is invisible to client objects.
    };
    return Bus;
}());
var myBus = new Bus(999);
myBus.SeatingCapacity = 80;
console.log(myBus.calculateRunCost(30, 1.95)); // Edit-time error since "calculateRunCost" is private
