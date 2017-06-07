class Bus4 {

    private _mySeatingCapacity: number;

    public set SeatingCapacity(val: number) { this._mySeatingCapacity = val;}
    public get SeatingCapacity() { return this._mySeatingCapacity;}

    constructor() {

    }
}

const theBus: Bus4 = new Bus4();
theBus.SeatingCapacity = 80;

console.log("Seating capacity:", theBus.SeatingCapacity);

