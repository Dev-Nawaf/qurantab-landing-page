export const clickLabelEvent = (item) => {
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      item.click();
    }
  });
};

export const observeElements = (sectionElements) => {
  const options = { threshold: [0.4, 0.5] }; //when half of el-class visible

  const callback = (entries) => {
    entries.forEach((entry) => {
      const ratio = entry.intersectionRatio;
      if (ratio >= 0.5) {
        // Add class when threshold is true
        entry.target.classList.add("in-view");
      } else if (ratio <= 0.4) {
        entry.target.classList.remove("in-view");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sectionElements.forEach((element) => observer.observe(element));
};
