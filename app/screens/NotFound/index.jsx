import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Image from 'react-retina-image';

export default class NotFoundScreen extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  componentWillMount() {
    document.title = this.formatMessage({ id: 'not_found.page_title' });
  }

  formatMessage(props) {
    return this.context.intl.formatMessage(props);
  }

  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col text-center">
            <FormattedMessage id="not_found.page_title">
              {message => (
                <Image
                  alt={message}
                  className="my-3"
                  src="images/not-found.png"
                />
              )}
            </FormattedMessage>
            <h1>
              <FormattedMessage id="not_found.title" />
            </h1>
          </div>
        </div>
      </section>
    );
  }
}
