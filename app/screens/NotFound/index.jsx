import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Image from 'react-retina-image';
import './styles.scss';

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
      <section styleName="not-found-page">
        <FormattedMessage id="not_found.page_title">
          {message => (
            <Image
              alt={message}
              src="images/not-found.png"
            />
          )}
        </FormattedMessage>
        <h2>
          <FormattedMessage id="not_found.title" />
        </h2>
      </section>
    );
  }
}
