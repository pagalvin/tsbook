
class Bus5 {

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

    constructor(routeNumber, costPerMile, totalPassengers, routeDistance) {
        this._myRouteNumber = routeNumber;
        this._myCostPerMile = costPerMile;
        this._myTotalPassengers =  totalPassengers;
        this._myTotalRouteDistance = routeDistance;
    }

}

const myBus5: Bus5 = new Bus5(148, 12.50, 72, 80);
myBus5.SeatingCapacity = 80;

console.log("My total cost per rider:", myBus5.CostPerRider)

console.log("Cost per rider with 80 riders: ", new Bus5(148, 12.50, 80, 50).CostPerRider)
