var Bus = (function () {
    function Bus(routeNumber) {
        this.myRouteNumber = routeNumber;
    }
    Bus.prototype.SayRoute = function () {
        console.log("My route is " + this.myRouteNumber);
    };
    return Bus;
}());
var myBus = new Bus(1000);
//myBus["myRouteNumber"] = 999;
myBus.SayRoute();
