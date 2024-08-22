import { setPaintChoice } from './TransientState.js';

export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/colors");
    const paints = await response.json();

    let optionsHTML = `<select name="paint" id="paint">
        <option value="">Select a paint color</option>`;

    const optionElements = paints.map((colors) => {
        return `<option value="${colors.id}">${colors.color} - $${colors.price}</option>`;
    });

    optionsHTML += optionElements.join("");
    optionsHTML += `</select>`;

    document.addEventListener("change", (event) => {
        if (event.target.name === "paint") {
            setPaintChoice(parseInt(event.target.value));
        }
    });

    return optionsHTML;
};
