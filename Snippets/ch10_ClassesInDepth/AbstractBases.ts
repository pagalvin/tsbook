interface Activatable {
    ActivateSelf: () => void;
}

abstract class AbstractBase implements Activatable{

    private _myName: string;
    public get Name() { return this._myName; }

    constructor (name: string) {
        this._myName = name;
    }

    abstract ActivateSelf(): void;

}

class ArmyBase extends AbstractBase {

    private _totalSolders: number;
    public get TotalSolders() { return this._totalSolders; }

    constructor(name: string, totalSolders: number) {
        super(name);
        this._totalSolders = totalSolders;
    }

    public ActivateSelf() {
        throw "Not yet implemented";
    }
}

class NavyBase extends AbstractBase {

    private _totalShips: number;
    public get TotalShips() { return this._totalShips; }

    constructor(name: string, totalShips: number) {
        super(name);
        this._totalShips = totalShips;
    }

    public ActivateSelf() {
        throw "Not yet implemented";
    }
}

const armyBase = new ArmyBase("First army base", 100);
const navyBase = new NavyBase("First navy base", 3);

const anotherArmyBase: Activatable = new ArmyBase("Seccond army base", 250);
const activatableNavyBase = <Activatable> navyBase;

// Compiler throws an error - abstract classes can not be instantiated:
const someOtherKindOfBase = new AbstractBase("what kind of base is this?");

