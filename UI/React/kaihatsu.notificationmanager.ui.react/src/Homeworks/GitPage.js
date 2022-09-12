import { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux'


import { request } from '../store/Git/Reducer'

export default function GitPage() {
    const gitStatus = useSelector((state) => state.persistedReducer.git.request);
    const gitList = useSelector((state) => state.persistedReducer.git.gits);
    const gitError = useSelector((state) => state.persistedReducer.git.error);

    const dispatch = useDispatch();

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
        );

        
    if (gitStatus == 1) {
        return (
            <div>
                <div><h3>API Git</h3></div>
                <div>
                <p>LOADING</p>
                </div>
            </div>
        );
    }

    if (gitError) {
        return (
            <div>
                <div><h3>API Git</h3></div>
                <div>
                    <h3>Error</h3>
                    <button onClick={() => dispatch(request())}>Retry</button>
                </div>
            </div>
        );
    }
    if (gitStatus == 0) {
        return (
            <div>
                <div><h3>API Git</h3></div>
                <div>
                    <button onClick={() => {dispatch(request());dispatch(request())}}>LOAD!</button>
                </div>
            </div>
        )
    }
    console.log(gitList);
    return (
        <div>
            <div><h3>API Git</h3></div>
            <div>
                <ul>{gitList.map((el,index)=>{
                    <li key={el.id}>{el.description}</li>
                })}</ul>
                <ul>{gitList.map(renderGist)}</ul>
            </div>
        </div>
    )
};