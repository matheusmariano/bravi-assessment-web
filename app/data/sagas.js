import { all, takeLatest } from 'redux-saga/effects';
import HttpService from '../services/HttpService';

import { ChessTypes } from './chess/redux';
import chessPreviewRequest from './chess/saga';

const http = HttpService.create();

export default function* root() {
  yield all([
    takeLatest(ChessTypes.CHESS_PREVIEW_REQUEST, chessPreviewRequest, http),
  ]);
}
