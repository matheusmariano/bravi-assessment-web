import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { WHITE } from './controller';

export default function Knight(props) {
  return (
    <FontAwesomeIcon
      icon={faCircle}
      color={props.color === WHITE ? 'white' : undefined}
    />
  );
}

Knight.propTypes = {
  color: PropTypes.string.isRequired,
};
