import React from 'react';
import PropTypes from 'prop-types';
import * as ReactSauce from '../../../libs/ReactSauce/';
import { DARK, LIGHT } from './controller';
import * as PieceController from '../Piece/controller';
import Piece from '../Piece/';
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
      {props.piece}
    </div>
  );
}

Square.propTypes = {
  color: PropTypes.string.isRequired,
  piece: PropTypes.node,
};

Square.defaultProps = {
  piece: <Piece color={PieceController.WHITE} />,
};
