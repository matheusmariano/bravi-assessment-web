import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ReactSauce from '../../../libs/ReactSauce/';
import * as BoardController from './controller';
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

  getSquares() {
    const { cols, rows } = this.props;

    return BoardController.getSquares(cols, rows);
  }

  renderSquares() {
    return this.getSquares().map(row => (
      <div
        className="d-flex flex-row"
        key={row[0].name}
      >
        {
          row.map(square => (
            <div
              key={square.name}
              styleName={
                ReactSauce.classes({
                  square: true,
                  'square-light': square.color === BoardController.LIGHT,
                  'square-dark': square.color === BoardController.DARK,
                })
              }
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
