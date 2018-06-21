import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Board from '../../components/Chess/Board/';

class HomeScene extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  componentWillMount() {
    document.title = this.formatMessage({ id: 'home.page_title' });
  }

  formatMessage(props) {
    return this.context.intl.formatMessage(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
            <h1>
              <FormattedMessage id="home.title" />
            </h1>
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeScene);
