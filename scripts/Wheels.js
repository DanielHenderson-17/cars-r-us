import { setWheelsChoice } from './TransientState.js';

export const WheelsOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels");
    const wheels = await response.json();

    let optionsHTML = `<select name="wheels" id="wheels">
        <option value="">Select a wheel style</option>`;

    const optionElements = wheels.map((wheel) => {
        return `<option value="${wheel.id}">${wheel.type} - $${wheel.price}</option>`;
    });

    optionsHTML += optionElements.join("");
    optionsHTML += `</select>`;

    document.addEventListener("change", (event) => {
        if (event.target.name === "wheels") {
            setWheelsChoice(parseInt(event.target.value));
        }
    });

    return optionsHTML;
};
