class Bus {

    private myRouteNumber: number;

    constructor(routeNumber: number) {
        this.myRouteNumber = routeNumber;
    }

    public SayRoute() {
        console.log(`My route is ${this.myRouteNumber}`);
    }
}
