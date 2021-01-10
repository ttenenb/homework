import React, { useEffect, useState } from 'react'
function GetCompanyInfo({ticker}) {
    const [companyInfo, setCompanyInfo] = useState();
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://api-v2.intrinio.com/companies/${ticker}?api_key=OjU2OGE3ODc4ZGZkNzE2NTE5NDIwZGMxZTc0MDA0YmVm`);

                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }

                const info = await response.json();
                setCompanyInfo(info);

            } catch (e) {
                console.error(e);
            }
        })()
    }, [ticker])

    if (!companyInfo) {
        return null;
    }

    return (
        <>
            <h1>{companyInfo.ticker} - {companyInfo.name}</h1>
            <div>{companyInfo.long_description}</div>
        </>
    )
}

export default GetCompanyInfo
