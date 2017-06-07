class Bus {

    private myRouteNumber: number;

    constructor(routeNumber: number) {
        this.myRouteNumber = routeNumber;
    }

    public SayRoute() {
        console.log(`My route is ${this.myRouteNumber}`);
    }
}

const myBus = new Bus(1000);
//myBus["myRouteNumber"] = 999;
myBus.SayRoute();
