interface Activatable {
    ActivateSelf: () => void;
}

class NaiveBase {

    private _myName: string;
    public get Name() { return this._myName; }

    constructor (name: string) {
        this._myName = name;
    }

}

class NaiveArmyBase extends NaiveBase { //implements Activatable{

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

class NaiveNavyBase extends NaiveBase {

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

const naiveArmyBase = new NaiveArmyBase("First army base", 100);
const naiveNavyBase = new NaiveNavyBase("First navy base", 3);

// This is allowed but makes no sense:
const someOtherBase = new NaiveBase("what kind of base is this?");

