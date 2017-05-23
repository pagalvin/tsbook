
interface Bus4Args {
    routeNumber: number;
    routeDistance: number;
    costPerMile: number;
    totalPassengers: number;
}

class Bus4 {

    private _myTotalPassengers: number;
    private _myCostPerMile: number;
    private _myTotalRouteDistance: number;

    private _myRouteNumber: number;
    public get myRouteNumber() { return this.myRouteNumber; }
    
    private _mySeatingCapacity: number;
    public set SeatingCapacity(val: number) { this._mySeatingCapacity = val; } 

    public get CostPerRider() {
        const totalRouteCost = this._myTotalRouteDistance * this._myCostPerMile;
        const costPerRider = totalRouteCost / this._myTotalPassengers;
        return costPerRider;
    }

    constructor(args: Bus4Args) {
        this._myRouteNumber = args.routeNumber;
        this._myCostPerMile = args.costPerMile;
        this._myTotalPassengers =  args.totalPassengers;
        this._myTotalRouteDistance = args.routeDistance;
    }

}

const myBus4: Bus4 = new Bus4({routeDistance: 44, costPerMile: 12.50, routeNumber: 148, totalPassengers: 72});
myBus4.SeatingCapacity = 80;

console.log("My total cost per rider:", myBus4.CostPerRider)

console.log("Cost per rider with 80 riders: ", new Bus4({routeDistance: 44, routeNumber: 148, costPerMile: 12.50, totalPassengers: 80}).CostPerRider)