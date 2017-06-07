interface StandardProduct {
    name: string;
    description: string;
}

interface SecuredFieldsItem {
    GetAllowedFieldNames: (requestedByRole: string) => string[]; 
    // NOTE: requestedBy would normally be a more complex object.
}

class Fidget implements StandardProduct, SecuredFieldsItem {

    public name: string;
    public description: string;
    public inventory: number;
    public weight: number;
    public recommendedAge: number;
    public cost: number;

    constructor() {};

    public GetAllowedFieldNames(requestedByRole: string) : string[] {

        const minFields = ["name", "weight", "recommendedAge", "description", "inventory"];

        if (requestedByRole === "Price Admin") {
            return minFields.concat("cost");
        }

        return minFields;
    }
}

class HotItem implements StandardProduct {
    public name: string;
    public description: string;
    public features: string[];
    public inventory: number;
    public cost: number;

    constructor() {};

    public GetAllowedFieldNames(requestedByRole: string) : string[] {

        const minFields = ["name", "description", "features"];

        let allFields = minFields;

        if (requestedByRole === "Price Admin") {
             allFields = allFields.concat("cost");
        }

        if (requestedByRole === "Inventory Admin") {
             allFields = allFields.concat("inventory");
        }

        return allFields;
    }
}


function getGeneratedCsv(forProducts: SecuredFieldsItem[], forRoleLabel: string) {

    return forProducts.reduce( (prev: string[], curr: SecuredFieldsItem) => {

        const result = getFormattedCsvRow (curr, curr.GetAllowedFieldNames(forRoleLabel));

        return prev.concat(result);
    }, []);

}

function getFormattedCsvRow(sourceItem: SecuredFieldsItem, fieldsToRetrieve: string[]): string {
    return fieldsToRetrieve.reduce( (csvFieldAsBuilt: string, currentField: string) => {
        if (csvFieldAsBuilt.length < 1) {
            return sourceItem[currentField];
        }
        return csvFieldAsBuilt + "," + sourceItem[currentField];
    }, "");
}

// Pretend that these products are initialized with real data.
const allSecurableProducts = [].concat(new HotItem(), new Fidget(), new Fidget(), new HotItem());

const csvOutput = getGeneratedCsv(allProducts, "Inventory Admin");
