import React, { Component, PropTypes } from 'react';
import { HOC as cerebralize } from 'cerebral-view-react';

import AppHeader from '../AppHeader';
import Main from '../Main';
import Loader from '../Loader';

export class App extends Component {
  componentDidMount () {
    this.props.signals.app.mounted();
  }

  renderInitializedContent () {
    const {
      isInitialized,
    } = this.props;

    if (isInitialized) {
      return <Main />;
    }

    return (
      <Loader
        className="posA tC w100 txtC"
        message="Fetching data"
      />
    );
  }

  render () {
    return (
      <div>
        <AppHeader />
        {this.renderInitializedContent()}
      </div>
    );
  }
}

App.propTypes = {
  isInitialized: PropTypes.bool
};

export default cerebralize(App, {
  isInitialized: ['app', 'isInitialized']
});
