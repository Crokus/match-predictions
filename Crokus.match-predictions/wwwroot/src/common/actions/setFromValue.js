function setFromValue (path, value) {
  function action ({ state }) {
    state.set(path, value);
  }

  action.displayName = `setFromValue (${JSON.stringify(path)}, ${JSON.stringify(value)})`;

  return action;
}

export default setFromValue;
