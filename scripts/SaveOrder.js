// SaveOrder.js
import { saveCarOrder } from "./TransientState.js";

const handleSaveOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrder") {
        saveCarOrder();
    }
};

export const SaveOrder = () => {
    document.addEventListener("click", handleSaveOrderClick);

    return `<div class="ms-5 my-2"><button id='saveOrder' class='btn btn-danger'>Place Car Order</button></div>`;
};
