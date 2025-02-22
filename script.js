import { observeElements, clickLabelEvent } from "./utils"

const labelElements = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll(".section")
labelElements.forEach((item) => clickLabelEvent(item));
observeElements(sectionElements);
