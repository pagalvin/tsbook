class Bus3 {

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

        return 0; // Method signature requires us to return some numeric value to avoid syntax error.

    }

}

const myBus3: Bus3 = new Bus3(999);
myBus3.SeatingCapacity = 80;
myBus3.SayRoute();
myBus3["myRunCost"] = 999;
