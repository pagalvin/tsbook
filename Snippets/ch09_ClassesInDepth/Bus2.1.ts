class Bus {

    private myRouteNumber: number;
    public SeatingCapacity: number; 

    private myRunCost: number;

    constructor(routeNumber: number) {
        this.myRouteNumber = routeNumber;
        
        this.myRunCost = this.calculateRunCost(30, 1.95); // Allowed - objects may invoke their own private functions
    }

    public SayRoute() {
        console.log(`My route is ${this.myRouteNumber}`);
    }

    private calculateRunCost(forDistance: number, fuelCostPerMile: number): number {
        // Logic goes here to calculate cost for this bus to run this route.
        // This function is invisible to client objects.
    }

}

const myBus = new Bus(999);
myBus.SeatingCapacity = 80;

console.log(myBus.calculateRunCost(30, 1.95)); // Edit-time error since "calculateRunCost" is private