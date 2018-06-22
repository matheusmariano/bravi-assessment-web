import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BoardController from './controller';
import * as BoardPropTypes from './prop-types';
import Square from '../Square/';
import Knight from '../Piece/knight';
import Highlight from '../Piece/highlight';
import './style.scss';

export default class Board extends Component {
  static get propTypes() {
    return {
      cols: PropTypes.number,
      highlights: PropTypes.arrayOf(
        BoardPropTypes.algebraicNotation,
      ),
      pieces: PropTypes.arrayOf(
        BoardPropTypes.algebraicNotation,
      ),
      rows: PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      cols: 8,
      highlights: [],
      pieces: [],
      rows: 8,
    };
  }

  arrangeSquares() {
    const {
      cols,
      highlights,
      pieces,
      rows,
    } = this.props;

    return BoardController.arrangeSquares(cols, rows, pieces, highlights);
  }

  renderSquares() {
    return this.arrangeSquares().map(row => (
      <div
        className="d-flex flex-row"
        key={row[0].name}
      >
        {
          row.map(square => (
            <Square
              color={square.color}
              key={square.name}
              piece={square.piece && <Knight color={square.piece.color} />}
              highlight={square.highlight && <Highlight color={square.highlight} />}
            />
          ))
        }
      </div>
    ));
  }

  render() {
    return (
      <div styleName="board">
        <div className="d-flex flex-column">
          {this.renderSquares()}
        </div>
      </div>
    );
  }
}
