import {call, put} from 'redux-saga/effects';
import {Api} from '../../services/api';
import {setContestData, setLoader, setPlatformData} from "../actions/apiActions";

const api = new Api();

export function* getPlatformApi() {
    const obj = {
        url: '/platforms',
        data: {},
    };
    try {
        const response = yield call(api.getApi, obj);
        console.log(
            '===================== Response from the get platform api data =====================',
        );
        console.log(response.data);
        if (response.status === 200) {
            const temp = [];
            for (let i = 0; i < response.data.data.length; i++) {
                const obj = {
                    name: response.data.data[i].name,
                    selected: true,
                };
                temp.push(obj);
            }
            yield put(setPlatformData(temp));
        } else if (response.status === undefined) {
            throw new Error('Network error failed ');
        } else {
            throw new Error(
                'Network error failed with status code ' + response.status,
            );
        }
    } catch (e) {
        alert(e);
    }
}

export function* getContestApi() {
    const obj = {
        url: '/api',
        data: {},
    };
    try {
        yield put(setLoader(true));
        const response = yield call(api.getApi, obj);
        console.log(
            '===================== Response from the get contest api data =====================',
        );
        if (response.status === 200) {
            console.log(response.data);
            let all = [];
            all = all.concat(response.data.hackerearth);
            all = all.concat(response.data.codechef);
            all = all.concat(response.data.atcoder);
            all = all.concat(response.data.codeforces);
            all.sort(function (a, b) {
                const d1 = new Date(a.date);
                const d2 = new Date(b.date);
                // on the basis of date
                if (d1 > d2) {
                    return 1;
                } else if (d1 < d2) {
                    return -1;
                }

                // if date is equal then on the basis of start time we are sorting
                const t1 = new Date(a.start_time);
                const t2 = new Date(a.start_time);
                if (t1 > t2) {
                    return 1;
                } else if (t1 < t2) {
                    return -1;
                }
                return 0;
            });
            const obj = {
                all,
            };
            yield put(setContestData(obj));
            yield put(setLoader(false));
        } else if (response.status === undefined) {
            yield put(setLoader(false));
            throw new Error('Network error failed ');
        } else {
            yield put(setLoader(false));
            throw new Error(
                'Network error failed with status code ' + response.status,
            );
        }
    } catch (e) {
        alert(e);
    }
}
