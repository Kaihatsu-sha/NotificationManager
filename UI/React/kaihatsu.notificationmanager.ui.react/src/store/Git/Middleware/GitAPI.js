
import { success, failure } from '../../Git/Reducer'

const API_URL_PUBLIC = 'https://api.github.com/gists/public';

export const GitAPILoader = ({ dispatch, getState }) => next => action => {
    //let state = getState()
    console.log("GitAPILoader");
    //console.log(dispatch());
    console.log(action);
    console.log(next);
    //console.log(getState().persistedReducer.git);//При запросе store еще не изменился
    // if (getState().persistedReducer.git.request == 1) {
    //     console.log("GitAPILoader2");
    //     setTimeout(() => getGists(dispatch), 10000);
    // }


    return next(action)
};

function getGists(dispatch) {
    console.log("getGists");
    fetch(API_URL_PUBLIC)
        .then((response) => {
            if (!response.ok) {
                dispatch(failure(`Request failed with status ${response.status}`));
            }
            return response.json();
        })
        .then((result) => dispatch(success(result)))
        .catch((err) => {
            dispatch(failure(err));
        })
        .finally(() => console.log("finally"));

};