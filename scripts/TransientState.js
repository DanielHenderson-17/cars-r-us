const transientState = {
    colorsId: 0,
    interiorsId: 0,
    wheelsId: 0,
    technologiesId: 0,
};


export const setPaintChoice = (chosenColorsId) => {
    transientState.colorsId = chosenColorsId;
    console.log(transientState);
};

export const setInteriorChoice = (chosenInteriorId) => {
    transientState.interiorsId = chosenInteriorId;
    console.log(transientState);
};

export const setTechnologyChoice = (chosenTechnologyId) => {
    transientState.technologiesId = chosenTechnologyId;
    console.log(transientState);
};

export const setWheelsChoice = (chosenWheelsId) => {
    transientState.wheelsId = chosenWheelsId;
    console.log(transientState);
};


export const saveCarOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    };

    

    const response = await fetch("http://localhost:8088/orders", postOptions);
    await response.json();

    const customEvent = new CustomEvent("newOrderCreated");
    document.dispatchEvent(customEvent);
};
