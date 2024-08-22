import { setTechnologyChoice } from './TransientState.js';

export const TechnologiesOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies");
    const technologies = await response.json();

    let optionsHTML = `<select name="technology" id="technology">
        <option value="">Select a technology package</option>`;

    const optionElements = technologies.map((technology) => {
        return `<option value="${technology.id}">${technology.type} - $${technology.price}</option>`;
    });

    optionsHTML += optionElements.join("");
    optionsHTML += `</select>`;

    document.addEventListener("change", (event) => {
        if (event.target.name === "technology") {
            setTechnologyChoice(parseInt(event.target.value));
        }
    });

    return optionsHTML;
};
