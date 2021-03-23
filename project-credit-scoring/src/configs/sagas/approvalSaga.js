import {put, takeLatest} from "redux-saga/effects";
import axios from "../api";
import {SAVE_APPROVAL, SAVE_APPROVAL_FAILURE, SAVE_APPROVAL_SUCCESS} from "../constants/actions";

function* saveApprovalSaga(action) {
    let model = action.model
    let method = 'POST', url = '/approval'

    let result = yield axios ({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return{
                type: SAVE_APPROVAL_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return{
                type: SAVE_APPROVAL_FAILURE,
                error: e
            }
        })
    yield put(result)
}

export function* watchSaveApproval() {
    yield takeLatest(SAVE_APPROVAL, saveApprovalSaga)
}