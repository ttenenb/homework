import React, { useEffect, useState } from 'react'
import GetCompanyInfo from './GetCompanyInfo';
import GetPrice from './GetPrice';
import {useParams} from 'react-router-dom';

function GetAllDetails(props) {
    const {ticker}  = useParams();
    const [tick, setTick] = useState();

    useEffect(() => {
        setTick(ticker);
    },[ticker])
    
    if (!tick) {
        return null;
    }

    return (
        <div className='companyInfo'>
            <GetCompanyInfo ticker={tick} />
            <GetPrice ticker={tick} />
        </div>
    )
}

export default GetAllDetails
