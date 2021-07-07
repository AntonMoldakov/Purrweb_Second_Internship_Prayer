import {sagas} from "./index";
import { call, all } from "redux-saga/effects";

export default function* rootSaga() {
	yield all([
		call(sagas.authSagas),
	]);
}
