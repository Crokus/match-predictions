import mounted from './signals/mounted';

export default (options = {}) => {
  return module => {
    module.addState({
      isInitialized: false
    });

    module.addSignals({
      mounted
    });
  };
};
