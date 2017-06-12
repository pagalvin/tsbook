interface IVisualizationEngine {
    Render: (htmlDivName: string) => boolean;
    SetDimensions: (width: number, height: number) => void;
    SaveSettings: () => boolean;
}

// Assume that the visualization engine was already loaded
// and that we can get a handle to its API set via the global window object.
const myVisualizationEngine: IVisualizationEngine = <IVisualizationEngine>window["VisualizationEngine"];

if (myVisualizationEngine.Render("myDiv")) {
    
    myVisualizationEngine.SetDimensions(1024, 800);
    if (myVisualizationEngine.SaveSettings()) {
        console.log("Successfully saved the visualization.");
    }
    else {
        console.error("ERROR: Failed to save the visualization.");
    }
}
else {
    console.error("Failed to render the visualization!");
}

