import { put, call, takeLatest, all, select } from 'redux-saga/effects';
import databaseRef from '../firebase'

const fetchFirebase = (dist: string) => 
    new Promise((resolve, reject) => {
        databaseRef.child(dist).on("value", function(snapshot: any) {
            console.log(snapshot.val());
            resolve(snapshot.val())
        }, function (error: any) {
            console.log("Error: " + error.code);
            reject(error)
        });
    });

interface Action {
    destination: string;
    type: string;
}

function* getFlights(action: Action) {
    const flights = yield call(fetchFirebase,action.destination)
    yield put({ type: "FLIGHTS_RECEIVED", flights});
}

function* actionWatcher() {
    const getDist = (state: any) => state.destination;
    const dist = yield select(getDist);
    yield takeLatest('SET_DESTINATION', getFlights,)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}