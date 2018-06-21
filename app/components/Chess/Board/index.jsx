import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BoardController from './controller';
import Square from '../Square/';
import './style.scss';

export default class Board extends Component {
  static get propTypes() {
    return {
      cols: PropTypes.number,
      rows: PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      cols: 8,
      rows: 8,
    };
  }

  arrangeSquares() {
    const { cols, rows } = this.props;

    return BoardController.arrangeSquares(cols, rows);
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
