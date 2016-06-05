import 'custom-event-polyfill';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import Devtools from 'cerebral-module-devtools';

import { get, post } from './api/request';
import App from './modules/App';

const isProduction = process.env.NODE_ENV === 'production';

const model = Model({}, {
  immutable: !isProduction
});
const controller = Controller(model);

controller.addServices({
  get,
  post
});

controller.addModules({
  app: App(),
  devtools: isProduction ? () => {} : Devtools()
});

export default controller;
