import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Markdown from 'react-markdown';
import * as R from 'ramda';
import Board from '../../components/Chess/Board/';
import * as ReactSauce from '../../libs/ReactSauce/';
import * as BoardPropTypes from '../../components/Chess/Board/prop-types';
import ChessActions from '../../data/chess/redux';

class HomeScene extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      pieces: ['Na3', 'nb2'],
      highlights: ['B1', 'C2', 'C4', 'B5', 'd1', 'd3', 'c4', 'a4'],
      form: {
        input: 'Na3 nb2',
        valid: true,
        validated: false,
      },
    };
  }

  componentWillMount() {
    document.title = this.formatMessage({ id: 'home.page_title' });
  }

  componentWillReceiveProps({ highlights }) {
    if (highlights) {
      this.setState({ highlights });
    }
  }

  setStateByPath(path, value) {
    const head = path[0];

    this.setState({
      [head]: R.set(
        R.lensPath(R.tail(path)),
        value,
        this.state[head],
      ),
    });
  }

  setFormInputState(input) {
    this.setStateByPath(['form', 'input'], input);
  }

  setFormValidState(valid) {
    this.setStateByPath(['form', 'valid'], valid);
  }

  setFormValidatedState(validated) {
    this.setStateByPath(['form', 'validated'], validated);
  }

  setPiecesState(pieces) {
    this.setState({ pieces });
  }

  formatMessage(props) {
    return this.context.intl.formatMessage(props);
  }

  assignFormReference(ref) {
    this.form = ref;
  }

  handleFormInputChange(input) {
    this.setFormInputState(input);

    setImmediate(() => {
      this.setFormValidState(this.form.checkValidity());
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setFormValidatedState(true);
    this.analyze();
  }

  analyze() {
    const pieces = this.state.form.input.split(' ');

    this.setPiecesState(pieces);
    this.props.requestPreview(pieces, 8, 8);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
            <h1>
              <FormattedMessage id="home.title" />
            </h1>
            <Board
              pieces={this.state.pieces}
              highlights={this.state.highlights}
            />
            <form
              className={
                ReactSauce.classes({
                  'my-3': true,
                  'was-validated': this.state.form.validated,
                })
              }
              noValidate
              ref={ref => this.assignFormReference(ref)}
            >
              <div className="input-group">
                <input
                  className="form-control"
                  onChange={event => this.handleFormInputChange(event.target.value)}
                  pattern="^(?:([N|n])([a-h][1-8]) )(?:(?!\1)[N|n](?!\2)[a-h][1-8])$"
                  required
                  type="text"
                  value={this.state.form.input}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    disabled={!this.state.form.valid}
                    onClick={event => this.handleSubmit(event)}
                    type="submit"
                  >
                    <FormattedMessage id="home.analyse" />
                  </button>
                </div>
              </div>
            </form>
            <div>
              <small className="text-muted">
                <FormattedMessage id="home.instructions">
                  {message => <Markdown source={message} />}
                </FormattedMessage>
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomeScene.propTypes = {
  highlights: PropTypes.arrayOf(
    BoardPropTypes.algebraicNotation,
  ),
  requestPreview: PropTypes.func.isRequired,
};

HomeScene.defaultProps = {
  highlights: [],
};

function mapStateToProps(state) {
  return {
    highlights: state.chess.highlights,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestPreview: (pieces, cols, rows) => dispatch(
      ChessActions.chessPreviewRequest(pieces, cols, rows),
    ),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeScene),
);
