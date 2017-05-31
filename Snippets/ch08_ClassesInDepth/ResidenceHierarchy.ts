class Resident {

    private _name: string;
    public get MyName() { return this._name; }

    constructor(name: string) {

    }
}

class TemporaryResident extends Resident {
    private _countryOfOrigin: string;
    public get MyCountryOfOrigin() { return this._countryOfOrigin; }

    private _requiredExitDate: Date;

    constructor(name: string, countryOfOrigin: string, requiredExitDate: Date) {
        super(name);
        this._countryOfOrigin = countryOfOrigin;
        this._requiredExitDate = requiredExitDate;
    }

}

class USCitizen extends Resident {

    private _cityOfBirth: string;
    public get MyBirthCity() { return this._cityOfBirth; }

    constructor(name: string, birthCity: string) {
        super(birthCity);
    }
}

