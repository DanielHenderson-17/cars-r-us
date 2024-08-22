import { setInteriorChoice } from './TransientState.js';

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors");
    const interiors = await response.json();

    let optionsHTML = `<select name="interior" id="interior">
        <option value="">Select an interior material</option>`;

    const optionElements = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.type} - $${interior.price}</option>`;
    });

    optionsHTML += optionElements.join("");
    optionsHTML += `</select>`;

    document.addEventListener("change", (event) => {
        if (event.target.name === "interior") {
            setInteriorChoice(parseInt(event.target.value));
        }
    });

    return optionsHTML;
};
