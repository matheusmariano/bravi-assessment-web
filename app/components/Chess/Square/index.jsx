import React from 'react';
import PropTypes from 'prop-types';
import * as ReactSauce from '../../../libs/ReactSauce/';
import { DARK, LIGHT } from './controller';
import './style.scss';

export default function Square(props) {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      styleName={
        ReactSauce.classes({
          square: true,
          'square-light': props.color === LIGHT,
          'square-dark': props.color === DARK,
        })
      }
    >
      <span className="fa-layers fa-fw">
        {props.piece}
        {props.highlight}
      </span>
    </div>
  );
}

Square.propTypes = {
  color: PropTypes.string.isRequired,
  highlight: PropTypes.node,
  piece: PropTypes.node,
};

Square.defaultProps = {
  piece: null,
  highlight: null,
};
