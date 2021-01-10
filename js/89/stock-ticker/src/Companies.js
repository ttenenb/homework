import './Companies.css';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

function Companies() {
    const [companyList, setCompanyList] = useState();
    const history = useHistory();
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=OjU2OGE3ODc4ZGZkNzE2NTE5NDIwZGMxZTc0MDA0YmVm');

                if (!response.ok) {
                    throw new Error(`${response.statusText} ${response.status}`);
                }

                const companies = await response.json();

                setCompanyList(companies.companies);
            } catch (e) {
                console.error(e);
            }
        })()
    }, [])

    const handleChange = (e) => {
        // e.preventDefault();
        const target = e.target;
        if (target !== '') {
            history.push(`/${target.value}`);
        }
    }
    if (!companyList) {
        return null;
    }

    return (
        <>
            <form className='select'>
                <label htmlFor='stock-company'>Enter stock ticker symbol </label>
                <select name='stock-company' onChange={handleChange}>
                    <option></option>
                    {companyList.map(c => <option key={c.name} name={c.name} value={c.ticker} >{c.ticker}</option>)}
                </select>
            </form>
            <br/>
            <hr />
    
        </>
    )
}

export default Companies;
