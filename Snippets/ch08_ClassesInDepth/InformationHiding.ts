class BaseClass {

    private _myPrivateProperty: string = "No one can see me except BaseClass.";

    protected _myProtectedProperty: string = "Extended classes can see me.";

    public MyPublicProperty: string = "Anyone can see and manipulate me.";

}

class ExtendedBaseClass extends BaseClass {
    
    constructor() {
        super();

        // Next line would be an error since myPrivateProperty is private in BaseClass
        //this._myPrivateProperty = "xyzzy";

        // ExtendedBaseClass can access _myProtectedProperty.
        this._myProtectedProperty = "I can change this value.";

        // Public property values can always be accessed within and outside of the class.
        this.MyPublicProperty = "I can also change this value.";

    }

}

const myExtendedClass = new ExtendedBaseClass();

myExtendedClass.MyPublicProperty = "Set directly on the class via client code.";

// Error:
// myExtendedClass._myPrivateProperty = "This is not allowed since private properties cannot be read or written.";

// Error:
// myExtendedClass._myProtectedProperty = "This is also not allowed since it's protected.";
