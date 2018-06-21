import React from 'react';
import PropTypes from 'prop-types';
import * as ReactSauce from '../../../libs/ReactSauce/';
import { WHITE } from './controller';

export default function Piece(props) {
  return (
    <i
      className={
        ReactSauce.classes({
          fas: true,
          'fa-chess-knight': true,
          'fa-2x': true,
          'text-white': props.color === WHITE,
        })
      }
    />
  );
}

Piece.propTypes = {
  color: PropTypes.string.isRequired,
};
