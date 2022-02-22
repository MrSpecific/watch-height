export const setHeightProp = ({ prop, value }) => {
  document.documentElement.style.setProperty(prop, `${value}px`);
};

const watchHeight = ({ selector = "[data-watch-height]", prop = null }) => {
  const watchedElement = document.querySelector(selector);

  if (!watchedElement) return;

  if (!prop)
    prop = `--${
      watchedElement.id ||
      watchedElement.classList.value.replace(" ", "-") ||
      "watched-element"
    }-height`;

  setHeightProp({
    prop,
    value: watchedElement.offsetHeight,
  });

  window.addEventListener("resize", () => {
    setHeightProp({
      prop,
      value: watchedElement.offsetHeight,
    });
  });
};

export default watchHeight;
