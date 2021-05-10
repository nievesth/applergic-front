import React, { useContext } from 'react';
import { LoadingContext } from './context/LoadingContext';
import './Loading.scss'

export function Loading() {

    const {isLoading} = useContext(LoadingContext);

    return(
        isLoading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        
    )
}