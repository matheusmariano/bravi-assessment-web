import { call, put } from 'redux-saga/effects';
import ChessActions from './redux';

export default function* chessPreviewRequest(http, { pieces, cols, rows }) {
  const response = yield call(http.chessPreviewRequest, pieces, cols, rows);

  if (response.ok) {
    yield put(ChessActions.chessPreviewRequestSuccess(response.data.highlights));
  } else {
    yield put(ChessActions.chessPreviewRequestFailure());
  }
}
