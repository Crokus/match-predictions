import Start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import copy from 'start-copy';
import clean from 'start-clean';
import eslint from 'start-eslint';
import env from 'start-env';
import * as webpack from 'start-webpack';

const start = Start(reporter());

export function prod () {
  return start(
    env('production', () => start(
      files('wwwroot/dist/'),
      clean(),
      files('wwwroot/assets/**/+(*.css|*.woff|*.ttf|*.eot)'),
      copy('wwwroot/dist'),
      webpack.build(require('./conf/webpack.prod').default)
    ))
  );
}

export function dev () {
  return start(
    env('development', () => start(
      webpack.dev(require('./conf/webpack.dev').default)
    ))
  );
}

export function lint () {
  return start(
    env('test', () => start(
      files([ 'wwwroot/src/**/*.js', 'conf/**/*.js' ]),
      eslint()
    ))
  );
}
