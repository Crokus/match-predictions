import request from '~/common/actions/request';
import setFromValue from '~/common/actions/setFromValue';

export default [
  request('get', 'api/teams'), {
    success: [
      setFromValue(['app', 'isInitialized'], true)
    ],
    error: []
  }
];
