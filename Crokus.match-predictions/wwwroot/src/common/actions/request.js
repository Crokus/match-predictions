function request (method, url, options = { outputPath: 'resData', inputPath: 'reqParams' }) {
  function action ({ output, services, input }) {
    const body = options.body || input[options.inputPath];

    services[method](url, body)
      .then(function (res) {
        output.success({ [options.outputPath]: res });
      })
      .catch(function (err) {
        const errMessage = (err.response && err.response.body && err.response.body.message) ? err.response.body.message : err.message;
        output.error({ message: errMessage });
      });
  }

  action.async = true;
  action.displayName = `request (${method}, ${url})`;

  return action;
}

export default request;
