
function InitializeDataSetWithDefaultvalues(seedData = { seedValue1: "a", seedValue2: "b"}) {

    // seedData will have valid data so no need to check it.

    /*
    if (seedData) {
        // use the seed data to initialize the data set
    }
    else {
        // initialize using some hard coded values
    }
    */

}

InitializeDataSetWithDefaultvalues();

InitializeDataSetWithDefaultvalues(undefined);

InitializeDataSetWithDefaultvalues({seedValue1: "x", seedValue2: "y"});

