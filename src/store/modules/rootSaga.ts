import { all as ReduxSagaAll } from "redux-saga/effects";

import cart from "./cart/sagas";

export default function* rootSaga(): Generator<any> {
  return yield ReduxSagaAll([cart]);
}
