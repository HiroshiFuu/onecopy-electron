export const loadState = () => {
  try {
    const serializedOneCopy = localStorage.getItem("one_copy");
    if (serializedOneCopy === null) {
      return undefined;
    }
    return JSON.parse(serializedOneCopy);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedOneCopy = JSON.stringify(state);
    localStorage.setItem("one_copy", serializedOneCopy);
  } catch (err) {
    console.error(err);
  }
};