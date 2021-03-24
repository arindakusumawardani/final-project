import { all } from "redux-saga/effects";
import {
  watchFindAllCustomer,
  watchFindAllCustomerBySubmitter,
  watchFindCustomerById,
  watchSaveCustomer,
  watchUpdateCustomer
} from "./customerSaga";
import {
  watchFindAllTransaction,
  watchFindTransactionById,
  watchSaveTransaction,
  watchUpdateTransactionById
} from "./transactionSaga";
import {watchLoginSaga} from "./loginSaga";
import {
  watchFindAllAccount,
  watchFindByIdAccount,
  watchRemoveById,
  watchSaveAccount,
  watchUpdateAccountById
} from "./signupSaga";
import {watchFindAllReport} from "./reportSaga";
import {watchSaveApproval} from "./approvalSaga";
import {watchFindAllNeed, watchSaveNeed} from "./needSaga";

export default function* rootSaga() {
  yield all([
    watchFindAllCustomer(),
    watchSaveCustomer(),
    watchUpdateCustomer(),
    watchFindCustomerById(),

    watchFindAllTransaction(),
    watchSaveTransaction(),
    watchFindTransactionById(),
    watchUpdateTransactionById(),

    watchLoginSaga(),

    watchFindAllAccount(),
    watchSaveAccount(),

    watchFindByIdAccount(),
    watchUpdateAccountById(),
    watchRemoveById(),

    watchFindAllReport(),

    watchSaveApproval(),

    watchFindAllCustomerBySubmitter(),

    watchSaveNeed(),
    watchFindAllNeed()
  ])
}